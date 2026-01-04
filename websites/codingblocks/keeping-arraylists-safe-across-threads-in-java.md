---
title: "Keeping ArrayLists safe across threads in Java"
date: "2019-03-13T04:19:25.000Z"
slug: "keeping-arraylists-safe-across-threads-in-java"
image: "https://images.unsplash.com/photo-1490030327837-eab3c250898d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
description: "When working on bigger projects, and optimizing for performance and scale, we inevitably have to deal with threads. It is important to know how to write code that works across multiple threads."
tags: ["java", "multithreading", "interview preparation"]
original_url: "https://blog.codingblocks.com/2019/keeping-arraylists-safe-across-threads-in-java/"
---

When working on bigger projects, and optimizing for performance and scale, we inevitably have to deal with _threads_. Threads allow parallel execution. Java has a `Thread` class, which can be used to achieve this.

> Note that threads we create in Java are software threads. It does not necessarily mean each thread we create gets a dedicated CPU thread to run on. I am not delving much into this, but if you have an academic interest you should read about how hardware and software threads work.

## Welcome to `ConcurrentModificationException`

Let us start with a contrived example, of adding items to an ArrayList over three threads.

```java
public class Main {  
  static Random r = new Random();  
  
  public static void main(String[] args) {  
  ArrayList<Integer> numList = new ArrayList<>();  
  
  Runnable r1 = () -> {  
    while (numList.size() < 100) {  
      numList.add(r.nextInt(50));  
      System.out.print("Thread = " + Thread.currentThread().getName());  
      System.out.println(numList.toString());  
    }  
 };  
  
  new Thread(r1, "t1").start();  
  new Thread(r1, "t2").start();  
  new Thread(r1, "t3").start();  
  
  }  
}
```

When this starts running we start getting things like this printed -

```
Thread = t2[25, 0, 42, 20]
Thread = t3[25, 0, 42, 20, 15, 35, 27, 30]
Thread = t1[25, 0, 42, 20, 15]
```

Yes, the order of printing might get shuffled like this too, because they are across 3 threads.

But soon enough we hit this snag

```
Exception in thread "t3"
java.util.ConcurrentModificationException
at java.util.ArrayList$Itr.checkForComodification(ArrayList.java:901)
at java.util.ArrayList$Itr.next(ArrayList.java:851)
at java.util.AbstractCollection.toString(AbstractCollection.java:461)
at in.championswimmer.Main.lambda$main$0(Main.java:16)
```

This happens because the ArrayList class of Java has `modCount` and `expectedModCount` variables it uses to track the iterator and size of the list. Which if not equal, leads to this exception.  
Eventually, 2 threads will crash like this, and the remaining one will continue till the end.

## Possible Solutions

### Can we `synchronized` it ?

Okay, one naive solution that people try is to wrap the problematic code into a `synchronized` block.  
If we wrap only the `ArrayList#add()` operation, that won't solve our problem.

```java
synchronized (numList) {  
  numList.add(r.nextInt(50));  
}
```

Just wrap the `add` line in `synchronized` block and run and check what happens.

Okay, how about `synchronized` around the whole while loop ?

```java
synchronized (numList) {  
  while (numList.size() < 100) {  
    numList.add(r.nextInt(50));  
    System.out.print("Thread = " + Thread.currentThread().getName());  
    System.out.println(numList.toString());  
  }  
}
```

If you try the above code, you'll see you **completely loose the benefit of multi-threading**. Only one thread will run from size 0 to 50 and fill all the items in the ArrayList.

### The `CopyOnWriteArrayList`

Another solution is `CopyOnWriteArrayList`, a special class in Java that makes a copy of the entire array on each write operation, and thus makes write operations on the `List` thread-safe.

```java
public static void main(String[] args) {  
  CopyOnWriteArrayList<Integer> numList = new CopyOnWriteArrayList<Integer>();  
  
  Runnable r1 = () -> {  
  while (numList.size() < 100) {  
    numList.add(r.nextInt(50));  
    System.out.print("Thread = " + Thread.currentThread().getName());  
    System.out.println(numList.toString());  
  }  
  
 };  
  
  new Thread(r1, "t1").start();  
  new Thread(r1, "t2").start();  
  new Thread(r1, "t3").start();  
  
}
```

This should work perfectly, albeit at a cost of increased memory usage and more GC load (garbage collection), because every iteration creates a new array, and dumps the old one for GC to come and clean up behind it.

### Using `Collections.synchronizedList()`

One more solutions is to use `Collections.synchronizedList()` which creates a synchronized and thread `List`.

> Do keep in mind that when performing `list.iterator().next()` we have to manually put that in a synchronized block, if we are ever using the iterator of a SynchronizedList.

```java
public static void main(String[] args) {  
  List<Integer> numList =  
  Collections.synchronizedList(new ArrayList<>());  
  
  Runnable r1 = () -> {  
  while (numList.size() < 100) {  
    numList.add(r.nextInt(50));  
    System.out.print("Thread = " + Thread.currentThread().getName());  
    System.out.println(numList.toString());  
  }  
 };  
  
  new Thread(r1, "t1").start();  
  new Thread(r1, "t2").start();  
  new Thread(r1, "t3").start();  
  
}
```

A `SynchronizedList` uses an internal **mutex** to ensure thread safety, and thus we can achieve thread safe list addition _**without**_ the upfront memory spike we get with a `CopyOnWriteArray`.
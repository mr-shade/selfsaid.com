---
title: "Local variable pointer returning changes in GCC 5"
date: "2016-11-28T10:04:00.000Z"
slug: "local-variable-pointer-returning-changes-in-gcc-5"
image: ""
description: "Returning local variable pointers from a function is something you should  never do. Because the returned address will exist, but the  data inside it will have lost it's scope.  Nevertheless, whether or not you should do it, is something people often  disregard, and thus GCC 5.x and above have"
tags: []
original_url: "https://blog.codingblocks.com/2016/local-variable-pointer-returning-changes-in-gcc-5/"
---

Returning local variable pointers from a function is something you should  
**never** do. Because the returned address will exist, but the  
data inside it will have lost it's scope.

Nevertheless, whether or not you _should_ do it, is something people often  
disregard, and thus GCC 5.x and above have tried to ensure you don't.

Starting from `5.0.0` and above versions of GCC (and in extension G++), you  
**cannot** return local variable pointers from a function

Thus a program like this -

```cpp
#include <iostream>

using namespace std;


int * createArr () {
    int arr[3] = {1,2,3};

    cout << "function " << arr << endl;

    return arr;
}


int main() {
    int * val = createArr();
    cout << " main " << val;
}
```

Will return this in GCC5

```
function 0x7fff5e9e18f0  
main 0   
```

In earlier versions of GCC (4.9 and below) it used to return this -

```
function 0x7fff5e9e18f0    
main  0x7fff5e9e18f0  
```

TL;DR;  
In GCC5.x and above, local variable pointers in a function are returned as `0` to the calling function
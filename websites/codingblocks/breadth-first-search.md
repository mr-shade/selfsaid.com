---
title: "Breadth First Search"
date: "2017-01-28T10:09:00.000Z"
slug: "breadth-first-search"
image: "https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj_sonqtNbQAhXDqo8KHYX0ATUQjRwIBw&url=http%3A%2F%2Fwww.cs.cornell.edu%2Fcourses%2Fcs312%2F2004fa%2Flectures%2Flecture14.htm&psig=AFQjCNGeak1ZXIzujzh4VqXB8BZl6AG52w&ust=1480798996894175"
description: "A dense graph is given and you want to discover all the nodes, how would you start to discover ??   Randomly but its dense you will get lost that which has been discovered and which is not, So here we comes up with 2 basic ideas of traversing the graph i."
tags: []
original_url: "https://blog.codingblocks.com/2017/breadth-first-search/"
---

A dense graph is given and you want to discover all the nodes, how would you start to discover ??  
  
Randomly but its dense you will get lost that which has been discovered and which is not, So here we comes up with 2 basic ideas of traversing the graph i.e.  

1.  Depth first Search  
    
2.  Breadth First Search  
    

Lets start with Breadth First Search ( bfs ) :  

As name suggest breadth first, it explores from left to right and then top to bottom ,  
  
So in this traversal is done in **FIFO** manner i.e. first in first out manner , so we have to use queue as a data structure.  
  
The nodes at lower level is explored first rather than the ones at higher level.  
  
Let's see it for clear understanding ,

Given Graph :  
![alt text](https://www.google.co.in/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj_sonqtNbQAhXDqo8KHYX0ATUQjRwIBw&url=http%3A%2F%2Fwww.cs.cornell.edu%2Fcourses%2Fcs312%2F2004fa%2Flectures%2Flecture14.htm&psig=AFQjCNGeak1ZXIzujzh4VqXB8BZl6AG52w&ust=1480798996894175)

Start with 4 :

*   1.  Push 4 in Queue
*   |4|
*   2.  Pop front 4 from Queue and Print it . Push adjacent nodes of 4 into Queue i.e. 2 and 6
*   |2|6|
*   3.  Pop front 2 from Queue and Print it . Push adjacent nodes of 2 into Queue i.e. 1 and 3
*   |6|1|3|
*   4.  Pop front 6 from Queue and Print it . Push adjacent nodes of 6 into Queue i.e. 5 and 7
*   |1|3|5|7|
*   5.  Pop front 1 from Queue and Print it . Push adjacent nodes of 1 into Queue i.e. null
*   |3|5|7|
*   6.  Pop front 3 from Queue and Print it . Push adjacent nodes of 3 into Queue i.e. null
*   |5|7| ....

So Bfs of graph will be : 4,2,6,1,3,5,7

_Lets implement it_ :

```c

void bfs(int start_node)
{
	queue<int> Q;
	Q.push(start_node)

	while(Q is not empty())
	{
		//pop out front from queue
		front = Q.front()
		Q.pop()

		//bfs print
		print front

		// put all adjacent nodes in queue
		for (all adjacent nodes of front)
		{
			if(node not visited)
			{
				push into the queue;
			}
		}
	}
}

```

## Time Complexity

O(V+E)  
  
V - number of Nodes  
  
E - number of Edges  

Again basic of bfs , once you get this you will get to know how powerful and where we can use it in daily life example  
  
Stay tuned for more ....
---
title: "Career Bootcamp Sample Test Questions"
date: "2020-01-24T12:49:07.000Z"
slug: "career-bootcamp-sample-test-questions"
image: "https://blog.codingblocks.com/content/images/2020/01/carrer-bootcamp.jpg"
description: "Career Bootcamp is a 6-month intensive Income Sharing Agreement program aimed to help students become professional developers without money being a hindrance."
tags: ["bootcamp", "Career Bootcamp", "Income Sharing Agreement program"]
original_url: "https://blog.codingblocks.com/2020/career-bootcamp-sample-test-questions/"
---

We are sure you are really excited about Coding Blocks’ new initiative, Career Bootcamp. Career Bootcamp is a 6-month intensive Income Sharing Agreement program aimed to help students become professional developers without money being a hindrance.

We are really excited to have received immense registrations for the **[Career Bootcamp Online test](http://career-bootcamp.codingblocks.com/)**.  It is a new step for you and we completely understand that taking a step towards something unfamiliar is always challenging. With this understanding, we are here to help you become a little bit more familiar with our exam pattern. Our mentors have exclusively curated two sample questions for your help. The sample questions are given below along with the solutions. Kindly try to solve the questions on your own and don’t take help too soon. All the best!

### Alex Goes Shopping

It is Alex’s birthday and she wants to go shopping. She only has ‘A’ units of money and she wants to spend all of her money. However, she can only purchase one kind of item. She goes to a shop which has ‘n’ types items with prices A0, A1, A2,…,An-1. The shopkeeper claims that he has at least ‘k’ items she can choose from. Help her find out if the shopkeeper is correct or not.

**Input Format:**

The first line contains an integer ‘n’ denoting the number of items in the shop. The second line contains ‘n’ space-separated integers describing the respective price of each item. The third line contains an integer ‘q’ denoting the number of queries. Each of the subsequent lines contains two space-separated integers ‘A’ and ‘k’

**Constraints:**

1 <=n, A<sub>i</sub>, A <= 10<sup>5</sup> where 0<=i<n </br>

1 <= q <= 2\*n</br>

1 <= k <= n</br>

The array may contain duplicate elements.

**Output Format:**

For each query, print Yes on a new line if the shopkeeper is correct; otherwise, print No instead.

**Sample Input:**

4

100 200 400 100

5

100 2

200 3

500 4

600 4

800 4

**Sample Output:**

Yes

Yes

No

No

Yes

**Explanation:**

In query 1, Alex has 100 units of money. The shopkeeper claims that she can choose to buy from 2 kinds of items i.e. item 1 and item 4 each priced at 100.

In query 2, The shopkeeper claims that she can choose to buy from 3 kinds of items ie item 1 and item 4 each priced at 100(she can buy 1 from either of the two) or item 2 priced at 200(she can buy one)

In query 3, she has 500 units of money. She can either buy item 1 or item 4 ( 5 of each kind respectively). Thus, she has only 2 kinds of items to choose from.

In query 5, she has 800 units of money. She can either buy item 1 or item 4 ( 8 of each kind respectively) or item 2(she can buy 4 of these) or item 3(2 of these). Thus, she has 4 kinds of items to choose from.

### Octal To Binary

Take N (number in octal format). Write a function that converts it to binary format. Print the value returned.

**Input Format:** A single integer N

**Constraints:** 0 < N <= 100000000

**Output Format:** Print the binary conversion of N

**Sample Input:**

33

**Sample Output:**

11011

**Explanation:**

11011 is the binary conversion of integer 33

(33)8 = (11011)2

### Soul Stone(Beware Spoilers Ahead!!)

Thanos is on the hunt for Soul Stone with Gamora on the planet Vormir. There he found Red-Skull as the guardian of soul stone.Red-skull gave thanos a String S and told thanos that to extract soul stone he has to find the length longest substring that occur at-least twice (overlap allowed) in the in the given string. Help thanos in his quest.

**Input Format:** One line containing the strings

**Constraints:** 1 <= Length Of String <= 10^6

**Output Format:** For each test case print the length of the longest substring that occur at least twice

**Sample Input:**

abcbc

**Sample Output:**

2

**Explanation:**

The substring “bc” is present twice.

### City Tour

Given N cities numbered from 1 to N. You have already visited M cities, the indices of which are given in an array M of M integers.

If a city with index i is visited, you can visit either the city with index i-1 (i>=2) or the city with index i+1 (i<N) if they are not already visited. Eg: if N=5 and array M consists of \[3, 4\], then in the first level of moves, you can either visit 2 or 5.

You keep visiting cities in this fashion until all the cities are not visited. Find the total number of ways in which you can visit all the cities modulo 10^9+7.

**Input Format:**

The first line of the input contains a single integer N denoting the number of total cities. Next line contains integer 'M' which is the total number of visited cities followed by M integers in next line denoting indices of visited cities.

**Constraints:**

1 <= N <= 1000 <br>

1 <= M <= N

**Output Format:**

Return an Integer X % (109 + 7) which is the number of ways in which you can visit all the cities.

**Sample Input:**

5

2

2 5

**Sample Output:**

6

**Explanation:**

All possible ways to visit the remaining cities are :

1\. 1 -> 3 -> 4

2\. 1 -> 4 -> 3

3\. 3 -> 1 -> 4

4\. 3 -> 4 -> 1

5\. 4 -> 1 -> 3

6\. 4 -> 3 -> 1

### Sorted Permutation Rank with Repeats

Given a string, find the rank of the string amongst its permutations sorted lexicographically. Note that the characters might be repeated. If the characters are repeated, we need to look at the rank in unique permutations.

**Example :**

Input : 'aba' Output : 2

The order permutations with letters 'a', 'a', and 'b' : aab aba baa

The answer might not fit in an integer, so return your **answer % 1000003**

**Input Format:**

The first line of input contains a string S.

**Constraints:**

0 <= Length of string(S) < 1000003 **Output Format:**

For string S print the permutation rank.

**Sample Input:**

abab

**Sample Output:**

2

**Explanation:**

The lexicographical order is:

1\.       aabb

2\.       abab

3\.       abba

4\.       baab

5\.       baba

6\.       bbaa

Hence the rank of “abab” is **2**

[

Best online computer programming and coding courses in India.

Coding Blocks is the best online programming and software training Institute offer online certification courses in Jave, C++, Android, NodeJs, Data structure, Machine learning, Interview preparation and more.

Coding Blocks Online

![](https://minio.codingblocks.com/amoeba/OnlineLogo2020_LIGHT_logofull.png)

](https://online.codingblocks.com/courses)

Start Learning

  
  
Website : ****[http://career-bootcamp.codingblocks.com](http://career-bootcamp.codingblocks.com/)****  
Contact Number : ****[9999579111](tel:9999579111) / [9999579222](tel:9999579222)****  
E-mail Address : \[email protected\]  
You can find us on our Social Channels :  
  
****[Facebook](https://www.facebook.com/codingblocksindia/) | [Instagram](https://instagram.com/codingblocks) | [Twitter](https://twitter.com/codingblocksin) | [LinkedIn](https://www.linkedin.com/school/coding-blocks/) | [YouTube](https://www.youtube.com/codingblocksindia) | [GitHub](https://github.com/coding-blocks)****
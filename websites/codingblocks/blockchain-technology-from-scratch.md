---
title: "Blockchain Technology From Scratch"
date: "2019-09-23T20:34:40.000Z"
slug: "blockchain-technology-from-scratch"
image: "https://blog.codingblocks.com/content/images/2019/09/blockchain_cover2.png"
description: "Introduction to BlockchainThis article is for everyone who is curious about this new cutting edge technology but has no idea of what it is. Don’t forget to check out the links given in between the content to get a better understanding. What is Blockchain? Blockchain comprises of two words,"
tags: []
original_url: "https://blog.codingblocks.com/2019/blockchain-technology-from-scratch/"
---

![](https://lh3.googleusercontent.com/BivO--wZBbONtnu9kaFag4S1uPi7yFUbyZ9HtlMEUkGgMIhfX_AvR7CzVrAoYjuRlFCFHkEaY-oFJhDOdRlM35T5lRhj4MYhi6fFW9d3SC9jPB6LtrF9sdhfP2d9aREeufmIGjPb)

### Introduction to Blockchain

This article is for everyone who is curious about this new cutting edge technology but has no idea of what it is. Don’t forget to check out the links given in between the content to get a better understanding.

**What is Blockchain?**

Blockchain comprises of two words, Block and Chain. To understand these terms let's consider a simple example of money transferring. Let's say you want to transfer some funds to your friends. Now before you make the transaction, you make sure that this information is recorded somewhere. In our case, it can be a bank or a register.

Now a transaction information may contain the following:

*   Sender's Account Number
*   Recipient's Account Number
*   The Amount
*   Date of transaction

And maybe some other information too…

Creating a record on a blockchain results in the following benefits :

*   Greater Transparency : Everyone has the copy of the data.
*   Enhanced Security : Transactions must be validated by everyone in the network before they are recorded.
*   Improved traceability: As data in a blockchain in immutable (will will be discussed later) data once recorded remains on the chain forever.

**What does a "Block" mean ?**

In terms of Blockchain, these transaction information are collectively known as a block. A block contains all the information about any transaction. A block also has a unique **Hash** to identify itself on a network.

Hash usually looks like the following :

**“572a95fee9c0f320030789e4883707affe12482fbb1ea04b3ea8267c87a890fb”**

You can check out the following link and create a hash of your own ;)

[Create SHA256 Hash](https://anders.com/blockchain/hash.html).

A Block usually contains the following data:

1) Block’s Hash

2) Nonce

3) Data

4) Block Number.

The block Hash is calculated from the data and the nonce.

Here’s what a block looks like : [Block Structure](https://anders.com/blockchain/block.html)

![](https://lh5.googleusercontent.com/2yNyNYnk9TzysXMPhBwvpyuiTzpzkT2nz2gnmwe5_RVxiH505IOv3qFCEK1t-bMzp8qOCYfEsOW_ExsFikPzvgx3EZ60nezLKiMVs90F0i2j3Ue60mqYfgLYcyseVo2nMCYJgwsQ)

**Chain**

These blocks are linked to each other to form the chain. Each block is dependent on the previous block.

Consider that we have 3 blocks B1, B2 and B3. Every block contain a group of transactions. .Each of these blocks have their own unique Hashes. Now to form a chain, the hash of the first block B1 is mentioned in the second block B2. Similarly, the hash of the second block B2 is mentioned in the third block B3. All the blocks validate each other through this hash value.

![](https://lh6.googleusercontent.com/DSjMPstZ5oixz9i5yqcdXc35ApQx-u8nV-X3u-Wh9PoLoE_QtmIbFjP1BpLyOY8T8hZnYeHBmAnc0aZ8RPL6KS1tCjZUwXZUp5Yd_jI1vWt0KzTDFMgywS60UqiZyM-25T8O0xGJ)

**How information is secured?**

There's something interesting that happens when you try to change some value in any of the block. The unique **Hash** that is used to identify each block is created using the following:

**"Block Hash = Hash of Data + Nonce"**

Notice the term "**Nonce**".

Nonce is nothing but a unique number that is added to the hash of the data. Now on changing the values of the block, the hash of the block changes too and the remain blocks get invalidated. That means that if a person tries to alter one block the rest of the blocks get altered and thus information remains encrypted for the rest of the blocks. I am sure that you want to try it for yourself? Right? Here’s a link : [The Chain](https://anders.com/blockchain/blockchain.html)

Notice The hash values at the bottom of the blocks. Looks familiar right?.

![](https://lh5.googleusercontent.com/uX9WaJVQgiDwobyhFDbwMOWCrs6lBJMVEqXJWNruzDsw8n_z2z-HR1HogP30O6OpCEt9dj-cixtF5j-K3288-Bo5oDTMtjI2l1rZz9UnVa2Mw25Ye8XFuM50Nlv19qyzqAwLR4U8)

Now try changing the value of one block.

![](https://lh5.googleusercontent.com/qBldW3iFKrma-8sSilV7-8h2haXBK5LCo6M9iouuXYHkHfsAqUmV4b17T1909k05yIjAsVDELNd76tBD3iE-nCS_IcQb_Ex74fsHf5hb012sNnkGAdBAba8peEo0fXtPfG183qLp)

Voila!! The rest of the blocks gets invalid.

**Who are miners?**

Miners are high performance computers that uses **hit and trial** method to find this nonce. This process is called **Mining.** Now for mining blocks in a blockchain, a lot of resources are used like electricity, powerful computers, High power GPUs etc.

**Cryptocurrency :**

![](https://lh4.googleusercontent.com/HWdeWB9iBjXDQph5TenKssB7RLBqQWwgA7ywywce6A5FrfvBW6w9RtKqsoMikwpt8Rishc85Apr-elSk8cxg5NaARkuBaj3mfKRoahf3TmU2965QF2jTD6uuGDkbCwMCVEzpAK8b)

For the immense hard work of the miners to mine the blocks, the network pays a fee to the miners. This fee is usually called **Cryptocurrencies**.

Cryptocurrencies are not real money but they use decentralized control as opposed to centralized digital currency and central banking system.
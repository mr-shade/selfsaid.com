---
title: "HTTPS, Secure Connection, SSL.. What gives?"
date: "2017-07-04T22:29:00.000Z"
slug: "https-secure-connection-ssl-what-gives"
image: "https://blog.codingblocks.com/content/images/2019/01/http-to-https-Image-1.png"
description: "HTTPS. SSL. TLS. “Secure Connection”. You must have heard at least one of them if you have ever developed for the web. So what is it?, why so many terms?, and most importantly, being as lazy as any other web developer, why bother?      First of all you need some context."
tags: []
original_url: "https://blog.codingblocks.com/2017/https-secure-connection-ssl-what-gives/"
---

HTTPS. SSL. TLS. “Secure Connection”. You must have heard at least one of them if you have ever developed for the web. So what is it?, why so many terms?, and most importantly, being as lazy as any other web developer, **why bother?**

![](https://cdn-images-1.medium.com/max/600/1*McUTEKT3ZrwArhL2AwX08Q.jpeg)  
![](https://cdn-images-1.medium.com/max/600/1*VoLrWIjDNIu6ppvv6RBJVQ.jpeg)

First of all you need some context. Traditionally, when we visit a website, we enter its address in our browser and expect response from the correct web server. We assume the response is from the authentic web server. Also the response is neither tampered with nor tracked by anyone (ISP, Advertising companies). Well, this should work fine in a world where everyone is honest and have good intent. **However, this is not the case. And you can trust none**

Therefore, we see that for a secure connection we must have the following

*   A solid means to verify the authenticity of the server. The server is indeed the host it is appearing to be  
      
    
*   To hide the communication between server and client from prying eyes and establish a secure link.  
      
    

## How does HTTPS works?

Okay, so now that we have established our requirements, we can move forward to implementing them. Fortunately, some smart people already worked out the mechanism. We can take a look how that works, and verify the mechanism. Before we see how exactly SSL works, we need some terminology.

1.  **Encryption** : Simply put, it is scrambling of data based on a “key” which is gibberish without the key, required to get the data back from encrypted text.  
      
    
2.  **Asymmetric Encryption**: This is a type of encryption where we have two keys- Public Key and Private Key. One for encrypting and the other for decrypting. If data is encrypted with public key it can only be decrypted by private key and vice-versa. Yes, there is mathematics behind about how that works, but that is out of scope of this post.  
      
    
3.  **Symmetric Encryption**: A single key can used for encrypting and decrypting.  
      
    
4.  **Certificate Authorities**: These are globally trusted companies which verify the information about the organisation, which is hosting the server, and provide a digitally signed certificate, which cannot be forged and is encrypted with private key of the certificate authority.  
      
      
    Okay, i still have you right?, after all that terminology aside, we are now ready to dig into how exactly ssl works.  
      
    

![http_to_https-1](https://blog.codingblocks.com/content/images/2019/01/http_to_https-1.jpg)

### PART I — THE HANDSHAKE

*   First, both the server and client needs to agree on some standard about the cipher, read encryption method(Ex- AES,RC4),key exchange(Ex- RSA,DSA, etc..) and HASH method(Ex- MD5,SHA etc..). The standard choice is AES,RSA,SHA256  
      
    
*   The server sends its SSL Certificate(as obtained from Certificate Authorities,CA) to the client along with its public key.  
      
    
*   The client tries to decrypt the certificate received from the server using public key of the CA. Browsers come with a pre-loaded list of public keys of recognised CA’s.  
      
    
*   If the certificate is successfully decrypted, the certificate is check for validation i.e, expiry date, correct domain name etc..  
      
    
*   Once the certificate is validated, we have now established that we are talking to the authenticated server. Hurray!  
      
    

![](https://cdn-images-1.medium.com/max/800/1*FVL2Lkjx1K2yGqxXqdSFxg.jpeg)

### PART II-ESTABLISH SESSION KEY

*   The client now generates a **Session key**(just a “random string”) and sends the server this ( Session Key + Request Data ) encrypted with the public key of the server.  
      
    
*   The server decrypts the information using its private key, and sends the client response data encrypted with the **Session key** received before. Symmetric Encryption is used here.  
      
    
*   The client decrypts using **Session key**, and since, now both server and client has session key, all the subsequent requests are encrypted using this session key for this session.  
      
    
*   Anyone who try to intercept the communication will see encrypted garbled text _‘#@$EDSFGHT2%^R$E#QWwrdtfDEFR32324W!!@@!!@@’_ which is meaningless without the key  
      
    

The whole process is repeated for each session, a new session key is obtained for each session.

HTTPS is a neat example of handy tech jargon you can learn in about 5 mins and have all the tech bragging right over your geek friends.In fact similar mechanism is adopted by ssh (Secure shell communication).

![](https://cdn-images-1.medium.com/max/800/1*GlAxzSfeAPq0jKeWMTAdoA.jpeg)
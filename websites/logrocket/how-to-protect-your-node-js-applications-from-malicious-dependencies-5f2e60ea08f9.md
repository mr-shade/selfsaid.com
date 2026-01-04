---
title: "How to protect your Node.js applications from malicious dependencies - LogRocket Blog"
date: "2018-12-08T03:00:30+00:00"
slug: "how-to-protect-your-node-js-applications-from-malicious-dependencies-5f2e60ea08f9"
image: "https://storage.googleapis.com/blog-images-backup/1*GG67wdykOg7Zk4h8cjqJIQ.jpeg"
description: "You have probably heard about a recent incident where a popular npm package, event-stream, included malicious code that could have […]"
tags: []
original_url: "https://blog.logrocket.com/how-to-protect-your-node-js-applications-from-malicious-dependencies-5f2e60ea08f9/"
---

![](https://secure.gravatar.com/avatar/0afcac535e6b0b6b22bace912250896dec1cc42f023fc5a558a11b120b2c14be?s=36&d=mm&r=g) **Sarge** says:

[October 9, 2019 at 9:07 pm](https://blog.logrocket.com/how-to-protect-your-node-js-applications-from-malicious-dependencies-5f2e60ea08f9/#comment-679)

This method is good for standard methods, but do you know what is a good way to block calls at the system level? When calls reach the v8 engine or uv, it should be able to implement a gating mechanism where the user can be asked consent.  
This model is similar to android apps where we are told the permissions that the app requires in advance, and any additional access is denied till the user explicitly approves it.

[Reply](#comment-679)
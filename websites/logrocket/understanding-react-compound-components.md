---
title: "Understanding React compound components - LogRocket Blog"
date: "2021-11-06T02:00:37+00:00"
slug: "understanding-react-compound-components"
image: "https://blog.logrocket.com/wp-content/uploads/2018/08/understanding-react-compound-components.png"
description: "Using compound components can be extremely beneficial. Here's what they are and how to use them in your React app."
tags: []
original_url: "https://blog.logrocket.com/understanding-react-compound-components/"
---

![](https://secure.gravatar.com/avatar/93708fb09e1c12d31268a40c8ddc42fc91d75623c1560ed6741fa8a0a63a0c98?s=36&d=mm&r=g) **melissa g.** says:

[May 22, 2019 at 2:06 am](https://blog.logrocket.com/understanding-react-compound-components/#comment-3)

Hello!, this is a nice article, It helped me to understand this pattern a little bit better :), just one observation I have, in the code snippet you have in the article:

“\`  
const Tab = ({ id, children }) => (

{({ changeTab }) => changeTab(id)}>{children}}

);  
“\`  
there is that ” > ” character in the return of the function inside that is confusing (I even thought it was a special new syntax of react…you never know! lol), then I checked the code sandbox provided, and I saw that the function was actually “({ changeTab }) => changeTab(id)}>{children}” which I was able to understand better.

Maybe update the article’s code snippets to make it even clearer to new readers with less React experience,

Thanks!

[Reply](#comment-3)
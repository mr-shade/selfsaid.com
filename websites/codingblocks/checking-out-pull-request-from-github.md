---
title: "Checking out pull request from Github"
date: "2017-05-01T20:34:00.000Z"
slug: "checking-out-pull-request-from-github"
image: "https://blog.codingblocks.com/content/images/2019/01/download.png"
description: "So your repository got a PR from a enthusiastic developer. You don’t want to merge it before testing it out yourself locally on your dev machine. How do you go about it ?  How pull requests work on Github (from — gitcolony.com) The pull request is available on this git"
tags: []
original_url: "https://blog.codingblocks.com/2017/checking-out-pull-request-from-github/"
---

So your repository got a PR from a enthusiastic developer. You don’t want to  
merge it before testing it out yourself locally on your dev machine. How do you  
go about it ?

![](https://cdn-images-1.medium.com/max/1600/1*ubVyD2GaOAlSfqRNbL0Bjg.png)

  
How pull requests work on Github (from — gitcolony.com)

The pull request is available on this git ref `pull/{*ID}*/head` which you can  
fetch using this, where ID is the pull request id.

```
    git fetch origin pull/
    /head && git checkout FETCH_HEAD
```

Or, if you only want to cherry pick it, instead of checking it out, you can use

```
    git fetch origin pull/
    /head && git cherry-pick FETCH_HEAD
```

*   [Github](https://medium.com/tag/github?source=post)
*   [Git](https://medium.com/tag/git?source=post)
*   [Pull Request](https://medium.com/tag/pull-request?source=post)
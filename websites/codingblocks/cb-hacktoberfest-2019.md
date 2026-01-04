---
title: "Hacktoberfest with Coding Blocks 2019"
date: "2019-10-06T08:31:05.000Z"
slug: "cb-hacktoberfest-2019"
image: "https://blog.codingblocks.com/content/images/2019/10/cover_hacktoberfest.jpg"
description: "Hey Developers
We are excited to
be a part of Hacktoberfest
2019, a first for us. Contribute
your bit to our repositories and stand a chance to win our schwag!

We are wishing you a fun-filled
hacktober!"
tags: ["open source", "hacktoberfest"]
original_url: "https://blog.codingblocks.com/2019/cb-hacktoberfest-2019/"
---

# Hello Developers!

Every year in October, **_Digital Ocean_** and **_GitHub_** team up for an online event which celebrates open-source. Open-Source  is one of the most growing areas in development these years. Also, it  has made possible for beginners to grow and develop their skills as a  programmer/developer. On a brighter side, you get some really cool  freebies as well!

We’re excited to announce that [Coding Blocks](https://codingblocks.com/) is taking part in Hacktoberfest for the first time! Coding Blocks invites you to contribute to our open source projects, which we’re calling #CodeLikeABoss. Enter to earn limited-edition CB swag!

![](https://blog.codingblocks.com/content/images/2019/10/2019_badge_small.png)

## The Coding Blocks Hacktoberfest challenge

We’ve got our own challenge for Hacktoberfest 2019 :

*   You can open a PR for any of our [open source projects](https://cb.lk/gh). (PRs to README files will not be counted for this challenge )
*   If the PR you submit for any of the issues gets merged, you’ll win a limited edition Developer T-shirt along with a sticker pack!
*   1 - 4 pull requests: Limited-Edition T-shirt
*   5+ pull requests: Limited-Edition BAG

Join our Gitter channel for support - [https://cb.lk/hacktoberfest/help](https://cb.lk/hacktoberfest/help)

Claim here - [https://cb.lk/hacktoberfest/swag](https://cb.lk/hacktoberfest/swag)

![](https://blog.codingblocks.com/content/images/2019/10/image-9.png)

First and foremost, you need to register for Hacktoberfest before 31st Oct, for that you  need a GitHub account, if you don’t have one, chill we’ve got you  covered. [Go to this link](https://github.com/join) and create an account for free ! Celebrate Hacktoberfest with the global open source community.

Once your GitHub account is created, you can register for Hacktoberfest [here!](https://hacktoberfest.digitalocean.com/) After registering for Hacktoberfest, you are officially a participant  of Hacktoberfest! Now, you just need to start contributing to any  projects out there on GitHub

![](https://blog.codingblocks.com/content/images/2019/10/image.png)

First, learn about GitHub and pull requests if you don’t know about them.

### Let's help you submit your first Pull Request.

For this exercise you'll be adding a new entry to the  source code with your profile details. Excited?  let's begin!

### Step 1

Go to the [GitHub repository](https://cb.lk/makeapr) of this project and fork the project to your account. Click  on the fork button on the top right corner of the repository page to do it. Once done, GitHub will take you to the forked copy in your account.

### Step 2

![](https://blog.codingblocks.com/content/images/2019/10/Y0y2AetCAV6WwEpIrCkMx6tPlojSc3Kvqc6L.gif)

Clone  the forked repository to your local machine. Click on the big green  button saying "Clone or download" and copy the https url of your repository. Fire up the terminal (on Linux systems ctrl+alt+t and on Windows open the [Git-bash](https://git-scm.com/download/win) ) navigate to your desired directory and type the following command.  Replace the link with the clone URL of your repository and hit Enter.

> git clone https://github.com/YOUR\_USERNAME/make-a-pr.git

### Step 3

Let's start working on the changes required now! First Change directory into the cloned folder by typing the following command.

> cd make-a-pr  

Before jumping in to the code, make sure you're working on a different  branch and not in master. To create a new branch, from the terminal  inside your current project directory type the following command.

> git branch YOUR\_USERNAME-profile

Replace the _YOUR\_USERNAME_ with your GitHub username or you can give any name to your branch which  describes the purpose of the branch. Since here we're adding your  profile, we'll simply give the name of the branch as above. eg: _git branch sarthak-profile_.  Once you have created the new branch we'll change the current branch  from master to your newly created branch. Execute the following command  on your terminal.

> git checkout YOUR\_BRANCH\_NAME

### Step 4

In your  file manager/terminal navigate to the downloaded repo. Open the sub-directory **src/profiles/**. and create a new **.md** file with your username as the filename with **.md** extension.  
It should look like **YOUR\_USER\_NAME.md**  _eg: sarthak-1998.md_  
Open this file in your favorite editor and fill the details as below in the front matter of the markdown file.

  
Add your profile page - _YOUR\_USER\_NAME.md_

> \---  
> username: YOUR\_USER\_NAME  
> fullname: YOUR\_FULL\_NAME  
> \---

Do not forget that the hyphens "---" are also part of the file. Once you finish adding the content, save the file.

### Step 5

Commit the changes with a suitable commit message. First we need to stage all the changes we made. Open the terminal inside the project directory and execute following commands.

> git add -A

The above command stages all the changes, now lets commit it with a suitable message.

> git commit -m "YOUR\_COMMIT\_MESSAGE"

### Step 6

Let's push the changes to your repository! execute the following command to push all the changes to the forked copy in your GitHub account.

> git push -u origin YOUR\_BRANCH\_NAME

### Step 7

Now, open your web browser and go to the [original repository on GitHub](https://cb.lk/makeapr).  If your changes has been pushed to your forked copy, You'll be able to  see an option saying "New Pull Request" in the original repository.  Click on the option, one next page choose the master branch of the main repository against your created-branch name (choose that branch name which you created and not master). Then click on create pull request. Once you fill  in the commit message and comment click on submit pull request.

Finally you are all done!  Wait for a reviewer to review your file and merge it to the master.

![](https://blog.codingblocks.com/content/images/2019/10/image-5.png)

Once, you have learned about pull request and GitHub, you need to make 4  pull requests to any open-source projects. But a word of caution,  your pull requests should only have commits by you, also, pull requests  reported as spam would not be eligible.  
After you make your pull requests, contribute by finding bugs and remove  them and finally pushing them in the repository. Also, you can check  your progress on the Hacktoberfest website!

![](https://blog.codingblocks.com/content/images/2019/10/image-7.png)

The event is a great opportunity to grow as a developer and improve your  skills, also if you make 1 successful pull requests gets merged, you are eligible to  get a really cool T-Shirt by mail. We can't wait to see what you contribute!

Whether this is your first or hundredth open-source contribution, we  are excited to be part of your journey. And remember, a contribution  doesn't always have to be about code, some of the most valuable  contributions to a project are often not code related.

If you have any questions about anything in this blog post or as you embark on your open-source quest, feel free to reach out!

*   Twitter: [@CodingBlocksIn](https://twitter.com/CodingBlocksIn/)
*   Email: [\[email protected\]](/cdn-cgi/l/email-protection)
*   GitHub: [coding-blocks](https://blog.codingblocks.com/2019/cb-hacktoberfest-2019/cb.lk/gh)

![](https://blog.codingblocks.com/content/images/2019/10/asc-1.jpg)

Happy Coding !!  
**If you have any questions, do let us know in the comment section below!**
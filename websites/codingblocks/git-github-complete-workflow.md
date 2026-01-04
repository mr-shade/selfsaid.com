---
title: "The Ultimate Git & GitHub Guide: Complete Workflow"
date: "2025-12-17T12:14:38.000Z"
slug: "git-github-complete-workflow"
image: "https://blog.codingblocks.com/content/images/2025/12/GITHUB-Banner.png"
description: "Git &amp; GitHub: A Simple IntroductionImagine you're writing a book with friends. Git is like a magical notebook that remembers every version of every page you've ever written—so if you mess something up, you can always go back. GitHub is like a shared library in the cloud where everyone"
tags: ["Git and Github", "git", "github"]
original_url: "https://blog.codingblocks.com/2025/git-github-complete-workflow/"
---

# **Git & GitHub: A Simple Introduction**

Imagine you're writing a book with friends. Git is like a magical notebook that remembers every version of every page you've ever written—so if you mess something up, you can always go back. GitHub is like a shared library in the cloud where everyone can access the same notebook, add their chapters, and see what others have written.

Git helps you track changes on your computer, while GitHub lets you share and collaborate with others online. Together, they make teamwork smooth and keep your project safe from accidental deletions or overwrites.

Below are the essential commands you'll use to manage your projects, collaborate with others, and keep everything organized—think of them as the tools in your magical notebook's toolkit

![](https://blog.codingblocks.com/content/images/2025/12/image-7.png)

# Let’s Start with what is repository?

A **Git repository** (or "repo") is **a storage space that contains all of your project's files, code, and each file's complete revision history**. It functions as the central hub for the version control system, allowing developers to track changes, revert to previous versions, and collaborate efficiently.

## **Types of Repositories**

Git employs a distributed version control system (DVCS), meaning every user has a complete copy of the entire codebase and its history. The main types are:

*   **Local Repository**: Stored on your personal computer, allowing you to work, commit, and manage history without an internet connection.
*   **Remote Repository**: Hosted on a server or cloud-based platform (e.g., [**GitHub**](https://github.com/), [**GitLab**](https://about.gitlab.com/), Bitbucket), enabling team collaboration. Developers use `git push` to upload local changes to the remote and `git pull` to fetch updates from others

# How to Create a git repository

To create a Git repository locally on your computer, you will use the command line interface (CLI) to initialize a directory.

**Prerequisites**

Before you begin, ensure you have Git installed on your system. Check if Git Is Already Installed. If not you can follow the below steps.

## Installation of Git

Go to the official Git download page and **download the installer**.

For macOS : brew install git, incase you don’t have brew google `download homebrew` and then proceed.

For Linux : apt-get install git

For Windows: [https://git-scm.com/downloads](https://git-scm.com/downloads)

Run the installer and **follow the setup wizard**, clicking _Next → Next → Install_.

During setup, you’ll see options like:

Choose default editor (pick VS Code or Nano)

Adjust your PATH (recommended: **Git from the command line**)

Just leave the defaults if unsure.

After installation, open **Git Bash** (or Command Prompt) and run:

```jsx
git --version
```

![](https://blog.codingblocks.com/content/images/2025/12/image-8.png)

## **Steps to Create a Local Git Repository**

Follow these steps using your terminal (macOS/Linux) or Git Bash/Command Prompt (Windows):

**1\. Navigate to your project directory**

Use the `cd` (change directory) command to move to the folder where you want to create your repository. If the folder doesn't exist yet, you can create one first using `mkdir`.

```jsx
*# Example: Create a new directory named 'my_project'*
mkdir my_project
```

![](https://blog.codingblocks.com/content/images/2025/12/image-9.png)

```jsx
*# Change your current location into that directory*
cd my_project
```

Although **macOS** and **Linux** users use the same command, the resulting output may differ and may not match the example shown in the screenshot.

![](https://blog.codingblocks.com/content/images/2025/12/image-10.png)

**2\. Initialize the Git repository**

Once you are inside the correct directory, run the `git init` command. This command sets up the necessary Git internal files and data structures (specifically, it creates a hidden `.git` directory) that turn your simple folder into a fully functional Git repository.

```jsx
git init
```

![](https://blog.codingblocks.com/content/images/2025/12/image-11.png)

You will see output similar to this: `Initialized empty Git repository in /path/to/my_project/.git/`

# Making changes in Git

# Staging and committing in Git

Whenever you work on your project, and let’s suppose you made a feature F1. If you wish that you keep the snapshot of the code till the point of F1, then it’ll be stored in form of commits. That raises a few questions. What is a commit ? How do I make one of my own commit ? What if I made a mistake while making a commit ? To answer these questions, you need to understand how do we manage commits in git.

The workflow to make and store changes in git goes as follows:

1.  **Modification:** First you make changes in your project that you want to save upto.
2.  **Staging :** Staging is the area where you review files right before you finalize your changes.
3.  **Commit :** Commit is the final step you make that saves your progress in your code.

# Key Concepts and Commands

We first use _git status_ command to check the current status of our repository.

```jsx
	git status
```

![](https://blog.codingblocks.com/content/images/2025/12/image-12.png)

## Modification

First, we make a new file by the name of _feature.txt_ and make our changes in our new _feature.txt_ file

## **Staging Changes (git add)**

![](https://blog.codingblocks.com/content/images/2025/12/image-13.png)

```jsx
git status
```

![](https://blog.codingblocks.com/content/images/2025/12/image-14.png)

On using git status command we can see that our git environment can detect new changes. So, the next step that comes into line is to move these changes to staging area, to confirm which changes do we want to keep for record.

This can be done using the following command:

```jsx
git add feature.txt 
```

This command is used to move your changes to staging area where you’d review the files that you made changes in.

In order to add all the files at that point of time when you made changes, you can use “_git add ._”

```jsx
git add .
```

![](https://blog.codingblocks.com/content/images/2025/12/image-15.png)

## Unstaging Changes

If you’ve moved some changes to staging area, and want to revert them back to unstaging, then you can do so with the command git restore —staged <filename>

```jsx
git restore --staged <filename>
```

![](https://blog.codingblocks.com/content/images/2025/12/image-16.png)

## **Commit changes (git commit)**

After you’ve moved all your changes to staging area, the next step is to make a final snapshot of it, which you can revert back to if you wished to undo the changes. This point of storing the changes to the point in development process is called Commit.

To commit changes, you use the command _git commit_

The most common way to make a commit is by using _git commit -m “Message”_. This -m attribute requires a string in which you pass the name of message, by which you wish to recognize a particular commit, in the development process.

```jsx
git commit -m "Your message goes here"
```

![](https://blog.codingblocks.com/content/images/2025/12/image-17.png)

Also, you can simply use _git commit_ directly, which will then lead you to your default code editor asking your message with a prompt.

![](https://blog.codingblocks.com/content/images/2025/12/image-18.png)

There’s one more way by which you can directly stage your changes as well as commit it in one single command ie. _git commit -a -m “Message”,_  only if your file has been present in at least one previous commit.

```jsx
git commit -a -m "Your-message-goes-here"
```

Although, this method is not recommended as it does not allow the user to verify changes before commiting.

![](https://blog.codingblocks.com/content/images/2025/12/image-19.png)

## Reverting to git changes you made

Whenever a git commit is made, the git commit is given a unique hashed ids, which are generated by computing SHA1 hash of the commit object’s entire content and some metadata, meaning, it is always going to be unique. You can check these list of commits along with their ids, with the command _git log_.

```jsx
git log
```

![](https://blog.codingblocks.com/content/images/2025/12/image-20.png)

If you want your code to return to point in time of a given commit, you simple use git reset command along with their hashed ids.

```jsx
git reset <'hashed commit ids'>
```

![](https://blog.codingblocks.com/content/images/2025/12/image-21.png)

## .gitignore

“_git add ._” \*\*moves all the files to the staging area, except the file files or folder directories mentioned in _.gitignore._

### **Now, What is .gitignore ?**

_.gitignore_ is a file that you make in your repository to contain the exceptions that doesn’t get stored in staging or commiting process.

![](https://blog.codingblocks.com/content/images/2025/12/image-23.png)

In the above image, If I don’t want to add more-features directory and new-feature.txt, I can simply put them in .gitignore file

![](https://blog.codingblocks.com/content/images/2025/12/image-24.png)

You can also review the changes, if they’re successfully moved to staging area or not by using _git status_ command.

![](https://blog.codingblocks.com/content/images/2025/12/image-25.png)

### **Explain master and main branch ??**

**master** branch was traditionally used as the default branch in git.

In recent years, however, platforms like GitHub have shifted to using **main** as the default branch name, partly because the word master and slave is something that people want to avoid.

### **Creating new Branch**

Creating a new branch in Git lets you work on changes separately from the main code, allowing you to develop features or fixes without affecting the existing project.

```tsx
git branch new_branch_name
```

### **Shifting from one to another branch**

**Switch to an existing branch**

```tsx
git checkout new_branch_name
```

![](https://blog.codingblocks.com/content/images/2025/12/image-26.png)

**Create and switch to the new branch directly**

```jsx
git checkout -b new_branch_name
```

![](https://blog.codingblocks.com/content/images/2025/12/image-27.png)

### Merging code to main/master branch

Merging code into the main/master branch means bringing the changes you made in another branch back into the `main branch`.

This keeps your main branch clean, organized, and always stable.

```tsx
git merge branch_name
```

Once your work is done you need to bring code to main branch

**Step 1:** Take your head pointer to main branch using `git checkout main`

**Step 2:** Merge the `newbranch` code into the `main` branch using `git merge newbranch`

![](https://blog.codingblocks.com/content/images/2025/12/image-28.png)

### Merge Conflict

When you merge multiple branches into the main/master branch, an error or issue may occur this is called a merge conflict

![](https://blog.codingblocks.com/content/images/2025/12/image-29.png)

# **1\. Github(website built on Git)**

GitHub is a cloud-based platform where developers **store, share, and collaborate** on code projects using **Git**.

Storing your code in a "repository" on GitHub allows you to:

*   **Showcase or share** your work.
*   **Track and manage** changes to your code over time.
*   Let others **review** your code, and make suggestions to improve it.
*   **Collaborate** on a shared project, without worrying that your changes will impact the work of your collaborators before you're ready to integrate them.

# 2\. Step to create new repo

1.  Log in to GitHub.
2.  Click **\+ (New)** → **New repository**.
3.  Enter the repository name.
4.  Choose Public or Private.
5.  (Optional) Add README, .gitignore, License.
6.  Click **Create repository**.

![](https://blog.codingblocks.com/content/images/2025/12/image-31.png)

![](https://blog.codingblocks.com/content/images/2025/12/image-32.png)

1.  What is `git remote add origin`?

![](https://blog.codingblocks.com/content/images/2025/12/image-33.png)

command:

```jsx
git remote add origin <repository-url>
```

### **Meaning:**

*   `git remote` → manage connections to remote repositories
*   `add` → create a new remote entry
*   `origin` → _name_ of the remote (default name)

### **Why name is ‘origin’?**

*   It is a **nickname** for the remote GitHub repo.
*   Instead of writing long URLs again and again, git uses short names like:
*   `origin`

### **Example to understand ORIGIN**

Suppose you have:

```jsx
Repo URL = [email protected]:TusharSatija/Learning_Github.git
```

![](https://blog.codingblocks.com/content/images/2025/12/image-34.png)

Instead of typing full URL every time, you run:

```jsx
git remote add origin [email protected]:TusharSatija/Learning_Github.git
```

Now Git remembers this connection:

```jsx
origin → [email protected]:TusharSatija/Learning_Github.git
```

So now when you write:

```jsx
git push origin main
```

Git understands:

Push my code to the main branch of the repository stored in "origin".

1.  What is `git push`?

To send your code from local repository to remote repository on `github`We use git push command.

![](https://blog.codingblocks.com/content/images/2025/12/image-35.png)

### **Meaning:**

*   Upload (push) your local commits → to remote repo.
*   `origin` → remote repo name/url
*   `main` → branch name

# What is Fork in GitHub?

![](https://blog.codingblocks.com/content/images/2025/12/image-36.png)

A **fork** is a **copy of someone else’s GitHub repository** into _your own_ GitHub account.

![](https://blog.codingblocks.com/content/images/2025/12/image-37.png)

# **Where Fork is used?**

Fork is mostly used for **open-source contributions**

![](https://blog.codingblocks.com/content/images/2025/12/image-38.png)

You can now:

### **1\. Edit code**

You can modify any file in your forked repository without needing permission from the original project.

### **2\. Add files**

You can add new files (features, docs, fixes) in your fork, just like your own project.

### **3\. Commit**

You can save your changes with a commit message, keeping track of what you updated.

### **4\. Push**

You can upload your commits from your local machine to your forked GitHub repository.

### **5\. Create branches**

You can create separate branches in your fork to work on new features or fixes safely.

### **Why this is safe?**

All changes stay inside **your fork**, so the **original repository remains unchanged** until you open a Pull Request.

# **What is a Pull Request (PR)?**

A **Pull Request (PR)** is a request you make to the owner of a repository asking them to **pull your changes** into their project

# **Why is it called a “Pull” Request?**

Because you are asking the repository owner to:

**Pull** → your branch/changes

# **Where PR is used?**

*   Team projects
*   Open-source contributions
*   Code review
*   Feature development
*   Bug fixing

# **PR Allows:**

*   Code review
*   Comment on code
*   Discuss changes
*   Suggest improvements
*   Approve or reject changes

![](https://blog.codingblocks.com/content/images/2025/12/image-39.png)

# 4\. PR VIA FORK (Most common for open-source)

Use **fork** when you do _not_ have permission on the repo.

### **Steps**

1.  Go to the public GitHub repo.

![](https://blog.codingblocks.com/content/images/2025/12/image-40.png)

2\. Click **FORK** → creates copy in your GitHub.

![](https://blog.codingblocks.com/content/images/2025/12/image-41.png)

```jsx
git clone <your-fork-url>
```

![](https://blog.codingblocks.com/content/images/2025/12/image-42.png)

1.  Create new branch:

```jsx
git checkout -b fix-readme
```

1.  Make changes and push:

```jsx
git push origin fix-readme
```

Go to your fork → GitHub shows:

```
        **“Compare & Pull Request”**
```

![](https://blog.codingblocks.com/content/images/2025/12/image-43.png)

Select **base repository = original repo**

Select **compare branch = your branch**

Submit PR.

### Happy Open Source! 🚀
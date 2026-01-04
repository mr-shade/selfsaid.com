---
title: "Installing and Setting up MySQL"
date: "2016-11-05T11:46:00.000Z"
slug: "installing-and-setting-up-mysql"
image: ""
description: "This page contains the common code snippets used to installing and setup MySQL server initially on your personal machine.  Mac If you have homebrew  brew install mysql   mysql.server restart   Linux sudo apt-get install mysql-server   Windows Figure out yourselves :P  Setting up database and user Creating new database create database"
tags: []
original_url: "https://blog.codingblocks.com/2016/installing-and-setting-up-mysql/"
---

This page contains the common code snippets used to installing and setup MySQL server initially on your personal machine.

## Mac

If you have homebrew

```shell
brew install mysql  
mysql.server restart  
```

## Linux

```shell
sudo apt-get install mysql-server  
```

## Windows

Figure out yourselves :P

## Setting up database and user

### Creating new database

```sql
create database newdatabase;  
```

### Creating new user

```sql
create user 'newuser'@'%' identified by 'newpassword';  
```

Now exit and login with new user

```shell
mysql -u newuser -p
```
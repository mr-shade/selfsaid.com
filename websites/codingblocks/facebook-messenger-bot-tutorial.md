---
title: "Facebook Messenger Bot Tutorial"
date: "2017-03-23T10:26:00.000Z"
slug: "facebook-messenger-bot-tutorial"
image: "https://blog.codingblocks.com/content/images/2019/03/Cheat-Sheet-All-Facebook-Messenger-Bots-Interactions.png"
description: "Learn how to create a facebook messenger bot using Python using our video tutorial series.  Video 1 Creating a facebook app A facebook App allows you to retrieve and post data on facebook programmatically via Facebook API.  Facebook API provides the interface and methods to interact with the Facebook App."
tags: []
original_url: "https://blog.codingblocks.com/2017/facebook-messenger-bot-tutorial/"
---

Learn how to create a facebook messenger bot using Python using our **video tutorial series**.

## Video 1

### Creating a facebook app

A **facebook App** allows you to retrieve and post data on facebook programmatically via [**Facebook API**](https://developers.facebook.com/products/messenger/).

Facebook API provides the interface and methods to interact with the Facebook App.

This video demonstrates how to create a facebook app.

## Video 2

### Setting up project

This video demonstrates how to setup the projects folder.

*   You need to have Python 3 or Python 2 installed. (Python 3 is preferred)
*   Install virtualenv
    
    ```
    pip install virtualenv
    ```
    
*   Create a virtual environment
*   Install:
    *   flask
    *   requests
    *   pymessenger

## Video 3

### Setting up webhook

This video demonstrates how to setup webhook (callback URL) for your messenger bot.

We use [**ngrok**](https://ngrok.com) for exposing local server to internet.

## Video 4

### Receiving messages

In this video, we write a function to receive messages from FB page as **POST HTTP Requests**.

## Video 5

## Create a basic echo bot

This video demonstrates how to add replying capability to our messenger bot.

[**pymessenger**](https://github.com/davidchua/pymessenger) is used for sending replies.

## Video 6

## Heroku setup

This video demonstrates how to set up your project folder for Heroku deployment.

You need to install:

*   [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
*   [Git CLI](https://git-scm.com/downloads)
*   gunicorn
    
    ```
    pip install gunicorn
    ```
    

## Video 7

## Heroku deployment

This video demonstrates how to deploy your messenger bot on Heroku.
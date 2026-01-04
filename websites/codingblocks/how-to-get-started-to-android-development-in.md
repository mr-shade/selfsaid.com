---
title: "Want To Become An Android Developer?"
date: "2019-11-28T19:01:22.000Z"
slug: "how-to-get-started-to-android-development-in"
image: "https://blog.codingblocks.com/content/images/2019/11/and-dev_cover.png"
description: "Want to be a successful Android Developer? Welcome !! You are at the right place. This is a very simple guide to get started to your journey of Android Developer 👨‍💻This article is for all those people who fit in any of the categories below : Category 1: Completely new to Android"
tags: []
original_url: "https://blog.codingblocks.com/2019/how-to-get-started-to-android-development-in/"
---

### Want to be a successful Android Developer? Welcome !! You are at the right place. This is a very simple guide to get started to your journey of Android Developer 👨‍💻

This article is for all those people who fit in any of the categories below :

Category 1: Completely new to Android Development and don't know how to get started.

Category 2: For all those who have already started Android Development but want to learn it in a better and efficient way and go through the advanced topics.

> Android Development is a very vast and interesting course.  In the span of just 9 years,  **Android has climbed the stairs of success** and has reached the position that seems to be a visionary dream to other smartphone operating systems. **The scope of this field is never ending** 🎉

## Get started to Android Development

1.  First of all, you must know a programming language like Java or Kotlin.

For learning Java in short time without wasting time searching for the resources, register for this Online Course [](https://online.codingblocks.com/courses/complete-java-course-online)**[Coding Blocks, India's Best Programming Institute.](https://online.codingblocks.com/courses/complete-java-course-online)**

2\. Set Up Android Studio on your PC or Laptop.  After setting up android studio you’ve taken your first, bold step toward becoming a developer 🎉

Before starting Android Development, it's very important to understand the A**ndroid activity lifecycle.**

![](https://blog.codingblocks.com/content/images/2019/07/image-56.png)

Android LifeCycle

**Let's understand Android development with help of this simple project.**

**Step 1 :**  Launch Android Studio and start a new project**(File -> New -> New Project).**

![](https://blog.codingblocks.com/content/images/2019/07/image-58.png)

Click on Empty Activity then Next

**Step 2 :** Write name of your new Project and then click finish.

![](https://blog.codingblocks.com/content/images/2019/07/image-59.png)

Write new Project Name

**Step 3:** After some processing, Android Studio opens the IDE.

![](https://blog.codingblocks.com/content/images/2019/07/image-60.png)

**Step 4:**  First be sure the **Project** window is open (select **View > Tool Windows > Project**) and the **Android** view is selected from the drop-down list at the top of that window. You can then see the following files:

****app > java > com.example.myfirstapp > MainActivity****  This is the main activity (the entry point for your app). When you build  and run the app, the system launches an instance of this     `[Activity](https://developer.android.com/reference/android/app/Activity.html)`    and loads its layout.  

****app > res > layout > activity\_main.xml****  This XML file defines the layout for the activity's UI. It contains a    `[TextView](https://developer.android.com/reference/android/widget/TextView.html)` element with the   text "Hello world!".

![](https://blog.codingblocks.com/content/images/2019/07/image-54.png)

**Step 5 :** We will make a simple application in which " On clicking on a button, you will see your name with a star image " 🎉.

3,2,1....Go !

Open up your XML and write the following code to create a button, an ImageView and a TextView  or  you can also choose drag and drop method (from the design tab at bottom of XML file).

Second method is more efficient and exciting, Drag an imageView to the layout, choose the **Star\_Image** image for it, and constrain it to the top of TextView. Similarly drag a TextView and then a Button. Constraint all the views.

It should look like this :

![](https://blog.codingblocks.com/content/images/2019/07/image-61.png)

XML File

**Step 6 :** Now change the following attributes in TextView and ImageView.

**Attribute field                                        Enter the following:**      

* * *

                                                                       TextView                    Button         ImageView

ID                                                                nameTextView              button          imageView

text                                                           "Your Full Name "         "Click Here"         -

Hurray 🎉🏆, you are done with the basic Front-End Part for the project.

**Step 7 :** Moving ahead you have to do some coding in MainActivity.java 👨‍💻 Define and initialize the button, TextView and ImageView.

![](https://blog.codingblocks.com/content/images/2019/07/image-62.png)

Define And Initialize the views

**Step 8 :**  Write this piece of code inside OnCreate Method :

> nameTextView.setVisibility(View._INVISIBLE_);  
> imageView.setVisibility(View._INVISIBLE_);  
>   
> button.setOnClickListener(new View.OnClickListener() {  
>    @Override  
>    public void onClick(View view) {  
>   
>      nameTextView.setVisibility(View._VISIBLE_);  
>      imageView.setVisibility(View._VISIBLE_);  
>    }  
> });

You can check out the code for above at   [First Timer Android Project](https://github.com/SaumyaSingh1/FirstTimersAndroid).

For more information on Android , visit [official Android Developer website](https://developer.android.com/index.html)

![](https://blog.codingblocks.com/content/images/2019/07/image-63.png)

Understand Material Design from [here.](https://www.google.com/design/spec/material-design/introduction.html)

![](https://blog.codingblocks.com/content/images/2019/07/image-64.png)

**Want to become an Expert Android Developer ?**                      

[

Best Android Development Course in India

Get the best android training institute, courses, classes or coaching centres near me where you will learn android apps courses. Enroll Now and book Your Seat.

![](https://codingblocks.com/assets/images/icons/android-icon-192x192.png)Gurleen KaileyCoding Blocks

![](https://codingblocks.com/assets/images/cb/logosc/color_android.svg)

](https://codingblocks.com/classroom-courses/android-app-development-using-kotlin-and-java.html)

Become an Android Developer!

> [Get started to Android, Java and Kotlin](https://online.codingblocks.com/app/courses).

You can find some other useful articles on Android  at [Coding Blocks Blog.](https://medium.com/coding-blocks)
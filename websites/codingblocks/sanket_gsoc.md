---
title: "GSoC at Berkman Klein Center at Harvard University"
date: "2019-06-24T04:43:42.000Z"
slug: "sanket_gsoc"
image: "https://blog.codingblocks.com/content/images/2019/07/0-GXeaiRPePMjHuuHZ-1.jpeg"
description: "#include&lt;open-source&gt;Life is tough, but it's easy if you're punctual and consistent.So if you are not scared by the import statement and highly motivated by the quote mentioned above then I am about to share my journey to crack GSoC under BKC at Harvard University.  So"
tags: []
original_url: "https://blog.codingblocks.com/2019/sanket_gsoc/"
---

![](https://blog.codingblocks.com/content/images/2019/06/1_xWpAPM9P4h5zGwGGnSK8pw.jpeg)

# #include<open-source>

> Life is tough, but it's easy if you're punctual and consistent.

So if you are not scared by the import statement and highly motivated by the quote mentioned above then I am about to share my journey to crack GSoC under BKC at Harvard University.  So gear up your jellies and suit up for one of the most relatable GSoC story.

![](https://blog.codingblocks.com/content/images/2019/06/ZfGxxx.gif)

# Reminiscence

I got to know about the GSoC program by my fellow intern at Indian Space Research Organisation (ISRO), Ankush Malik. Before that my prior knowledge about GSoC was just that this is an annual Open-Source program. But back then most of my time was engaged in coding and working on Competitive Programming problems in C++😅. Then I did my research on GSoC and it made me pursue it. let's begin this story with a little about protagonist (myself).

![](https://blog.codingblocks.com/content/images/2019/06/tenor-1.gif)

I am currently a Computer Science Undergrad at [Guru Gobind Singh Indraprastha University](https://ipu.ac.in), New Delhi. I have previously worked as Angular 5 Frontend Engineering Intern at [FableHQ](https://in.linkedin.com/company/fable-hq). Also, I have been appointed as a Full stack Ruby On Rails and NodeJS developer at [Kakcho](https://kakcho.com/). I have additionally worked as a freelance problem setter at [Talview](https://www.talview.com/). Most recently I have worked as an Intern at [Coding Blocks](https://blog.codingblocks.com/2019/sanket_gsoc/codingblocks.com) where my project was in software development and furthermore [Mentored 6000+ students (Online+Offline) in the domain of Data structures and algorithms in C++](https://online.codingblocks.com/courses/c-plus-plus-online-course-for-beginners). Also I got an opportunity to work as an intern at ISRO 🚀.

I got very inspired by reading about journeys of many GSoC students and also having discussion with Ankush. He described me all the stages of his own GSoC experience. Believe me, having someone with you to guide you through this process is the best thing you can ask for. At that time, I decided no matter what happens but I will definitely give GSoC a try.

# March 2019

The GSoC timeline was on!!! All I had  was my motivation and inspiration for cracking this auspicious opportunity. As you might have realised by now that I was already a bit late in getting involved in the GSoC. Earlier the only open source stuff I had done was getting some cool Hacktoberfest T-Shirts and making commits on my GitHub profile for my own personal and practice projects. But GSoC was a different level Game. I realised this when I read the past experience of former GSoC'ers. The one thing which they all had in common was, that they started early, which of-course I didn't. But I never lost my zeal and enthusiasm. Many people think that if they have not contributed on the project of  the organisation then they will be rejected. Let me make myself clear by citing myself as an example.

![](https://blog.codingblocks.com/content/images/2019/06/tenor--1-.gif)

Many people who contribute in the organisation might have an upper-hand at the target project they are aiming for. It might act as an advantage for them, but rest of things are equal for them. All those who are not contributing since long time. Because having a prior image of the organisation and the corresponding project will definitely help you in the process of GSoC. You would have a prior knowledge of the flow and structure of the project and how things work out in that organisation. But if you are a bit late then believe me, It's not even 1% that you have missed. The real story is still to start.

# Why Berkman Klein Center at Harvard University was my choice???

![](https://blog.codingblocks.com/content/images/2019/06/1_dOV0mkw9lpB5DD3PTScIDw@2x.png)

Why I selected Berkman Klein Center as my org is a story in itself. I started exploring the project and in meanwhile I my attention was caught by the Question tool application which is a MeteorJS based web application.

![](https://blog.codingblocks.com/content/images/2019/06/1_TWMx_EwfdYI3taqaXsuLVQ.png)

I had a very little experience in MeteorJS before the start of the GSoC application process. I slowly and steadily started exploring the project and found Question Tool relatable to what I used to do earlier. Question tool is used in the classes of Harvard for discussion and interaction purpose and I realised the fact that I can also use this in my teaching profession because I love mentoring and teaching students and that's what I used to do at Coding Blocks. So I locked my choice that I am not going to explore anything else and just focus on one project with my heart and soul by giving my 100% effort in understanding this project and completing my GSoC proposal for this project only.

# Application Preparation and Submission

![](https://blog.codingblocks.com/content/images/2019/06/Annotation-2019-06-24-015405.png)

*   I started my proposal application by first communicating with the esteemed mentors of the Question tool project. I mailed them my concerns and doubts regarding the feature expectations within the tenure of GSoC. And guess what, they replied like blazingly fast. I was seriousy amazed that mentors from such big and reputed organisation are replying so fast to my mails. I made the most out of this oppurtunity and got all my doubts cleared.
*   Then I started drafting my proposal for GSoC application. I collected some previously selected proposals of former GSoC'ers and worked on them to find best key points from each and every proposals. I also made sure that, what i am thinking regarding the project should be made very clear in my proposal.
*   I added code snippets wherever required,furthermore added proper description of the features and also added Images wherever required. This not only showed my clarity over project implementation but also left a positive impression on the mentors regarding my knowledge in this domain.

```javascript
Accounts.resetPassword(Session.get('resetPassword'), password, function(err) {
      if (err) {
        console.log('Something went wrong.');
      } else {
        console.log('Password has been changed.');
        Session.set('resetPassword', null);
      }
});

```

*   Then I made my proposal verified by some of my mentors at Coding Blocks who were former GSoC'ers. They suggested me the required changes which was really helpful in the whole process.
*   Then I didn't directly just submitted the proposal, but first made the proposal in a comment only format and just drafted it so that mentors from Berkman Klein Center can review it and give some feedbacks and suggestions on it.
*   And guess what? I got their attention and they provided a very very detailed feedback on the proposal. They just pointed out each and every important aspect of the proposal and gave their valuable feedback on those.
*   I worked on their feedback and updated my proposal. And on the last week I just made the submission.
*   After this, there was some time left between the application's last date and result period. At that time I had a video call with the mentors of Berkman Klein Center and we had a rigorous and detailed discssion on my views on the application and what I wrote in the application.

# What after that????

![](https://blog.codingblocks.com/content/images/2019/06/Screenshot-2019-06-21-at-10.42.41-PM-2.png)

Finally, After waiting for so long, on 6th May Google rolled out the names of the selected students. I checked my dashboard on GSoC’s website, ever so tremblingly and oh yeah! I made it! I was selected for GSoC under Berkman Klein Center at Harvard University for Question Tool  project.

![](https://blog.codingblocks.com/content/images/2019/06/giphy--1--1.gif)

# How's the journey been so far?

It's been about a month since the GSoC journey has started. My mentors [Ellen Popko](https://cyber.harvard.edu/people/epopko) and [Peter](https://peterh.info) are more helpful than I could have imagined. Anywhere, anytime I am in a dilemma or require their valuable feedback, they are always there for it. They are highly supportive and the project is going great so far. It's a team effort and I believe I got some really great mentors. It's my utmost pleasure to participate in GSoC'19 under the guidance and mentorship of mentors like Ellen and Peter. It's been a really great summer so far. I am blessed by getting such amazing and helpful mentors at Berkman Klein Center

# Tips for those who are aspiring for future GSoC

### Draft your proposal the right way!

*   You should be able to convince your mentors that you’re the right person for the task, and that will reflect in your proposal.
*   It took me about 3 day just to think about the wire frame of my proposal and about another 6–7 days for writing and improvising it.
*   I took inspiration from previously selected GSoC projects, and added all the required amount of Code snippets, wireframes and detailed explanation.

### Contributions!

*   You should be well aware of version control systems and should have a strong developer profile.
*   If you are doing open source contirbutions in the organisation then you definetely are on the right track.  
    ![Contribute](https://thumbs.gfycat.com/WellmadeSimilarGardensnake-size_restricted.gif)
*   If you haven't spent a lot of time doing open source projects then start it as soon as possible.
*   Also If your organisation is somehow not shortlisted for GSoC, don't get disheartened. Open source development is a skill that is never going to let you down.
*   Start finding another organisation quickly and start exploring it's project.

### Communication with the mentors!

*   Try getting in touch with the mentors as soon as possible.
*   Join the slack or IRC channels or the mailing list as soon as possible and make sure that the community feels your presence.
*   Get all your doubts cleared by the mentors afterall they are there for you.

# Last but not the least

![](https://blog.codingblocks.com/content/images/2019/06/ReadMe-Links-1-7-1095x575.png)

*   For students who are beginning to enter the coding and software world, it's going to be tough. You have to work and learn a lot to catch up with the other applicants and get an idea of what's happening on Github. I firmly believe Consistency is the key. Putting effort smartly into right direction that yields desired results is also very important.
*   On the archives page of Google Summer of Code, read about the organizations and the technology they used for the project
*   In the complete process, the organization needs to get selected first and the accepted organization list is declared in February but the risk is to start working on the bugs and the problem statement from the month of January. So there may be the case that you are interested in a project but that organization is not selected. The solution is to work on multiple projects
*   Talk to the project owner/maintainer to know more about the project and head to the “Issues” section to see what all improvements/fixes are needed and solve the ones you like.

# In the end

I would like to acknowledge and extend my heartfelt gratitude to my mentors [Ellen Popko](https://cyber.harvard.edu/people/epopko) and [Peter](https://peterh.info) and many other Berkman Klein Center developers and contributors for helping me out whenever I got stuck somewhere and getting me started in my open source journey. A big thanks to [Mr. Arnav Gupta](https://www.linkedin.com/in/arnavgupta/), [Mr. Tushar Tuteja](https://www.linkedin.com/in/tushar-tuteja-00350613/), Mr. Prateek Narang & Mr. [Ankush Malik](https://www.linkedin.com/in/ankushmalik/) for giving their  precious time, guiding and motivating me throughout this bliss experience.

I believe that I will finish this awesome program successfully at the end with a lot's of experience gained and huge amount of fun. Let’s enjoy it!

**[Berkman Klein Center](https://cyber.harvard.edu/)** Rocks 😎  !!!!

****Contact**** : [LinkedIn](https://www.linkedin.com/in/singhsanket143/), [Facebook](https://www.facebook.com/curio.1198), [Instagram](https://www.instagram.com/sanket.singh__/), [Github](https://github.com/singhsanket143)
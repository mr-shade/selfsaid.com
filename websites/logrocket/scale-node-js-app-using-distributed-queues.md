---
title: "Scaling your Node.js app using distributed queues - LogRocket Blog"
date: "2021-06-11T02:00:20+00:00"
slug: "scale-node-js-app-using-distributed-queues"
image: "https://blog.logrocket.com/wp-content/uploads/2019/02/scale-nodejs-distributed-queues.png"
description: "Learn how to scale your app using Node.js distributed worker queues, which allow you to solve errors and prioritize and delay jobs easily."
tags: []
original_url: "https://blog.logrocket.com/scale-node-js-app-using-distributed-queues/"
---

[

###### Advisory boards aren’t only for executives. Join the LogRocket Content Advisory Board today →





](https://lp.logrocket.com/blg/content-advisory-board-signup).metrics-banner {padding: 8px 0px; background: #764abc ;color: #ffffff;} .metrics-banner h6 {color: #ffffff;text-align:center; margin: 0px !important;} #metrics-embed {width: 65.5%; margin: 0px auto; display: block;} .mediumnavigation {padding: 0px 0px 8px 0px;} @media all and (max-width: 800px){ .mediumnavigation{box-shadow: none !important;} #metrics-embed {width: 90%;} .mainheading {padding: 4rem 0 1rem 0;} }

[![LogRocket blog logo](https://blog.logrocket.com/wp-content/themes/logrocket/assets/logrocket-logo.png)](https://logrocket.com)

*   [Blog](https://blog.logrocket.com/)
    *   [Dev](https://blog.logrocket.com/dev)
    *   [Product Management](https://blog.logrocket.com/product-management)
    *   [UX Design](https://blog.logrocket.com/ux-design)
    *   [Podcast](https://podrocket.logrocket.com)
    *   [Product Leadership](https://stories.logrocket.com/)
*   [Features](https://logrocket.com/features)
*   [Solutions](#)
    *   [Solve User-Reported Issues](https://logrocket.com/solutions/solve-user-issues)
    *   [Surface User Struggle](https://logrocket.com/solutions/surface-user-struggle)
    *   [Optimize Conversion and Adoption](https://logrocket.com/solutions/optimize-conversion-adoption)

*   [Start Monitoring for Free](https://app.logrocket.com/)
*   [Sign In](https://app.logrocket.com/)

2021-06-10

2735

#node

Alberto Gimeno

227

Jun 10, 2021 ⋅ 9 min read

# Scaling your Node.js app using distributed queues

[![](https://blog.logrocket.com/wp-content/uploads/2019/04/albertogimeno.jpeg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/albertogimeno/)

[Alberto Gimeno](https://blog.logrocket.com/author/albertogimeno/) Ecosystem Engineer at GitHub. Sometimes I write about JavaScript, Node.js, and frontend development.

![LogRocket Galileo logo](https://blog.logrocket.com/wp-content/uploads/2023/12/GalileoAIPreview.png)

Introducing Galileo AI

LogRocket’s Galileo AI watches every session, surfacing impactful user struggle and key behavior patterns.

[LEARN MORE](https://logrocket.com/products/galileo-ai)

const threshold = 2000; const isMobile = window.matchMedia("(max-width: 1280px)").matches; window.addEventListener('scroll', (event) => { if (isMobile) { return; } const gutter = document.querySelector(".plug-gutter"); // show it if it is hidden and we have scrolled past the threshold if (window.scrollY > threshold && !gutter.classList.contains("show")) { gutter.classList.add("show"); window.toggleToc(true); } // hide it if we scroll back above the threshold if (window.scrollY < threshold && gutter.classList.contains("show")) { gutter.classList.remove("show"); window.toggleToc(false); } });

.plug-dev-top--card { border: 2px solid rgba(118, 74, 188, 0.2); border-radius: 8px; background-color: #491d90; justify-content: space-between; align-items: center; padding: 16px; font-family: 'Proxima Nova', sans-serif; display:flex; gap: 1rem; cursor: pointer; } .plug-dev-top--logo { width: 48px; height: 48px; border-radius: 50%; } .plug-dev-top--blurb { h2 { font-weight: 800; font-size: 22px; line-height: 22px; color: #fff; width: 70%; margin: 0 0 5px 0; } h3 { font-weight: 900; font-size: 13px; line-height: 13px; letter-spacing: 0.1em; color: #fff; opacity: 0.5; white-space: nowrap; margin: 0; } } .plug-dev-top--cta { background-color: #fff; color: #764abc; border: none; border-radius: 4px; padding: 10px; font-size: 16px; font-weight: 800; font-family: 'Proxima Nova', sans-serif; text-decoration: none; width: 25%; text-align: center; &:hover { text-decoration: none; color: #a58ec8; } } .plug-dev-top--asset { position: relative; height: 400px; overflow: hidden; transition: all 0.3s ease; margin-top: 30px; &.lr-hidden { height: 0; margin: 0; } }

![](https://blog.logrocket.com/wp-content/uploads/2023/04/logrocket-logo-1.png)

## See how LogRocket's Galileo AI surfaces the most severe issues for you

### No signup required

Check it out

const wistiaIframe = document.querySelector("#galileo-wistia-iframe"); wistiaIframe.addEventListener('load', () => { const player = wistiaIframe.wistiaApi; window.document.querySelector(".plug-dev-top").addEventListener('click', () => { const videoContainer = window.document.querySelector(".plug-dev-top--asset"); videoContainer.classList.toggle('lr-hidden'); if (videoContainer.classList.contains("lr-hidden")) { player.pause(); } else { player.play(); } }); });

_**Editor’s Note:** This article was updated in June 2021 to include information on Bull (as opposed to kue), a Node.js library that implements a queuing system on top of Redis._

![scale nodejs app distributed queues feature image](https://blog.logrocket.com/wp-content/uploads/2019/02/scale-nodejs-distributed-queues.png)

In a [previous article](https://blog.logrocket.com/node-js-multithreading-what-are-worker-threads-and-why-do-they-matter-48ab102f8b10/), I talked about how to run background tasks/jobs in Node.js (with the _worker\_threads_ module in particular). But what happens if you are reaching the limits of the machine your Node.js instance is running in? Then you need to either move to a bigger machine (known as scaling vertically)or scale horizontally. Scaling vertically always has a limit, so at some point, you’ll need to scale horizontally.

#replay-signup { margin-block: 1rem; display: flex; gap: 0.5rem; flex-direction: column; align-items: center; border: 1px solid #E6DFF6; border-radius: 16px; padding: 0.5rem 2rem; background-color: #F4F0FB; font-family: 'Proxima Nova', sans-serif; font-size: 0.95rem; h3 { margin: 0; font-weight: bold; } p { max-inline-size: 65ch; } .replay-signup-form-wrapper { width: 60%; } .nf-before-form-content { display: none; } input.nf-element\[type="submit"\] { background-color: #764abc; color: #fff; border-radius: 8px; padding-block: 10px; height: unset; width: 100%; display: block; } .nf-response-msg { font-size: 1.2rem; text-align: center; } }

### 🚀 Sign up for The Replay newsletter

[**The Replay**](https://blog.logrocket.com/the-replay-archive/) is a weekly newsletter for dev and engineering leaders.

Delivered once a week, it's your curated guide to the most important conversations around frontend dev, emerging AI tools, and the state of modern software.

Notice: JavaScript is required for this content.

var formDisplay=1;var nfForms=nfForms||\[\];var form=\[\];form.id='48';form.settings={"objectType":"Form Setting","editActive":true,"title":"Replay Newsletter Signup","show\_title":0,"allow\_public\_link":0,"embed\_form":"","clear\_complete":1,"hide\_complete":1,"default\_label\_pos":"above","wrapper\_class":"","element\_class":"","form\_title\_heading\_level":"3","key":"","add\_submit":0,"changeEmailErrorMsg":"Please enter a valid email address!","changeDateErrorMsg":"Please enter a valid date!","confirmFieldErrorMsg":"These fields must match!","fieldNumberNumMinError":"Number Min Error","fieldNumberNumMaxError":"Number Max Error","fieldNumberIncrementBy":"Please increment by ","formErrorsCorrectErrors":"Please correct errors before submitting this form.","validateRequiredField":"This is a required field.","honeypotHoneypotError":"Honeypot Error","fieldsMarkedRequired":"Fields marked with an <span class=\\"ninja-forms-req-symbol\\">\*<\\/span> are required","currency":"","unique\_field\_error":"A form with this value has already been submitted.","logged\_in":false,"not\_logged\_in\_msg":"","sub\_limit\_msg":"The form has reached its submission limit.","calculations":\[\],"conditions":\[\],"mp\_breadcrumb":1,"mp\_progress\_bar":1,"mp\_display\_titles":0,"formContentData":\[{"formContentData":\["email","submit\_1760469924554"\],"order":0,"type":"part","clean":true,"title":"Part Title","key":"hzyqqobd"}\],"objectDomain":"display","drawerDisabled":false,"ninjaForms":"Ninja Forms","fieldTextareaRTEInsertLink":"Insert Link","fieldTextareaRTEInsertMedia":"Insert Media","fieldTextareaRTESelectAFile":"Select a file","formHoneypot":"If you are a human seeing this field, please leave it empty.","fileUploadOldCodeFileUploadInProgress":"File Upload in Progress.","fileUploadOldCodeFileUpload":"FILE UPLOAD","currencySymbol":"&#36;","thousands\_sep":",","decimal\_point":".","siteLocale":"en\_US","dateFormat":"m\\/d\\/Y","startOfWeek":"1","of":"of","previousMonth":"Previous Month","nextMonth":"Next Month","months":\["January","February","March","April","May","June","July","August","September","October","November","December"\],"monthsShort":\["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"\],"weekdays":\["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"\],"weekdaysShort":\["Sun","Mon","Tue","Wed","Thu","Fri","Sat"\],"weekdaysMin":\["Su","Mo","Tu","We","Th","Fr","Sa"\],"recaptchaConsentMissing":"reCaptcha validation couldn&#039;t load.","recaptchaMissingCookie":"reCaptcha v3 validation couldn&#039;t load the cookie needed to submit the form.","recaptchaConsentEvent":"Accept reCaptcha cookies before sending the form.","currency\_symbol":"","beforeForm":"","beforeFields":"","afterFields":"","afterForm":""};form.fields=\[{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"email","label":"Email","key":"email","label\_pos":"hidden","required":1,"default":"","placeholder":"Email","container\_class":"","element\_class":"","admin\_label":"","help\_text":"","custom\_name\_attribute":"email","personally\_identifiable":1,"value":"","manual\_key":true,"drawerDisabled":false,"id":401,"beforeField":"","afterField":"","parentType":"email","element\_templates":\["email","input"\],"old\_classname":"","wrap\_template":"wrap"},{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"submit","label":"Submit","processing\_label":"Submitting...","container\_class":"","element\_class":"","key":"submit\_1760469924554","admin\_label":"","drawerDisabled":false,"id":402,"beforeField":"","afterField":"","value":"","label\_pos":"above","parentType":"textbox","element\_templates":\["submit","button","input"\],"old\_classname":"","wrap\_template":"wrap-no-label"}\];nfForms.push(form); <div class="nf-mp-header"></div> <div class="nf-mp-body"></div> <div class="nf-mp-footer"></div> {{{ data.renderProgressBar() }}} {{{ data.renderBreadcrumbs() }}} {{{ data.renderPartTitle() }}} <h3> {{{ data.title }}} </h3> {{{ data.renderNextPrevious() }}} <ul class="nf-next-previous"> <# if ( data.showPrevious ) { #> <li class="nf-previous-item"> <input type="button" class="nf-previous" value="{{{ data.prevLabel }}}" /> </li> <# } #> <# if ( data.showNext ) { #> <li class="nf-next-item"> <input type="button" class="nf-next" value="{{{ data.nextLabel }}}" /> </li> <# } #> </ul> <ul class="nf-breadcrumbs"> <# \_.each( data.parts, function( part, index ) { #> <li class="{{{ ( data.currentIndex == index ) ? 'active' : '' }}} {{{ ( part.errors ) ? 'errors' : '' }}}"> <a href="#" class="nf-breadcrumb" data-index="{{{ index }}}">{{{ ( part.errors ) ? '' : '' }}} {{{ part.title }}}</a> </li> <# } ); #> </ul> <div class="nf-progress-container"> <div class="nf-progress" style="width: {{{ data.percent }}}%;"></div> </div>

function registerNinjaFormsCallback() { if (!(window.nfRadio && window.lr\_analytics)) { return; } window.nfRadio.channel("forms").on("submit:response", function(submission) { console.log(submission); if (submission.data.form\_id !== "48") { return; } window.lr\_analytics.track("blog-replay-newsletter-signup", { post: window.location.pathname, email: submission.data.fields\_by\_key?.email?.value, }); }); } registerNinjaFormsCallback();

## Scaling using Node.js distributed worker queues

So, how do you accomplish this? If your app is, for example, a web server that needs to send responses almost immediately, then you need something like a load balancer. In contrast, if your app needs to do work but is not required to be done immediately, then you can spread the work to “worker” nodes and distribute it using queues.

Some use cases include generating daily reports, recalculating things for users daily (e.g., recommendations), processing things a user has uploaded (e.g., a large CSV file, importing data when a user migrates to a service, importing data when the user signs in).

A distributed queue is like the storage of job descriptions that contain enough information to do the job, or enough information to figure out all of the things required to do the job. For example:

const jobDataSendWelcomeEmail = {
  userId: 1234,
  userName: 'John Smith',
  email: '[\[email protected\]](/cdn-cgi/l/email-protection)'
}

Usually, the main app (or any part of a more complex system), puts jobs into the queue. Other apps running in different machines are connected to the queue and receive those jobs. These consumers can process the job with the information received, or at least they can figure out all of the information they need and obtain it. This simple architecture has important benefits:

*   Your app is divided now into two logic pieces that can be distributed in different machines
*   You can scale from one to many workers without touching any code and without disrupting the execution of the main app. The queue takes care of sending the jobs to the workers through the network and in most implementations, takes care of sending the same job once to a worker

_**Note**: Each vendor has its own jargon for queues (topics, channels), jobs (tasks, messages), and workers (consumers)._

### Why you should use Node.js distributed worker queues

You might be thinking that you can implement this architecture yourself with your existing database and without adding complexity to the system. You can create a “jobs” table with two columns, an _“id”_ primary key column, and a _“data”_ column with all of the job information. The main app just writes to the table and every X seconds the workers read from it to peek at the next job that is to be executed. To prevent other workers from reading the job, you make the operation in a transaction that also deletes the job from the table.

Voilá! Problem solved, right? Well, first of all, you are querying and waiting every X seconds. That’s not ideal, but could be okay in basic use cases. More importantly, the problem is, what happens if the worker crashes while processing the job? The job has already been deleted when it was pulled from the table and we cannot recover it… this (along with other things) is nicely solved by the libraries and services implemented for the matter and you don’t have to reinvent the wheel.

### Benefits of using a queue service

One great thing about queue systems is how they handle error scenarios. When you receive a job, this is not deleted from the queue, but it is “locked” or invisible to the rest of the workers until one of these happens, either the worker deletes it after the work is done, or there is a timeout that you can configure. So, if a worker crashes, the timeout happens and the job goes back to the queue to be consumed by other workers. When everything is fine, the worker just deletes the job once the data is processed.

That is great if the problem was in the worker (the machine was shut down, ran out of resources, etc.), but what if the problem is in the code that processes the jobs, and every time the queue sends it to a worker, the worker crashes?

Then we are in an infinite loop of failures, right? Nope, distributed queues usually have a configuration option to set a maximum number of retries. If the maximum number of retries is reached then depending on the queue you can configure different things. A typical adjustment is moving those jobs to a “failure queue” for manual inspection or to consume it for workers that just notify errors.

Not only are distributed queue implementations great for handling these errors but also, they use different mechanisms to send jobs to workers as soon as possible. Some implementations use sockets, others use HTTP long polling, and others might use other mechanisms. This is an implementation detail, but I want to highlight that it is not trivial to implement, so you better use existing and battle-tested implementations rather than implementing your own.

### What to put in the job data

Many times I find myself wondering what to put in the job data. The answer depends on your use case, but it always boils down to two principles:

**Don’t put too much.** The amount of data you can put in the job data is limited. Check the queuing system you are using for more information. Usually, it’s big enough that we won’t reach the limit, but sometimes we are tempted to put too much. For example, if you need to process a big CSV file, you cannot put it in the queue. You’ll need to upload it first to a storage service and then create a job with a URL to the file and additional information you need such as the user that uploaded it, etc.

**Don’t put too little.** If you have immutable data (e.g., a `createdAt` date) or data that rarely changes (e.g., usernames) you can put in your job data. The job should be processed in a matter of seconds or minutes so usually, it is ok to put some data that might change, like a username, but it is not critical if it’s not updated to the second. You can save queries to the database, or remove any query completely. However, if there’s information that affects how the data is processed, you should query it inside the job processor.

* * *

[

![](https://blog.logrocket.com/wp-content/uploads/2022/11/Screen-Shot-2022-09-22-at-12.50.47-PM.png)

## Over 200k developers use LogRocket to create better digital experiences

![](https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.png)Learn more →





](https://lp.logrocket.com/blg/learn-more)

* * *

@media all and (max-width: 800px){ .tweet-embed-container {flex-direction: column !important;} .single-tweet, .embed-tweet-right {width: 100% !important;} } .embed-link {text-decoration: none;} .embed-link:hover {text-decoration: none;} .tweet-embed-container {border-radius: 20px; background: radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), #764ABC; background-blend-mode: overlay, overlay, normal; box-shadow: 0 4px 0 #d5d5d5; width: auto; padding: 20px 15px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; margin: 0 auto; gap: 3%; } .single-tweet {width: 50%;} .single-tweet img {max-width: 100%;height: auto; border-radius:7px;} .embed-tweet-right {width: 46%;} .embed-tweet-right h2 {font-family: 'Avenir'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 28px; color: #FFFFFF;} .embed-btn { display: flex; flex-direction: row; justify-content: left; width: 170px; gap: 5px; align-items: center; padding: 0px 10px; font-family: 'Avenir'; font-style: normal; font-weight: 900; font-size: 16px; line-height: 16px; color: #764ABC; height: 48px; /\* White \*/ background: #FFFFFF; mix-blend-mode: normal; box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.11); border-radius: 80px; border: none; }

### Make your queue jobs small and fast to process

If you need to process big sets of data, divide them into smaller pieces. If you have to process a big CSV file, first, divide it into chunks of a certain number of rows and create a job per chunk. There are a few benefits of doing it this way:

*   The data will be processed faster because it can be processed in parallel
*   You make better use of your resources. It’s better to have _N_ workers doing smaller jobs than having one worker doing heavy processing while the rest are idle or underused
*   It’s also faster and more efficient to retry a small job that has failed as opposed to a big job that has failed

If you need an aggregated result from all of those small chunks you can put all of the intermediate results in a database, and when they are all done you can trigger a new job in another queue that aggregates the result. This is a map/reduce in essence. “Map” is the step that divides a large job into smaller jobs and then _“reduce”_ is the step that aggregates the result of those smaller jobs.

If you cannot divide your data beforehand you should still do the processing in small jobs. For example, if you need to use an external API that uses cursors for paginating results, calculating all of the cursors beforehand is impractical. You can process one page of results per job and once the job is processed you get the cursor to the next page and you create a new job with that cursor, so the next job will process the next page and so on.

### Delayed jobs in worker queues

Another interesting feature of distributed queues is that you can usually delay jobs. There’s normally a limit on this so you cannot delay a job for two years, but there are some use cases where this is useful. Some examples include:

*   You want to send a welcome email to a user that signed up but not immediately just at a later time. Just create a delayed job that sends an email
*   When processing a job you hit a rate limit from an API. You will probably be told when the rate limit ends so you can put the job back in the queue, but delayed that specific time
*   In general, if you want to trigger something at a specific time in the future such as schedule a backup, a notification, a reminder, etc…

### Setting job priority

Most queue implementations do not guarantee the order of execution of the jobs, so don’t rely on that. However, they usually implement some way of prioritizing some jobs over others. This depends highly on the implementation, so take a look at the docs of the system you are using to see how you can achieve it if you need to.

### Use cases of distributed worker queueing systems

Let’s look at some examples. Even though all queuing systems have similar features there’s not a common API for them, so we are going to see a few different examples.

#### The Bull library

[Bull](https://github.com/OptimalBits/bull) is a Node.js library that implements a queuing system on top of Redis. Redis is an in-memory database that can be persisted and many times is already being used for things like session storage in your application. For this reason, choosing this library can be a no-brainer. Besides, even if you are not using Redis yet, there are a few cloud providers that allow you to spin up a managed Redis server easily (e.g. Heroku or AWS). Finally, another benefit of using Bull is that your stack is 100% open source so you don’t fall into any vendor lock-in.

If you need to handle a lot of work and you still want an open-source solution, then I would choose [RabbitMQ](https://www.rabbitmq.com/). I haven’t chosen it for the examples in this article because Redis is usually easier to set up and more common. However RabbitMQ has been designed specifically for these use cases, so by design, it’s technically superior.

There are two main components of job scheduling with Bull: a producer and consumer. A producer creates jobs and adds them to the Redis Queue, while a consumer picks jobs from the queue and processes them.

Let’s see how to create and consume jobs using Bull.

**Create the queue and put a job on it:**

const bull = require('bull')
const queue = new bull(“queue\_name”)
const job = await queue.add({
  foo: 'bar'
});

**Consume jobs from the queue:**

const bull = require('bull');
const queue = new bull('my-queue')
queue.process(async (job, done) => { 
/\*  /\* 
    Sometimes, you might need to report the jobs progress, you can easily use the     job.progress() function to track the progress 
     \*/
  let progress = 0;

  for(i = 0; i < 80; i++){
    await doSomething(job.data);
    progress += 10;
    job.progress(progress);
  }
  // call done when finished
  done();
});

#### Microsoft Azure using its Service Bus

Microsoft Azure offers two queue services. There’s a [great comparison](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-azure-and-service-bus-queues-compared-contrasted#next-steps) here. I’ve chosen to use Service Bus because it guarantees that a job is delivered at most to one worker.

Let’s see how to create and consume jobs using Service Bus.

#### Create the queue and put a job on it

With Microsoft Azure, we can create the queue programmatically with the `createTopicIfNotExists`method. Once it is created, we can start sending messages:

const azure = require('azure')
const serviceBusService = azure.createServiceBusService()
const jobData = { hello: 'world' }
serviceBusService.createTopicIfNotExists('queue\_name', err => {
  if (err) console.log(err)
  serviceBusService.sendTopicMessage('queue\_name', jobData, err => {
    if (err) console.log(err)
  })
})

#### Consume jobs from the worker queue

Some implementations, like this one, are required to create a subscription. Check out the [Azure docs](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-nodejs-how-to-use-topics-subscriptions) for more information on this topic:

#podrocket-plug { border-radius: 12px; width: 75%; height: 352px; margin: 1rem auto; display: block; }

const azure = require('azure')
const serviceBusService = azure.createServiceBusService()
serviceBusService.createSubscription('queue\_name', 'subscription\_name', err => {
  if (err) return console.log(err)
  // If the \`isPeekLock\` option is not set to true, the message will be deleted when peeked
  serviceBusService.receiveSubscriptionMessage('queue\_name', 'subscription\_name', { isPeekLock: true }, (err, message) => {
    if (err) return console.log(err)
    // Do something with \`message\` and then delete it
    serviceBusService.deleteMessage(lockedMessage, err => {
      if (err) return console.log(err)
    })
  })
})

#### Amazon, using its SQS service

The Amazon distributed queue service is called Simple Queue Service (SQS). It can be used directly but it is also possible to configure it with other AWS services for doing interesting workflows. For example, you can configure an S3 bucket to automatically send jobs to an SQS queue when a new file (object) is stored. This, for example, can be useful to process files easily (videos, images, CSVs).

* * *

### More great articles from LogRocket:

*   Don't miss a moment with [The Replay](https://lp.logrocket.com/subscribe-thereplay), a curated newsletter from LogRocket
*   [Learn](https://blog.logrocket.com/rethinking-error-tracking-product-analytics/) how LogRocket's Galileo AI watches sessions for you and proactively surfaces the highest-impact things you should work on
*   Use React's useEffect [to optimize your application's performance](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/)
*   Switch between [multiple versions of Node](https://blog.logrocket.com/switching-between-node-versions-during-development/)
*   [Discover](https://blog.logrocket.com/using-react-children-prop-with-typescript/) how to use the React children prop with TypeScript
*   [Explore](https://blog.logrocket.com/creating-custom-mouse-cursor-css/) creating a custom mouse cursor with CSS
*   Advisory boards aren’t just for executives. [Join LogRocket’s Content Advisory Board.](https://lp.logrocket.com/blg/content-advisory-board-signup) You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag

* * *

Let’s see how we can programmatically add and consume jobs on a queue.

**Create the queue and put a job on it:**

const AWS = require('aws-sdk')
AWS.config.update({region: 'REGION'})
const sqs = new AWS.SQS({ apiVersion: '2012-11-05' })
const queueParams = {
  QueueName: 'queue\_name',
  Attributes: {
    'DelaySeconds': '60',
    'MessageRetentionPeriod': '86400'
  }
}
sqs.createQueue(queueParams, (err, data) => {
  if (err) return console.log(err)
  console.log('queue url', data.QueueUrl)
  const jobParams = {
    MessageBody: JSON.stringify({ hello: 'world' }),
    QueueUrl: data.QueueUrl
  }
  sqs.sendMessage(jobParams, (err, data) => {
    if (err) return console.log(err)
  })
})

**Consume jobs from the queue:**

const AWS = require('aws-sdk')
AWS.config.update({region: 'REGION'})
const sqs = new AWS.SQS({apiVersion: '2012-11-05'})
const queueURL = 'SQS\_QUEUE\_URL' // Obtained when the queue was created
const params = {
 AttributeNames: \[
  'SentTimestamp'
 \],
 MaxNumberOfMessages: 1, // receive only one message at a time
 MessageAttributeNames: \[
    "All"
 \],
 QueueUrl: queueURL,
 VisibilityTimeout: 20,
 WaitTimeSeconds: 0
}
sqs.receiveMessage(params, (err, data) => {
  if (err) return console.log(err)
  if (data.Messages) {
    // Do something when the messages and then delete them
    const message = data.Messages\[0\]
    
    const deleteParams = {
      QueueUrl: queueURL,
      ReceiptHandle: message.ReceiptHandle
    }
    sqs.deleteMessage(deleteParams, function(err, data) {
      if (err) return console.log(err)
    })
  }
})

Check the [Node.js docs on SQS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/sqs-examples-using-queues.html) for more information.

#### Google Cloud, using its pub/sub service

Google Cloud, like Azure, also requires creating subscriptions ([see the docs](https://cloud.google.com/pubsub/docs/quickstart-client-libraries#pubsub-client-libraries-nodejs) for more information). In fact, you need to create the subscription first, before sending messages to the topic/queue or they will not be available.

The documentation suggests creating both the topic and the subscription from the command line:

`gcloud pubsub topics create queue_name`

and

`gcloud pubsub subscriptions create subscription_name --topic queue_name`

Nevertheless, you can also [create them](https://cloud.google.com/pubsub/docs/admin) programmatically, but now let’s see how to insert and consume jobs assuming that we have already created the queue (topic) and the subscription.

**Create the queue and put a job on it:**

const { PubSub } = require('@google-cloud/pubsub')
const pubsub = new PubSub()
const jobData = Buffer.from(JSON.stringify({ hello: 'world' }))
const messageId = await pubsub.topic('queue\_name').publish(jobData)

#### Consume jobs from the queue

Google Cloud Pub/Sub guarantees that a message/job is delivered at least once for every subscription, but the message could be delivered more than once (as always, [check the documentation](https://cloud.google.com/pubsub/docs/subscriber#at-least-once-delivery) for more information):

const { PubSub } = require('@google-cloud/pubsub')
const pubsub = new PubSub()
const subscription = pubsub.subscription('subscription\_name')
subscription.on('message', message => {
  const { data } = message
  // Do something and then
  message.ack() // This deletes the message from the queue
})

### Conclusion

Distributed queues are a great way of scaling your application for a few reasons:

## 200s only ![](https://blog.logrocket.com/wp-content/uploads/2019/10/green-check.png) Monitor failed and slow network requests in production

Deploying a Node-based web app or website is the easy part. Making sure your Node instance continues to serve resources to your app is where things get tougher. If you’re interested in ensuring requests to the backend or third-party services are successful, [try LogRocket](https://lp.logrocket.com/blg/node-signup).

[![LogRocket Network Request Monitoring](https://blog.logrocket.com/wp-content/uploads/2019/12/network-request-filter-2-1.png)](https://lp.logrocket.com/blg/node-signup)

[LogRocket](https://lp.logrocket.com/blg/node-signup) lets you replay user sessions, eliminating guesswork around why bugs happen by showing exactly what users experienced. It captures console logs, errors, network requests, and pixel-perfect DOM recordings — compatible with all frameworks.

LogRocket's Galileo AI watches sessions for you, instantly identifying and explaining user struggles with automated monitoring of your entire product experience.

LogRocket instruments your app to record baseline performance timings such as page load time, time to first byte, slow network requests, and also logs Redux, NgRx, and Vuex actions/state. [Start monitoring for free](https://lp.logrocket.com/blg/node-signup).

*   They allow you to divide your application into logical pieces that can be scaled individually and gracefully
*   They have solid mechanisms to handle errors gracefully
*   They provide other interesting features such as delayed jobs and prioritization
*   There are many services with similar functionalities and also open source libraries that you can use without worrying about vendor lock-in

.share-icon.share-twitter span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-twitter.svg"); } .share-icon.share-reddit span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-reddit.svg"); } .share-icon.share-linkedin span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-linkedin.svg"); } .share-icon.share-facebook span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-facebook.svg"); }

*   [#node](https://blog.logrocket.com/tag/node/)

![](https://blog.logrocket.com/wp-content/uploads/2022/06/footer-cta-dots-left.png) ![](https://blog.logrocket.com/wp-content/uploads/2022/06/footer-cta-dots-right.png)

![](https://blog.logrocket.com/wp-content/uploads/2022/09/logrocket-logo-frontend-analytics.png)

## Stop guessing about your digital experience with LogRocket

[

Get started for free

](https://lp.logrocket.com/blg/signup)

@media all and (max-width: 750px) { .footer-cta-logo-container {display:none !important;} .footer-cta-container h2 {width: 90% !important; padding-top: 50px !important;} .footer-cta-button {width: 40% !important;} } .footer-cta-container {border-radius: 20px;background: linear-gradient(90.32deg, #8F00FF 0.28%, rgba(143, 0, 255, 0) 99.72%), #764ABC; box-shadow: 0px 64px 74px 0px #764ABC40; padding-bottom: 30px; width: 95%; margin: 0 auto 60px auto; position: relative; margin-top: 3rem; } .footer-cta-tr {position: absolute; top: 30px; right: 30px; } .footer-cta-bl {position: absolute; bottom: 30px; left: 30px; } .footer-cta-bl {} .footer-cta-logo-container { width: 20%; padding: 10px 15px; display:block; margin: 0 auto; position: relative; background: #fafafa; border-radius: 0 0 20px 20px; } .footer-cta-logo-container::before { content: ""; position: absolute; top: 0px; height: 50px; left: -25px; width: 25px; border-top-right-radius: 25px; box-shadow: 0 -25px 0 0 #fafafa; } .footer-cta-logo-container::after { content: ""; position: absolute; top: 0px; height: 50px; right: -25px; width: 25px; border-top-left-radius: 25px; box-shadow: 0 -25px 0 0 #fafafa; } .footer-cta-container h2 {color: #ffffff; text-align: center; width: 70%; position: relative; margin: 40px auto;} .footer-cta-container a {text-decoration: none;} .footer-cta-logo-container img {display: block; margin: 0 auto; padding: 10px; max-width: 150px;} .footer-cta-br {position: absolute; left: 5px; bottom: 5px;} .footer-cta-button {padding: 10px 20px; border: 1px solid #ffffff; width: 20%; border-radius: 20px; color: #ffffff; position: relative; display:block; margin: 0 auto 20px auto; text-align: center; text-decoration: none;}

#### Recent posts:

[

![Introducing Valdi](https://blog.logrocket.com/wp-content/uploads/2025/12/valdi-react-native.png?w=420)

#### Should you bet on Valdi instead of React Native?

](https://blog.logrocket.com/valdi-instead-react-native/)

Valdi skips the JavaScript runtime by compiling TypeScript to native views. Learn how it compares to React Native’s new architecture and when the trade-off makes sense.

 [![](https://blog.logrocket.com/wp-content/uploads/2022/01/ikeh-akinyemi.jpeg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/ikehakinyemi/)[Ikeh Akinyemi](https://blog.logrocket.com/author/ikehakinyemi/)

Dec 30, 2025 ⋅ 7 min read

[

![8 frontend development trends 2026](https://blog.logrocket.com/wp-content/uploads/2025/12/12.30-Under-the-Hood.png?w=420)

#### The 8 trends that will define web development in 2026

](https://blog.logrocket.com/8-trends-web-dev-2026/)

What trends will define web development in 2026? Check out the eight most important trends of the year, from AI-first development to TypeScript’s takeover.

 [![](https://blog.logrocket.com/wp-content/uploads/2021/11/1629917310656.jpg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/davidomotayo/)[David Omotayo](https://blog.logrocket.com/author/davidomotayo/)

Dec 30, 2025 ⋅ 6 min read

[

![AI First Debugging](https://blog.logrocket.com/wp-content/uploads/2025/12/ai-debugging-logrocket.png?w=420)

#### AI-first debugging: Tools and techniques for faster root cause analysis

](https://blog.logrocket.com/ai-debugging/)

AI-first debugging augments traditional debugging with log clustering, pattern recognition, and faster root cause analysis. Learn where AI helps, where it fails, and how to use it safely in production.

 [![](https://blog.logrocket.com/wp-content/uploads/2022/10/IMG_20220809_120947-e1666638768500.jpg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/alexandergodwin/)[Alexander Godwin](https://blog.logrocket.com/author/alexandergodwin/)

Dec 29, 2025 ⋅ 6 min read

[

![](https://blog.logrocket.com/wp-content/uploads/2025/12/Container-queries-in-2026.png?w=420)

#### Container queries in 2026: Powerful, but not a silver bullet

](https://blog.logrocket.com/container-queries-2026/)

Container queries let components respond to their own layout context instead of the viewport. This article explores how they work and where they fit alongside media queries.

 [![](https://blog.logrocket.com/wp-content/uploads/2020/03/sebastian-weber.jpeg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/sebastianweber/)[Sebastian Weber](https://blog.logrocket.com/author/sebastianweber/)

Dec 26, 2025 ⋅ 12 min read

[View all posts](https://blog.logrocket.com/)

#comments .comment .reply::after { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/reply.svg"); background-repeat: no-repeat; }

### Leave a Reply[Cancel reply](/scale-node-js-app-using-distributed-queues/#respond)

document.addEventListener('DOMContentLoaded', function () { var commentForms = document.getElementsByClassName('jetpack\_remote\_comment'); for (var i = 0; i < commentForms.length; i++) { commentForms\[i\].allowTransparency = false; commentForms\[i\].scrolling = 'no'; } });

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/logrocket/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]}

Hey there, want to help make our blog better?

Yea No Thanks

Join LogRocket’s Content Advisory Board. You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

[Sign up now](https://lp.logrocket.com/blg/content-advisory-board-signup)

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"227\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "227" \]); //# sourceURL=jetpack-stats-js-before {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
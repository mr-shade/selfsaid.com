---
title: "Experimental Node.js: Testing the new performance hooks - LogRocket Blog"
date: "2019-04-17T02:00:21+00:00"
slug: "experimental-node-js-testing-the-new-performance-hooks-31fcdd2a747e"
image: "https://blog.logrocket.com/wp-content/uploads/2019/04/1_Jw9V__6jYhm2amP74D_0lw.png"
description: "Performance monitoring is a very important topic for any application that expects to be deployed into a production environment. Performance […]"
tags: []
original_url: "https://blog.logrocket.com/experimental-node-js-testing-the-new-performance-hooks-31fcdd2a747e/"
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

2019-04-16

2739

#node

Fernando Doglio

60

Apr 16, 2019 ⋅ 9 min read

# Experimental Node.js: Testing the new performance hooks

[![](https://blog.logrocket.com/wp-content/uploads/2019/04/fernandodoglio.jpeg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/fernandodoglio/)

[Fernando Doglio](https://blog.logrocket.com/author/fernandodoglio/) Technical Manager at Globant. Author of books and maker of software things. Find me online at [fdoglio.com](https://www.fdoglio.com/).

Table of contents

*   [The results](https://blog.logrocket.com/experimental-node-js-testing-the-new-performance-hooks-31fcdd2a747e/#94cd)
    

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

Performance monitoring is a very important topic for any application that expects to be deployed into a production environment. Performance monitoring is not something you should start considering once you start seeing performance issues, but rather, it should be part of your development process in order to detect possible problems before they are visible in production.

![](https://blog.logrocket.com/wp-content/uploads/2019/04/1_Jw9V__6jYhm2amP74D_0lw.png)

That being said, given the asynchronous nature of Node’s code, profiling it with regular tools can be challenging. Especially because part of the time spent could be outside of your code and inside the EventLoop itself. This is exactly why if the language provides you with the actual tools to profile it, you should seriously consider them.

In this article, I’m going to be covering practical examples of how to use the Performance Timing API, which is currently (as of this writing version 11.13) in experimental mode. Meaning, you’re welcome to use it, but keep in mind, they might change the actual contract of the methods we’re about to see from one version to the other without too much warning.

[![](https://storage.googleapis.com/blog-images-backup/1*GPjaPKNNUYHU8EsA3Z0JGA.png)](https://logrocket.com/signup/)

### Of hooks & performance metrics

But before we get down to it, I want to quickly run over these two concepts, since they’re not exactly part of the same module, although using them together works great.

On the one hand, we have the **Performance Timing API**, which allows developers to take precise measurements of the effects of userland code in the event loop and how that affects the performance of your application. Basically, if you want to measure the performance of your app in a serious manner, you’ll want to read about [**“perf\_hooks”**](https://nodejs.org/api/perf_hooks.html) at some point.

On the other hand though, there is another, unrelated module called [**“async\_hooks”**](https://nodejs.org/api/async_hooks.html), which allows you to piggyback on the asynchronous mechanics of the V8 and add hooks (basically, function calls) that can be executed before, at the beginning, after and at the end of the life of an asynchronous resource (in other words, a callback function).

To put it simply, with this module you can perform actions at different stages of the life of a callback function (i.e right before it is called, and right at the end when it’s been garbage collected).

The point of mixing these two together is to be able to gather metrics from asynchronous operations without having to manually alter the code yourself. With these two modules, I’ll show you how to inspect the inner workings of some of your operations by inspecting the Event Loop. As you can probably guess, this will allow you to turn this ability on and off with very little effort and impact on your project. So now, let’s get down to some examples.

### What can you do with the hooks?

When it comes to measuring time, both of these modules could be considered very low level, which means that although they might be a bit hard to understand at first, once you do, you can literally get in and measure every nook and cranny of your code. It’s up to you to define how deep the rabbit hole is.

Let me show you.

### Measuring the time it takes to require your dependencies

To start, let’s look at the Performance Hook API, by itself, it is already quite powerful and allows you to gather some very interesting data.

For example, a problem that might appear on a project that relies too much on dependencies, is a slow boot-up time, due to a lot of time spent during dependency loading.

* * *

[](https://lp.logrocket.com/blg/learn-more)

[

![](https://blog.logrocket.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-06-at-7.44.15-AM.png)

](https://lp.logrocket.com/blg/learn-more)

[](https://lp.logrocket.com/blg/learn-more)

[#replay-signup { margin-block: 1rem; display: flex; gap: 0.5rem; flex-direction: column; align-items: center; border: 1px solid #E6DFF6; border-radius: 16px; padding: 0.5rem 2rem; background-color: #F4F0FB; font-family: 'Proxima Nova', sans-serif; font-size: 0.95rem; h3 { margin: 0; font-weight: bold; } p { max-inline-size: 65ch; } .replay-signup-form-wrapper { width: 60%; } .nf-before-form-content { display: none; } input.nf-element\[type="submit"\] { background-color: #764abc; color: #fff; border-radius: 8px; padding-block: 10px; height: unset; width: 100%; display: block; } .nf-response-msg { font-size: 1.2rem; text-align: center; } }

### 🚀 Sign up for The Replay newsletter

](https://lp.logrocket.com/blg/learn-more)

[](https://lp.logrocket.com/blg/learn-more)[**The Replay**](https://blog.logrocket.com/the-replay-archive/) is a weekly newsletter for dev and engineering leaders.

Delivered once a week, it's your curated guide to the most important conversations around frontend dev, emerging AI tools, and the state of modern software.

Notice: JavaScript is required for this content.

var formDisplay=1;var nfForms=nfForms||\[\];var form=\[\];form.id='48';form.settings={"objectType":"Form Setting","editActive":true,"title":"Replay Newsletter Signup","show\_title":0,"allow\_public\_link":0,"embed\_form":"","clear\_complete":1,"hide\_complete":1,"default\_label\_pos":"above","wrapper\_class":"","element\_class":"","form\_title\_heading\_level":"3","key":"","add\_submit":0,"changeEmailErrorMsg":"Please enter a valid email address!","changeDateErrorMsg":"Please enter a valid date!","confirmFieldErrorMsg":"These fields must match!","fieldNumberNumMinError":"Number Min Error","fieldNumberNumMaxError":"Number Max Error","fieldNumberIncrementBy":"Please increment by ","formErrorsCorrectErrors":"Please correct errors before submitting this form.","validateRequiredField":"This is a required field.","honeypotHoneypotError":"Honeypot Error","fieldsMarkedRequired":"Fields marked with an <span class=\\"ninja-forms-req-symbol\\">\*<\\/span> are required","currency":"","unique\_field\_error":"A form with this value has already been submitted.","logged\_in":false,"not\_logged\_in\_msg":"","sub\_limit\_msg":"The form has reached its submission limit.","calculations":\[\],"conditions":\[\],"mp\_breadcrumb":1,"mp\_progress\_bar":1,"mp\_display\_titles":0,"formContentData":\[{"formContentData":\["email","submit\_1760469924554"\],"order":0,"type":"part","clean":true,"title":"Part Title","key":"hzyqqobd"}\],"objectDomain":"display","drawerDisabled":false,"ninjaForms":"Ninja Forms","fieldTextareaRTEInsertLink":"Insert Link","fieldTextareaRTEInsertMedia":"Insert Media","fieldTextareaRTESelectAFile":"Select a file","formHoneypot":"If you are a human seeing this field, please leave it empty.","fileUploadOldCodeFileUploadInProgress":"File Upload in Progress.","fileUploadOldCodeFileUpload":"FILE UPLOAD","currencySymbol":"&#36;","thousands\_sep":",","decimal\_point":".","siteLocale":"en\_US","dateFormat":"m\\/d\\/Y","startOfWeek":"1","of":"of","previousMonth":"Previous Month","nextMonth":"Next Month","months":\["January","February","March","April","May","June","July","August","September","October","November","December"\],"monthsShort":\["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"\],"weekdays":\["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"\],"weekdaysShort":\["Sun","Mon","Tue","Wed","Thu","Fri","Sat"\],"weekdaysMin":\["Su","Mo","Tu","We","Th","Fr","Sa"\],"recaptchaConsentMissing":"reCaptcha validation couldn&#039;t load.","recaptchaMissingCookie":"reCaptcha v3 validation couldn&#039;t load the cookie needed to submit the form.","recaptchaConsentEvent":"Accept reCaptcha cookies before sending the form.","currency\_symbol":"","beforeForm":"","beforeFields":"","afterFields":"","afterForm":""};form.fields=\[{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"email","label":"Email","key":"email","label\_pos":"hidden","required":1,"default":"","placeholder":"Email","container\_class":"","element\_class":"","admin\_label":"","help\_text":"","custom\_name\_attribute":"email","personally\_identifiable":1,"value":"","manual\_key":true,"drawerDisabled":false,"id":401,"beforeField":"","afterField":"","parentType":"email","element\_templates":\["email","input"\],"old\_classname":"","wrap\_template":"wrap"},{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"submit","label":"Submit","processing\_label":"Submitting...","container\_class":"","element\_class":"","key":"submit\_1760469924554","admin\_label":"","drawerDisabled":false,"id":402,"beforeField":"","afterField":"","value":"","label\_pos":"above","parentType":"textbox","element\_templates":\["submit","button","input"\],"old\_classname":"","wrap\_template":"wrap-no-label"}\];nfForms.push(form); <div class="nf-mp-header"></div> <div class="nf-mp-body"></div> <div class="nf-mp-footer"></div> {{{ data.renderProgressBar() }}} {{{ data.renderBreadcrumbs() }}} {{{ data.renderPartTitle() }}} <h3> {{{ data.title }}} </h3> {{{ data.renderNextPrevious() }}} <ul class="nf-next-previous"> <# if ( data.showPrevious ) { #> <li class="nf-previous-item"> <input type="button" class="nf-previous" value="{{{ data.prevLabel }}}" /> </li> <# } #> <# if ( data.showNext ) { #> <li class="nf-next-item"> <input type="button" class="nf-next" value="{{{ data.nextLabel }}}" /> </li> <# } #> </ul> <ul class="nf-breadcrumbs"> <# \_.each( data.parts, function( part, index ) { #> <li class="{{{ ( data.currentIndex == index ) ? 'active' : '' }}} {{{ ( part.errors ) ? 'errors' : '' }}}"> <a href="#" class="nf-breadcrumb" data-index="{{{ index }}}">{{{ ( part.errors ) ? '' : '' }}} {{{ part.title }}}</a> </li> <# } ); #> </ul> <div class="nf-progress-container"> <div class="nf-progress" style="width: {{{ data.percent }}}%;"></div> </div>

function registerNinjaFormsCallback() { if (!(window.nfRadio && window.lr\_analytics)) { return; } window.nfRadio.channel("forms").on("submit:response", function(submission) { console.log(submission); if (submission.data.form\_id !== "48") { return; } window.lr\_analytics.track("blog-replay-newsletter-signup", { post: window.location.pathname, email: submission.data.fields\_by\_key?.email?.value, }); }); } registerNinjaFormsCallback();

## Over 200k developers use LogRocket to create better digital experiences

![](https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.png)Learn more →

* * *

@media all and (max-width: 800px){ .tweet-embed-container {flex-direction: column !important;} .single-tweet, .embed-tweet-right {width: 100% !important;} } .embed-link {text-decoration: none;} .embed-link:hover {text-decoration: none;} .tweet-embed-container {border-radius: 20px; background: radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), #764ABC; background-blend-mode: overlay, overlay, normal; box-shadow: 0 4px 0 #d5d5d5; width: auto; padding: 20px 15px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; margin: 0 auto; gap: 3%; } .single-tweet {width: 50%;} .single-tweet img {max-width: 100%;height: auto; border-radius:7px;} .embed-tweet-right {width: 46%;} .embed-tweet-right h2 {font-family: 'Avenir'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 28px; color: #FFFFFF;} .embed-btn { display: flex; flex-direction: row; justify-content: left; width: 170px; gap: 5px; align-items: center; padding: 0px 10px; font-family: 'Avenir'; font-style: normal; font-weight: 900; font-size: 16px; line-height: 16px; color: #764ABC; height: 48px; /\* White \*/ background: #FFFFFF; mix-blend-mode: normal; box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.11); border-radius: 80px; border: none; }

You could get a basic idea of where the bottlenecks are by adding this:

let start = (new Date()).getTime()
//your requires go here…
let end = (new Date()).getTime()
console.log(end — start, “ ms”)

Here you would find out how long your module takes to load, but what if you only have a couple of direct dependencies? Sometimes a single dependency can, in turn, depend on ten others, of which each one requires another ten. So you’re actually quite dependent and by doing such a shallow analysis with the previous code, you can’t really determine where exactly your problem comes from.

If instead, we focus our analysis with the help of the Performance Measurement API, we can overwrite the _require_ function and capture every single require during the entire bootup process. Let me show you:

```
'use strict';
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');
const mod = require('module');

// Monkey patch the require function
mod.Module.prototype.require = performance.timerify(mod.Module.prototype.require);
require = performance.timerify(require);

// Activate the observer
const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`require('${entry[0]}')`, entry.duration);
  });
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'], buffered: true });

require(‘getpass’);
```

The execution of the above code results in:

require(‘getpass’) 2.443011
require(‘getpass’) 2.432565
require(‘tty’) 0.003704
require(‘fs’) 0.003543
require(‘assert-plus’) 0.886344
require(‘assert’) 0.003409
require(‘stream’) 0.001784
require(‘util’) 0.001229

Here, we’re using two entities from the _perf\_hooks_ module.

### Performance

This object provides the _timerify_ method (amongst other methods of course). This method allows you to wrap a function around another one that will provide time measurements of the original one. This is what allows us to get the time data from _require,_ we’re wrapping it (and it’s prototype) with _timerify._

### The PerformanceObserver class

This class allows you to create an instance of an observer and react when a new entry on the performance timeline has been made. Think about the timeline as a stack, you can only add data to the end of it, which means you add an entry.

So the observer allows you to set a handler function that gets called once the entry is pushed into the stack. The second to last line sets the observer’s target: entries with type equal to ‘function’ and makes sure the behavior is buffered. In other words, once all of the _require_ calls end, our callback will be called.

This last bit is not required, you could very well structure the observer as follows:

```
const obs = new PerformanceObserver((list) => {
  const entry = list.getEntries()[0]
  console.log(`require('${entry[0]}')`, entry.duration);
});
obs.observe({ entryTypes: ['function'], buffered: false});
```

With a similar output:

require(‘tty’) 0.003969
require(‘fs’) 0.004216
require(‘assert’) 0.003542
require(‘stream’) 0.00289
require(‘util’) 0.002521
require(‘assert-plus’) 1.069765
require(‘getpass’) 4.109317
require(‘getpass’) 4.16102

The hidden magic bit here is that the entries aren’t being added by you directly, instead, they’re added by the wrapped _require_ function. That is how _timerify_ works, the returned function makes sure to add entries with type _‘function’_ to the timeline, and our observer picks them up for us.

Now, you can imagine, if you’re inspecting the require chain of something like _ExpressJS_ or _request,_ the list will be longer.

### Measuring your own code

Now I want to show you how to use the same observer, but on your own code, for that, we’ll have to manually trigger the measurements (we’ll see how to do that automatically using async hooks later, don’t worry).

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

For the measurements, we’ll be creating marks, which are just relevant points in our timeline, and then, we’ll measure the time between them to calculate our delays.

Specifically, the code below will perform four HTTP requests by getting the main page for some of the most popular search engines (Google, Yahoo!, Bing and DuckDuck Go). Once all four requests are done, we’ll simply print a word out to notify the user. For this example, we care about timing not what we do with the content.

The idea for our performance measurement of the code, is to calculate how long each request takes, and for that, we’ll create a single mark before the request is done, another one right when it ends and finally, we’ll measure the difference.

The code will look something like this:

```
'use strict';
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');
const request = require("request")

function queryEngines(done) {
    const urls = [
        "http://www.google.com",
        "http://yahoo.com",
        "http://bing.com",
        "http://duckduckgo.com"
    ]

    let results = []

    urls.forEach( (url) => {
        performance.mark(url + "-init") //initial mark for the current URL
        
        request(url, (err, cnt) => {
            performance.mark(url + "-end") //final mark for the same URL
            performance.measure(url, url + "-init", url + "-end") //calculate the time difference between the start and end 

            results.push(cnt)
            if(results.length === urls.length) {
                return done(results)
            }
        })
    })
}

// Activate the observer
const obs = new PerformanceObserver((list) => {
  const entry = list.getEntries()[0]
  console.log(`Time for ('${entry.name}')`, entry.duration);
});
obs.observe({ entryTypes: ['measure'], buffered: false});  //we want to react to full measurements and not individual marks

queryEngines( (pages) => {
    console.log("Done!")
})
```

The output looks like this:

Time for (‘http://www.google.com’) 155.920343
Time for (‘http://duckduckgo.com’) 435.809226
Time for (‘http://bing.com’) 679.744093
Time for (‘http://yahoo.com’) 3194.186238
Done!

Notice how for some reason, Yahoo! takes too long to return. If you look at the above code, for every URL we set a key point (mark) before the request and right when it returns, the measure method simply calculates the time difference and sends a trigger to the observer who then executes it’s callback and prints the data out.

### Enter, the async hooks

By the nature of our code, the ability to hook onto asynchronous events will come in handy. Let’s first look at our code:

```
'use strict';
const {
  performance,
  PerformanceObserver
} = require('perf_hooks');
const async_hooks = require("async_hooks")

const request = require("request")

const map = new Map()

//Creating the async hook here to piggyback on async calls
const hook = async_hooks.createHook({
  init(id, type, triggerID, resource) {
    if (type == 'GETADDRINFOREQWRAP') {
        if(!firstMark) firstMark = resource.hostname + "-Init"
          performance.mark(resource.hostname + '-Init');
      map.set(id, resource.hostname)
    }
  },
  destroy(id) {

    if (map.has(id)) {
          let host = map.get(id)
      map.delete(id);
      performance.mark(host +"-After")
      performance.measure(host,
                          host + "-Init",
                          host + "-After")
    }
  }
});
hook.enable();


//Original code starts here
function queryEngines(done) {
    const urls = [
        "http://www.google.com",
        "http://yahoo.com",
        "http://bing.com",
        "http://duckduckgo.com"
    ]

    let results = []

    urls.forEach( (url) => {
        request(url, (err, cnt) => {
            results.push(cnt)
            if(results.length === urls.length) {
                return done(results)
            }
        })
    })
}


//The performance observer is not changed
const obs = new PerformanceObserver((list) => {
  const entry = list.getEntries()[0]
  console.log(`Time for ('${entry.name}')`, entry.duration);
});
obs.observe({ entryTypes: ['measure'], buffered: false});

queryEngines( (pages) => {
    console.log("Done!")
})
```

The output from that code is:

Time for (‘yahoo.com’) 10.285394
Time for (‘www.google.com’) 19.315204
Time for (‘bing.com’) 16.543073
Time for (‘duckduckgo.com’) 20.414387
Time for (‘www.bing.com’) 14.802698
Time for (‘yahoo.com’) 4.843614
Time for (‘www.yahoo.com’) 58.130851
Done!

There are several things to look at here. Let’s start at the beginning.

### Creating the hook

The createHook method allows the developer to define a set of callbacks to be executed, depending on the name of the method it is assigned to. As I have already mentioned, there are four possible names to use here: init, before, after and destroy and they refer to a different step in the lifecycle of an asynchronous resource.

### Defining the callbacks

Because we don’t really need that much control over what’s happening, I’m simply defining the first and the last of the callbacks to be called. This is in the hopes that I would be able to replicate the behavior of the previous example. As you can see, the result is not exactly the same though, and I will explain why in a bit.

The important part here is that you notice how I’m only sending a mark for the _init_ event of asynchronous operations of type “GETADDRINFOREQWRAP”, these are related to HTTP requests. The parameters of the _init_ method are:

*   **Id**: An ID given to the particular asynchronous resource
*   **Type**: Of a predefined list of types. You can take a look at the full lists in the docs, although sadly the official documentation doesn’t really explain much about them
*   **triggerID**: The ID assigned to the function that created this particular asynchronous resource. Basically, the ID of the parent, you can follow the triggerID up the hierarchy all the way to the first parent
*   **Resource**: Extra information about the object related to the resource. In particular, you can see how we’re accessing the hostname value using that object

And I’m also sending marks on the _destroy_ event, as long as the associated asynchronous action is of interest (that’s where the Map plays a part). During this event, I’m not only sending the mark, but also sending the measurement for the entire process of a single URL.

#podrocket-plug { border-radius: 12px; width: 75%; height: 352px; margin: 1rem auto; display: block; }

### The results

Although the logic behind the code is meant to be solid, the results that we get aren’t exactly what we were expecting, are they?! The two main differences are:

1.  The duration numbers don’t add up to what we got before, not even close
2.  There are more measurements than expected because some URLs are repeating

The difference in duration is due to the fact that we can’t attach specifically to the function we want. Maybe with more tinkering and debugging you can attain better results, but there are a lot of asynchronous resources involved during each request. With the current version of the code, we’re able to understand when the request starts, but not exactly when it ends, only when part of it ends. So the durations we’re getting are partials.

With that being said, our findings are still very much useful, because of the next difference.

As you can see, there are two requests to Bing and three to Yahoo!, if you think about it, even though the durations in the latest results don’t add up, the number of requests appear to explain why Yahoo! was the one taking the longest before. But why are we getting different results?

In order to debug the hooks, you can’t just use _console.log_ , you can’t use any asynchronous functions, otherwise, the act of logging would, in fact, trigger another hook. So the recommended way to do so is by writing into a file, using the synchronous version of the writeFile method.

So you rewrite the init hook like so:

init(id, type, triggerID, resource) {
        let meta = {
            event: "\[init\]",
            type, id, triggerID
        }

        fs.writeFileSync("./perf.log", JSON.stringify(meta) + "\\n\\t", {flag: "a"} )
        for(let p in resource) {
        if(typeof(resource\[p\]) != "function") {
          fs.writeFileSync("./perf.log", "\[resource \] " + p + ":" + util.inspect(resource\[p\]) + "\\n\\t", {flag: "a"} )
        }

        }
    if (type == 'GETADDRINFOREQWRAP') {
          performance.mark(resource.hostname + '-Init');
      map.set(id, resource.hostname)
    }
  },

In that code, I’m not just logging the basic data, but I’m also inspecting the resource object, trying to figure out what information is accessible, depending on the action type. In particular, you’ll find many TickObjects that reference the actual response object for the requests, and in them, you’ll find redirection requests. Particularly for Yahoo! and for Bing, the one that has multiple requests made.

In other words, by hooking into the ‘GETADDRINFOREQWRAP’ type of actions, we’re not just inspecting the request we manually perform, but the following requests that happen due to the mechanics of the HTTP protocol.

So, even though getting the same duration results turned out to be a bit difficult, by using the asynchronous hooks we get an insight into the inner workings of the code we wrote.

# Conclusion

Both the performance hooks and the asynchronous hooks are still marked as experimental in Node’s official documentation, so if you start playing around with these modules, take that into account. There is nothing saying that these interfaces will change, but also, there is no real insurance that they will remain like they are right now.

That being said, playing around with these features is not a waste of time, because you get a glimpse of what might come in the near future as well as you gain the possibility of finding bugs and help the project by reporting them (or heck! Even fixing them).

Hopefully, this article helps you understand a bit the convoluted documentation and helps you make sense of it if you’re hoping to use this in your own code.

Let me know in the comments if you’ve used these modules or if you can think of another way to use them to gain even more insights!

Thanks for reading and see you on the next one!

## 200s only ![](https://blog.logrocket.com/wp-content/uploads/2019/10/green-check.png) Monitor failed and slow network requests in production

Deploying a Node-based web app or website is the easy part. Making sure your Node instance continues to serve resources to your app is where things get tougher. If you’re interested in ensuring requests to the backend or third-party services are successful, [try LogRocket](https://lp.logrocket.com/blg/node-signup).

[![LogRocket Network Request Monitoring](https://blog.logrocket.com/wp-content/uploads/2019/12/network-request-filter-2-1.png)](https://lp.logrocket.com/blg/node-signup)

[LogRocket](https://lp.logrocket.com/blg/node-signup) lets you replay user sessions, eliminating guesswork around why bugs happen by showing exactly what users experienced. It captures console logs, errors, network requests, and pixel-perfect DOM recordings — compatible with all frameworks.

LogRocket's Galileo AI watches sessions for you, instantly identifying and explaining user struggles with automated monitoring of your entire product experience.

LogRocket instruments your app to record baseline performance timings such as page load time, time to first byte, slow network requests, and also logs Redux, NgRx, and Vuex actions/state. [Start monitoring for free](https://lp.logrocket.com/blg/node-signup).

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

### Leave a Reply[Cancel reply](/experimental-node-js-testing-the-new-performance-hooks-31fcdd2a747e/#respond)

document.addEventListener('DOMContentLoaded', function () { var commentForms = document.getElementsByClassName('jetpack\_remote\_comment'); for (var i = 0; i < commentForms.length; i++) { commentForms\[i\].allowTransparency = false; commentForms\[i\].scrolling = 'no'; } });

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/logrocket/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]}

Hey there, want to help make our blog better?

Yea No Thanks

Join LogRocket’s Content Advisory Board. You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

[Sign up now](https://lp.logrocket.com/blg/content-advisory-board-signup)

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"60\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "60" \]); //# sourceURL=jetpack-stats-js-before {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
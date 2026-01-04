---
title: "Frontend in 2018: More consensus, less complexity - LogRocket Blog"
date: "2018-01-12T03:00:14+00:00"
slug: "what-im-looking-for-from-frontend-in-2018-2f1de300b548"
image: "https://storage.googleapis.com/blog-images-backup/1*8ITf_jyAEhKNKb7KWgGylA.png"
description: "2017 was quite a year in frontend web development. Frameworks like React and Angular have continued to enjoy large-scale support […]"
tags: []
original_url: "https://blog.logrocket.com/what-im-looking-for-from-frontend-in-2018-2f1de300b548/"
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

2018-01-11

2648

#angular#react#typescript#vue

Kaelan Cooter

216

Jan 11, 2018 ⋅ 9 min read

# Frontend in 2018: More consensus, less complexity

[![](https://secure.gravatar.com/avatar/2a2746a56c1f3587833a6e62a9cd30855a20c251156419204083d642686d3c6c?s=50&d=mm&r=g)](https://blog.logrocket.com/author/kcooter/)

[Kaelan Cooter](https://blog.logrocket.com/author/kcooter/) Software Engineer @LogRocket

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

![](https://storage.googleapis.com/blog-images-backup/1*8ITf_jyAEhKNKb7KWgGylA.png)

[2017 was quite a year](https://blog.logrocket.com/frontend-in-2017-the-important-parts-4548d085977f) in frontend web development.

Frameworks like React and Angular have continued to enjoy large-scale support among the community, but new contenders like Vue have also exploded in popularity. Webpack continues to be the build tool of choice and NPM the package system of choice. WebAssembly opened up the web to a multitude of new and exciting use cases with unprecedented speeds. Technologies like GraphQL have innovated the way that APIs are both written and used in web applications.

Meanwhile, the language itself continues to evolve. The 2017 edition of the ECMAScript standard added asynchronous functions which considerably improve the developer experience when writing asynchronous code. They are now supported in all major browsers. Another notable addition was shared memory and atomic operations.

However, shared memory was temporarily disabled on January 5th in [all major browsers](https://www.chromium.org/Home/chromium-security/ssca) after it was revealed that they open up browsers to side-channel attacks [involving speculative execution](https://security.googleblog.com/2018/01/todays-cpu-vulnerability-what-you-need.html).

It is expected that shared memory will become available sometime this year when browser vendors figure out a way to prevent the vulnerability.

[![](https://storage.googleapis.com/blog-images-backup/1*2H5cnv_UzdWhAwB6KOAOhg.png)](https://logrocket.com/signup/)

### Libraries and Frameworks

#### React

React had a very eventful 2017 with the release of [React 16](https://reactjs.org/blog/2017/09/26/react-v16.0.html) in September. This is the largest release of React to date, adding **fragments** (you can now return an array instead of having to wrap everything in a useless <div> element), better **error handling** with error boundaries (errors now cause React to unmount at the root or special error boundary components), **portals** (you can now render React children into DOM nodes outside the React DOM hierarchy) and **streaming** (allowing server-side rendered apps to stream renders to the client instead of waiting for the entire render to complete).

Furthermore, React has also [switched to a RFC process](https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html) for contributing ideas to the React team. Anyone is allowed to submit RFC proposals as long as those proposals change the React API. The React team has already posted their [proposed context changes](https://github.com/reactjs/rfcs/pull/2) as the first RFC, which are a very interesting read.

The community has also already submitted several proposals that cover many interesting new features including:

*   [Render function arguments](https://github.com/reactjs/rfcs/pull/4) — to reduce code clutter, this proposes that the render function take props, state, and context as arguments.
*   [setState returns a promise](https://github.com/reactjs/rfcs/pull/10) — would pair nicely when you need setState to be synchronous and you’re in an environment with async / await.
*   [async-safe static lifecycle hooks](https://github.com/reactjs/rfcs/pull/6) — a complete overhaul of the legacy class-based API that makes it easier to work with async data while avoiding unnecessary renders and provide a clear upgrade path to functional components.

Of course, not all of the proposals will make it in a future release, but it’s nice that the React team has opened planning to the community. The RFC process has become more prevalent in the community with projects like [Yarn](https://github.com/yarnpkg/rfcs) and [Ember](https://github.com/emberjs/rfcs) adopting it recently.

Boilerplate projects have always been popular in the React community due to the relative complexity of setting up all the different tools required for modern web development. Most advise the user clone the project to use and build from there. This can be confusing for beginners because they are overwhelmed by a complex “blank slate” with tons of dependencies and configuration code they don’t understand.

Facebook’s [create-react-app](https://github.com/facebookincubator/create-react-app) is different — it’s a CLI tool that wraps Webpack, Babel, PostCSS, and Jest and allows for zero-configuration development. It has continued to grow in popularity in the last year, from 18k GitHub stars at the start of 2017 to 40k by the end. It also allows you to stop using create-react-app by providing an “eject” command which installs dependencies and copies configuration files so that you can manually change them. It can be argued that it is partially responsible for much of the growth in React’s popularity in recent years.

For server-rendered React applications, [next.js](https://github.com/zeit/next.js) is a popular framework choice. It provides all the tools you need for a “universal” web application without the complicated configuration and setup. This is important since it seems the interest in universal (or “isomorphic”) apps has decreased recently in favor of progressive web apps — probably because of the development complexity. If you’re starting a new project, I would seriously consider next.js as a framework choice.

I think the React community will eventually develop something akin to create-react-app but targeted towards more complex applications.

Next.js gets close to this goal, but it’s targeted towards server-rendered apps which are by no means the majority. There’s a sweet spot between configuration and ease-of-use that — in my opinion — hasn’t been achieved by any framework.

> The appeal of a “batteries included” approach will become tantalizing for more and more developers disillusioned with the complexity of build system configuration and the developer time required to maintain it.

#### Angular

Although the latest version of Angular ([version 5.1.3](https://github.com/angular/angular/blob/master/CHANGELOG.md)) was released on January 3, the AngularJS project (a.k.a. the old Angular 1.x version) is still being actively developed and even [released version 1.6.8](https://github.com/angular/angular.js/blob/master/CHANGELOG.md) on December 18, 2017. Many large companies are still using the legacy version of Angular and because of that important speed improvements and security fixes have been backported to AngularJS.

It is not exactly known when Google’s support of the legacy project will end, but in the past [the official line](https://stackoverflow.com/questions/37037251/angularjs-1-x-support-lifecycle) has been that support will not end until the majority of web traffic goes to the angular.io domain (the next-gen version’s site) rather than angularjs.org. However, given that the legacy version uses the rather liberal [MIT license](https://github.com/angular/angular.js/blob/master/LICENSE), even if official support goes away in 2018 you can expect further development.

Recent Angular releases have been impressive, especially the [latest v5 release](https://blog.angular.io/angular-5-1-more-now-available-27d372f5eb4e). It continues to distinguish itself from its competitors with every release by offering innovative features like ahead-of-time compilation of templates and service worker integration in a neat and easy to set up package.

While these features are of course available to any application, where Angular shines is with it’s integrated tools. [Angular CLI](https://cli.angular.io/) is easy to use and now offers support for quickly generating universal and progressive web applications with [App Shell](https://developers.google.com/web/fundamentals/architecture/app-shell).

The React community embraces a less opinionated philosophy of frontend development. For the most part, developers have to manually set up many of these complex features unless they use one of the [multitude of boilerplate projects](https://github.com/topics/boilerplate). Many developers prefer to set things up themselves so they understand all parts of the system.

Sometimes it feels like the web community cycles between opinionated and centralized to unopinionated and decentralized. One can’t help but wonder if the React community will eventually move back in the other direction.

> After having worked on several large custom-build React / Redux / Webpack projects, having everything basically set up for you and “just work” is a very appealing prospect.

Given the recent releases, it will be interesting to see if Angular will become more popular in the coming year. Although it’s hard to measure, Angular doesn’t seem to be growing much at all when you look at NPM downloads. React has [continued to increase its lead](http://www.npmtrends.com/@angular/core-vs-react) especially over the last year. It now has almost three times as many NPM downloads per day.

#### Vue

[Vue](https://github.com/vuejs/vue) has become a very popular view framework alternative to React in 2017. Both utilize a virtual DOM and both are component-based and extremely lightweight. In the State of JavaScript 2017 survey Vue is listed as [the third most used](https://stateofjs.com/2017/front-end/results) frontend framework after Angular 1 and React. Most notably it was the most “would like to learn” framework in that survey.

The Vue core team is planning the [2.6 release](https://github.com/vuejs/roadmap) before this February that will focus error handling, functional components, and server-side rendering. Following React’s lead, they also plan on only targeting evergreen browsers in a future release.

> Vue has [grown in popularity](https://npm-stat.com/charts.html?package=vue&package=react) over the last year, but it’s hard to see it replacing React as the king of frontend view libraries.

A lot has been written about its appeal for [developers coming from Angular](https://medium.com/reverdev/why-we-moved-from-angular-2-to-vue-js-and-why-we-didnt-choose-react-ef807d9f4163), and I expect this appeal to continue. The general argument is that unlike React, Vue doesn’t require you to use JSX and unlike Angular it doesn’t push you to use TypeScript.

Its templating language is also quite similar to Angular’s. Additionally, Vue has a close family of packages that are well maintained and together offer a similar set of functionality that Angular does but in a more decentralized way.

### Module Bundlers

#### Webpack

[Webpack 3](https://medium.com/webpack/webpack-3-official-release-15fd2dd8f07b) was released in June 2017 and brought scope hoisting as its flagship feature. Instead of wrapping each module in an individual closure, scope hoisting brings all modules together in a single closure without breaking them. This can significantly improve both bundle execution time and bundle size. This was a notable feature of [Rollup](https://github.com/rollup/rollup), another module bundler that has been a source of inspiration for features in Webpack 2 and beyond.

The Webpack team [planned](https://medium.com/webpack/road-to-webpack-4-week-20-21-1641d03ce06e) many important features for Webpack v4, which is in alpha at the writing of this blog post and is expected to be released soon. The headline feature is WebAssembly module support — with the goal of making WASM modules as easy to work with in Webpack as ECMAScript modules. Also planned is an overhaul in the way that Webpack generates CSS, instead of injecting CSS into JavaScript Webpack 4 will now generate CSS assets.

The new release will also focus on build performance — an issue [voted](https://webpack.js.org/vote/) by the the Webpack community as a top priority item.

> In my opinion, Webpack should also focus more on the documentation and configuration. Although Webpack excels at a flexible configuration, it sacrifices user experience.

A Webpack zero-config mode has been suggested, but it hasn’t been greatly prioritized despite the breakout popularity of other module bundlers like Parcel.

#### Parcel

[Parcel](https://parceljs.org/) made a huge splash on GitHub in late 2017, gathering an impressive fourteen thousand stars in less than a month. It’s been capitalizing on the growing dissatisfaction with Webpack regarding its confusing configuration and slow build times by introducing a offering a “zero-config” setup. It already has several important module bundling features popularized by Webpack such as code splitting and hot module replacement.

Most of the remaining development seems to be focused on adding smaller features to bring it on par with Webpack — such as entry points and a comprehensive plugin system.

* * *

[](https://lp.logrocket.com/blg/learn-more)

[

![](https://blog.logrocket.com/wp-content/uploads/2022/11/Screen-Shot-2022-09-22-at-12.55.13-PM.png)

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

I will be closely watching Parcel development in 2018 and it will be interesting to see whether or not it becomes a major challenger to Webpack’s dominance.

> Although the recent versions of Webpack have introduced valuable features and the new documentation site is a vast improvement, it feels like Webpack is now prime for disruption.

It’s simply too much of a task to configure Webpack for complex use cases.

Parcel can grow into something big if it successfully exploits developer frustration and offers an easier alternative with less configuration.

#### Other Tools

Gulp and Browserify are still being used by thousands of projects in one shape or form but they are no longer considered to be the cutting edge of frontend build tools. Their continued development is important for maintenance of existing systems and they might still be used today in new projects for very specific use cases; however, the popular opinion among developers for the last few years has been that they are overcomplicated and require too much manual set up. Both have continued a relatively [steady decline](https://npm-stat.com/charts.html?package=gulp&package=browserify&package=webpack&package=parcel-bundler&from=2017-01-09&to=2018-01-09) in NPM downloads in the last year in the midsts of an increasingly wide lead by Webpack.

### Tools

#### TypeScript

TypeScript has a release [planned](https://github.com/Microsoft/TypeScript/wiki/Roadmap#27-january-2018) for January that includes new ECMAScript features such as [numeric separators](https://github.com/tc39/proposal-numeric-separator) and several advanced type system improvements involving object literals and classes. Also planned is [a change](https://github.com/Microsoft/TypeScript/pull/19675) that will improve how TypeScript’s module system handles non-ECMAScript modules.

This brings it more in line with how Babel handles module interoperability. Hopefully this should make using TypeScript easier when using modules of different types, something that is often a confusing pain point for new users. This release also plans improvements to the already impressive refactoring features by adding support for automatic conversion to ECMAScript modules.

> Microsoft’s TypeScript is [clearly winning against](http://www.npmtrends.com/flow-bin-vs-typescript) Flow (the rival type checking tool from Facebook). There are several reasons for this, but in my opinion it’s simply a matter of how well the TypeScript project has been run by Microsoft.
> 
> * * *
> 
> * * *
> 
> #podrocket-plug { border-radius: 12px; width: 75%; height: 352px; margin: 1rem auto; display: block; }

It gets large [monthly releases](https://github.com/Microsoft/TypeScript/releases) by Microsoft compared to [sporadic, smaller releases](https://github.com/facebook/flow/releases) by flow. The tooling is also simply better with TypeScript, with excellent linter support with [tslint](https://github.com/palantir/tslint) and fantastic [editor support](https://code.visualstudio.com/docs/languages/typescript) with Visual Studio Code (and many other editors) which provide automatic transforms that are simply not possible with Flow.

Whether or not one is a better type system is almost irrelevant — I’m willing to bet most developers care more about support and ease-of-use.

Furthermore, the community around TypeScript is much larger. There are many more type definitions for popular NPM packages available for TypeScript through the [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) project compared to those provided by [flow-typed](https://github.com/flowtype/flow-typed). If nothing else, this fact is a serious threat to the long-term viability of any project that uses Flow.

### Mobile

Universal web applications first became popular around the time that React was introduced. This innovation allowed frontend web applications to render first on the server at the expense of development complexity. While they are still popular, they are by no means the de facto way of doing things.

For mobile, developers today are starting to focus on developing so-called [progressive web applications](https://developers.google.com/web/progressive-web-apps/) — an initiative sponsored by Google to make web applications more friendly for mobile users. For the developer, this means an increased focus on speed and mobile user experience. This is achieved by using new technologies like service workers for offline support and application manifest files for customizing how apps look in the operating system. This can be seen as the natural evolution of responsive web design.

Google has also sponsored the [Accelerated Mobile Pages](https://www.ampproject.org/) (AMP) project, which drastically reduces load times for web pages on mobile devices by standardizing a lightweight document format that uses [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) with caching provided by Google. It has been quickly adopted by major content publishers on the web, however controversy persists regarding publisher [ad revenue](https://www.wsj.com/articles/google-amp-gets-mixed-reviews-from-publishers-1477648838) and concerns about giving up control by hosting [content on Google’s servers](https://www.theregister.co.uk/2017/05/19/open_source_insider_google_amp_bad_bad_bad/).

If we want the web to remain a competitive and engaging platform we need to compete with mobile apps.

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

> Although they [can’t do everything](https://medium.com/dev-channel/why-progressive-web-apps-vs-native-is-the-wrong-question-to-ask-fb8555addcbb) a mobile app can do, progressive web applications are a great step towards maintaining the long-term health of the web. I expect them to become more popular and even mandatory in the future.

### Putting it all together

Overall, frontend has trended toward a consolidation around existing projects and many disparate sections of web development. React, Webpack, TypeScript have continued to get more popular. Vue and Parcel seem like they could become more of a threat to the respective frontrunners in their fields; meanwhile, the old guard technologies like Angular and Browserify are still around but are slowly declining.

Some trends are continuing, like component-based design. There is not a single new library to become popular recently that has challenged this tennet. It’s by no means [a new concept](https://en.wikipedia.org/wiki/Component-based_software_engineering) and it’s recently revival is [not limited to web development](https://en.wikipedia.org/wiki/Entity%E2%80%93component%E2%80%93system). I don’t expect any fundamental shifts in application architecture anytime soon.

There has been a trend towards more developer-friendly, “opinionated” tools. You can see this in the push-back against the complexities of Webpack and the React ecosystem. Simple is better than complex, but it’s hard to cater to a wide variety of use cases without complexity.

> What frontend development needs is more consensus. It is often derided as being overly complex, an opinion I share.

While there has been a recent focus on appealing to new developers, I think we should also pay attention to the complexities in the average enterprise web project — both the application itself and the build tools around it.

## LogRocket understands everything users do in your Vue apps.

Debugging Vue.js applications can be difficult, especially when users experience issues that are difficult to reproduce. If you’re interested in monitoring and tracking Vue mutations and actions for all of your users in production, [try LogRocket](https://lp.logrocket.com/blg/vue-signup).

[![LogRocket Dashboard Free Trial Banner](https://files.readme.io/00591d0-687474703a2f2f692e696d6775722e636f6d2f6a3049327856572e706e67.png)](https://lp.logrocket.com/blg/vue-signup)

[LogRocket](https://lp.logrocket.com/blg/vue-signup) lets you replay user sessions, eliminating guesswork by showing exactly what users experienced. It captures console logs, errors, network requests, and pixel-perfect DOM recordings — compatible with all frameworks.

With Galileo AI, you can instantly identify and explain user struggles with automated monitoring of your entire product experience.

Modernize how you debug your Vue apps — [start monitoring for free](https://lp.logrocket.com/blg/vue-signup).

## LogRocket understands everything users do in your web and mobile apps.

[![LogRocket Dashboard Free Trial Banner](https://blog.logrocket.com/wp-content/uploads/2017/03/1d0cd-1s_rmyo6nbrasp-xtvbaxfg.png)](https://lp.logrocket.com/blg/typescript-signup)

[LogRocket](https://lp.logrocket.com/blg/typescript-signup) lets you replay user sessions, eliminating guesswork by showing exactly what users experienced. It captures console logs, errors, network requests, and pixel-perfect DOM recordings — compatible with all frameworks, and with plugins to log additional context from Redux, Vuex, and @ngrx/store.

With Galileo AI, you can instantly identify and explain user struggles with automated monitoring of your entire product experience.

Modernize how you understand your web and mobile apps — [start monitoring for free](https://lp.logrocket.com/blg/typescript-signup).

.plug-poll {margin-bottom: 2rem;} .code-block-8 .fadeIn { opacity:1 !important; height:auto !important; } .code-block-8 .fadeOut { opacity:0 !important; } .code-block-8 .wpcf7-email {margin: 15px 0;} #plug-survey-errors, #plug-survey-help, #plug-survey-email {opacity:0; height:1px; transition: all 1s;overflow:hidden; width: 100%;} jQuery("#plug-survey-framework input").click(function() { analytics.track('footer-poll', { 'footer-poll-framework': jQuery(this).val() }); jQuery('#plug-survey-framework').delay(200).addClass('fadeout').delay(200).css('display', 'none'); jQuery('#plug-survey-errors').delay(800).addClass('fadeIn'); }); jQuery("#plug-survey-errors input").click(function() { jQuery('#plug-survey-errors').delay(200).addClass('fadeout').delay(200).css('display', 'none'); jQuery('#plug-survey-help').delay(800).addClass('fadeIn'); }); jQuery("#plug-survey-help input").click(function() { analytics.track('footer-poll', { 'footer-poll-help': jQuery(this).val() }); jQuery('#plug-survey-help').delay(200).addClass('fadeout').delay(200).css('display', 'none'); jQuery('#plug-survey-email').delay(800).addClass('fadeIn'); });

.plug-cta-button { display: block; margin: 0 auto; width: 250px; height: 55px; background-color: #764abc; border-radius: 8px; color: #fff !important; font-family: proxima-nova, sans-serif; font-size: 16px; font-weight: 800; text-decoration: none; text-align: center; line-height: 55px } #plug-tabs > ul { display: flex; border-bottom: 1px solid gray; list-style: none; padding: 0; } #plug-tabs > ul li a, #plug-tabs > ul li a:active, #plug-tabs > ul li a:hover { display: block; padding: 0.25rem 1rem; text-decoration: none; } #plug-tabs .ui-tabs-active { border-top-right-radius: 8px; border-top-left-radius: 8px; border: 1px solid gray; border-bottom: 1px solid white; margin-bottom: -1px; } #plug-tabs pre { margin: 0 0 1rem 0; } window.addEventListener('load', function() { jQuery("#plug-tabs").tabs(); });

## Get set up with LogRocket's modern React error tracking in minutes:

1.  Visit [https://logrocket.com/signup/](https://lp.logrocket.com/blg/react-signup-general) to get an app ID
2.  Install LogRocket via npm or script tag. `LogRocket.init()` must be called client-side, not server-side
    
    *   [npm](#plug-tab-1)
    *   [Script tag](#plug-tab-2)
    
    $ npm i --save logrocket 
    
    // Code:
    
    import LogRocket from 'logrocket'; 
    LogRocket.init('app/id');
                        
    
    // Add to your HTML:
    
    <script src="https://cdn.lr-ingest.com/LogRocket.min.js"></script>
    <script>window.LogRocket && window.LogRocket.init('app/id');</script>
                        
    
3.  (Optional) Install plugins for deeper integrations with your stack:
    *   Redux middleware
    *   NgRx middleware
    *   Vuex plugin

[Get started now](https://lp.logrocket.com/blg/react-signup-general)

.share-icon.share-twitter span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-twitter.svg"); } .share-icon.share-reddit span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-reddit.svg"); } .share-icon.share-linkedin span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-linkedin.svg"); } .share-icon.share-facebook span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-facebook.svg"); }

*   [#angular](https://blog.logrocket.com/tag/angular/)
*   [#react](https://blog.logrocket.com/tag/react/)
*   [#typescript](https://blog.logrocket.com/tag/typescript/)
*   [#vue](https://blog.logrocket.com/tag/vue/)

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

### Leave a Reply[Cancel reply](/what-im-looking-for-from-frontend-in-2018-2f1de300b548/#respond)

document.addEventListener('DOMContentLoaded', function () { var commentForms = document.getElementsByClassName('jetpack\_remote\_comment'); for (var i = 0; i < commentForms.length; i++) { commentForms\[i\].allowTransparency = false; commentForms\[i\].scrolling = 'no'; } });

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/logrocket/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]}

Would you be interested in joining LogRocket's developer community?

Yea No Thanks

Join LogRocket’s Content Advisory Board. You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

[Sign up now](https://lp.logrocket.com/blg/content-advisory-board-signup)

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"216\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "216" \]); //# sourceURL=jetpack-stats-js-before {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
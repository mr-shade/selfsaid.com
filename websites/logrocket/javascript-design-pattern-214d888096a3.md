---
title: "JavaScript design patterns - LogRocket Blog"
date: "2018-11-02T22:00:25+00:00"
slug: "javascript-design-pattern-214d888096a3"
image: "https://storage.googleapis.com/blog-images-backup/1*gHzJ4qDXA5jvxRfFBlBNiA.jpeg"
description: "JavaScript design patterns are reusable solutions that not only look fancy, but help prevent your codebase from growing too large and complicated."
tags: []
original_url: "https://blog.logrocket.com/javascript-design-pattern-214d888096a3/"
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

2018-11-02

1953

#vanilla javascript

Mesh Seun

237

Nov 2, 2018 ⋅ 6 min read

# JavaScript design patterns

[![](https://blog.logrocket.com/wp-content/uploads/2019/04/meshseun.jpg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/meshseun/)

[Mesh Seun](https://blog.logrocket.com/author/meshseun/) Software engineer.

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

![](https://storage.googleapis.com/blog-images-backup/1*gHzJ4qDXA5jvxRfFBlBNiA.jpeg)

#### Objective

This article will:

*   Get you accustomed to Javascript patterns
*   Explain why you should consider using design patterns in your next Javascript project

For some of the projects I built in the past, I only used Javascript patterns because I thought they looked fancy, not because they added anything meaningful to the experience.

I want to help you avoid the same mistake.

It might seem obvious, but there really should be a good reason for using a particular type of design pattern.

[![](https://storage.googleapis.com/blog-images-backup/1*GPjaPKNNUYHU8EsA3Z0JGA.png)](https://logrocket.com/signup/)

#### Why consider using a design pattern in Javascript?

> A pattern is a reusable solution that can be applied to commonly occurring problems in software engineering.

Using a design pattern helps reduce the time spent on how the code should look.

Not only that, a good design pattern enforces the DRY (Do not Repeat Yourself) concept that helps to prevent your codebase from growing large and unwieldy.

Design patterns also help team members collaborate, especially in a situation where everyone on the team is familiar with the pattern in question. Every team member will definitely communicate better while handling a uniform style (pattern) in building up a project.

#### How can you recognize a good design pattern?

As funny as this may sound, a good pattern needs to have a name and a precise, detailed structure. This is not at all the same as mere habits.

Every developer has a way of solving a specific problem (file upload, for example). When a file needs to be handled in any of our projects, we gladly rush to implement this specific solution.

Can we call this a pattern? Definitely not. A good or accepted design pattern must be related with existing patterns. Not only that, it must be approved by other developers.

Examples of how the pattern can be used and a detailed documentation cannot be overemphasized.

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

#### Design pattern categories

Let’s take a quick dive into some of the major Javascript design patterns. We will be considering just six (6) patterns in this article:

*   Constructor pattern
*   Prototype pattern
*   Module pattern
*   Singleton pattern
*   Factory pattern
*   Observer pattern

#### 1\. Constructor pattern

This is one way to create a constructor pattern:

```
function Animal (name) {

    this.name = name;

    this.properties = function() {
        console.log(`This ${this.name} can walk`);
    }
}


const animalOne = new Animal('Dog');
const animalTwo = new Animal('Cat');

console.log(animalOne.name); //Dog
console.log(animalTwo.name);
animalOne.properties(); //This Dog can walk
animalTwo.properties(); //This Cat can walk
```

Constructor pattern

For you to access the properties of a function in a constructor pattern, it needs to be initialized. This pattern is useful when thinking about Object Oriented Design.

> const object = new ConstructorObject();

The keyword `new` tells Javascript that `ConstructorObject` should behave like a constructor. One of the drawbacks of this pattern is that it does not support inheritance. A property shared among different objects will always be repeated.

#### 2\. Prototype pattern

In constructor pattern, the method or property set in the object is always `redefined` when it’s called upon. A better way to resolve this is to create a function inside the prototype function.

With this in place, functions called on instantiation won’t redefine themselves. But a prototype pattern also has a downside. A property is easily shared among all functions even when it’s not needed. You don’t have control over your properties being private or public. It’s automatically public:

```
function Animal(name) {
    this.name = name;
}

Animal.prototype.properties = function() {
    console.log(`This ${this.name} can walk`);
};

const animalOne = new Animal('Dog');
const animalTwo = new Animal('Cat');

console.log(animalOne.name); //Dog
console.log(animalTwo.name);
animalOne.properties(); //This Dog can walk
animalTwo.properties(); //This Cat can walk
```

Prototype pattern

#### 3\. Module pattern

Module pattern is a bit of an improvement over prototype pattern. In module pattern, you can set different types of modifiers (both private and public). There is a huge chance one won’t run into conflict in creating the same functions or properties.

You also have the flexibility of `re-naming` the functions publicly just like we re-named `addAnimal` function to `add`. The downside here is the inability to override the created functions from an outside environment. `removeAnimal` function can’t be overridden from outside without depending on the private property `container array`:

```
function AnimalContainter () {

    const container = []; 

    function addAnimal (name) {
        container.push(name);
    }

    function getAllAnimals() {
        return container;
    }

    function removeAnimal(name) {
        const index = container.indexOf(name);
        if(index < 1) {
            throw new Error('Animal not found in container');
        }
        container.splice(index, 1)
    }

    return {
        add: addAnimal,
        get: getAllAnimals,
        remove: removeAnimal
    }
}

const container = AnimalContainter();
container.add('Hen');
container.add('Goat');
container.add('Sheep');

console.log(container.get()) //Array(3) ["Hen", "Goat", "Sheep"]
container.remove('Sheep')
console.log(container.get()); //Array(2) ["Hen", "Goat"]
```

Module pattern

#### 4\. Singleton pattern

As interesting as the above patterns are, they can’t be used in scenarios where only one instance is needed. Let’s take a look at database connection. You can’t keep on creating an instance of database when it’s already created. You either create a new instance when it’s closed or stop the ongoing instance to create a new one.

Singleton pattern ensures the instance of an object is only created once. It’s also known as the strict pattern. A downside to this pattern is that it is difficult to test. There are hidden dependencies objects, which are difficult to single out in order to test:

```
function DatabseConnection () {

    let databaseInstance = null; 

    // track number of times the instance is created 
    let count = 0; 

    function init() {
        console.log(`Opening databse #${count + 1}`);
        /**
         * perform operation 
         */
    }

    function createIntance() {
        if(databaseInstance == null) {
            databaseInstance = init();
        }
        return databaseInstance;
    }

    function closeIntance() {
        console.log('closing database');
        databaseInstance = null;
    }

    return {
        open: createIntance,
        close: closeIntance
    }
}

const database = DatabseConnection();
database.open(); //Opening databse #1
database.open(); //Opening databse #1
database.open(); //Opening databse #1
database.close(); //closing database
```

Singleton pattern

`database.open()` from `DatabaseConnection` object will keep returning `1` because the instance was created only once.

#### 5\. Factory pattern

This pattern ensures objects are created with some sort of generic interface. We can specify the type of object we want to create from `interface` object. Let’s assume we want to handle users payment using multiple vendors(Vendor A, Vendor B … Vendor _n_). The goal of each vendor is to ensure payment is successfully carried out.

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

In this kind of scenario, the `Factory pattern` is our best bet. We won’t have to overthink how payment will be carried out irrespective of the vendor being used at a particular time.

Factory pattern provides an interface where we can specify the type of vendor we want to use in handling payment at each point in time:

```
/**
 * Vendor A
 */
VendorA = {};

VendorA.title = function title() {
  return "Vendor A";
};

VendorA.pay = function pay(amount) {
  console.log(
    `setting up configuration using username: ${this.username} and password: ${
      this.password
    }`
  );
  return `Payment for service $${amount} is successful using ${this.title()}`;
};

/**
 *Vendor B
 */
VendorB = {};
VendorB.title = function title() {
  return "Vendor B";
};

VendorB.pay = function pay(amount) {
  console.log(
    `setting up configuration using username: ${this.username} 
        and password: ${this.password}`
  );
  return `Payment for service $${amount} is successful using ${this.title()}`;
};

/**
 *
 * @param {*} vendorOption
 * @param {*} config
 */

function VendorFactory(vendorOption, config = {}) {
  const vendor = Object.create(vendorOption);
  Object.assign(vendor, config);
  return vendor;
}

const vendorFactory = VendorFactory(VendorA, {
  username: "test",
  password: "1234"
});
console.log(vendorFactory.title());
console.log(vendorFactory.pay(12));

const vendorFactory2 = VendorFactory(VendorB, {
  username: "testTwo",
  password: "4321"
});
console.log(vendorFactory2.title());
console.log(vendorFactory2.pay(50));
```

Factory pattern

Vendor A
setting up configuration using username: test and password: 1234
Payment for service $12 is successful using Vendor A

............................................................
Vendor B
setting up configuration using username: testTwo and password: 4321
Payment for service $50 is successful using Vendor B

In the `factory pattern snippet` above, we have two vendors (`A and B`). The client interfacing with `VendorFactory` need not to worry about which method to call when switching between `vendors`.

There is no point in using factory pattern if we don’t really want to create multiple instances of the same object. It would rather make the whole solution more complex.

#### 6\. Observer pattern

Observer pattern is useful in cases where an object needs to communicate with some sets of other objects at the same time. Imagine you need to sync an update across many components due to some changes.

Observer pattern prevents unnecessary push and pull of events across states. It notifies the modules involved by modifying the current state of the data:

```
function Observer() {
    this.observerContainer = [];
}

Observer.prototype.subscribe = function (element) {
    this.observerContainer.push(element);
}

/**
 * removes an element from the container
 */
Observer.prototype.unsubscribe = function (element) {

    const elementIndex = this.observerContainer.indexOf(element);
    if (elementIndex > -1) {
        this.observerContainer.splice(elementIndex, 1);
    }
}

/**
 * notifies all the element added to the container by calling 
 * each subscribed components added to the container
 */
Observer.prototype.notifyAll = function (element) {
    this.observerContainer.forEach(function (observerElement) {
        observerElement(element);
    });
}
```

observer pattern

Let’s take a look at an example to demonstrate observer pattern:

A user types a random number in an input field and the number gets modified and is displayed on two different documents.

This can also be achieved in AngularJS using two-way binding, which makes use of `Observer pattern` under the hood:

    <body style="text-align: center; margin-top: 40px;">

        <input
            type="number"
            class="number-input"
        >
        <br>
        <br>

        <small>Number multiplied by 2</small>
        <p class="document-one">0</p>
        <button id="subscribe-one">Subscribe</button>
        <button id="unsubscribe-one">UnSubscribe</button>

        <br>
        <br>
        <small>Number multiplied by 4</small>
        <p class="document-two">0</p>
        <button id="subscribe-two">Subscribe</button>
        <button id="unsubscribe-two">UnSubscribe</button>
    </body>

observer view

Let’s interact with the elements we created to demonstrate observer pattern.

The observable container (`observerContainer`) handles how `events` are stored, retrieved and removed.

A view where the user gets to add a random number which is displayed on`documentOne`(number displayed is multiplied by two) and `documentTwo` (number displayed is multiplied by four).

Also, there are `subscribe` and `unsubscribe` buttons to modify the state of each document to display the modified random number.

The first set of two buttons (subscribe and unsubscribe) updates the display on the documents (`<p></p>`), the displayed is altered by removing the update operation from the `observerContainer` by clicking the unsubscribe button.

The same operation is applicable to the next two buttons (subscribe and unsubscribe):

```
http://observers.js

     /**
         * get the reference of the views (input, display One and display Two using class name)
         * */
        const input = document.querySelector('number-input');
        const documentOne = document.querySelector('.document-one'); 
        const documentTwo = document.querySelector('.document-two');


        /**
         * operation to manipulate user input for document one 
         * */
        const updateDocumentOne = function(text) {
            documentOne.textContent = parseInt(text) * 2;
        }

        /**
         * operation to manipulate user input for document two
         * */
        const updateDocumentTwo = function(text) {
            documentTwo.textContent = parseInt(text) * 4;
        }

        const observable = new Observer();
        observable.subscribe(updateDocumentOne);
        observable.subscribe(updateDocumentTwo);

        document.querySelector('.number-input').addEventListener('keyup', function(event){
            observable.notifyAll(event.target.value);
        });

        /**
         * modify subscriptions upon a click of a button
         * */
        document.getElementById('subscribe-one').addEventListener('click', function() {
           observable.subscribe(updateDocumentOne);
        });
        document.getElementById('unsubscribe-one').addEventListener('click', function() {
           observable.unsubscribe(updateDocumentOne);
        });
        document.getElementById('subscribe-two').addEventListener('click', function() {
           observable.subscribe(updateDocumentTwo);
        });
        document.getElementById('unsubscribe-two').addEventListener('click', function() {
           observable.unsubscribe(updateDocumentTwo);
        });
```

This is a demo on how we demonstrated the use of observer pattern. The source code can also be found [here](https://codepen.io/seunboy/pen/ePxVQJ).

![](https://storage.googleapis.com/blog-images-backup/1*oaVDUmcZ9sw8q9R65M9ZBA.gif)

Observer pattern demonstration

If you need to update your view on a simple project, you may want to consider using an observer pattern rather than using a framework.

One of the downsides in observer pattern is difficulty in testing for different scenarios.

#### Conclusion

Design patterns are highly recommended for Javascript developers. They ensure projects are easily maintained and prevent unnecessary work.

For further reading, I highly recommend [Learning Javascript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/) by _Addy Osmani._

## [LogRocket](https://lp.logrocket.com/blg/javascript-signup): Debug JavaScript errors more easily by understanding the context

Debugging code is always a tedious task. But the more you understand your errors, the easier it is to fix them.

[LogRocket](https://lp.logrocket.com/blg/javascript-signup) allows you to understand these errors in new and unique ways. Our frontend monitoring solution tracks user engagement with your JavaScript frontends to give you the ability to see exactly what the user did that led to an error.

[![LogRocket Dashboard Free Trial Banner](https://blog.logrocket.com/wp-content/uploads/2020/06/reproduce-javascript-errors.gif)](https://lp.logrocket.com/blg/javascript-signup)

LogRocket records console logs, page load times, stack traces, slow network requests/responses with headers + bodies, browser metadata, and custom logs. Understanding the impact of your JavaScript code will never be easier!

[Try it for free](https://lp.logrocket.com/blg/javascript-signup).

* * *

.share-icon.share-twitter span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-twitter.svg"); } .share-icon.share-reddit span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-reddit.svg"); } .share-icon.share-linkedin span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-linkedin.svg"); } .share-icon.share-facebook span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-facebook.svg"); }

*   [#vanilla javascript](https://blog.logrocket.com/tag/vanilla-javascript/)

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

### Leave a Reply[Cancel reply](/javascript-design-pattern-214d888096a3/#respond)

document.addEventListener('DOMContentLoaded', function () { var commentForms = document.getElementsByClassName('jetpack\_remote\_comment'); for (var i = 0; i < commentForms.length; i++) { commentForms\[i\].allowTransparency = false; commentForms\[i\].scrolling = 'no'; } });

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/logrocket/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]}

Hey there, want to help make our blog better?

Yea No Thanks

Join LogRocket’s Content Advisory Board. You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

[Sign up now](https://lp.logrocket.com/blg/content-advisory-board-signup)

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"237\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "237" \]); //# sourceURL=jetpack-stats-js-before {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
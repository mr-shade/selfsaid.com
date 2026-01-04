---
title: "The quiet revolution: How JSON displaced XML - LogRocket Blog"
date: "2018-12-11T22:00:16+00:00"
slug: "the-quiet-revolution-how-json-displaced-xml-1e1f3e8552f7"
image: "https://storage.googleapis.com/blog-images-backup/1*L3a36IrkMQJmPGuOkiEaQg.jpeg"
description: "A computer science professor of mine once said, “For me to understand your code, show me your data.” The design […]"
tags: []
original_url: "https://blog.logrocket.com/the-quiet-revolution-how-json-displaced-xml-1e1f3e8552f7/"
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

2018-12-11

2726

Bruce Wilson

40

Dec 11, 2018 ⋅ 9 min read

# The quiet revolution: How JSON displaced XML

[![](https://blog.logrocket.com/wp-content/uploads/2019/04/brucewilson.jpeg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/bwilson/)

[Bruce Wilson](https://blog.logrocket.com/author/bwilson/) Software engineer, frontend development, and computer graphics

Table of contents

*   [JSON hits the scene](https://blog.logrocket.com/the-quiet-revolution-how-json-displaced-xml-1e1f3e8552f7/#d2f4)
    

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

![](https://storage.googleapis.com/blog-images-backup/1*L3a36IrkMQJmPGuOkiEaQg.jpeg)

A computer science professor of mine once said, “For me to understand your code, show me your data.” The design of data is central to designing code. It can shape the character of the code. Architectural decisions can turn on an estimation of how much and what kind of data is used during the program execution.

While it’s not uncommon in software applications to read data from relational databases or even flat files with columns of data (CSV or TSV), often a more elegant structure is needed to express more intricate relationships between data. This is where XML and JSON have come into wide use. XML was used for many years, but gradually JSON has taken over as the data format of choice in many applications.

XML and JSON each have some fundamental features that reflect the way data is organized in computer applications:

*   Data objects with attributes
*   Hierarchy to express subordinate relationships between data objects
*   Arrays to gather a possibly large number of similar data objects in one place

**Data with attributes** is a fundamental concept in computer science. It’s a central feature of object-oriented programming, and before that C and C++ had structs, Lisp had assoc lists and properties. Attributes capture features of data. A data object representing a customer would have details like a first name, last name, age, gender, etc. Data objects with attributes can also express dictionaries, constructs which map from one set of data values to another (like a map of month names to month numbers, “January” is 1, “February” is 2, and so on). This is a powerful way of encoding some intelligence in software, defining associations that reflect meaning between data.

**Hierarchy** is a common way of expressing a relationship between related objects. A customer might have an address, which in turn has attributes like street name, city, country and mail code. Hierarchy might also involve grouping, like a list of product orders outstanding for a customer.

**Arrays** provide a way to collect multiple instances of data in one place, offering the opportunity to process the data in a simple loop construct in code. The same programmatic loop can process any amount of data, be it 500 or 5,000,000, and is key for creating powerful code that can flexibly handle arbitrarily large amounts of data.

#replay-signup { margin-block: 1rem; display: flex; gap: 0.5rem; flex-direction: column; align-items: center; border: 1px solid #E6DFF6; border-radius: 16px; padding: 0.5rem 2rem; background-color: #F4F0FB; font-family: 'Proxima Nova', sans-serif; font-size: 0.95rem; h3 { margin: 0; font-weight: bold; } p { max-inline-size: 65ch; } .replay-signup-form-wrapper { width: 60%; } .nf-before-form-content { display: none; } input.nf-element\[type="submit"\] { background-color: #764abc; color: #fff; border-radius: 8px; padding-block: 10px; height: unset; width: 100%; display: block; } .nf-response-msg { font-size: 1.2rem; text-align: center; } }

### 🚀 Sign up for The Replay newsletter

[**The Replay**](https://blog.logrocket.com/the-replay-archive/) is a weekly newsletter for dev and engineering leaders.

Delivered once a week, it's your curated guide to the most important conversations around frontend dev, emerging AI tools, and the state of modern software.

Notice: JavaScript is required for this content.

var formDisplay=1;var nfForms=nfForms||\[\];var form=\[\];form.id='48';form.settings={"objectType":"Form Setting","editActive":true,"title":"Replay Newsletter Signup","show\_title":0,"allow\_public\_link":0,"embed\_form":"","clear\_complete":1,"hide\_complete":1,"default\_label\_pos":"above","wrapper\_class":"","element\_class":"","form\_title\_heading\_level":"3","key":"","add\_submit":0,"changeEmailErrorMsg":"Please enter a valid email address!","changeDateErrorMsg":"Please enter a valid date!","confirmFieldErrorMsg":"These fields must match!","fieldNumberNumMinError":"Number Min Error","fieldNumberNumMaxError":"Number Max Error","fieldNumberIncrementBy":"Please increment by ","formErrorsCorrectErrors":"Please correct errors before submitting this form.","validateRequiredField":"This is a required field.","honeypotHoneypotError":"Honeypot Error","fieldsMarkedRequired":"Fields marked with an <span class=\\"ninja-forms-req-symbol\\">\*<\\/span> are required","currency":"","unique\_field\_error":"A form with this value has already been submitted.","logged\_in":false,"not\_logged\_in\_msg":"","sub\_limit\_msg":"The form has reached its submission limit.","calculations":\[\],"conditions":\[\],"mp\_breadcrumb":1,"mp\_progress\_bar":1,"mp\_display\_titles":0,"formContentData":\[{"formContentData":\["email","submit\_1760469924554"\],"order":0,"type":"part","clean":true,"title":"Part Title","key":"hzyqqobd"}\],"objectDomain":"display","drawerDisabled":false,"ninjaForms":"Ninja Forms","fieldTextareaRTEInsertLink":"Insert Link","fieldTextareaRTEInsertMedia":"Insert Media","fieldTextareaRTESelectAFile":"Select a file","formHoneypot":"If you are a human seeing this field, please leave it empty.","fileUploadOldCodeFileUploadInProgress":"File Upload in Progress.","fileUploadOldCodeFileUpload":"FILE UPLOAD","currencySymbol":"&#36;","thousands\_sep":",","decimal\_point":".","siteLocale":"en\_US","dateFormat":"m\\/d\\/Y","startOfWeek":"1","of":"of","previousMonth":"Previous Month","nextMonth":"Next Month","months":\["January","February","March","April","May","June","July","August","September","October","November","December"\],"monthsShort":\["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"\],"weekdays":\["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"\],"weekdaysShort":\["Sun","Mon","Tue","Wed","Thu","Fri","Sat"\],"weekdaysMin":\["Su","Mo","Tu","We","Th","Fr","Sa"\],"recaptchaConsentMissing":"reCaptcha validation couldn&#039;t load.","recaptchaMissingCookie":"reCaptcha v3 validation couldn&#039;t load the cookie needed to submit the form.","recaptchaConsentEvent":"Accept reCaptcha cookies before sending the form.","currency\_symbol":"","beforeForm":"","beforeFields":"","afterFields":"","afterForm":""};form.fields=\[{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"email","label":"Email","key":"email","label\_pos":"hidden","required":1,"default":"","placeholder":"Email","container\_class":"","element\_class":"","admin\_label":"","help\_text":"","custom\_name\_attribute":"email","personally\_identifiable":1,"value":"","manual\_key":true,"drawerDisabled":false,"id":401,"beforeField":"","afterField":"","parentType":"email","element\_templates":\["email","input"\],"old\_classname":"","wrap\_template":"wrap"},{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"submit","label":"Submit","processing\_label":"Submitting...","container\_class":"","element\_class":"","key":"submit\_1760469924554","admin\_label":"","drawerDisabled":false,"id":402,"beforeField":"","afterField":"","value":"","label\_pos":"above","parentType":"textbox","element\_templates":\["submit","button","input"\],"old\_classname":"","wrap\_template":"wrap-no-label"}\];nfForms.push(form); <div class="nf-mp-header"></div> <div class="nf-mp-body"></div> <div class="nf-mp-footer"></div> {{{ data.renderProgressBar() }}} {{{ data.renderBreadcrumbs() }}} {{{ data.renderPartTitle() }}} <h3> {{{ data.title }}} </h3> {{{ data.renderNextPrevious() }}} <ul class="nf-next-previous"> <# if ( data.showPrevious ) { #> <li class="nf-previous-item"> <input type="button" class="nf-previous" value="{{{ data.prevLabel }}}" /> </li> <# } #> <# if ( data.showNext ) { #> <li class="nf-next-item"> <input type="button" class="nf-next" value="{{{ data.nextLabel }}}" /> </li> <# } #> </ul> <ul class="nf-breadcrumbs"> <# \_.each( data.parts, function( part, index ) { #> <li class="{{{ ( data.currentIndex == index ) ? 'active' : '' }}} {{{ ( part.errors ) ? 'errors' : '' }}}"> <a href="#" class="nf-breadcrumb" data-index="{{{ index }}}">{{{ ( part.errors ) ? '' : '' }}} {{{ part.title }}}</a> </li> <# } ); #> </ul> <div class="nf-progress-container"> <div class="nf-progress" style="width: {{{ data.percent }}}%;"></div> </div>

function registerNinjaFormsCallback() { if (!(window.nfRadio && window.lr\_analytics)) { return; } window.nfRadio.channel("forms").on("submit:response", function(submission) { console.log(submission); if (submission.data.form\_id !== "48") { return; } window.lr\_analytics.track("blog-replay-newsletter-signup", { post: window.location.pathname, email: submission.data.fields\_by\_key?.email?.value, }); }); } registerNinjaFormsCallback();

## The inception of XML

In the mid-1990s software developers started using [XML](https://en.wikipedia.org/wiki/XML) to define structured data. HTML had been used very successfully to tag elements of a web document to specify their appearance. XML used a very similar tagged notation to specify parts of data and their significance. HTML was designed to be read and interpreted by a web browser. XML was designed to be read mostly by application software.

Here’s an example of XML syntax, representing some data about a customer and their recent orders, demonstrating attributes, hierarchy, and arrays:

<customers>
  <customer firstName="Pat" lastName="Smith">
    <address>
      <city>Anytown</city>
      <country>United States</country>
      <state>Missouri</state>
      <street>123 Main Street</street>
    </address>
    <orders>
      <order>
        <orderDate>20180901</orderDate>
        <orderId>11111111</orderId>
        <price>159.99</price>
        <productName>Floating Bluetooth Speaker</productName>
        <quantity>1</quantity>
        <sku>123123123</sku>
      </order>
      <order>
        <orderDate>20180915</orderDate>
        <orderId>22222222</orderId>
        <price>39.95</price>
        <productName>Quad Copter</productName>
        <quantity>1</quantity>
        <sku>456456456</sku>
      </order>
    </orders>
  </customer>
</customers>

(The example here is nicely formatted and indented for readability. In real applications, the newlines and indentation would most likely be stripped away — computers can still read it even if humans can’t.)

XML became wildly popular as a way to exchange data between the client and server sides in so-called “multi-tier” applications and was also commonly used to define the format of configuration files for many applications. Software standards and tools were developed to specify, validate and manipulate XML-structured data. [DTDs (Data Type Definitions)](https://en.wikipedia.org/wiki/Document_type_definition) and later [XSchema](https://en.wikipedia.org/wiki/XML_schema) to express the structure of XML data, [XSLT](https://en.wikipedia.org/wiki/XSLT) to transform XML data from one format to another — each of these themselves encoded in XML format (XML-like in the case of DTDs).

But the popularity of XML also coincided with the growth of B2B applications. XML began to be used to pass business-critical data between partner corporations large and small, and startup companies like [Aruba](https://en.wikipedia.org/wiki/SAP_Ariba) and [Commerce One](https://en.wikipedia.org/wiki/Commerce_One) appeared at this time providing platforms and toolkits for an exchange of data.

SOAP (“Simple Object Access Protocol”) was introduced as an XML-based interchange protocol: a common “envelope” of XML headers which provided a way to specify addressing/routing and security, and “payload” section that carried application-specific data to be sent from one computer to another. Other standards were developed for use under the general umbrella of “Electronic Data Interchange” (EDI) for B2B applications.

## XML — the good, the bad, the ugly

XML was a powerful standard for structuring data for processing and exchanging data. But it had some quirks and limitations.

It could be very verbose. The leading tag at the start of an XML element defines the content for processing by machines and to be readable by people alike. When you see “Customer” as the start of an XML element, you know what kind of data that element encloses. The trailing tag improves readability slightly for people but doesn’t really add anything for machine readability. Eliminating the closing tag of XML element in favor of a simpler way of terminating the content could measurably reduce the size of the data.

Also, there is no explicit representation of an array element in XML. Collections of similar objects that were intended to be processed as a group were simply put together under a common element. But there’s no explicit indication of this intention in the XML data. A spec in a DTD or XSchema could be created to define this, and it would be clear from reading the code that processes the data that the code is looping to process repeated XML elements.

But XML offers no visual indicator of a data array. It’s possible to **create** such an indicator by using a wrapping element (like an `<orders>` element around a group of `<order>` elements), but this syntax is not required in XML.

* * *

[

![](https://blog.logrocket.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-06-at-7.43.53-AM.png)

## Over 200k developers use LogRocket to create better digital experiences

![](https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.png)Learn more →





](https://lp.logrocket.com/blg/learn-more)

* * *

@media all and (max-width: 800px){ .tweet-embed-container {flex-direction: column !important;} .single-tweet, .embed-tweet-right {width: 100% !important;} } .embed-link {text-decoration: none;} .embed-link:hover {text-decoration: none;} .tweet-embed-container {border-radius: 20px; background: radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), #764ABC; background-blend-mode: overlay, overlay, normal; box-shadow: 0 4px 0 #d5d5d5; width: auto; padding: 20px 15px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; margin: 0 auto; gap: 3%; } .single-tweet {width: 50%;} .single-tweet img {max-width: 100%;height: auto; border-radius:7px;} .embed-tweet-right {width: 46%;} .embed-tweet-right h2 {font-family: 'Avenir'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 28px; color: #FFFFFF;} .embed-btn { display: flex; flex-direction: row; justify-content: left; width: 170px; gap: 5px; align-items: center; padding: 0px 10px; font-family: 'Avenir'; font-style: normal; font-weight: 900; font-size: 16px; line-height: 16px; color: #764ABC; height: 48px; /\* White \*/ background: #FFFFFF; mix-blend-mode: normal; box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.11); border-radius: 80px; border: none; }

XML does support namespacing, a prefix to the element name indicating that it belongs in a certain group of related tags, most likely originated by a separate organization and governed by a distinct XML schema. It’s useful for organization and validation by a computer (especially for partitioning/classifying the parts of a data exchange: SOAP envelope vs. the payload, etc.), but adds complexity to parsing of XML as well as visual clutter for the human reader.

Then there’s one of the classic topics of debate in software engineering (right in there with “curly braces on the same line or next line”): [should attributes or elements be used for properties of a data object](https://www.ibm.com/developerworks/xml/library/x-eleatt/index.html)? XML leaves this choice open to the implementer. Details about a Customer object could equally be specified using XML attributes:

<customers>
  <customer firstName="Pat" lastName="Smith">
  ...

…or using subelements of the XML data object:

<customers>
  <customer>
    <firstName>Pat</firstName>
    <lastName>Smith</lastName>
    ...

Attribute names have to be unique to the element, there can’t be more than one. But there can be more than one subelement with the same tag name under any given element.

Subelements have an implicit order that could be treated as significant by the producing and consuming code (without any visual cue). Attributes do not have an explicit order.

There’s kind of a notion that attributes should express an “is-a” relationship to the XML element, whereas subelements express a “has-a” relationship, but in a lot of cases, the decision is a gray area.

## JSON hits the scene

In the early 2000s, an alternative format was proposed: JavaScript Object Notation, aka JSON. Appearing as a part of an early version of the ECMAScript specification, JSON was championed by [Douglas Crockford](http://crockford.com/) (author of “JavaScript: The Good Parts”). In 2006, Crockford created the [json.org website](http://www.json.org/) to extoll the virtues of JSON, saying JSON is “a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language”.

Here’s an example of the same customer data, formatted as JSON:

{"customers": \[{
    "customer": {
        "lastName": "Smith",
        "firstName": "Pat",
        "address": {
            "city": "Anytown",
            "country": "United States",
            "state": "Missouri",
            "street": "123 Main Street"
        },
    "orders": \[
            {
        "orderDate": "20180901",
        "orderId": "11111111",
        "price": 159.99,
        "productName": "Floating Bluetooth Speaker",
        "quantity": 1,
        "sku": "123123123"
            },
            {
        "orderDate": "20180915",
        "orderId": "22222222",
        "price": 39.95,
        "productName": "Quad Copter",
        "quantity": 1,
        "sku": "456456456"
            }
    \]
    }
}\]}

JSON represents objects (dictionaries) and arrays explicitly. It is inherently a dictionary type of data representation. Where an XML hierarchy is expressed with nested elements in XML, in JSON it’s expressed using an attribute (or in JavaScript terminology, a property) on the parent object whose value is the child object (notice the “address” or “orders” attribute in the above example). Arrays are also expressed explicitly using square brackets and can hold primitive types like strings or numbers as well as objects.

JSON simplified things quite a bit compared to XML format. The only association that can be expressed in JSON is an attribute. Hierarchy is expressed by nested curly braces, where each curly brace-enclosed object is associated with a property of its parent. And there’s no terminating name or label at each level of hierarchy, just a closing curly brace, making JSON a much simpler and more succinct way than XML of encoding a collection of data.

And there’s a close alignment with the JavaScript language: JSON is essentially the representation of a JavaScript object literal, and object literals are one of the core features of JavaScript.

JSON certainly grew as part of the growth of JavaScript as the preeminent software development language that it is today. With the rise of more and more sophisticated JavaScript frameworks like Angular and React (as well as grunt, gulp, webpack… the list goes on and on), the notion of isomorphic development took hold: JavaScript used everywhere.

Several books were written about [“MEAN” development](https://www.mongodb.com/blog/post/the-modern-application-stack-part-1-introducing-the-mean-stack), using MongoDB, Express, Angular, and Node for all tiers of a web application (substitute your choice of front-end framework for Angular). JSON was a natural choice for the data interchange format between server side and front end.

It’s the natural format in which data is stored in MongoDB (MongoDB is implemented in C++ but stores data in a JSON-like format called BSON, binary serialization of JSON). Conditions in MongoDB queries are expressed using JavaScript object literals, and JavaScript code can be used to interpret the JSON results of a MongoDB query.

Parsing XML involves using an API — some kind of library, written in the programming language being used. The same is true for JSON, except in JavaScript: the `JSON.parse()` function (supported since ES6) converts JSON from string form into native JavaScript objects, arrays, and hashes. Once the JSON has been parsed it can be traversed as regular JavaScript data structure.

This is another way that JSON contributes to making isomorphic programming in JavaScript a big win! Other software development languages (Python, PHP, Ruby, Java) do provide JSON parsing support out of the box, making JSON a way to exchange data between applications written in different languages.

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

## Back to the future: Precursors of JSON data representation

That JSON data looks so much like JavaScript object literal syntax is likely no accident.

Brendan Eich, the original creator of JavaScript, borrowed ideas from the languages [Scheme](https://en.wikipedia.org/wiki/Scheme_%28programming_language%29) and [Self](https://en.wikipedia.org/wiki/Self_%28programming_language%29) for JavaScript. Scheme is a dialect of [Lisp](https://en.wikipedia.org/wiki/Lisp_%28programming_language%29), and the syntax of Lisp is “[homoiconic](https://en.wikipedia.org/wiki/Homoiconicity)” — code and data are represented in exactly the same way, using very simple nested parenthesized syntax. All code and data in Lisp is a list (like an array). Dictionaries can be represented using nested lists.

Here is an example of the same customer data represented in Lisp:

(setq customer
      '((firstName "Pat")
    (lastName "Smith")
    (address (street "123 Main Street")
         (city "Anytown")
         (state "Missouri")
         (country "United States"))
    (orders ((order (orderId "11111111")
            (orderDate "20180901")
            (productName "Floating Bluetooth Speaker")
            (quantity 1)
            (sku "123123123")
            (price 159.99))
         (order (orderId "22222222")
            (orderDate "20180915")
            (productName "Quad Copter")
            (quantity 1)(sku "456456456")
            (price 39.95)) )) ))

And here is a simple Lisp function that interprets the data:

(defun find-orders (customer)
  (assoc 'orders customer))

…and a demo of how the function and the data work together:

\> (find-orders customer)
(orders ((order (orderId "11111111") (orderDate "20180901") ...)))

The first element in a Lisp list is significant. In code, it begins an executable “form” (a function), but in data often serves as a label that is somehow associated with the succeeding elements in the list. As demonstrated in the above code, the “assoc” function looks up data by testing the first element of each of the sublists. This is the equivalent of a dictionary lookup in other programming languages.

This equivalence of data and code carried over to JavaScript to a large extent. Not only is JSON strongly similar (but not quite homoiconic) to the representation for a JavaScript object literal, but it is also parseable JavaScript code. It was common years ago to use the built-in JavaScript `eval()` function to evaluate and convert JSON data to an object literal.

The `eval()` function is also standard in Lisp. It was perhaps the first programming language to use a REPL, or read-eval-print loop. Today it’s considered to be a security risk to use `eval()` on arbitrary data submitted from an external source, but the newer (and more secure) `JSON.parse()` method fits the purpose. There’s also a function object that provides a way to convert a string into a JavaScript function — again, this honoring the duality of code and data that began in Lisp and is carried forth in JavaScript today.

## Where we are today

JSON uses a simpler syntax to represent two of the most fundamental data structures in software development: dictionaries and arrays. Its close alignment with the syntax of JavaScript makes it the ideal choice of data format for many applications. Parsing JSON data is as simple as using `JSON.parse()` to convert it to JavaScript and then traversing the result as a regular JavaScript object.

It’s simpler in syntax than XML, element for element, consuming less space to capture a collection of data and leaving the markup less dense and more easily human readable. Features of JSON like explicit arrays and unambiguous representation of data object attributes as JavaScript properties promote a simpler and cleaner syntax.

However, XML is hardly dead and gone today. Website syndication with RSS is still widely used (it’s a basic feature of WordPress, which powers a significant number of today’s websites), and [a recent article](https://www.wired.com/story/rss-readers-feedly-inoreader-old-reader/) suggested that it may stage a comeback. Electronic data interchange (EDI) is still in wide use by major corporations.

A recent story about the [NotPetya ransomware attack](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/) told of the international shipping firm Maersk and how it was shut down for days when their shipping and logistics EDI would no longer run, resulting in container trucks lined up at shipping terminals and stalled deliveries around the world.

But representing associations between objects as a nested hierarchy doesn’t fit some application domains. One example is social network data, for which [GraphQL](https://graphql.org/) (championed by Facebook, and still using a JSON-like representation) is often a choice.

[RDF](https://www.w3.org/RDF/) (an XML-based representation developed by the [W3C Semantic Web group](https://www.w3.org/standards/semanticweb/)) also expresses non-hierarchical graphs of data using “(subject, predicate, object)” triples, where the “object” part may be a reference to another triple to define a general graph of relationships between data. It’s being used in [many projects on the web](https://en.wikipedia.org/wiki/Resource_Description_Framework).

And namespacing that was originally used in XML now finds its way into tag data in HTML (for example, semantic markup like the “twitter:” and “og:” namespaces in Twitter and Facebook card markup).

But still, for many applications, JSON greatly simplifies implementation of Internet-based software systems. It’s a JavaScript world out there and JSON plays a big role!

.plug-cta-button { display: block; margin: 0 auto; width: 250px; height: 55px; background-color: #764abc; border-radius: 8px; color: #fff !important; font-family: proxima-nova, sans-serif; font-size: 16px; font-weight: 800; text-decoration: none; text-align: center; line-height: 55px } #plug-tabs > ul { display: flex; border-bottom: 1px solid gray; list-style: none; padding: 0; } #plug-tabs > ul li a, #plug-tabs > ul li a:active, #plug-tabs > ul li a:hover { display: block; padding: 0.25rem 1rem; text-decoration: none; } #plug-tabs .ui-tabs-active { border-top-right-radius: 8px; border-top-left-radius: 8px; border: 1px solid gray; border-bottom: 1px solid white; margin-bottom: -1px; } #plug-tabs pre { margin: 0 0 1rem 0; } window.addEventListener('load', function() { jQuery("#plug-tabs").tabs(); });

## Get set up with LogRocket's modern error tracking in minutes:

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

[Get started now](https://lp.logrocket.com/blg/signup)

.share-icon.share-twitter span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-twitter.svg"); } .share-icon.share-reddit span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-reddit.svg"); } .share-icon.share-linkedin span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-linkedin.svg"); } .share-icon.share-facebook span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-facebook.svg"); }

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

### Leave a Reply[Cancel reply](/the-quiet-revolution-how-json-displaced-xml-1e1f3e8552f7/#respond)

document.addEventListener('DOMContentLoaded', function () { var commentForms = document.getElementsByClassName('jetpack\_remote\_comment'); for (var i = 0; i < commentForms.length; i++) { commentForms\[i\].allowTransparency = false; commentForms\[i\].scrolling = 'no'; } });

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/logrocket/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]}

Would you be interested in joining LogRocket's developer community?

Yea No Thanks

Join LogRocket’s Content Advisory Board. You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

[Sign up now](https://lp.logrocket.com/blg/content-advisory-board-signup)

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"40\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "40" \]); //# sourceURL=jetpack-stats-js-before {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
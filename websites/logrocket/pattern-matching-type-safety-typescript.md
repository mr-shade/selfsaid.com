---
title: "Pattern matching and type safety in TypeScript - LogRocket Blog"
date: "2023-04-19T02:00:48+00:00"
slug: "pattern-matching-type-safety-typescript"
image: "https://blog.logrocket.com/wp-content/uploads/2019/01/1_-y966xjyDL3Lxu_8hvu7nA.png?resize=1024,682"
description: "When working with complex data structures or discriminating unions, pattern matching in TypeScript is especially useful."
tags: []
original_url: "https://blog.logrocket.com/pattern-matching-type-safety-typescript/"
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

2023-04-18

2273

#typescript

Michal Zalecki

175

Apr 18, 2023 ⋅ 8 min read

# Pattern matching and type safety in TypeScript

[![](https://blog.logrocket.com/wp-content/uploads/2019/04/michalzalecki.jpg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/michalzalecki/)

[Michal Zalecki](https://blog.logrocket.com/author/michalzalecki/) Senior Engineer at @Tooploox 💎, smart contracts, fan of hackathons, React Wrocław meetup organizer.

Table of contents

*   [Algebraic data types: `Either` `left` or `right`](https://blog.logrocket.com/pattern-matching-type-safety-typescript/#either-left-right-algebraic-data-types)
    
*   [Pattern matching libraries in TypeScript](https://blog.logrocket.com/pattern-matching-type-safety-typescript/#pattern-matching-libraries-typescript)
    *   [TS-Pattern](https://blog.logrocket.com/pattern-matching-type-safety-typescript/#ts-pattern)
        
    *   [Unionize](https://blog.logrocket.com/pattern-matching-type-safety-typescript/#unionize)
        
    *   [Pratica](https://blog.logrocket.com/pattern-matching-type-safety-typescript/#pratica)
        
*   [Type-safe reducers](https://blog.logrocket.com/pattern-matching-type-safety-typescript/#type-safe-reducers)
    
*   [Runtime types](https://blog.logrocket.com/pattern-matching-type-safety-typescript/#runtime-types)
    
*   [Conclusion](https://blog.logrocket.com/pattern-matching-type-safety-typescript/#conclusion)
    

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

_**Editor’s note**: This article was last updated on 18 April 2023 to include information about some popular TypeScript pattern matching libraries, including TS-Pattern, Unionize, and Pratica._

![](https://blog.logrocket.com/wp-content/uploads/2019/01/1_-y966xjyDL3Lxu_8hvu7nA.png)

Most programmers understand type safety as a programming language feature that eliminates type errors. As a [statically typed superset of JavaScript, TypeScript](https://blog.logrocket.com/write-type-safe-css-modules/) addresses this issue, especially in strict mode, which is more rigorous and performs additional checks.

With that said, I’m more interested in understanding type safety as the extent of program correctness rather than just making sure that what I expect to be a string is a string and not a number.

In this article, we’ll present several techniques that you can apply when working on day-to-day tasks to increase your confidence that your code is correct. Let’s get started!

_Jump ahead:_

*   [Algebraic data types: `Either` `left` or `right`](#either-left-right-algebraic-data-types)
*   [Pattern matching libraries in TypeScript](#pattern-matching-libraries-typescript)
    *   [TS-Pattern](#ts-pattern)
    *   [Unionize](#unionize)
    *   [Pratica](#pratica)
*   [Type-safe reducers](#type-safe-reducers)
*   [Runtime types](#runtime-types)

#replay-signup { margin-block: 1rem; display: flex; gap: 0.5rem; flex-direction: column; align-items: center; border: 1px solid #E6DFF6; border-radius: 16px; padding: 0.5rem 2rem; background-color: #F4F0FB; font-family: 'Proxima Nova', sans-serif; font-size: 0.95rem; h3 { margin: 0; font-weight: bold; } p { max-inline-size: 65ch; } .replay-signup-form-wrapper { width: 60%; } .nf-before-form-content { display: none; } input.nf-element\[type="submit"\] { background-color: #764abc; color: #fff; border-radius: 8px; padding-block: 10px; height: unset; width: 100%; display: block; } .nf-response-msg { font-size: 1.2rem; text-align: center; } }

### 🚀 Sign up for The Replay newsletter

[**The Replay**](https://blog.logrocket.com/the-replay-archive/) is a weekly newsletter for dev and engineering leaders.

Delivered once a week, it's your curated guide to the most important conversations around frontend dev, emerging AI tools, and the state of modern software.

Notice: JavaScript is required for this content.

var formDisplay=1;var nfForms=nfForms||\[\];var form=\[\];form.id='48';form.settings={"objectType":"Form Setting","editActive":true,"title":"Replay Newsletter Signup","show\_title":0,"allow\_public\_link":0,"embed\_form":"","clear\_complete":1,"hide\_complete":1,"default\_label\_pos":"above","wrapper\_class":"","element\_class":"","form\_title\_heading\_level":"3","key":"","add\_submit":0,"changeEmailErrorMsg":"Please enter a valid email address!","changeDateErrorMsg":"Please enter a valid date!","confirmFieldErrorMsg":"These fields must match!","fieldNumberNumMinError":"Number Min Error","fieldNumberNumMaxError":"Number Max Error","fieldNumberIncrementBy":"Please increment by ","formErrorsCorrectErrors":"Please correct errors before submitting this form.","validateRequiredField":"This is a required field.","honeypotHoneypotError":"Honeypot Error","fieldsMarkedRequired":"Fields marked with an <span class=\\"ninja-forms-req-symbol\\">\*<\\/span> are required","currency":"","unique\_field\_error":"A form with this value has already been submitted.","logged\_in":false,"not\_logged\_in\_msg":"","sub\_limit\_msg":"The form has reached its submission limit.","calculations":\[\],"conditions":\[\],"mp\_breadcrumb":1,"mp\_progress\_bar":1,"mp\_display\_titles":0,"formContentData":\[{"formContentData":\["email","submit\_1760469924554"\],"order":0,"type":"part","clean":true,"title":"Part Title","key":"hzyqqobd"}\],"objectDomain":"display","drawerDisabled":false,"ninjaForms":"Ninja Forms","fieldTextareaRTEInsertLink":"Insert Link","fieldTextareaRTEInsertMedia":"Insert Media","fieldTextareaRTESelectAFile":"Select a file","formHoneypot":"If you are a human seeing this field, please leave it empty.","fileUploadOldCodeFileUploadInProgress":"File Upload in Progress.","fileUploadOldCodeFileUpload":"FILE UPLOAD","currencySymbol":"&#36;","thousands\_sep":",","decimal\_point":".","siteLocale":"en\_US","dateFormat":"m\\/d\\/Y","startOfWeek":"1","of":"of","previousMonth":"Previous Month","nextMonth":"Next Month","months":\["January","February","March","April","May","June","July","August","September","October","November","December"\],"monthsShort":\["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"\],"weekdays":\["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"\],"weekdaysShort":\["Sun","Mon","Tue","Wed","Thu","Fri","Sat"\],"weekdaysMin":\["Su","Mo","Tu","We","Th","Fr","Sa"\],"recaptchaConsentMissing":"reCaptcha validation couldn&#039;t load.","recaptchaMissingCookie":"reCaptcha v3 validation couldn&#039;t load the cookie needed to submit the form.","recaptchaConsentEvent":"Accept reCaptcha cookies before sending the form.","currency\_symbol":"","beforeForm":"","beforeFields":"","afterFields":"","afterForm":""};form.fields=\[{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"email","label":"Email","key":"email","label\_pos":"hidden","required":1,"default":"","placeholder":"Email","container\_class":"","element\_class":"","admin\_label":"","help\_text":"","custom\_name\_attribute":"email","personally\_identifiable":1,"value":"","manual\_key":true,"drawerDisabled":false,"id":401,"beforeField":"","afterField":"","parentType":"email","element\_templates":\["email","input"\],"old\_classname":"","wrap\_template":"wrap"},{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"submit","label":"Submit","processing\_label":"Submitting...","container\_class":"","element\_class":"","key":"submit\_1760469924554","admin\_label":"","drawerDisabled":false,"id":402,"beforeField":"","afterField":"","value":"","label\_pos":"above","parentType":"textbox","element\_templates":\["submit","button","input"\],"old\_classname":"","wrap\_template":"wrap-no-label"}\];nfForms.push(form); <div class="nf-mp-header"></div> <div class="nf-mp-body"></div> <div class="nf-mp-footer"></div> {{{ data.renderProgressBar() }}} {{{ data.renderBreadcrumbs() }}} {{{ data.renderPartTitle() }}} <h3> {{{ data.title }}} </h3> {{{ data.renderNextPrevious() }}} <ul class="nf-next-previous"> <# if ( data.showPrevious ) { #> <li class="nf-previous-item"> <input type="button" class="nf-previous" value="{{{ data.prevLabel }}}" /> </li> <# } #> <# if ( data.showNext ) { #> <li class="nf-next-item"> <input type="button" class="nf-next" value="{{{ data.nextLabel }}}" /> </li> <# } #> </ul> <ul class="nf-breadcrumbs"> <# \_.each( data.parts, function( part, index ) { #> <li class="{{{ ( data.currentIndex == index ) ? 'active' : '' }}} {{{ ( part.errors ) ? 'errors' : '' }}}"> <a href="#" class="nf-breadcrumb" data-index="{{{ index }}}">{{{ ( part.errors ) ? '' : '' }}} {{{ part.title }}}</a> </li> <# } ); #> </ul> <div class="nf-progress-container"> <div class="nf-progress" style="width: {{{ data.percent }}}%;"></div> </div>

function registerNinjaFormsCallback() { if (!(window.nfRadio && window.lr\_analytics)) { return; } window.nfRadio.channel("forms").on("submit:response", function(submission) { console.log(submission); if (submission.data.form\_id !== "48") { return; } window.lr\_analytics.track("blog-replay-newsletter-signup", { post: window.location.pathname, email: submission.data.fields\_by\_key?.email?.value, }); }); } registerNinjaFormsCallback();

## Algebraic data types: `Either` `left` or `right`

Often in our programs, the majority of bugs are caused by either handling a particular case incorrectly or not handling it at all. This is a very broad definition of what causes bugs, but the remedy is also generic and has many applications. To address issues that originate from incorrectly handling decisions in our code, we use algebraic data types, a popular concept in functional programming.

An [algebraic data type is a kind of composite type](https://blog.logrocket.com/write-fewer-tests-by-creating-better-typescript-types/#algebraic-data=types-impossible-states), a type that is a result of combining a few types together. Sound familiar? There is a [similar construct in TypeScript called a union type](https://blog.logrocket.com/understanding-discriminated-union-intersection-types-typescript/):

type Either = "left" | "right";

const result1: Either = "left";
const result2: Either = "right";
const result3: Either = "forward";

In the code above, TypeScript will throw an error for `result3` because it’s not assignable to the type `Either`. The `result` type accepts only `left` or `right` values, and `forward` isn’t assignable to the type `Either`. Is this an algebraic data type we’re looking for? Not yet, first, we need an interface:

type Left = { tag: "left", error: Error };
type Right<T> = { tag: "right", result: T };
type Either&lt;T> = Left | Right<T>;

`Either` is now a tagged union, or a discriminated union. The TypeScript type system is structural, and a tagged union is as close as we can get to an algebraic data type in TypeScript. This notation is actually very close to how we can export algebraic data types to JSON in purely functional languages like Haskell.

What’s the benefit of such an approach? While it might look like unnecessary boilerplate, it pays off. We can now simulate pattern matching with a `switch` statement:

![Simulate Pattern Matching Switch Statement Typescript Union Type](https://blog.logrocket.com/wp-content/uploads/2023/05/2simulate-pattern-matching-switch-statement-typescript-union-type.png)

The function allows us to match on a tag of a value of type `Either<string>`. Right away, we get a hint on all values from which we can choose:

![Match Tag Value Type Either String](https://blog.logrocket.com/wp-content/uploads/2023/05/3match-tag-value-type-either-string.png?w=730)

Now, TypeScript knows that the only available members of the `left` value are `tag` and `error`. The result is only available on the `right` type, which we know doesn’t fall under the tag that equals `left`:

![Right Type Result Equal Left Tag](https://blog.logrocket.com/wp-content/uploads/2023/05/4right-type-result-equal-left-tag.png)

I forgot to handle the `right` case! By specifying the `match` return type explicitly, TypeScript can warn me about any cases I forgot to handle:

function match (value: Either <string>): string {
  switch(value.tag) {
      case "left":
          return value.error.message;
      case "right":
          return value.result;
      default:
        //Type guard
        const \_exhaustiveCheck: never = value;
        return \_exhaustiveCheck;
  }
}

We’ve also [added a type guard to ensure that all possible cases are handled](https://blog.logrocket.com/how-to-use-type-guards-typescript/). Now, `match` returns a string for every case of value it accepts. Now, you should have an understanding of which algebraic data types can be useful.

Pattern matching with a `switch` statement is widely used because it is both type-safe and easy to understand. The TypeScript compiler can detect if you miss any case in the `switch` statement, and you can use the type system to enforce the correct properties for each variant.

We can implement the reusable implementation of `match` using callbacks:

type Left<T> = { tag: "left", value: T };
type Right<T> = { tag: "right", value: T };
type Either<L, R> = Left<L> | Right<R>;
function match<T, L, R>(
    input: Either<L, R>,
    left: (left: L) => T,
    right: (right: R) => T,
) {
    switch (input.tag) {
        case "left":
            return left(input.value);
        case "right":
            return right(input.value);
    }
}
function validate(): Either<Error, { name: string }> {
}
const value: string | null
const value = match(
    validate(),
    \_left => null, // \_left: Error
    right => right.name, // right: { name: string }
);

What’s really neat about this particular `match` implementation is that as long as you get the type of the input right, the rest of the types for a `match` call are inferred, and no additional typing is required.

Before we look into a more complex example, have you heard about the `Either` type before? There’s a good chance you have!

We often use the `Either` type when we have to handle either of two cases. By convention, `left` is used to hold an error, and `right` is used to hold the correct value. If you have a problem remembering the order, think about how the correct value belongs on the “right” side. If that doesn’t stick, consider the arguments and callbacks we’re used to in Node.js:

import fs from "fs";
fs.readFile("input.txt", (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString());
});

The first argument on the left side of the arguments list is an error, and the second on the right side of the arguments list is a result. If you’re interested in algebraic data types, take a look at [`fp-ts`](https://github.com/gcanti/fp-ts), a library that defines many different algebraic data types and has a rich ecosystem.

## Pattern matching libraries in TypeScript

There are several pattern matching libraries available for TypeScript that provide more expressive and concise ways to perform pattern matching. These libraries offer different APIs and features; depending on your use case and personal preference, you can choose the one that best fits your needs.

### TS-Pattern

[TS-Pattern](https://github.com/gvergnaud/ts-pattern) is a lightweight library that allows you to use pattern matching with TypeScript in a functional programming style. It provides an intuitive and type-safe API to match patterns and destructure data. Some of its features include:

*   Exhaustiveness checking: Ensures that all cases are handled in a `match` expression
*   Wildcard pattern: Matches any value
*   Predicate pattern: Matches values satisfying a predicate function
*   Union pattern: Matches values belonging to any of the specified patterns

The code below shows an example usage:

import { match, \_\_ } from "ts-pattern";

type Shape = Circle | Rectangle | Triangle;

interface Circle {
  kind: "circle";
  radius: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

const getArea = (shape: Shape): number => {
  match(shape)
    .with({ kind: "circle" }, ({ radius }) => Math.PI \* radius \* radius)
    .with({ kind: "rectangle" }, ({ width, height }) => width \* height)
    .with({ kind: "triangle" }, ({ base, height }) => 0.5 \* base \* height)
    .exhaustive();
}

const circle: Circle = { kind: "circle", radius: 5 };
const rectangle: Rectangle = { kind: "rectangle", width: 4, height: 6 };
const triangle: Triangle = { kind: "triangle", base: 3, height: 4 };

console.log(getArea(circle)); // 78.53981633974483
console.log(getArea(rectangle)); // 24
console.log(getArea(triangle)); // 6

In the code snippet above, we use the TS-Pattern library to create a union type, which is also called a sum type, and a function to calculate the area of different shapes using pattern matching.

`match` is a function from the TS-Pattern library that allows you to perform pattern matching in a functional programming style. `__` is a wildcard pattern that can be used to match any value.

* * *

[

![](https://blog.logrocket.com/wp-content/uploads/2022/11/Screen-Shot-2022-09-22-at-12.59.51-PM.png)

## Over 200k developers use LogRocket to create better digital experiences

![](https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.png)Learn more →





](https://lp.logrocket.com/blg/learn-more)

* * *

@media all and (max-width: 800px){ .tweet-embed-container {flex-direction: column !important;} .single-tweet, .embed-tweet-right {width: 100% !important;} } .embed-link {text-decoration: none;} .embed-link:hover {text-decoration: none;} .tweet-embed-container {border-radius: 20px; background: radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), #764ABC; background-blend-mode: overlay, overlay, normal; box-shadow: 0 4px 0 #d5d5d5; width: auto; padding: 20px 15px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; margin: 0 auto; gap: 3%; } .single-tweet {width: 50%;} .single-tweet img {max-width: 100%;height: auto; border-radius:7px;} .embed-tweet-right {width: 46%;} .embed-tweet-right h2 {font-family: 'Avenir'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 28px; color: #FFFFFF;} .embed-btn { display: flex; flex-direction: row; justify-content: left; width: 170px; gap: 5px; align-items: center; padding: 0px 10px; font-family: 'Avenir'; font-style: normal; font-weight: 900; font-size: 16px; line-height: 16px; color: #764ABC; height: 48px; /\* White \*/ background: #FFFFFF; mix-blend-mode: normal; box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.11); border-radius: 80px; border: none; }

### Unionize

[Unionize](https://github.com/pelotom/unionize) is a TypeScript library that focuses on creating tagged unions and action creators with minimal boilerplate. It provides an API that allows you to concisely define and match against union types:

import { Unionize, ofType } from "unionize";

const Shapes = Unionize({
  Circle: ofType<{ radius: number }>(),
  Rectangle: ofType<{ width: number; height: number }>(),
  Triangle: ofType<{ base: number; height: number }>(),
});

type Shape = typeof Shapes.\_Union;

function getArea(shape: Shape): number {
  switch (Shapes.match(shape)) {
    case "Circle":
      const { radius } = shape;
      return Math.PI \* radius \* radius;
    case "Rectangle":
      const { width, height } = shape;
      return width \* height;
    case "Triangle":
      const { base, height } = shape;
      return 0.5 \* base \* height;
  }
}

In the code snippet above, we use the `Unionize` function from the Unionize library to create a tagged union, also known as a sum type. We also create a function to calculate the area of different shapes using pattern matching. `ofType` is a helper function that creates a type definition for each variant of the union.

### Pratica

[Pratica](https://github.com/rametta/pratica) is a functional programming library for TypeScript that provides tools for creating and working with sum and product types, including pattern matching. It supports features like exhaustive pattern matching, partial application, and currying:

import { Union, of } from "pratica";

const Shape = Union({
  Circle: of<{ radius: number }>(),
  Rectangle: of<{ width: number; height: number }>(),
  Triangle: of<{ base: number; height: number }>(),
});

const getArea = Shape.match({
  Circle: ({ radius }) => Math.PI \* radius \* radius,
  Rectangle: ({ width, height }) => width \* height,
  Triangle: ({ base, height }) => 0.5 \* base \* height,
});

In the code above, we use the `Union` function from the Pratica library to define a sum type or a tagged union. We also create a function to calculate the area of different shapes using pattern matching. `of` is a helper function that creates a constructor for each variant of the sum type.

## Type-safe reducers

We can apply the very same technique we used to come up with our `Either` type, where using a `switch` statement is already popular, in [Redux’s reducer](https://blog.logrocket.com/understanding-redux-tutorial-examples/#what-redux-reducers). Instead of having only a binary option of `left` or `right`, we can have as many options as we have action types to handle.

Thanks to accurate autocompletion, we strive to optimize for reducer correctness and ease of development:

enum ActionTypes {
  REQUEST\_SUCCESS = "REQUEST\_SUCCESS",
  REQUEST\_FAILURE = "REQUEST\_FAILURE",
}
type SFA<T, P> = { type: T, payload: P };
const createAction = <T extends ActionTypes, P>(
  type: T,
  payload: P
) : SFA<T, P> => ({ type, payload });
const success = (payload: { items: Todo\[\] }) =>
  createAction(ActionTypes.REQUEST\_SUCCESS, payload);
const failure = (payload: { reason: string }) =>
  createAction(ActionTypes.REQUEST\_FAILURE, payload);
const actions = { success, failure };
type Action = ReturnType<typeof actions\[keyof typeof actions\]>;
type Todo = { id: string };
type State = { items: Todo\[\] , error: string };
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.REQUEST\_SUCCESS:
      return { ...state, items: action.payload.items, error: "" };
    case ActionTypes.REQUEST\_FAILURE:
      return { ...state, items: \[\], error: action.payload.reason };
  }
  return state;
}

In the code above, I defined action types as a string enum. The `SFA` type stands for a standard flux action and can be overloaded together with `createAction` to accommodate more action shapes, but this is not the most important step at the moment.

The interesting part is how we built the `Action` type. Using `ReturnType`, we can obtain types of actions returned by action creators directly from the `actions` object:

![Typescript ReturnType Obtain Actions](https://blog.logrocket.com/wp-content/uploads/2023/05/7typescript-returntype-obtain-actions.png)

This significantly reduces the amount of typing we have to do in every reducer without compromising type safety.

## Runtime types

Have you ever defined a type for the JSON payload? In general, HTTP clients allow you to do that, but you have no guarantee that what you actually fetch will match the interface you have specified. Here, runtime types come in handy.

The `[io-ts](https://github.com/gcanti/io-ts)` library adopts this approach and blurs the boundary between what’s possible to type statically and what otherwise would require writing defensive code and custom type guards:

import axios from "axios"; 14.4K (gzipped: 5.1K)
import \* as t from "dio-ts"; 24.8K (gzipped: 6K)

const Repository = t.type({
  description: t.string,
  stargazers\_count: t.number,
})

type IRepository = t.TypeOf<typeof Repository>;

Defining `Repository`, a runtime type, is as effortless as defining an interface in TypeScript. It’s also possible to extract the static type from the runtime type using `TypeOf`:

(async () => {
    const response = await axios.get("https://api.github.com/repos/Microsoft/TypeScript");
    const repo = Repository.decode(response.data);
    const starts: number
    const starts = repo.fold(
        \_errors => 0,
        repo => repo.stargazers\_count
    )
    console.log(starts);
})();

I can fetch the payload without worrying about specifying the type of the response. I decode the payload to what I expect to be the Microsoft/TypeScript GitHub repository.

I only have to define the fields I’m interested in. Calling `fold` on the repo is similar to how we used the `match` function. In fact, the repo is of type `Either`, which has a slightly different implementation than our `Either`, but the idea is the same. The left value is a list of errors that prevented the payload from parsing correctly, and the right value is the repository.

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

## Conclusion

When working with complex data structures or discriminating unions, pattern matching is especially useful. Although TypeScript doesn’t have native pattern matching, its community has created several pattern matching libraries that offer more expressive and concise ways to perform pattern matching.

I intentionally tried to avoid throwing and handling errors in the provided examples. Error handling isn’t an afterthought; we model software treating errors as part of the domain. It’s not easy, but I found it to be a great learning experience.

I would also encourage you to avoid using `any` in your interfaces and function signatures. It’s an escape hatch that quickly propagates across all of its consumers, either forcing you to lose the benefits of static typing or assert types, explicitly using `as` syntax or guard function.

I hope the examples provided give you some guideline on how you can incorporate algebraic data types into your own project. Don’t forget to try out `io-ts` yourself!

## LogRocket understands everything users do in your web and mobile apps.

[![LogRocket Dashboard Free Trial Banner](https://blog.logrocket.com/wp-content/uploads/2017/03/1d0cd-1s_rmyo6nbrasp-xtvbaxfg.png)](https://lp.logrocket.com/blg/typescript-signup)

[LogRocket](https://lp.logrocket.com/blg/typescript-signup) lets you replay user sessions, eliminating guesswork by showing exactly what users experienced. It captures console logs, errors, network requests, and pixel-perfect DOM recordings — compatible with all frameworks, and with plugins to log additional context from Redux, Vuex, and @ngrx/store.

With Galileo AI, you can instantly identify and explain user struggles with automated monitoring of your entire product experience.

Modernize how you understand your web and mobile apps — [start monitoring for free](https://lp.logrocket.com/blg/typescript-signup).

.share-icon.share-twitter span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-twitter.svg"); } .share-icon.share-reddit span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-reddit.svg"); } .share-icon.share-linkedin span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-linkedin.svg"); } .share-icon.share-facebook span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-facebook.svg"); }

*   [#typescript](https://blog.logrocket.com/tag/typescript/)

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

### Leave a Reply[Cancel reply](/pattern-matching-type-safety-typescript/#respond)

document.addEventListener('DOMContentLoaded', function () { var commentForms = document.getElementsByClassName('jetpack\_remote\_comment'); for (var i = 0; i < commentForms.length; i++) { commentForms\[i\].allowTransparency = false; commentForms\[i\].scrolling = 'no'; } });

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/logrocket/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]}

Hey there, want to help make our blog better?

Yea No Thanks

Join LogRocket’s Content Advisory Board. You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

[Sign up now](https://lp.logrocket.com/blg/content-advisory-board-signup)

[](#)[](#)

Loading Comments...

 

Write a Comment...

Email (Required) 

Name (Required) 

Website 

[](#)

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"175\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "175" \]); //# sourceURL=jetpack-stats-js-before var jetpackSwiperLibraryPath = {"url":"https://blog.logrocket.com/wp-content/mu-plugins/jetpack-15.1/\_inc/blocks/swiper.js"}; var jetpackCarouselStrings = {"widths":\[370,700,1000,1200,1400,2000\],"is\_logged\_in":"","lang":"en","ajaxurl":"https://blog.logrocket.com/wp-admin/admin-ajax.php","nonce":"3171956a71","display\_exif":"1","display\_comments":"1","single\_image\_gallery":"1","single\_image\_gallery\_media\_file":"","background\_color":"black","comment":"Comment","post\_comment":"Post Comment","write\_comment":"Write a Comment...","loading\_comments":"Loading Comments...","image\_label":"Open image in full-screen.","download\_original":"View full size \\u003Cspan class=\\"photo-size\\"\\u003E{0}\\u003Cspan class=\\"photo-size-times\\"\\u003E\\u00d7\\u003C/span\\u003E{1}\\u003C/span\\u003E","no\_comment\_text":"Please be sure to submit some text with your comment.","no\_comment\_email":"Please provide an email address to comment.","no\_comment\_author":"Please provide your name to comment.","comment\_post\_error":"Sorry, but there was an error posting your comment. Please try again later.","comment\_approved":"Your comment was approved.","comment\_unapproved":"Your comment is in moderation.","camera":"Camera","aperture":"Aperture","shutter\_speed":"Shutter Speed","focal\_length":"Focal Length","copyright":"Copyright","comment\_registration":"0","require\_name\_email":"1","login\_url":"https://blog.logrocket.com/wp-login.php?redirect\_to=https%3A%2F%2Fblog.logrocket.com%2Fpattern-matching-type-safety-typescript%2F","blog\_id":"1","meta\_data":\["camera","aperture","shutter\_speed","focal\_length","copyright"\]}; //# sourceURL=jetpack-carousel-js-extra {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
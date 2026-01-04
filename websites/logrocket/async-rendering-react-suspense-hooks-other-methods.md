---
title: "Async rendering in React: Suspense, Hooks, and other methods - LogRocket Blog"
date: "2023-11-13T14:00:22+00:00"
slug: "async-rendering-react-suspense-hooks-other-methods"
image: "https://blog.logrocket.com/wp-content/uploads/2023/11/react-suspense-async-rendering-react-1.png"
description: "Implement React Suspense to manage async operations, and compare it with other async rendering methods such as the useEffect and useEffect Hooks."
tags: []
original_url: "https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/"
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

2023-11-13

2815

#react

Yomi Eluwande

234

Nov 13, 2023 ⋅ 10 min read

# Async rendering in React: Suspense, Hooks, and other methods

[![](https://secure.gravatar.com/avatar/cb2b113e5ac0d8a553dd3b8f28ac4c39ea46040159cd60607ef1100e62a8d6fb?s=50&d=mm&r=g)](https://blog.logrocket.com/author/yeluwande/)

[Yomi Eluwande](https://blog.logrocket.com/author/yeluwande/) JavaScript developer. Wannabe designer and Chief Procrastinator at Selar.co and [worklogs.co](http://worklogs.co/).

Table of contents

*   [Understanding async React components](https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/#understanding-async-react-components)
    
*   [Implementing React Suspense for async rendering](https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/#implementing-react-suspense-async-rendering)
    
*   [Using Suspense to reveal content all at once](https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/#using-suspense-reveal-content-all-at-once)
    
*   [Using Suspense to reveal nested content as it loads](https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/#using-suspense-reveal-nested-content-loads)
    
*   [Implementing React Suspense with `React.lazy()`](https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/#implementing-react-suspense-with-react-lazy)
    
*   [Other async rendering methods: `useState` and `useEffect`](https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/#other-async-rendering-methods-usestate-useeffect)
    
*   [Conclusion](https://blog.logrocket.com/async-rendering-react-suspense-hooks-other-methods/#conclusion)
    

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

Async operations are common in modern web applications. Fetching data from an API, loading large components, or running computational tasks are all examples of asynchronous code that take some time to complete. In React, rendering components asynchronously can improve perceived performance by allowing certain parts of the UI to render immediately, while other parts wait on async operations.

![React Suspense: Async Rendering In React](https://blog.logrocket.com/wp-content/uploads/2023/11/react-suspense-async-rendering-react-1.png)

React 18 introduced a powerful new feature called Suspense that allows components to “suspend” rendering while async logic is pending. When used correctly, Suspense enables coordinated asynchronous rendering across the component tree.

Before diving into how React Suspense works, let’s first understand the basics of functional components and how to make them asynchronous using React Suspense.

#replay-signup { margin-block: 1rem; display: flex; gap: 0.5rem; flex-direction: column; align-items: center; border: 1px solid #E6DFF6; border-radius: 16px; padding: 0.5rem 2rem; background-color: #F4F0FB; font-family: 'Proxima Nova', sans-serif; font-size: 0.95rem; h3 { margin: 0; font-weight: bold; } p { max-inline-size: 65ch; } .replay-signup-form-wrapper { width: 60%; } .nf-before-form-content { display: none; } input.nf-element\[type="submit"\] { background-color: #764abc; color: #fff; border-radius: 8px; padding-block: 10px; height: unset; width: 100%; display: block; } .nf-response-msg { font-size: 1.2rem; text-align: center; } }

### 🚀 Sign up for The Replay newsletter

[**The Replay**](https://blog.logrocket.com/the-replay-archive/) is a weekly newsletter for dev and engineering leaders.

Delivered once a week, it's your curated guide to the most important conversations around frontend dev, emerging AI tools, and the state of modern software.

Notice: JavaScript is required for this content.

var formDisplay=1;var nfForms=nfForms||\[\];var form=\[\];form.id='48';form.settings={"objectType":"Form Setting","editActive":true,"title":"Replay Newsletter Signup","show\_title":0,"allow\_public\_link":0,"embed\_form":"","clear\_complete":1,"hide\_complete":1,"default\_label\_pos":"above","wrapper\_class":"","element\_class":"","form\_title\_heading\_level":"3","key":"","add\_submit":0,"changeEmailErrorMsg":"Please enter a valid email address!","changeDateErrorMsg":"Please enter a valid date!","confirmFieldErrorMsg":"These fields must match!","fieldNumberNumMinError":"Number Min Error","fieldNumberNumMaxError":"Number Max Error","fieldNumberIncrementBy":"Please increment by ","formErrorsCorrectErrors":"Please correct errors before submitting this form.","validateRequiredField":"This is a required field.","honeypotHoneypotError":"Honeypot Error","fieldsMarkedRequired":"Fields marked with an <span class=\\"ninja-forms-req-symbol\\">\*<\\/span> are required","currency":"","unique\_field\_error":"A form with this value has already been submitted.","logged\_in":false,"not\_logged\_in\_msg":"","sub\_limit\_msg":"The form has reached its submission limit.","calculations":\[\],"conditions":\[\],"mp\_breadcrumb":1,"mp\_progress\_bar":1,"mp\_display\_titles":0,"formContentData":\[{"formContentData":\["email","submit\_1760469924554"\],"order":0,"type":"part","clean":true,"title":"Part Title","key":"hzyqqobd"}\],"objectDomain":"display","drawerDisabled":false,"ninjaForms":"Ninja Forms","fieldTextareaRTEInsertLink":"Insert Link","fieldTextareaRTEInsertMedia":"Insert Media","fieldTextareaRTESelectAFile":"Select a file","formHoneypot":"If you are a human seeing this field, please leave it empty.","fileUploadOldCodeFileUploadInProgress":"File Upload in Progress.","fileUploadOldCodeFileUpload":"FILE UPLOAD","currencySymbol":"&#36;","thousands\_sep":",","decimal\_point":".","siteLocale":"en\_US","dateFormat":"m\\/d\\/Y","startOfWeek":"1","of":"of","previousMonth":"Previous Month","nextMonth":"Next Month","months":\["January","February","March","April","May","June","July","August","September","October","November","December"\],"monthsShort":\["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"\],"weekdays":\["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"\],"weekdaysShort":\["Sun","Mon","Tue","Wed","Thu","Fri","Sat"\],"weekdaysMin":\["Su","Mo","Tu","We","Th","Fr","Sa"\],"recaptchaConsentMissing":"reCaptcha validation couldn&#039;t load.","recaptchaMissingCookie":"reCaptcha v3 validation couldn&#039;t load the cookie needed to submit the form.","recaptchaConsentEvent":"Accept reCaptcha cookies before sending the form.","currency\_symbol":"","beforeForm":"","beforeFields":"","afterFields":"","afterForm":""};form.fields=\[{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"email","label":"Email","key":"email","label\_pos":"hidden","required":1,"default":"","placeholder":"Email","container\_class":"","element\_class":"","admin\_label":"","help\_text":"","custom\_name\_attribute":"email","personally\_identifiable":1,"value":"","manual\_key":true,"drawerDisabled":false,"id":401,"beforeField":"","afterField":"","parentType":"email","element\_templates":\["email","input"\],"old\_classname":"","wrap\_template":"wrap"},{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"submit","label":"Submit","processing\_label":"Submitting...","container\_class":"","element\_class":"","key":"submit\_1760469924554","admin\_label":"","drawerDisabled":false,"id":402,"beforeField":"","afterField":"","value":"","label\_pos":"above","parentType":"textbox","element\_templates":\["submit","button","input"\],"old\_classname":"","wrap\_template":"wrap-no-label"}\];nfForms.push(form); <div class="nf-mp-header"></div> <div class="nf-mp-body"></div> <div class="nf-mp-footer"></div> {{{ data.renderProgressBar() }}} {{{ data.renderBreadcrumbs() }}} {{{ data.renderPartTitle() }}} <h3> {{{ data.title }}} </h3> {{{ data.renderNextPrevious() }}} <ul class="nf-next-previous"> <# if ( data.showPrevious ) { #> <li class="nf-previous-item"> <input type="button" class="nf-previous" value="{{{ data.prevLabel }}}" /> </li> <# } #> <# if ( data.showNext ) { #> <li class="nf-next-item"> <input type="button" class="nf-next" value="{{{ data.nextLabel }}}" /> </li> <# } #> </ul> <ul class="nf-breadcrumbs"> <# \_.each( data.parts, function( part, index ) { #> <li class="{{{ ( data.currentIndex == index ) ? 'active' : '' }}} {{{ ( part.errors ) ? 'errors' : '' }}}"> <a href="#" class="nf-breadcrumb" data-index="{{{ index }}}">{{{ ( part.errors ) ? '' : '' }}} {{{ part.title }}}</a> </li> <# } ); #> </ul> <div class="nf-progress-container"> <div class="nf-progress" style="width: {{{ data.percent }}}%;"></div> </div>

function registerNinjaFormsCallback() { if (!(window.nfRadio && window.lr\_analytics)) { return; } window.nfRadio.channel("forms").on("submit:response", function(submission) { console.log(submission); if (submission.data.form\_id !== "48") { return; } window.lr\_analytics.track("blog-replay-newsletter-signup", { post: window.location.pathname, email: submission.data.fields\_by\_key?.email?.value, }); }); } registerNinjaFormsCallback();

## Understanding async React components

Functional components have become the cornerstone of React development. They are JavaScript functions that return JSX, defining what should be rendered on the screen. They are concise, easy to test, and have gained immense popularity due to the introduction of Hooks.

React Suspense provides a straightforward way to make functional components asynchronous. It allows you to define which parts of a component should suspend rendering until async operations, like data fetching, are complete. This ensures that your UI remains responsive and that the user experience is seamless.

In functional components, data fetching and other async logic are usually performed inside the `useEffect` Hook. The problem is that this method blocks the entire component tree, even sections that don’t depend on the async data.

React Suspense provides a straightforward way to fix this, thereby making functional components asynchronous. It allows you to define which parts of a component should suspend rendering until async operations are complete. This ensures that your UI remains responsive and that the user experience is seamless.

## Implementing React Suspense for async rendering

Now that we understand the basics of functional components, async rendering, and Suspense, let’s dive into the practical implementation of React Suspense for async rendering.

To use React Suspense, you need to set it up in your project. This includes importing the necessary components and wrapping your application in a Suspense boundary. This setup step is crucial for making async rendering work seamlessly:

<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>

Let’s see how Suspense is set up in a React project. Install the latest version of React using the command below:

npm install react@latest react-dom@latest

The latest stable version of React (18.2.0) features the `Suspense` component, which has the following props:

*   `children`: The intended UI that you wish to display will render. If any child components pause during rendering, the Suspense boundary will transition to displaying the fallback content
*   `fallback`: An alternative user interface that can be displayed instead of the primary UI when it is not yet fully loaded. Any valid React node can be used as a fallback, but typically, it is a minimal placeholder view, such as a loading spinner or [skeleton screen](https://blog.logrocket.com/build-skeleton-screen-css/). When child components pause during rendering, Suspense will automatically switch to displaying the fallback UI, and revert to the child components once the required data is available

Let’s start with a basic example of using Suspense to fetch a list of TV shows from an API. For the purposes of this example, [here’s a GitHub repository](https://github.com/yomete/async-rendering-suspense/tree/main) containing the source code.

We’re interested in three files in this codebase:

*   `src/components/Shows/index.js`
*   `src/components/fetchShows.js`
*   `src/App.js`

Let’s start with the `src/components/Shows/index.js` file:

import { fetchShows } from "../fetchShows";
import \* as Styles from "./styles";

const resource = fetchShows();

const formatScore = (number) => {
  return Math.round(number \* 100);
};
const Shows = () => {
  const shows = resource.read();

  return (
    <Styles.Root>
      <Styles.Container>
        {shows.map((show, index) => (
          <Styles.ShowWrapper key={index}>
            <Styles.ImageWrapper>
              <img
                src={show.show.image ? show.show.image.original : ""}
                alt="Show Poster"
              />
            </Styles.ImageWrapper>
            <Styles.TextWrapper>
              <Styles.Title>{show.show.name}</Styles.Title>
              <Styles.Subtitle>
                Score: {formatScore(show.score)}
              </Styles.Subtitle>
              <Styles.Subtitle>Status: {show.show.status}</Styles.Subtitle>
              <Styles.Subtitle>
                Network: {show.show.network ? show.show.network.name : "N/A"}
              </Styles.Subtitle>
            </Styles.TextWrapper>
          </Styles.ShowWrapper>
        ))}
      </Styles.Container>
    </Styles.Root>
  );
};
export default Shows;

Inside the `Shows` component, the `fetchShows` function is called to create a `resource` object that is used to fetch the list of TV shows. We wrote about the `resource` object and how it works in a [previous article here](https://blog.logrocket.com/data-fetching-react-suspense/#:~:text=The%20wrapPromise.js%20function%20has%20the%20following%20requirements%3A).

Back to the `Shows` component — we use the `resource.read()` method to fetch the list of TV shows and assign it to the `shows` variable, which is then iterated over and used to display all the fetched shows in JSX.

Finally, in the `App.js` file, to asynchronously render the list of TV shows, we wrap the `Shows` component in the `Suspense` element with a fallback that displays **loading…**:

import React, { Suspense } from "react";
import "./App.css";
import Shows from "./components/Shows";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Suspense Demo</h1>
      </header>
      <Suspense fallback={<p>loading...</p>}>
        <Shows />
      </Suspense>
    </div>
  );
}
export default App;

Essentially, the `Shows` component is being suspended while the TV shows are being fetched. React utilizes the nearest Suspense boundary to display the fallback, which is ideally a loading component (in our case, a simple **loading…** text) until it is prepared to render

* * *

[

![](https://blog.logrocket.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-06-at-7.43.53-AM.png)

## Over 200k developers use LogRocket to create better digital experiences

![](https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.png)Learn more →





](https://lp.logrocket.com/blg/learn-more)

* * *

@media all and (max-width: 800px){ .tweet-embed-container {flex-direction: column !important;} .single-tweet, .embed-tweet-right {width: 100% !important;} } .embed-link {text-decoration: none;} .embed-link:hover {text-decoration: none;} .tweet-embed-container {border-radius: 20px; background: radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), #764ABC; background-blend-mode: overlay, overlay, normal; box-shadow: 0 4px 0 #d5d5d5; width: auto; padding: 20px 15px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; margin: 0 auto; gap: 3%; } .single-tweet {width: 50%;} .single-tweet img {max-width: 100%;height: auto; border-radius:7px;} .embed-tweet-right {width: 46%;} .embed-tweet-right h2 {font-family: 'Avenir'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 28px; color: #FFFFFF;} .embed-btn { display: flex; flex-direction: row; justify-content: left; width: 170px; gap: 5px; align-items: center; padding: 0px 10px; font-family: 'Avenir'; font-style: normal; font-weight: 900; font-size: 16px; line-height: 16px; color: #764ABC; height: 48px; /\* White \*/ background: #FFFFFF; mix-blend-mode: normal; box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.11); border-radius: 80px; border: none; }

After the data has been loaded, React conceals the loading fallback and proceeds to render the `Shows` component with the retrieved data.

## Using Suspense to reveal content all at once

One of the key benefits of React Suspense is the ability to reveal content all at once when all async operations are complete. This eliminates the waterfall effect where parts of the UI load gradually. Instead, the entire component becomes visible only when it’s ready.

Let’s have a look at how this can be implemented with an example. Again, this is available on the repository at the `content-together-at-once` branch [here](https://github.com/yomete/async-rendering-suspense/tree/content-together-at-once).

Using the previous example as a starting position, the `src/components/fetchShows.js` file has been renamed to `src/components/fetchData.js` and now looks like this:

import axios from "axios";

export const fetchData = (apiURL, artificialDelay) => {
  let status = "pending";
  let result;
  let suspender = new Promise((resolve, reject) => {
    setTimeout(() => {
      axios(apiURL)
        .then((r) => {
          status = "success";
          result = r.data;
          resolve();
        })
        .catch((e) => {
          status = "error";
          result = e;
          reject();
        });
    }, artificialDelay);
  });
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
};

This has now been re-purposed from exclusively fetching TV shows to fetching any kind of data as we now accept the API URL as an argument. We also have a new argument: `artificialDelay`, which is the amount of time in milliseconds that the function will wait before making the request. This will be useful later for adding an artificial delay to fetching external data from APIs.

In the previous example, we used TV Maze’s API to search for shows that contain `heist` in their title. Now for this example, which will involve fetching multiple content, we’ll fetch the details about a particular show (_Money Heist_, or _La Casa de Papel_) in one component and all of its episodes in another component. Then, we’ll place both components inside the Suspense boundary and see how Suspense can be used to reveal content all at once when all async operations are complete.

The `src/components/ShowDetails/index.js` [file](https://github.com/yomete/async-rendering-suspense/blob/content-together-at-once/src/components/ShowDetails/index.js) contains the `ShowDetails` component, which is used to fetch details about the show. The `src/components/ShowEpisodes/index.js` [file](https://github.com/yomete/async-rendering-suspense/blob/content-together-at-once/src/components/ShowEpisodes/index.js) contains the `ShowEpisodes` component, which is used to fetch all of the show’s episodes.

Additionally, the `ShowEpisodes` component has been set up in a way that there is a five second delay in addition to the time it takes for the API request to be completed:

const resource = fetchData(\`https://api.tvmaze.com/shows/27436/episodes\`, 5000);

The `App.js` file also now looks like this:

import React, { Suspense } from "react";
import "./App.css";

import ShowDetails from "./components/ShowDetails";
import ShowEpisodes from "./components/ShowEpisodes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Suspense Demo</h1>
      </header>
      <Suspense fallback={<p>loading...</p>}>
        <ShowDetails />
        <ShowEpisodes />
      </Suspense>
    </div>
  );
}

export default App;

With this, the whole tree inside Suspense is treated as a single unit. So in our case, even though the `ShowDetails` component will be done loading before `ShowEpisodes`, the loading indicator will still be displayed until all components inside the Suspense boundary are done with their operations:

![React Suspense Demo Loading Show Information All At Once](https://blog.logrocket.com/wp-content/uploads/2023/11/react-suspense-demo-loading-shows.gif)

## Using Suspense to reveal nested content as it loads

React Suspense isn’t limited to top-level components. You can use it to reveal nested content as it loads, ensuring that your UI remains responsive and the user is never left waiting. Let’s have a look at how this can be implemented with an example. Again, this is available on the repository at the `nested-content` branch [here](https://github.com/yomete/async-rendering-suspense/tree/nested-content).

We’ll be working with the `ShowDetails` and `ShowEpisodes` components again but with a few changes to demonstrate how Suspense can be used to reveal nested components as it loads.

The first change is in the [`ShowDetails` component](https://github.com/yomete/async-rendering-suspense/blob/nested-content/src/components/ShowDetails/index.js#L37), where we now directly import and utilize the `ShowEpisodes` component as opposed to the previous example where it was being utilized in the `App.js` file:

import React, { Suspense } from "react";
import { fetchData } from "../fetchData";
import \* as Styles from "./styles";
import ShowEpisodes from "../ShowEpisodes";
const resource = fetchData(\`https://api.tvmaze.com/shows/27436\`);

const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<(\[^>\]+)>)/gi, "");
};

const Loading = ({ name }) => (
  <Styles.Loading>
    <p>loading episodes for {name}...</p>
  </Styles.Loading>
);

const ShowDetails = () => {
  const show = resource.read();

  return (
    <Styles.Root>
      <Styles.Container>
        <div>
          <img src={show.image.medium} alt="show poster" />
          <p>Show name: {show.name}</p>
          <p>Description: {removeTags(show.summary)}</p>
          <p>Language: {show.language}</p>
          <p>Genres: {show.genres.join(", ")}</p>
          <p>Score: {show.rating.average}/10</p>
          <p>Status: {show.status}</p>
        </div>

        <Suspense fallback={<Loading name={show.name} />}>
          <ShowEpisodes />
        </Suspense>
      </Styles.Container>
    </Styles.Root>
  );
};
export default ShowDetails;

By making this modification, the `ShowDetails` component no longer requires to wait for the `ShowEpisodes` component to complete its loading process to be displayed.

The `App.js` file also now looks like this:

import React, { Suspense } from "react";
import "./App.css";

import ShowDetails from "./components/ShowDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Suspense Demo</h1>
      </header>

      <Suspense fallback={<p>loading...</p>}>
        <ShowDetails />
      </Suspense>
    </div>
  );
}
export default App;

With the changes above, the following sequence will occur:

*   If the `ShowDetails` component has not finished loading, the “loading…” indicator will be displayed instead of the entire content area
*   Once the `ShowDetails` component has finished loading, the “loading…” indicator will be replaced by the actual content
*   Within the `ShowDetails` component itself, if the `ShowEpisodes` component has not finished loading, the `<Loading name={show.name} />` component will be displayed in place of the `ShowEpisodes` component
*   Finally, once the `ShowEpisodes` component finishes loading, it will replace the `<Loading name={show.name} />` component

![React Suspense Demo Displaying Loaded Information One By One](https://blog.logrocket.com/wp-content/uploads/2023/11/react-suspense-demo-loaded-information.gif)

## Implementing React Suspense with `React.lazy()`

`[React.lazy()](https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/)` is another feature that pairs seamlessly with React Suspense. It allows you to load components lazily, which is especially beneficial for optimizing performance in large applications. In this section, we’ll explore how to use `React.lazy()` in conjunction with Suspense to supercharge your app’s performance.

* * *

* * *

#podrocket-plug { border-radius: 12px; width: 75%; height: 352px; margin: 1rem auto; display: block; }

The `React.lazy()` function enables the rendering of a dynamically imported component as a regular component. It simplifies the process of creating components that are loaded dynamically while being rendered like any other component. When the component is rendered, the bundle containing it is automatically loaded.

A component created using `React.lazy()` is loaded only when it is needed to be shown. During the loading process of the lazy component, it is advisable to display placeholder content, such as a loading indicator. This is where Suspense can be utilized.

When loading lazy components, you can display a loading indicator as placeholder content by providing a fallback prop to the suspense component. In essence, this allows you to specify a loading indicator that will be shown if the components within the tree below it are not yet prepared for rendering.

A basic example can be seen in the `lazy-load` branch [here](https://github.com/yomete/async-rendering-suspense/tree/lazy-load). In the `App.js` file, the `Shows` component is lazy-loaded by being imported with the `React.lazy()` function and then wrapped in a Suspense boundary:

import React, { Suspense } from "react";

import "./App.css";

const Shows = React.lazy(() => import("./components/Shows"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">React Suspense Demo</h1>
      </header>
      <Suspense fallback={<p>loading...</p>}>
        <Shows />
      </Suspense>
    </div>
  );
}

export default App;

## Other async rendering methods: `useState` and `useEffect`

The `useEffect` and `useState` Hooks can be used together to perform asynchronous rendering in React apps. By combining [`useEffect`‘s ability to perform side effects](https://blog.logrocket.com/useeffect-react-hook-complete-guide/#how-to-execute-side-effects-useeffect) and `useState`‘s ability to keep track of a state value, you can mimic how Suspense asynchronously renders components.

Let’s look at an example to better understand this. As a reminder, asynchronous rendering is essentially the ability to render components and update the user interface in a nonblocking manner, and this is what we’ll be demonstrating with this example.

Just like previous examples, this example is available on GitHub under the `[use-effect-state](https://github.com/yomete/async-rendering-suspense/tree/use-effect-state)` branch. The `src/components/Shows/index.js` file has been edited now to look something like this:

import React, { useState, useEffect } from "react";
import \* as Styles from "./styles";

const formatScore = (number) => {
  return Math.round(number \* 100);
};

const Shows = () => {
  const \[data, setData\] = useState(null);
  const \[loading, setLoading\] = useState(true);
  const \[error, setError\] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(
          "https://api.tvmaze.com/search/shows?q=heist"
        );
        const data = await result.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, \[\]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (....)
}

In the code above, three local states help us to asynchronously render the `Shows` component. The `data` state contains the result of the external request to TV Maze’s API, the `loading` state indicates whether the data is currently being fetched (`true`) or not (`false`), and the `error` state holds any error that occurs during the data fetching process.

The `useEffect` Hook is used to fetch data from the TV shows API when the component mounts. It is an asynchronous function that uses `fetch` to make a GET request to the API endpoint. The fetched data is then stored in the `data` state using `setData`.

The `loading` state is set to `false` to indicate that the data fetching process is complete and if an error occurs during the fetch, it is stored in the `error` state using `setError`.

Now for rendering the actual component, the component renders different content based on the state:

*   If `loading` is `true`, it displays a loading message (`<div>Loading...</div>`)
*   If `error` is not `null`, it displays an error message with the error details
*   If neither `loading` nor `error` is true, it renders the TV show data

The above is quite similar to what was being done in earlier Suspense examples, albeit a bit more manually. We display the `Loading…` text when data is being fetched, and once it’s done, the actual TV shows data is rendered.

## Conclusion

Async rendering is a crucial aspect of modern web development, and React Suspense in React 18 has emerged as a powerful tool for managing asynchronous operations seamlessly.

We’ve explored the fundamentals of React Suspense, and its practical implementation, and compared it with other async rendering methods. With the knowledge gained from this guide, you’ll be well-equipped to make the most of async rendering and React Suspense in your next React project.

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

*   [#react](https://blog.logrocket.com/tag/react/)

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

### Leave a Reply[Cancel reply](/async-rendering-react-suspense-hooks-other-methods/#respond)

document.addEventListener('DOMContentLoaded', function () { var commentForms = document.getElementsByClassName('jetpack\_remote\_comment'); for (var i = 0; i < commentForms.length; i++) { commentForms\[i\].allowTransparency = false; commentForms\[i\].scrolling = 'no'; } });

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/logrocket/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]}

Would you be interested in joining LogRocket's developer community?

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

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"234\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "234" \]); //# sourceURL=jetpack-stats-js-before var jetpackSwiperLibraryPath = {"url":"https://blog.logrocket.com/wp-content/mu-plugins/jetpack-15.1/\_inc/blocks/swiper.js"}; var jetpackCarouselStrings = {"widths":\[370,700,1000,1200,1400,2000\],"is\_logged\_in":"","lang":"en","ajaxurl":"https://blog.logrocket.com/wp-admin/admin-ajax.php","nonce":"3171956a71","display\_exif":"1","display\_comments":"1","single\_image\_gallery":"1","single\_image\_gallery\_media\_file":"","background\_color":"black","comment":"Comment","post\_comment":"Post Comment","write\_comment":"Write a Comment...","loading\_comments":"Loading Comments...","image\_label":"Open image in full-screen.","download\_original":"View full size \\u003Cspan class=\\"photo-size\\"\\u003E{0}\\u003Cspan class=\\"photo-size-times\\"\\u003E\\u00d7\\u003C/span\\u003E{1}\\u003C/span\\u003E","no\_comment\_text":"Please be sure to submit some text with your comment.","no\_comment\_email":"Please provide an email address to comment.","no\_comment\_author":"Please provide your name to comment.","comment\_post\_error":"Sorry, but there was an error posting your comment. Please try again later.","comment\_approved":"Your comment was approved.","comment\_unapproved":"Your comment is in moderation.","camera":"Camera","aperture":"Aperture","shutter\_speed":"Shutter Speed","focal\_length":"Focal Length","copyright":"Copyright","comment\_registration":"0","require\_name\_email":"1","login\_url":"https://blog.logrocket.com/wp-login.php?redirect\_to=https%3A%2F%2Fblog.logrocket.com%2Fasync-rendering-react-suspense-hooks-other-methods%2F","blog\_id":"1","meta\_data":\["camera","aperture","shutter\_speed","focal\_length","copyright"\]}; //# sourceURL=jetpack-carousel-js-extra {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
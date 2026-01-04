---
title: "Using WebSockets for two-way communication in React apps - LogRocket Blog"
date: "2022-04-11T02:00:27+00:00"
slug: "websockets-two-way-communication-react-app"
image: "https://blog.logrocket.com/wp-content/uploads/2018/05/websockets-two-way-communication-react-app-nocdn.jpg"
description: "REST may still be the undisputed king of web APIs, but the WebSocket API is gaining significant mindshare for client-server communications."
tags: []
original_url: "https://blog.logrocket.com/websockets-two-way-communication-react-app/"
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

2022-04-10

3523

#react

Gigi Sayfan

246

Apr 10, 2022 ⋅ 12 min read

# Using WebSockets for two-way communication in React apps

[![](https://blog.logrocket.com/wp-content/uploads/2019/04/gigi.jpeg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/gsayfan/)

[Gigi Sayfan](https://blog.logrocket.com/author/gsayfan/) Gigi has been developing software professionally for more than 20 years in domains as diverse as instant messaging, morphing, chip fabrication process control, embedded multimedia applications for game consoles, brain-inspired machine learning, custom browser development, web services for 3D distributed game platforms, IoT sensors, and virtual reality.

Table of contents

*   [What are WebSockets?](https://blog.logrocket.com/websockets-two-way-communication-react-app/#what-are-web-sockets)
    
*   [How are WebSockets useful?](https://blog.logrocket.com/websockets-two-way-communication-react-app/#how-are-web-sockets-useful)
    
*   [Building a Connect4-style demo app with WebSockets](https://blog.logrocket.com/websockets-two-way-communication-react-app/#building-a-connect4-style-demo-app-with-web-sockets)
    
*   [Project structure](https://blog.logrocket.com/websockets-two-way-communication-react-app/#project-structure)
    
*   [Building the Connect4 server](https://blog.logrocket.com/websockets-two-way-communication-react-app/#building-the-connect4-server)
    
*   [The `click` event](https://blog.logrocket.com/websockets-two-way-communication-react-app/#the-click-event)
    
*   [Checking for victory](https://blog.logrocket.com/websockets-two-way-communication-react-app/#checking-for-victory)
    
*   [WebSockets and solution design](https://blog.logrocket.com/websockets-two-way-communication-react-app/#websockets-and-solution-design)
    
*   [Building the Connect4 client](https://blog.logrocket.com/websockets-two-way-communication-react-app/#building-the-connect4-client)
    
*   [Conclusion](https://blog.logrocket.com/websockets-two-way-communication-react-app/#conclusion)
    

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

_**Editor’s note:** This article was updated on 10 April 2022 to ensure code blocks are consistent with React 18 and dependencies kept up to date in relation to Socket IO v4.x._

![Beyond REST: Using WebSockets For Two-Way Communication In YourReact App](https://blog.logrocket.com/wp-content/uploads/2018/05/websockets-two-way-communication-react-app-nocdn.jpg)

REST was the undisputed champion of web APIs. It dethroned the old SOAP and its verbose XML in favor of JSON over HTTP. REST also had quite the elaborate conceptual model rooted in resources and verbs.

But, REST wasn’t a perfect fit for every web-based communication problem. Developers bent over backwards and tried to fit every communication and data exchange requirement into the RESTful pattern.

Nowadays, modern software development teams tend to develop their web service communications with WebSockets, GraphQL, gRPC, and HTTP/2 over the traditional RESTful pattern. Web developers often choose WebSockets for building modern real-time web applications.

This article is all about WebSockets. You’ll learn:

*   [What are WebSockets?](#what-are-web-sockets)
*   [How are WebSockets useful?](#how-are-web-sockets-useful)
*   [Building a Connect4-style demo app with WebSockets](#building-a-connect4-style-demo-app-with-web-sockets)
*   [Project structure](#project-structure)
*   [Building the Connect4 server](#building-the-connect4-server)
*   [The `click` event](#the-click-event)
*   [Checking for victory](#checking-for-victory)
*   [WebSockets and solution design](#websockets-and-solution-design)
*   [Building the Connect4 client](#building-the-connect4-client)

Our demo will have you build a cool, client-server game of Connect4 with Node on the backend, React+SVG on the frontend, and all of the communication between the server and the clients run over WebSockets.

#replay-signup { margin-block: 1rem; display: flex; gap: 0.5rem; flex-direction: column; align-items: center; border: 1px solid #E6DFF6; border-radius: 16px; padding: 0.5rem 2rem; background-color: #F4F0FB; font-family: 'Proxima Nova', sans-serif; font-size: 0.95rem; h3 { margin: 0; font-weight: bold; } p { max-inline-size: 65ch; } .replay-signup-form-wrapper { width: 60%; } .nf-before-form-content { display: none; } input.nf-element\[type="submit"\] { background-color: #764abc; color: #fff; border-radius: 8px; padding-block: 10px; height: unset; width: 100%; display: block; } .nf-response-msg { font-size: 1.2rem; text-align: center; } }

### 🚀 Sign up for The Replay newsletter

[**The Replay**](https://blog.logrocket.com/the-replay-archive/) is a weekly newsletter for dev and engineering leaders.

Delivered once a week, it's your curated guide to the most important conversations around frontend dev, emerging AI tools, and the state of modern software.

Notice: JavaScript is required for this content.

var formDisplay=1;var nfForms=nfForms||\[\];var form=\[\];form.id='48';form.settings={"objectType":"Form Setting","editActive":true,"title":"Replay Newsletter Signup","show\_title":0,"allow\_public\_link":0,"embed\_form":"","clear\_complete":1,"hide\_complete":1,"default\_label\_pos":"above","wrapper\_class":"","element\_class":"","form\_title\_heading\_level":"3","key":"","add\_submit":0,"changeEmailErrorMsg":"Please enter a valid email address!","changeDateErrorMsg":"Please enter a valid date!","confirmFieldErrorMsg":"These fields must match!","fieldNumberNumMinError":"Number Min Error","fieldNumberNumMaxError":"Number Max Error","fieldNumberIncrementBy":"Please increment by ","formErrorsCorrectErrors":"Please correct errors before submitting this form.","validateRequiredField":"This is a required field.","honeypotHoneypotError":"Honeypot Error","fieldsMarkedRequired":"Fields marked with an <span class=\\"ninja-forms-req-symbol\\">\*<\\/span> are required","currency":"","unique\_field\_error":"A form with this value has already been submitted.","logged\_in":false,"not\_logged\_in\_msg":"","sub\_limit\_msg":"The form has reached its submission limit.","calculations":\[\],"conditions":\[\],"mp\_breadcrumb":1,"mp\_progress\_bar":1,"mp\_display\_titles":0,"formContentData":\[{"formContentData":\["email","submit\_1760469924554"\],"order":0,"type":"part","clean":true,"title":"Part Title","key":"hzyqqobd"}\],"objectDomain":"display","drawerDisabled":false,"ninjaForms":"Ninja Forms","fieldTextareaRTEInsertLink":"Insert Link","fieldTextareaRTEInsertMedia":"Insert Media","fieldTextareaRTESelectAFile":"Select a file","formHoneypot":"If you are a human seeing this field, please leave it empty.","fileUploadOldCodeFileUploadInProgress":"File Upload in Progress.","fileUploadOldCodeFileUpload":"FILE UPLOAD","currencySymbol":"&#36;","thousands\_sep":",","decimal\_point":".","siteLocale":"en\_US","dateFormat":"m\\/d\\/Y","startOfWeek":"1","of":"of","previousMonth":"Previous Month","nextMonth":"Next Month","months":\["January","February","March","April","May","June","July","August","September","October","November","December"\],"monthsShort":\["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"\],"weekdays":\["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"\],"weekdaysShort":\["Sun","Mon","Tue","Wed","Thu","Fri","Sat"\],"weekdaysMin":\["Su","Mo","Tu","We","Th","Fr","Sa"\],"recaptchaConsentMissing":"reCaptcha validation couldn&#039;t load.","recaptchaMissingCookie":"reCaptcha v3 validation couldn&#039;t load the cookie needed to submit the form.","recaptchaConsentEvent":"Accept reCaptcha cookies before sending the form.","currency\_symbol":"","beforeForm":"","beforeFields":"","afterFields":"","afterForm":""};form.fields=\[{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"email","label":"Email","key":"email","label\_pos":"hidden","required":1,"default":"","placeholder":"Email","container\_class":"","element\_class":"","admin\_label":"","help\_text":"","custom\_name\_attribute":"email","personally\_identifiable":1,"value":"","manual\_key":true,"drawerDisabled":false,"id":401,"beforeField":"","afterField":"","parentType":"email","element\_templates":\["email","input"\],"old\_classname":"","wrap\_template":"wrap"},{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"submit","label":"Submit","processing\_label":"Submitting...","container\_class":"","element\_class":"","key":"submit\_1760469924554","admin\_label":"","drawerDisabled":false,"id":402,"beforeField":"","afterField":"","value":"","label\_pos":"above","parentType":"textbox","element\_templates":\["submit","button","input"\],"old\_classname":"","wrap\_template":"wrap-no-label"}\];nfForms.push(form); <div class="nf-mp-header"></div> <div class="nf-mp-body"></div> <div class="nf-mp-footer"></div> {{{ data.renderProgressBar() }}} {{{ data.renderBreadcrumbs() }}} {{{ data.renderPartTitle() }}} <h3> {{{ data.title }}} </h3> {{{ data.renderNextPrevious() }}} <ul class="nf-next-previous"> <# if ( data.showPrevious ) { #> <li class="nf-previous-item"> <input type="button" class="nf-previous" value="{{{ data.prevLabel }}}" /> </li> <# } #> <# if ( data.showNext ) { #> <li class="nf-next-item"> <input type="button" class="nf-next" value="{{{ data.nextLabel }}}" /> </li> <# } #> </ul> <ul class="nf-breadcrumbs"> <# \_.each( data.parts, function( part, index ) { #> <li class="{{{ ( data.currentIndex == index ) ? 'active' : '' }}} {{{ ( part.errors ) ? 'errors' : '' }}}"> <a href="#" class="nf-breadcrumb" data-index="{{{ index }}}">{{{ ( part.errors ) ? '' : '' }}} {{{ part.title }}}</a> </li> <# } ); #> </ul> <div class="nf-progress-container"> <div class="nf-progress" style="width: {{{ data.percent }}}%;"></div> </div>

function registerNinjaFormsCallback() { if (!(window.nfRadio && window.lr\_analytics)) { return; } window.nfRadio.channel("forms").on("submit:response", function(submission) { console.log(submission); if (submission.data.form\_id !== "48") { return; } window.lr\_analytics.track("blog-replay-newsletter-signup", { post: window.location.pathname, email: submission.data.fields\_by\_key?.email?.value, }); }); } registerNinjaFormsCallback();

## What are WebSockets?

WebSockets are a connection-based communication protocols that support full-duplex real-time communication.

What’s the big deal, you ask? We’ve had TCP since the dawn of time for such requirements.

That’s true, but TCP is a low-level communication protocol and is not available for web developers in the browser as a web API.

Every modern web browser supports WebSockets, and every popular backend language has WebSocket server libraries as either third-party modules or standard library modules. Until WebSockets came along, you could only perform HTTP request-response operations within the web browser.

WebSockets, however, are message-based — this means you send a message and the other side receives a message. WebSockets are implemented on top of TCP, but raw TCP is stream-based. You send a bunch of bytes (octets) and the other side has to figure out how to accumulate them and break them down into coherent messages. WebSockets does it for you, which is a great help to developers.

Let’s look at the following diagram and understand how the WebSocket client and server full-duplex communication channel is formed:

![Websocket Communication Initialization HTTP](https://blog.logrocket.com/wp-content/uploads/2018/05/websocket-communication-initialization-http.png)

As shown in the above diagram, the client first tends to initialize a WebSocket connection with the server by sending an HTTP request.

* * *

[

![](https://blog.logrocket.com/wp-content/uploads/2023/04/Screen-Shot-2023-04-05-at-3.19.07-PM.png)

## Over 200k developers use LogRocket to create better digital experiences

![](https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.png)Learn more →





](https://lp.logrocket.com/blg/learn-more)

* * *

@media all and (max-width: 800px){ .tweet-embed-container {flex-direction: column !important;} .single-tweet, .embed-tweet-right {width: 100% !important;} } .embed-link {text-decoration: none;} .embed-link:hover {text-decoration: none;} .tweet-embed-container {border-radius: 20px; background: radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), #764ABC; background-blend-mode: overlay, overlay, normal; box-shadow: 0 4px 0 #d5d5d5; width: auto; padding: 20px 15px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; margin: 0 auto; gap: 3%; } .single-tweet {width: 50%;} .single-tweet img {max-width: 100%;height: auto; border-radius:7px;} .embed-tweet-right {width: 46%;} .embed-tweet-right h2 {font-family: 'Avenir'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 28px; color: #FFFFFF;} .embed-btn { display: flex; flex-direction: row; justify-content: left; width: 170px; gap: 5px; align-items: center; padding: 0px 10px; font-family: 'Avenir'; font-style: normal; font-weight: 900; font-size: 16px; line-height: 16px; color: #764ABC; height: 48px; /\* White \*/ background: #FFFFFF; mix-blend-mode: normal; box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.11); border-radius: 80px; border: none; }

Next, the server completes the WebSocket handshake by replying with an HTTP response to initialize the WebSocket connection.

Once the connection is established, both the client and server can send messages to each other asynchronously with the WebSocket protocol messages.

## How are WebSockets useful?

WebSockets are really useful when the server wants to push a lot of data and/or frequently update the browser (think multiplayer games or chat services). The traditional RESTful pattern is a synchronous request-response-based mechanism and isn’t suitable for full-duplex real-time scenarios. Look at the following comparison between the RESTful approach and WebSockets:

![Rest Websockets Table Comparison](https://blog.logrocket.com/wp-content/uploads/2018/05/rest-websockets-table-comparison.png)

Consider a game where every operation a player performs must be communicated to the other players ASAP.

If you tried to implement it with REST, you’d probably resort to some polling mechanisms where all the players constantly bombard the server with requests for updates.

There are several issues with this scenario:

*   The server has to handle a lot of requests, even if it has nothing new to report
*   Lag will exist and will grow if players are nicer and don’t poll as often
*   The server has to maintain the recent state until all players are notified and come up with a solution for coordinating versioning with the client
*   If a client drops, the server has no good way to know about it

With WebSockets, all of these problems are removed — the server is in control and it knows exactly how many clients are connected at each time.

It can update all the connected clients immediately when something worthwhile happens and there is no lag for HTTP polling mechanisms. The server doesn’t need to keep state around once it’s notified all clients, and additionally, if a client drops, the connection drops, and the server is notified immediately.

## Building a Connect4-style demo app with WebSockets

Chat services are a killer application for WebSockets. Character-by-character updates or even just the message: “X is typing…” is not possible without WebSockets in the browser.

Let’s build a Connect4 game that demonstrates how WebSockets work.

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

There will be a server that manages the state of the game and two players that play against each other. The server is in charge of managing the board, ensuring players make only valid moves, tell each player when it’s their turn, check for victory conditions, and notify players.

The client is a React-based app. It displays the board and messages from the server. When the server sends an updated board or message, the client updates its state and React takes care of updating the display.

The client also takes care of responding to clicks on the board when it’s the player’s turn and notifies the server.

(Note: The Connect4 game is not optimized at all. The whole board is sent every time, instead of just changes, and I send multiple messages even when they can be combined. This is by design — I’m doing this to show how easy and user-friendly WebSockets are. The code is very straightforward and readable and the only somewhat complex aspect is checking for victory, which is isolated in its own function on the server-side)

Here is what it looks like:

![Connect Four Game Preview](https://blog.logrocket.com/wp-content/uploads/2018/05/connect-four-game-preview.gif)

## Project structure

Before we dive into the code, let’s quickly find it and examine how it’s structured.

The code for both the server and the client is available on [this](https://github.com/codezri/connect4-websockets) GitHub repository. Clone the GitHub repository in your working directory and open it with your favorite code editor to start inspecting the source code.

You’ll notice that the entire server is in a single file, [server.js](https://github.com/codezri/connect4-websockets/blob/master/server.js), and the client was created using [Create React App (CRA)](https://blog.logrocket.com/tag/create-react-app), which creates its own directory structure. I moved everything into the client sub-directory to isolate frontend code from the backend code.

There are two README files.

README.md is a concise file that gives a short description of the app and how to use it.

The README2.md is the file generated by CRA and contains a lot of information about the goodies you get from using CRA to start your project.

Now, install the dependencies and run the following command to start the game:

npm run dev
# or
yarn dev

The above command starts both server and client in the development mode. Open the game in two browser windows simultaneously and try playing it.

Let’s dive into to the source code and study each module.

## Building the Connect4 server

The server is a Node.js application that uses [socket.io](https://socket.io/) to function as a WebSockets server. All it takes to start is a WebSockets server listening on port 1337:

const { createServer } = require('http')
const { Server } = require('socket.io')

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: '\*'
  }
})
.
.
.
reset()
const port = 1337
httpServer.listen(port)
console.log('Listening on port ' + port + '...')

The server is super simple; it can run only one game at a time. The game state includes the game board, the two players, and who the current player is.

The board is a 6×8, 2D array where all the cells are initially white. I chose to represent the players as an object with two attributes, `red` and `yellow`. There’s no need for a map here because the keys are strings and I don’t need to iterate over them. The value for each player is their WebSocket connection reference, which is initially null.

let board = null
const players = {'red': null, 'yellow': null}
let player = 'red'

function reset() {
  board = Array(6).fill(0).map(x => Array(8).fill('white'))
  players\['red'\] = null
  players\['yellow'\] = null
  player = 'red'
}

Why keep a `players` object instead of just two variables? The strings `red` and `yellow` are used throughout to communicate important information back and forth between the server and the client.

On the server-side, everything happens inside `io.on('connection', function(socket) {...}`. This callback function is called whenever a new client connects to the server.

The server then registers callbacks for various events and messages, which I’ll cover soon. But first, the server stores the socket object reference in the `players` object.

The first client to connect gets to be the red player; yellow is second. The server will disconnect any further connection attempts to isolate the current two-player game session. The server will also send each player their color and whose turn it is.

if (players\['red'\] == null) {
    players\['red'\] = socket
    socket.emit('color', 'red')
  } else if (players\['yellow'\] == null) {
    players\['yellow'\] = socket
    socket.emit('color', 'yellow')
    io.emit('turn', 'red')
  } else {
    socket.disconnect()
  }

The `emit()` function used to send messages to the client/clients has two flavors:

1.  The `io.emit()` call: This lets the server broadcast the same message to all connected clients
2.  The `socket.emit()` call: This sends the message to a particular client

One example to consider here is that each player needs to get a different message to know their color, but all players need to get the same message to tell whose turn it is.

The server then goes on to register callbacks for two events: `disconnect` and `click`. The `disconnect` event is not very interesting and just removes the disconnecting player’s socket from the player’s object.

## The `click` event

The `click` event is where all the action is. When the active player clicks a column on the board, the server receives the `click` event and goes to work. First, the server verifies that the click is valid.

Clicks are ignored in the following cases:

*   Out-of-turn clicks
*   Clicks on full columns (the top spot is already taken)
*   Clicks when only one player is connected (if no one is connected, then no one can
    
    click)socket.on('click', function (column) {
    // Ignore players clicking when it's not their turn
    if (players\[player\] !== socket) {
    return
    }
    // Ignore clicks on full columns
    if (board\\\[0\\\]\[column\] !== 'white') {
      return
    }
    
    // Ignore clicks before both players are connected
    if ((players\['red'\] == null) || (players\['yellow'\] == null)) {
      return
    }
    

Once this part is done, the server knows it’s a proper click and proceed to process it. Then, the server places a new piece at the top of the target column and sends the updated board to all players via the `board` message:

// find first open spot in the column
    let row = -1
    for (row = 5; row >= 0; --row) {
      if (board\\\[row\\\]\[column\] === 'white') {
        board\\\[row\\\]\[column\] = player
        break
      }
    }

io.emit('board', board)

Now, the server needs to check if the current player actually won by placing that piece. It calls the `checkVictory()` function with the location of the currently placed piece, and if it returns `true`, it means the current player won.

The server will then broadcast the `victory` message to both players with the winning player’s color, disconnect both players, and bail out.

But, if the player didn’t win, the player toggles the active player and notifies both players with the `turn` message.

// Check victory (only current player can win)
    if (checkVictory(row, column)) {
      io.emit('victory', player)
      // Disconnect players
      players\['red'\].disconnect()
      players\['yellow'\].disconnect()
      reset()
      return
    }

// Toggle the player
    player = player === 'red' ? 'yellow' : 'red'
    io.emit('turn', player)

## Checking for victory

The most complicated part of the server is the victory check. It’s not rocket science, but you can easily miss some corner cases if you’re not careful. Let’s discuss it a little bit and then look at some of the code.

To win a game of Connect4, a player must have four adjacent pieces aligned horizontally, vertically, or diagonally. If a player wins on a turn, then the piece that was just placed must be part of the four adjacent pieces.

The trivial approach is to start from the last placed piece and then check in each of the eight directions for the additional three adjacent pieces in the player’s color.

But, then you can miss a case where the placed piece was in the middle of the sequence, as in the following image:

![Connect Four Middle Sequence Placed Piece](https://blog.logrocket.com/wp-content/uploads/2018/05/connect-four-middle-sequence-placed-piece.png)

So, the correct way to check is to go both ways and count the total of pieces with the player’s color. For example, when checking the horizontal direction, we check both to the left and to the right.

That means that we only ever need to check four directions: horizontal, vertical, top-left to bottom-right diagonally, and bottom-left to top-right diagonally. We also need to pay attention and not go out of bounds with our checks. Here is part of the code for horizontal checks:

function checkVictory(i, j) {
  const c = board\\\[i\\\]\[j\]

// Check horizontally
  let count = 0
  // count to the left
  for (let k = 1; k < 4; ++k) {
    if (j - k < 0) {
      break
    }
    if (board\\\[i\\\]\[j - k\] !== c) {
      break
    }
    count++
  }
  // count to the right
  for (let k = 1; k < 4; ++k) {
    if (j + k > 7) {
      break
    }
    if (board\\\[i\\\]\[j + k\] !== c) {
      break
    }
    count++
  }

if (count > 2) {
    return true
  }

We count up to three places to the left and right, breaking when encountering anything that is not the current player’s color. In the end, if the count is more than two, it means we have a sequence of four, including the currently placed piece, and it’s a victory.

The checks for verticals and diagonals are very similar, except the indices are a little different and, in the case of the diagonals, both `i` and `j` are incremented.

Check the complete implementation of the `checkVictory` function from [here](https://github.com/codezri/connect4-websockets/blob/9f4874491aa7c94e2647e4ce634824f0c12c4f2e/server.js#L23).

## WebSockets and solution design

WebSockets are awesome, but let’s talk about WebSockets-based solution design.

The client connects and sends `click` messages to the server. The server sends multiple messages, like `board`, `color`, and `turn`.

Is it really necessary to send all of these in separate messages? Not really. The server could send a single state message that includes everything.

However, if you send just one message, then the client-side code will be more complicated because it has to parse and figure out what has changed.

The `board` message presents another decision point. In our demo app, I sent the whole board, but I could just as easily send just the location of the most recently placed piece.

If that were the case, then the application frontend implementation would have to store the board state in the memory and update it properly when receiving a message on a newly placed piece, instead of just receiving the whole board.

Our application frontend’s board rendering logic is now simple since we send the entire board matrix with the `board` message. We can render the new board state with the following one-liner:

this.setState({...self.state, board: board})

Also, we send the `board` object directly from the server-side. However, we can reduce the WebSocket message payload size by sending only the updated location coordinate of the board. But, we will send the entire board matrix for the sake of simplicity in this tutorial.

## Building the Connect4 client

The client is a React app, and all of the action takes place in the `App` main component. It also has two sub-components: `Board` and `Infobar`.

### **The** `InfoBar` **componen****t**

The `InfoBar` is a stateless functional component that displays information in the player’s color. It’s got some embedded styling and receives both the message and the color as properties from its parent:

* * *

* * *

#podrocket-plug { border-radius: 12px; width: 75%; height: 352px; margin: 1rem auto; display: block; }

import React from 'react'

const InfoBar = ({message, color}) => {
  let style = {color: color, 
               backgroundColor: 'black', 
               padding: '5px'};
  return <p style={style}>{message}</p>
}

export default InfoBar

### **The** `Board` **component**

The board is much more interesting. It has to handle clicks, and yet it is also a stateless functional component that knows nothing about the server or WebSockets.

How does it work?

The parent `App` component passes a callback function called `onColumnClick` as a prop — the board simply invokes this callback with the clicked column.

Another cool thing about the board is that it uses [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) to render the board and the pieces — not traditional DOM elements. In addition, it also changes the mouse pointer according to the player’s turn.

Let’s break it down piece by piece to get detailed information about the board component’s props.

The board accepts three props from the parent. The `board` prop is the 6×8 2D array that you’re already familiar with from building the server. The `onColumnClick` prop is the callback that will be invoked when a column is clicked and `yourTurn` is a boolean for handling the current mouse cursor.

Next, the board defines an empty array for cells that will be populated later and sets the mouse cursor to either pointer or no-drop, depending on the `yourTurn` prop.

import React from 'react'

const Board = ({board, onColumnClick, yourTurn}) => {
  const cells = \[\]
  const style = {cursor: yourTurn? 'pointer' : 'no-drop'}

Here, we populate the `cells` arrays with the board cells. Each cell is an SVG group that has a 50×50 px blue rectangle with a circle in the middle. The circle’s color comes from the `board` prop, and will be red, yellow, or white.

for (let i = 0; i < 6; ++i) {
  for (let j = 0; j < 8; ++j) {
    let cell =  onColumnClick(j)} 
                style={style}>



    cells.push(cell)
  }
}

Finally, we return a 440×360 px SVG element with the board represented by the cells on top, followed by a blue trapezoid that serves as the base.

return <svg width={440} height={360}>
          {cells}
          <polygon points="20,300 0,360 440,360 420,300"
          fill={'blue'}/>
       </svg>
}
export default Board

### **The** `App` **component**

The `App` is the main component. It is in charge of rendering the `InfoBar` and `board` components, as well as handling all communication.

It also uses a little CSS from App.css. For communicating with the server, it uses the [Socket.io library](https://socket.io/docs/v4/) that provides the `io()` function.

import React, {Component} from 'react'
import './App.css'
import InfoBar from './components/InfoBar'
import Board from './components/Board'
import { io } from 'socket.io-client'

The constructor sets the state, which consists of:

*   *   The board, which is identical to the server’s representation
    *   A message that is always displayed in the `InfoBar`
    *   The `yourTurn` boolean

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: Array(6).fill(0).map(x => Array(8).fill('white')),
      message: 'Waiting for another player...',
      yourTurn: false
    }

The next part of the constructor is where all the communication takes place. First, the `this` pointer is stored as the `self` variable in a closure. This is necessary for the WebSockets to have access to the component’s state.

Then, the app constructor registers handlers for the following messages:

*   `board`
*   `color`
*   `turn`
*   `victory`

In each case, the constructor updates the relevant parts of the state.

(Note: The handlers are registered in the constructor, but will be called again as the game progresses)

let self = this

socket.on('board', board => {
  this.setState({...self.state, board: board})
});

socket.on('color', color => {
  this.setState({...self.state, color: color})
});

socket.on('turn', player => {
  if (player === this.state.color) {
    this.setState({...self.state, message: "You're up. What's your move?", yourTurn: true})
  } else {
    this.setState({...self.state, message: player + ' is thinking...', yourTurn: false})
  }
});

socket.on('victory', player => {
  let newState = {yourTurn: false}
  if (player === this.state.color) {
    newState\['message'\] = 'You win!'
  } else {
    newState\['message'\] = 'You lose!'
  }
  this.setState({...self.state, ...newState})
});

Remember the `onColumnClick` function the board receives to invoke when a column is clicked? It’s a one-liner that just sends a `click` message to the server.

onColumnClick = column => socket.emit('click', column);

The `render()` function is pretty straightforward. It renders the header, then the `InfoBar`, then the board, passing the necessary props from the state.

render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Connect Four</h1>
        </header>
        <InfoBar color={this.state.color} 
                 message={this.state.message} />
        <Board board={this.state.board} 
               onColumnClick={this.onColumnClick} 
               yourTurn={this.state.yourTurn}/>
      </div>
    )
  }

Here is an illustration with some arrows of a victory:

![Victory State Demonstration](https://blog.logrocket.com/wp-content/uploads/2018/05/victory-state-demonstration.png)

## Conclusion

WebSockets are a great technology for client-server applications where the server needs to send messages, events, or notifications to the client without being constantly prompted or polled.

For example, we can use WebSockets to build real-time chat apps, online browser-based multiplayer games, and monitoring tools. WebSocket payloads are more lightweight than HTTP messages, so we can use WebSockets for building live web dashboards as well.

In this post, we learned the advantages of using WebSockets over REST, and we went though a full-fledged example of a Node server and React clients that communicate over WebSockets and together implement the classic Connect4 game. As a bonus, we used SVG for rendering the board and pieces.

Now, it’s your time to go out there and build awesome stuff with WebSockets.

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

### Leave a Reply[Cancel reply](/websockets-two-way-communication-react-app/#respond)

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

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"246\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "246" \]); //# sourceURL=jetpack-stats-js-before var jetpackSwiperLibraryPath = {"url":"https://blog.logrocket.com/wp-content/mu-plugins/jetpack-15.1/\_inc/blocks/swiper.js"}; var jetpackCarouselStrings = {"widths":\[370,700,1000,1200,1400,2000\],"is\_logged\_in":"","lang":"en","ajaxurl":"https://blog.logrocket.com/wp-admin/admin-ajax.php","nonce":"3171956a71","display\_exif":"1","display\_comments":"1","single\_image\_gallery":"1","single\_image\_gallery\_media\_file":"","background\_color":"black","comment":"Comment","post\_comment":"Post Comment","write\_comment":"Write a Comment...","loading\_comments":"Loading Comments...","image\_label":"Open image in full-screen.","download\_original":"View full size \\u003Cspan class=\\"photo-size\\"\\u003E{0}\\u003Cspan class=\\"photo-size-times\\"\\u003E\\u00d7\\u003C/span\\u003E{1}\\u003C/span\\u003E","no\_comment\_text":"Please be sure to submit some text with your comment.","no\_comment\_email":"Please provide an email address to comment.","no\_comment\_author":"Please provide your name to comment.","comment\_post\_error":"Sorry, but there was an error posting your comment. Please try again later.","comment\_approved":"Your comment was approved.","comment\_unapproved":"Your comment is in moderation.","camera":"Camera","aperture":"Aperture","shutter\_speed":"Shutter Speed","focal\_length":"Focal Length","copyright":"Copyright","comment\_registration":"0","require\_name\_email":"1","login\_url":"https://blog.logrocket.com/wp-login.php?redirect\_to=https%3A%2F%2Fblog.logrocket.com%2Fwebsockets-two-way-communication-react-app%2F","blog\_id":"1","meta\_data":\["camera","aperture","shutter\_speed","focal\_length","copyright"\]}; //# sourceURL=jetpack-carousel-js-extra {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
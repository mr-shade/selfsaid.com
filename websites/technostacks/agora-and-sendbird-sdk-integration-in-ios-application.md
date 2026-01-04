---
title: "Agora & Sendbird SDK Integration in iOS Application - Technostacks"
date: "2023-11-28T13:26:03+00:00"
slug: "agora-and-sendbird-sdk-integration-in-ios-application"
image: "https://technostacks.com/wp-content/uploads/2023/11/Agora-Sendbird-SDK-Integration-in-iOS-Application.png"
description: "Find out here the guide for Agora & Sendbird SDK integration in the iOS application. You will also see here the features of Both SDKs."
tags: []
original_url: "https://technostacks.com/blog/agora-and-sendbird-sdk-integration-in-ios-application/"
---

[![Technostacks logo](https://technostacks.com/wp-content/uploads/2025/02/techno-logo.svg)](https://technostacks.com/)

[![Technostacks logo](https://technostacks.com/wp-content/uploads/2025/03/mobile-logo.svg)](https://technostacks.com/)

*   [Services](https://technostacks.com/services/)
    
    *   *   ### Have a question?  
            Let us know.
            
            [Contact Us![](https://technostacks.com/wp-content/plugins/techno-2025-blocks/imgs/cta-arrow.svg)](https://technostacks.com/contact-us)
            
    *   *   *   [Advanced Technologies](https://technostacks.com/advanced-technologies/)
            *   [Cloud & DevOps](https://technostacks.com/cloud/)
            *   [Data & AI](https://technostacks.com/data-ai/)
                
            *   [Digital Products](https://technostacks.com/digital-products/)
            *   [Product Engineering](https://technostacks.com/product-engineering/)
            *   [Startup Consulting](https://technostacks.com/startup-consulting/)
        
        *   * * *
            
        *   [![chevron](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg)View all services](https://technostacks.com/services/)
        
    
*   [Our Work](https://technostacks.com/our-work/)
*   [About Us](https://technostacks.com/company-overview/)
*   [Career](https://technostacks.com/career/)
*   [Resources](https://technostacks.com/blog/)
*   [Get In Touch![Link](https://technostacks.com/wp-content/plugins/techno-2025-blocks/imgs/cta-arrow.svg)](https://technostacks.com/contact-us)
    

Close

[Get In Touch![Link](https://technostacks.com/wp-content/plugins/techno-2025-blocks/imgs/cta-arrow.svg)](https://technostacks.com/contact-us)

![Agora & Sendbird SDK Integration in iOS Application](https://technostacks.com/wp-content/uploads/2023/11/Agora-Sendbird-SDK-Integration-in-iOS-Application.png)

![Technostacks Avatar](https://technostacks.com/wp-content/uploads/2023/04/Technostacks-PNG.png)

Written by

### 

Technostacks

Technostacks is a global IT solutions company specializing in AI, IoT, and SaaS, delivering innovative digital products for businesses.

### Share with your community!

[

![facebook](https://technostacks.com/wp-content/uploads/2025/02/facebook.svg)

](https://www.facebook.com/sharer/sharer.php?u=https://technostacks.com/blog/agora-and-sendbird-sdk-integration-in-ios-application/)[

![X](https://technostacks.com/wp-content/uploads/2025/02/twitter.svg)

](https://x.com/intent/tweet?url=https://technostacks.com/blog/agora-and-sendbird-sdk-integration-in-ios-application/&text=Agora & Sendbird SDK Integration in iOS Application)[

![linkedin](https://technostacks.com/wp-content/uploads/2025/02/linkedin.svg)

](https://www.linkedin.com/sharing/share-offsite/?url=https://technostacks.com/blog/agora-and-sendbird-sdk-integration-in-ios-application/)

[Designing & Development](https://technostacks.com/category/designing-development/)

# Agora & Sendbird SDK Integration in iOS Application

28 Nov 2023

With smartphones, chat capabilities have become common for mobile apps, and messaging apps are all the rage. The engagement that comes with chat features will unarguably push your users to spend more and more time on the app. Modern chat apps support not only text messages but also multimedia elements like images, videos, GIFs, and audio calls & video calling.

While implementing chat features, you can write everything by yourself or use some scaffolding from others to make the development faster.

Below is the list of available 3rd party SDKs (Software Development Kits) for integrating chat audio & video calling functionality into iOS applications.

**Here are some popular and most used SDK options:**

*   Sendbird
*   Firebase Real-time Database and Firebase Cloud Messaging
*   Twilio
*   Agora
*   Zendesk Chat SDK
*   PubNub

We have implemented all the above SDKs in our various areas of iOS applications.

We will discuss here the Agora & SendBird SDK implementation and the key features of both SDKs.

## Agora SDK (Chat & Video Calling With Streaming Video Content)

[Agora SDK](https://www.agora.io/) (Software Development Kit) is a bundle of tools, libraries, and APIs provided by Agora, Inc. to developers with the sole aim of enabling them to infix their functions for real-time audio, video, and interactive broadcasting into their own apps. The foremost Agora SDK is used to aid in the integration of mechanisms through which applications can provide users with real-time communication, collaboration, and interaction.

## Key Features Of The Agora SDK

### Voice and Video Communication

The Agora SDK allows the developers to build the user interface of voice and video calling in the application. In other words, with the Agora SDK, as an example from our side, a user is able to make a one-to-one call or make a group call.

### Interactive Broadcasting

The use of the Agora SDK can be by developers in making interactive broadcasting applications where one or more hosts may broadcast themselves to a large audience but at the same time enable the audience to interact via chat, likes, and many others.

### Real-Time Messaging

The SDK makes not only voice calls but also video calls and empowers real-time text messaging and chat functionalities for conversation amongst users in the time of voice or video calls and standalone message applications.

### Screen Sharing

Developers can also enable screen sharing in their apps, whereby the user is able to share their screens with other users during a call.

### Cross-Platform Support

Agora SDK is versatile since it is compatible with iOS and Android devices, web browsers, and desktop applications making developers enjoy uniform experiences on various devices.

### High Quality and Low Latency

Agora has emphasized in high audio and video quality as well as good latency to make the communication experience all smooth and immersive.

### Customization and Integration

The SDK offers customization options fitting the branding and user experience of the host application. It also provides, then the APIs to integrate the real-time communication features seamlessly into the UI of the app.

You can Integrate the Agora SDK in various applications, such as video conferencing apps, social networking platforms, e-learning platforms, and virtual events, among others.

**Read More:- [Localization in SwiftUI – String Catalogs with Xcode 15](https://technostacks.com/blog/localization-in-swiftui-string-catalogs-with-xcode-15)**

## Agora SDK Implementation Guide for iOS Applications

### Prerequisites

**Xcode (latest version)**

*   A valid Agora account (sign up at \[Agora Developer Portal\]([https://www.agora.io/en/](https://www.agora.io/en/))
*   An iOS device or simulator running iOS 9.0 or later.

### SDK Installation

*   Using CocoaPods
*   Open your project’s \`Podfile\`.
*   Add the following line to your \`Podfile\`:

pod ‘AgoraRtcKit’  
– Run the command \`pod install\` in your project directory.  
– Open the \`.xcworkspace\` file generated by CocoaPods.

*   Manual Integration

– Download the Agora SDK from the \[Agora Developer Portal\](https://www.agora.io/en/).  
– Drag and drop the \`AgoraRtcKit.framework\` file into your Xcode project.  
– In your project’s target settings, under “General,” add the \`AgoraRtcKit.framework\` to the “Frameworks, Libraries, and Embedded Content” section.

*   Initializing the Agora SDK

– Replace \`”APP\_ID”\` with your Agora App ID.

import AgoraRtcKit

func application(\_ application: UIApplication, didFinishLaunchingWithOptions
                  launchOptions: \[UIApplication.LaunchOptionsKey: Any\]?) -> Bool {
    AgoraRtcEngineKit.sharedEngine(withAppId: "YOUR\_APP\_ID", delegate: nil)
    return true

*   Implement the user interface

– To implement the user interface, create two views for the display of local and remote videos.

// The video feed for the local user is displayed here
var localView: UIView!
// The video feed for the remote user is displayed here
var remoteView: UIView!
remoteView.frame = CGRect()
localView.frame = CGRect()
func initViews() {
    // Initializes the remote video view. This view displays video when a remote host joins the channel.
    remoteView = UIView()
    self.view.addSubview(remoteView)
    // Initializes the local video window. This view displays video when the local user is a host.
    localView = UIView()
    self.view.addSubview(localView)
}

*   Permissions on the device

– First, we need to get permission for the camera and microphone, for that add these two permission keys to the info.Plist file.

NSCameraUsageDescription
$(PRODUCT\_NAME) uses the camera for video call
Privacy - Microphone Usage Description
$(PRODUCT\_NAME) uses the microphone for video call

– Here is the Apple native AVCaptureDevice class to ask for permission before starting the camera.

func requestCameraAccess() -> Bool {
        var hasCameraPermission = false
        let semaphore = DispatchSemaphore(value: 0)
        switch AVCaptureDevice.authorizationStatus(for: .video) {
            
        case .notDetermined:
            AVCaptureDevice.requestAccess(for: .video,
                                          completionHandler: { granted in
                hasCameraPermission = granted
                semaphore.signal()
            })
            semaphore.wait()
            return hasCameraPermission
        case .restricted:
            AVCaptureDevice.requestAccess(for: .video,
                                          completionHandler: { granted in
                hasCameraPermission = granted
                semaphore.signal()
            })
            semaphore.wait()
            return hasCameraPermission
        case .denied:
            return false
        case .authorized:
            return true

        @unknown default:
            AVCaptureDevice.requestAccess(for: .video,
                                           completionHandler: { granted in
                hasCameraPermission = granted
                semaphore.signal()
            })
            semaphore.wait()
            return hasCameraPermission
        }
        
    }

– Also, need to request audio permission using the same AVCaptureDevice class.

func requestAudioAccess() -> Bool {
        var hasAudioPermission = false
        let semaphore = DispatchSemaphore(value: 0)
        AVCaptureDevice.requestAccess(for: .audio, completionHandler: { granted in
            hasAudioPermission = granted
            semaphore.signal()
        })
        semaphore.wait()
        return hasAudioPermission
    }

*   Create a channel and generate a video token

In our case, we have generated a unique channel using the random alphanumeric string function and get a video token and streaming token from the backend API.

func init() {
	if checkForPermissions() {
			if userType == .userHost {
                self.getStreamingTokenAndJoinCall()
            } else {
            // if a user is not hosting this video call, we get this channel name, a token from firebase notification passed by the host user
                 self.userId = UInt("logged user-id")
                self.agoraManager.channelName = channelName ?? ""
                self.agoraManager.videotoken  = token ?? ""
                self.agoraManager.streamingToken = token ?? ""
                self.joinChannel()
            }
    }
}

var userId:UInt = 0
var playerId:Int = 1001
var channelName = ""
var videocallChanneltoken = ""
var streamingChanneltoken = ""
var videoURL:String?

func randomAlphaNumericString(length: Int) -> String {
        let allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        let allowedCharsCount = UInt32(allowedChars.count)
        var randomString = ""
        
        for \_ in 0 ..< length {
            let randomNum = Int(arc4random\_uniform(allowedCharsCount))
            let randomIndex = allowedChars.index(allowedChars.startIndex, offsetBy: randomNum)
            let newCharacter = allowedChars\[randomIndex\]
            randomString += String(newCharacter)
        }
    return randomString
}

func getStreamingTokenAndJoinCall() {
    let channelName = randomAlphaNumericString(length: 5)
    DispatchQueue.main.sync {
        self.userId = UInt("logged user id")
        self.agoraManager.channelName = channelName ?? ""
        self.agoraManager.videotoken  = videocallChanneltoken ?? ""
        self.agoraManager.streamingToken = streamingChanneltoken ?? ""
        self.playerId = playerID ?? 1001
        self.joinChannel()
    }
}

*   Joining a Channel

To join a channel for real-time communication, We can use the channel ID.

agoraKit.joinChannel(byToken: nil, channelId: "yourChannelId", info: nil, uid: 0, joinSuccess: nil)

*   Publishing and Subscribing to Streams

To publish your own audio and video stream, you’ll need to configure the local media settings and then start publishing.

agoraKit.enableVideo() // Enable video
agoraKit.enableAudio() // Enable audio

// Setup local video view
let localVideoView = UIView() agoraKit.setupLocalVideo(localVideoView)

// Start publishing
agoraKit.startPreview()
agoraKit.startPublishing()

*   Join a Stream

As a host user, you can also publish media streams in video calls using the Agora mediakit player.

// push video url in agora mediakit player
 self.agoraManager.mediaPlayerKit.open(videoURL ?? "00", startPos: 0)
 self.agoraManager.publishStream(channelName: agoraManager.channelName,
                                                    UId: playerId)

*   Displays a remote video stream

– Callback called when a new host joins the channel.

extension ViewController: AgoraRtcEngineDelegate {
    func rtcEngine(\_ engine: AgoraRtcEngineKit, didJoinedOfUid uid: UInt, elapsed: Int) {
        let videoCanvas = AgoraRtcVideoCanvas()
        videoCanvas.uid = uid
        videoCanvas.renderMode = .hidden
        videoCanvas.view = remoteView
        agoraEngine.setupRemoteVideo(videoCanvas)
    }
}

*   Subscribing to Streams

– To subscribe to other users’ audio and video streams, you’ll need to set up remote video views and then subscribe to the streams.

// Your remote video view
let remoteVideoView = UIView()
 agoraKit.setupRemoteVideo(remoteVideoView,
                          forUid: remoteUid)
agoraKit.subscribeRemoteVideoStream(remoteUid,
                                     type: .video,
                                     streamType: .high,
                                    subscribeSuccess: nil)

*   Handling User Interface

– You should manage user interface elements that allow users to start/stop publishing and subscribing, as well as UI elements for displaying video views.

– Leave Channel  
– When the user wants to end the communication session, make sure to leave the channel and release resources.

agoraKit.leaveChannel(nil)
agoraKit.stopPreview()
agoraKit.setupLocalVideo(nil)
agoraKit.setupRemoteVideo(nil, forUid: remoteUid)

*   Handling User Interactions

– Implement UI controls for actions like muting audio, disabling video, switching cameras, etc. Use Agora SDK methods to manage these interactions.

## Sendbird SDK (In-App Chat API And SDK Platform)

[Sendbird SDK](https://sendbird.com/) makes it easy for retailers to connect buyers and sellers within the mobile app for increased conversions and engagement for better retention all with a superior support edge. Increase community growth at the same time reducing churn. Essential moderation tools to keep the conversation safe.

**Read More:- [Placing 3D Objects In Real-World With SwiftUI](https://technostacks.com/blog/placing-3d-objects-in-real-world-with-swiftui/)**

## Key Features Of The Sendbird SDK

### 1\. Group channels

A feature to enable a chat among up to 100 users in a channel, public and private. In the group channel, it would take place through an invitation for a 1-on-1 or 1-to-N private chat for users while a public chat without permission would involve various users.

### 2\. Push notifications

Ability to send a push notification for the user’s devices in case of a new message.

### 3\. Typing indicators

Indication of whether the other users in the channel are typing a message.

### 4\. Read receipts

Allowing the user to be aware that their messages have been read by the other users in the channel.

### 5\. Smart throttling

A feature to customize the number of messages displayed in a large group chat by adjusting the message loading speed.

### 6\. Message Search

First, a feature that is to be added is a search specific to messages of the channel. Developers and users will be able to find messages by title in the desired channel.

### 7\. Message metadata

Feature that allows developers to add extra data to the messages being sent.

### 8\. Image auto-moderation

A feature that would allow automatic filtering of explicit image inventory messages or inappropriate image URLs.

### 9\. TLS-based message encryption

A feature that enables the Sendbird server and client apps to have messages that are encrypted as required by the protection against eavesdropping, tampering, and message forgery demands of the Transport Layer Security (TLS).

### 10\. Advanced analytics

A feature that allows user behavior analysis through nine different metrics occurring on channels, messages, and users.

These features enable instant communication, collaborative discussions happen, the ability to track messages, monitor content in forums, share multilingual experiences, there is seamless integration and a piece of cake. Do note that in the latest SDK versions, there might be additional features too.

**Read More:- [Create a 3D Floor Plan of an Interior Room Using RoomPlan](https://technostacks.com/blog/create-a-3d-floor-plan-of-an-interior-room-using-roomplan/)**

For implementing chat, there are 2 options available:

*   SendBird Chat SDK

On the other hand, the Chat SDK is more low-level and flexible and you have more control over how you want to implement and customize the chat experience inside your app.

*   SendBird UIKit

The SendBird UIKit SDK is a high-level library that essentially comes built on top of the Chat SDK. It provides [pre-built UI components](https://sendbird.com/products/chat-messaging/uikit) and ready-to-use user interface elements which through easy integration get to be added to your app.

## Sendbird SDK Implementation Guide for iOS Applications

Beforehand, one has to create a SendBird application either through the SendBird Dashboard before integrating the SendBird Chat SDK. This application consists of all the fundamental elements of chat service including the user’s profiles, exchanging messages, and communication channels. To get started with Chat SDK, you will need a unique Application ID of your SendBird application acquired from the dashboard.

The minimum requirements for Chat SDK for iOS are the following.

*   macOS
*   Xcode 14.1 and later
*   At least one device running iOS 11.0 and later
*   Swift 5.0 and later or Objective-C

Install SendBird chat SDK with either Swift Packages Or CocoaPods Or Carthage. If you don’t want to write all code on your own you can use the available [open source code of SendBird UIKit](https://github.com/sendbird/sendbird-uikit-ios) and do modifications as per requirements.

You see the Sources folder in the source code of UIKit. To your existing project, you could add that folder and accordingly update the color themes and styles. You should add a NotificationService folder under Sample to add the things related to notifications.

Every time the connection state of your iOS app changes, the Chat SDK has to be awoken to respond in properly. In waking up the Chat SDK, you will want to start it up. Starting the Chat SDK calls for your Sendbird application’s special APP\_ID which is available on the Sendbird Dashboard.

This ID helps the SDK work smoothly with your app. In AppDelegate file, you need to import chat SDK like below:

import SendbirdChatSDK

func application(\_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: \[UIApplication.LaunchOptionsKey: Any\]?) -> Bool {
        
        let APP\_ID = "APP\_ID" //Specify your SendBird application ID
        SendbirdUI.initialize(applicationId: APP\_ID) { // This is the origin.
            // Initialization of SendbirdUIKit has started.
            // Show a loading indicator.
        } migrationHandler: {
            // DB migration has started.
        } completionHandler: { error in
            // If DB migration is successful, proceed to the next step.
            // If DB migration fails, an error exists.
            // Hide the loading indicator.
        }
    }

Then set the current user. User information can be found on the dashboard.

//Case 1: user\_id only
 SBUGlobals.currentUser = SBUUser(userId: "USER\_ID")
        
 //Case 2: Specify all fields
 SBUGlobals.currentUser = SBUUser(userId: "USER\_ID", nickname: "(Optional)NICK\_NAME", profileURL: "(Optional)PROFILE\_URL")

In our project, we create the user from the backend when user signup from the website and get the user\_id or any other information related to the sendbird on Login and save a relevant data in UserDefault.

With the object instantiated with “SBUGroupChannelListViewController”, you can present or push the object whatever you want to get the channel list. When you send some of these messages to any user, it will create a channel with 2 members if there is one-to-one communication or with more than 2 users if there is a group. The “distinct” property works as a toggle that will decide, each and every time that the same person would like to commence a conversation with the same people, whether to re-open an already existing chat channel or create one afresh. For one-to-one discussions, you should set the “distinct” property to true.

This way, you keep using the same channel for ongoing conversations, which is usually what you want. This is the code for presenting ViewController like this. You can also push the ViewController if you are already in the Navigation Controller.

 let mainVC = SBUGroupChannelListViewController()
 let naviVC = UINavigationController(rootViewController: self.mainVC)
 naviVC.modalPresentationStyle = .fullScreen
 naviVC.modalTransitionStyle = .crossDissolve
 self.present(naviVC, animated: true)

If you want to know more about Channel you can get it from their website.

https://sendbird.com/docs/chat/sdk/v4/ios/channel/overview-channel

To share the images, videos, or any other file you first have to add Privacy permission in Info. plist file.

Almost every user interface content can be customized including view layouts, list styles, and themes. This could be done by modifying the code that is placed inside the “Source” folder. This way it lets you control the visual look as well as the behavior of your app’s interface altogether. The provided code is implemented according to MVVM architecture. You have the flexibility to change the titles and labels displayed on the screen as well. Customize the text that appears on buttons, headers, and labels to match your app’s desired language, tone, or branding.

We added search particular channel in a search bar below the navigation bar. We changed the color theme and some headers and label text. You can see we have changed the left button of the navigation bar like this:

self.mainVC.headerComponent?.leftBarButton = self.createHighlightedBackButton()
//function for custom back button
func createHighlightedBackButton() -> UIBarButtonItem {
        let backButton = UIButton(type: .custom)
        backButton.frame = .init(x: 0, y: 0, width: 40, height: 40)
        backButton.setImage(UIImage(named: "fi\_menu"), for: .normal)
        backButton.tintColor = UIColor.appSecondaryColor
        backButton.addTarget(self, action: #selector(onClickBack), for: .touchUpInside)
        let backBarButton = UIBarButtonItem(customView: backButton)
        return backBarButton
 }

If you wish to receive notifications even when your phone is in sleep mode or your app is running in the background, you can achieve this by taking the following steps:

**Step 1: Obtain the Necessary Files**

Before diving into the technical steps, make sure you have the required files ready:

*   APNs Authentication Key (.p8): If you’re using Apple’s Push Notification Service (APNs), generate an authentication key (.p8) from the Apple Developer account. This key will be used to securely send push notifications to iOS devices.
*   SendBird Dashboard Access: Log in to your SendBird Dashboard account, where you’ll set up push notifications for your SendBird application.

**Step 2: Configure Push Notifications in SendBird Dashboard**

*   Log in to your SendBird Dashboard account.
*   Navigate to your SendBird application.
*   Under the “Settings” section, locate the “Push Notifications” tab.
*   Upload the APNs authentication key (.p8) file that you generated earlier.

**Step 3: Integrate Push Notifications in Your App**

*   In your iOS app project, add the APNs authentication key (.p8) file.
*   Implement the necessary code to handle push notifications:

func application(\_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
       
        //Register a device token to SendBird server
        SendbirdUI.registerPush(deviceToken: deviceToken) { success in
            
 }

 
func userNotificationCenter(\_ center: UNUserNotificationCenter, didReceive response: UNNotificationResponse, withCompletionHandler completionHandler: @escaping () -> Void) {
        let userInfo = response.notification.request.content.userInfo
        
        guard let payload: NSDictionary = userInfo\["sendbird"\] as? NSDictionary else { return }
        
        let havePresentedVC = UIApplication.shared.currentWindow?.rootViewController?.presentedViewController != nil
        let isSignedIn = UserDefaultHelper.isLoggedIn ?? false
        let needToPedning = !(isSignedIn || havePresentedVC)
        
        if needToPedning {
            self.pendingNotificationPayload = payload
        } else {
            guard let channel: NSDictionary = payload\["channel"\] as? NSDictionary,
                  let channelURL: String = channel\["channel\_url"\] as? String else { return }
            
            let sceneDelegate = UIApplication.shared.connectedScenes
                .first!.delegate as! SceneDelegate
            
            if havePresentedVC {
                SendbirdUI.moveToChannel(channelURL: channelURL, basedOnChannelList: true)
                sceneDelegate.drawerController.setDrawerState(.closed, animated: true)
            } else {
                sceneDelegate.hightLightedRow = 2
                sceneDelegate.channelUrl = channelURL
                sceneDelegate.setNV(navId: .MessagesNV)
                sceneDelegate.drawerController.setDrawerState(.closed, animated: true)
            }
        }
        completionHandler()
}

If you want to remove push notification then you need to write below code. This code we have added in the logout function.

SendbirdUI.unregisterPushToken { success in
        SendbirdUI.disconnect { \[weak self\] in
             print("SendbirdUIKit.disconnect")
         }
}

If you want to add an audio/video call service, then it is also available in the sendbird call package.

There are many other features and functions that you will be able to handle when implementing SendBird. The above is just but an example of a short and fast implementation process for you to quickly know how to integrate SendBird into your application.

## Conclusion

Here we have discussed how you can implement SendBird and Agora SDK in your iOS applications. We have also discussed the features and implementation guide of both the SDKs.

Technostacks is a leading [mobile app development company](https://technostacks.com/mobile-app-development/), successfully accomplished projects in multiple sectors while considering the specific needs of their customers. With an experience of 10+ years, the team of professionals creates each project with a vision oriented towards the offering of solutions. We provide the services of developing chat, voice, and video calling apps for all industries that enable businesses to enhance their app’s user experience.

If you want to integrate video and chat functionalities or have a requirement for something related then you can [contact us](https://technostacks.com/contact-us/). Our dedicated developers have vast experience in creating mobile applications with ease and are able to meet your requirements.

In this article

## Resources

Expert insights to make you future-ready

[View All Resources![Link](https://technostacks.com/wp-content/plugins/techno-2025-blocks/imgs/cta-arrow.svg)](https://technostacks.com/blog)

*   ![Technostacks 2025 year in review](https://technostacks.com/wp-content/uploads/2025/12/2025-Wrapped.webp)
    
    Blog 4 min read
    
    ## [2025: A Year of Intent, Depth, and Direction](https://technostacks.com/blog/2025-year-review-technostacks/)
    
    A reflective look at milestones, mindset shifts, and progress in 2025.
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): 2025: A Year of Intent, Depth, and Direction](https://technostacks.com/blog/2025-year-review-technostacks/)
    
*   ![Technology stack consulting for scalable and sustainable business growth](https://technostacks.com/wp-content/uploads/2025/12/Technology-stack-consulting-for-scalable-and-sustainable-business-growth.webp)
    
    Blog 8 min read
    
    ## [Choosing the Right Tech Stack for Sustainable Growth in 2026](https://technostacks.com/blog/choose-the-right-technology-stack-consulting/)
    
    Key factors to select a tech stack that supports long-term growth.
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): Choosing the Right Tech Stack for Sustainable Growth in 2026](https://technostacks.com/blog/choose-the-right-technology-stack-consulting/)
    
*   ![Stay competitive in the AI-driven IT industry](https://technostacks.com/wp-content/uploads/2025/12/Stay-competitive-in-the-AI-driven-IT-industry.webp)
    
    Blog 9 min read
    
    ## [10 Proven Strategies to Stay Competitive in The IT Industry](https://technostacks.com/blog/strategies-for-staying-competitive-in-it/)
    
    How IT businesses can adapt, innovate, and lead in a changing market.
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): 10 Proven Strategies to Stay Competitive in The IT Industry](https://technostacks.com/blog/strategies-for-staying-competitive-in-it/)
    
*   ![Top Mobile App Development Frameworks 2026](https://technostacks.com/wp-content/uploads/2025/12/Top-Mobile-App-Development-Frameworks-2026.webp)
    
    Blog 11 min read
    
    ## [Top 10 Programming Frameworks for App Development in 2026: The Complete Guide to Choosing the Best App Dev Framework](https://technostacks.com/blog/mobile-app-development-frameworks/)
    
    Why Mobile App Development Frameworks Matter in 2026 Today’s mobile market is intensely competitive with billions of active smartphone users worldwide, and businesses must deliver high-performance, intuitive apps that users genuinely value. Choosing the proper mobile app development framework is foundational to achieving this, since it directly influences time to market, development cost and complexity,…
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): Top 10 Programming Frameworks for App Development in 2026: The Complete Guide to Choosing the Best App Dev Framework](https://technostacks.com/blog/mobile-app-development-frameworks/)
    
*   ![TechBehemoths Global Excellence 2025](https://technostacks.com/wp-content/uploads/2025/12/Award-Banner-2.webp)
    
    Blog 3 min read
    
    ## [Technostacks wins global excellence industry recognition](https://technostacks.com/blog/technostacks-global-excellence-winner/)
    
    Celebrating innovation, delivery excellence, and global impact.
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): Technostacks wins global excellence industry recognition](https://technostacks.com/blog/technostacks-global-excellence-winner/)
    
*   ![Enterprise Innovation & Future-Proofing](https://technostacks.com/wp-content/uploads/2025/12/Enterprise-Innovation-Future-Proofing.webp)
    
    Blog 5 min read
    
    ## [Advanced Technology Consulting for Enterprise Innovation](https://technostacks.com/blog/advanced-tech-consulting-enterprise-innovation/)
    
    How modern consulting drives scalable and future-ready enterprises.
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): Advanced Technology Consulting for Enterprise Innovation](https://technostacks.com/blog/advanced-tech-consulting-enterprise-innovation/)
    
*   ![Banner showing emerging technologies powering digital transformation in 2025-26](https://technostacks.com/wp-content/uploads/2025/11/Banner-showing-emerging-technologies-powering-digital-transformation-in-2025-26.webp)
    
    Blog 8 min read
    
    ## [Top 5 Emerging Technologies 2026 for Business Digital Transformation](https://technostacks.com/blog/top-5-emerging-technologies/)
    
    Technologies reshaping industries and accelerating business growth.
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): Top 5 Emerging Technologies 2026 for Business Digital Transformation](https://technostacks.com/blog/top-5-emerging-technologies/)
    
*   ![AI-assisted programming 2025](https://technostacks.com/wp-content/uploads/2025/11/programmer-home-talking-with-conscious-ai-superintelligence-using-vr-tech.webp)
    
    Blog 6 min read
    
    ## [AI-Assisted Programming in 2026: Transforming Software Development](https://technostacks.com/blog/ai-assisted-programming/)
    
    How AI tools are improving code quality, speed, and productivity.
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): AI-Assisted Programming in 2026: Transforming Software Development](https://technostacks.com/blog/ai-assisted-programming/)
    
*   ![Off-the-Shelf-vs-Custom-Software-Best-ROI-for-Digital-Transformation](https://technostacks.com/wp-content/uploads/2025/09/Off-the-Shelf-vs-Custom-Software-Best-ROI-for-Digital-Transformation.png)
    
    Blog 6 min read
    
    ## [Off The-Shelf vs. Custom Software: Making the Right Choice](https://technostacks.com/blog/off-the-shelf-vs-custom-software/)
    
    Comparing flexibility, cost, and scalability for business software.
    
    [Read More![Link](https://technostacks.com/wp-content/uploads/2025/02/chevron.svg): Off The-Shelf vs. Custom Software: Making the Right Choice](https://technostacks.com/blog/off-the-shelf-vs-custom-software/)
    

![Previous Post](https://technostacks.com/wp-content/themes/techno-2025/imgs/slider-arrow.svg)

![Next Post](https://technostacks.com/wp-content/themes/techno-2025/imgs/slider-arrow.svg)

### Have a question?  
Let us know.

[Contact Us![Link](https://technostacks.com/wp-content/plugins/techno-2025-blocks/imgs/cta-arrow.svg)](https://technostacks.com/contact-us)

![AWS Certified](https://technostacks.com/wp-content/themes/techno-2025/imgs/aws.svg)

![Google Cloud Partner](https://technostacks.com/wp-content/themes/techno-2025/imgs/google-cloud.svg)

![Zoho Authorised Partner](https://technostacks.com/wp-content/themes/techno-2025/imgs/zoho.svg)

![ISO 27001:2013 Certificate](https://technostacks.com/wp-content/themes/techno-2025/imgs/iso.svg)

![Nasscom Affiliation](https://technostacks.com/wp-content/themes/techno-2025/imgs/nasscom.svg)

![Footer Background](https://technostacks.com/wp-content/themes/techno-2025/imgs/footer-bg.png)

### Redefining challenges, transforming experiences.

Cutting edge-solutions for seamless change.

### Quick Links

*   [Services](https://technostacks.com/services/)
*   [Resources](https://technostacks.com/blog/)

*   [Our Work](https://technostacks.com/our-work/)
*   [About Us](https://technostacks.com/company-overview/)
*   [Career](https://technostacks.com/career/)

### Career

[hr@technostacks.com](mailto:hr@technostacks.com)

[+91 99097 12616](tel:919909712616)

### USA

[18383 Preston Rd, #202  
Dallas, TX 75252](https://maps.app.goo.gl/hYXMEQQ79LgQGm5T8)

[+1 (510) 402-6022](tel:15104026022)

[info@technostacks.com](mailto:info@technostacks.com)

### India

[10th Floor, Sun Square, Navrangpura, Ahmedabad, Gujarat – 380006](https://www.google.com/maps/place/Technostacks+%7C+AI+Led+Software+Development+Company/@23.0333999,72.5540772,718m/data=!3m3!1e3!4b1!5s0x395e84f212bce68f:0x2877f7d71db46fe9!4m6!3m5!1s0x395e84f48f946df7:0x917f5b1f3ec95edc!8m2!3d23.0333999!4d72.5566521!16s%2Fg%2F1pv6yd_12?entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D)

[+91 97129 55934](tel:919712955934)

[info@technostacks.com](mailto:info@technostacks.com)

© 2026 Technostacks. All rights reserved.

[![Instagram](https://technostacks.com/wp-content/uploads/2025/03/instagram.svg)](https://www.instagram.com/technostacksinfotech/)

![LinkedIn](https://technostacks.com/wp-content/uploads/2025/03/linkedin.svg)

[![Twitter / X](https://technostacks.com/wp-content/uploads/2026/01/x.svg)](https://x.com/Technostacks)

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/techno-2025/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]} function dnd\_cf7\_generateUUIDv4() { const bytes = new Uint8Array(16); crypto.getRandomValues(bytes); bytes\[6\] = (bytes\[6\] & 0x0f) | 0x40; // version 4 bytes\[8\] = (bytes\[8\] & 0x3f) | 0x80; // variant 10 const hex = Array.from(bytes, b => b.toString(16).padStart(2, "0")).join(""); return hex.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5"); } document.addEventListener("DOMContentLoaded", function() { if ( ! document.cookie.includes("wpcf7\_guest\_user\_id")) { document.cookie = "wpcf7\_guest\_user\_id=" + dnd\_cf7\_generateUUIDv4() + "; path=/; max-age=" + (12 \* 3600) + "; samesite=Lax"; } }); jQuery(document).ready(function($){ var skills = '\[{"id":37,"tech":".Net","status":1,"isDeleted":0},{"id":192,"tech":"Accountant","status":1,"isDeleted":0},{"id":186,"tech":"AdMob","status":1,"isDeleted":0},{"id":139,"tech":"AES Encryption & Decryption","status":1,"isDeleted":0},{"id":159,"tech":"Agora.io","status":1,"isDeleted":0},{"id":169,"tech":"Amazon Rekognition","status":1,"isDeleted":0},{"id":5,"tech":"Android","status":1,"isDeleted":0},{"id":25,"tech":"AngularJs","status":1,"isDeleted":0},{"id":96,"tech":"Appium","status":1,"isDeleted":0},{"id":103,"tech":"ARCore","status":1,"isDeleted":0},{"id":91,"tech":"ARKit","status":1,"isDeleted":0},{"id":133,"tech":"Authorize.net","status":1,"isDeleted":0},{"id":93,"tech":"Automation Testing","status":1,"isDeleted":0},{"id":162,"tech":"AWS Amplify","status":1,"isDeleted":0},{"id":68,"tech":"AWS API GateWay","status":1,"isDeleted":0},{"id":167,"tech":"AWS CloudFormation","status":1,"isDeleted":0},{"id":66,"tech":"AWS CloudWatch","status":1,"isDeleted":0},{"id":170,"tech":"AWS CodeCommit","status":1,"isDeleted":0},{"id":70,"tech":"AWS CognitoPool","status":1,"isDeleted":0},{"id":60,"tech":"AWS EC2","status":1,"isDeleted":0},{"id":63,"tech":"AWS IAM","status":1,"isDeleted":0},{"id":102,"tech":"AWS IOT","status":1,"isDeleted":0},{"id":168,"tech":"AWS KMS","status":1,"isDeleted":0},{"id":67,"tech":"AWS Lambda","status":1,"isDeleted":0},{"id":116,"tech":"AWS lex","status":1,"isDeleted":0},{"id":61,"tech":"AWS Route53","status":1,"isDeleted":0},{"id":65,"tech":"AWS S3","status":1,"isDeleted":0},{"id":62,"tech":"AWS SES","status":1,"isDeleted":0},{"id":64,"tech":"AWS SNS","status":1,"isDeleted":0},{"id":164,"tech":"Azure Blob","status":1,"isDeleted":0},{"id":120,"tech":"Banner Design","status":1,"isDeleted":0},{"id":24,"tech":"BDE","status":1,"isDeleted":0},{"id":173,"tech":"Bitbucket","status":1,"isDeleted":0},{"id":31,"tech":"Blockchain Dev","status":1,"isDeleted":0},{"id":59,"tech":"Bootstrap CSS","status":1,"isDeleted":0},{"id":142,"tech":"BudgetSMS","status":1,"isDeleted":0},{"id":11,"tech":"Business Analyst","status":1,"isDeleted":0},{"id":15,"tech":"Business Development Executive","status":1,"isDeleted":0},{"id":40,"tech":"C++","status":1,"isDeleted":0},{"id":58,"tech":"CakePHP","status":1,"isDeleted":0},{"id":140,"tech":"Catchoom","status":1,"isDeleted":0},{"id":111,"tech":"CCIE","status":1,"isDeleted":0},{"id":109,"tech":"CCNA","status":1,"isDeleted":0},{"id":110,"tech":"CCNP","status":1,"isDeleted":0},{"id":172,"tech":"CircleCI","status":1,"isDeleted":0},{"id":22,"tech":"CodeIgniter","status":1,"isDeleted":0},{"id":32,"tech":"Content Writer","status":1,"isDeleted":0},{"id":89,"tech":"Core Data","status":1,"isDeleted":0},{"id":47,"tech":"CoreML","status":1,"isDeleted":0},{"id":119,"tech":"CRM","status":1,"isDeleted":0},{"id":9,"tech":"CSS","status":1,"isDeleted":0},{"id":118,"tech":"Data Analysis","status":1,"isDeleted":0},{"id":39,"tech":"Data Mining\\/ Research","status":1,"isDeleted":0},{"id":30,"tech":"DevOps","status":1,"isDeleted":0},{"id":14,"tech":"Digital Marketing","status":1,"isDeleted":0},{"id":83,"tech":"Django Framework","status":1,"isDeleted":0},{"id":84,"tech":"Django REST Framework","status":1,"isDeleted":0},{"id":53,"tech":"Docker","status":1,"isDeleted":0},{"id":69,"tech":"DynamoDB","status":1,"isDeleted":0},{"id":80,"tech":"ECMA5","status":1,"isDeleted":0},{"id":81,"tech":"ECMA6","status":1,"isDeleted":0},{"id":82,"tech":"Elasticsearch","status":1,"isDeleted":0},{"id":185,"tech":"Email Automation","status":1,"isDeleted":0},{"id":184,"tech":"Email marketing","status":1,"isDeleted":0},{"id":21,"tech":"Embedded","status":1,"isDeleted":0},{"id":143,"tech":"Face Recognition","status":1,"isDeleted":0},{"id":123,"tech":"Fast API","status":1,"isDeleted":0},{"id":79,"tech":"Firebase","status":1,"isDeleted":0},{"id":158,"tech":"Flask","status":1,"isDeleted":0},{"id":137,"tech":"Flurry","status":1,"isDeleted":0},{"id":29,"tech":"Flutter","status":1,"isDeleted":0},{"id":26,"tech":"Frontend Dev","status":1,"isDeleted":0},{"id":19,"tech":"Fullstack","status":1,"isDeleted":0},{"id":171,"tech":"Github","status":1,"isDeleted":0},{"id":190,"tech":"GitLab","status":1,"isDeleted":0},{"id":147,"tech":"Google Map APIs","status":1,"isDeleted":0},{"id":183,"tech":"Google sheet API","status":1,"isDeleted":0},{"id":28,"tech":"Graphics Designer","status":1,"isDeleted":0},{"id":163,"tech":"GraphQL","status":1,"isDeleted":0},{"id":115,"tech":"Gulp-SASS","status":1,"isDeleted":0},{"id":20,"tech":"HR","status":1,"isDeleted":0},{"id":4,"tech":"HTML","status":1,"isDeleted":0},{"id":134,"tech":"InApp Purchase","status":1,"isDeleted":0},{"id":6,"tech":"iOS","status":1,"isDeleted":0},{"id":33,"tech":"IT Recruiter","status":1,"isDeleted":0},{"id":41,"tech":"Java","status":1,"isDeleted":0},{"id":2,"tech":"JavaScript","status":1,"isDeleted":0},{"id":100,"tech":"Jenkins","status":1,"isDeleted":0},{"id":175,"tech":"JIRA","status":1,"isDeleted":0},{"id":99,"tech":"JMeter","status":1,"isDeleted":0},{"id":165,"tech":"Joomla E-Commerce","status":1,"isDeleted":0},{"id":3,"tech":"jQuery","status":1,"isDeleted":0},{"id":180,"tech":"Jupyter Notebook (Python)","status":1,"isDeleted":0},{"id":42,"tech":"Kivy","status":1,"isDeleted":0},{"id":43,"tech":"KivyMD","status":1,"isDeleted":0},{"id":131,"tech":"KNET","status":1,"isDeleted":0},{"id":36,"tech":"Kotlin","status":1,"isDeleted":0},{"id":1,"tech":"Laravel","status":1,"isDeleted":0},{"id":44,"tech":"LiDAR","status":1,"isDeleted":0},{"id":113,"tech":"Linux-OS","status":1,"isDeleted":0},{"id":114,"tech":"Mac-OS","status":1,"isDeleted":0},{"id":101,"tech":"Machine Learning","status":1,"isDeleted":0},{"id":48,"tech":"Magento","status":1,"isDeleted":0},{"id":146,"tech":"MailChimp","status":1,"isDeleted":0},{"id":127,"tech":"Mango Pay","status":1,"isDeleted":0},{"id":92,"tech":"Manual Testing","status":1,"isDeleted":0},{"id":144,"tech":"Mapbox","status":1,"isDeleted":0},{"id":121,"tech":"Market Research","status":1,"isDeleted":0},{"id":188,"tech":"Marketing Sales Funnel","status":1,"isDeleted":0},{"id":97,"tech":"Maven","status":1,"isDeleted":0},{"id":18,"tech":"MEAN\\/MERN Stack","status":1,"isDeleted":0},{"id":38,"tech":"MognoDB","status":1,"isDeleted":0},{"id":132,"tech":"Mollie","status":1,"isDeleted":0},{"id":55,"tech":"MySQL","status":1,"isDeleted":0},{"id":73,"tech":"NestJS","status":1,"isDeleted":0},{"id":107,"tech":"Network Design","status":1,"isDeleted":0},{"id":72,"tech":"NextJS","status":1,"isDeleted":0},{"id":13,"tech":"NodeJS","status":1,"isDeleted":0},{"id":85,"tech":"Numpy","status":1,"isDeleted":0},{"id":35,"tech":"Objective C","status":1,"isDeleted":0},{"id":46,"tech":"OpenCV","status":1,"isDeleted":0},{"id":86,"tech":"Pandas","status":1,"isDeleted":0},{"id":124,"tech":"PayPal","status":1,"isDeleted":0},{"id":130,"tech":"PayU","status":1,"isDeleted":0},{"id":128,"tech":"PayUMoney","status":1,"isDeleted":0},{"id":135,"tech":"PDF Generator","status":1,"isDeleted":0},{"id":23,"tech":"PHP","status":1,"isDeleted":0},{"id":160,"tech":"POLi Payments(NZ)","status":1,"isDeleted":0},{"id":56,"tech":"PostgreSQL","status":1,"isDeleted":0},{"id":12,"tech":"Project Manager","status":1,"isDeleted":0},{"id":90,"tech":"PubNub","status":1,"isDeleted":0},{"id":154,"tech":"PubNub","status":0,"isDeleted":0},{"id":138,"tech":"Push notification","status":1,"isDeleted":0},{"id":7,"tech":"Python","status":1,"isDeleted":0},{"id":17,"tech":"QA","status":1,"isDeleted":0},{"id":136,"tech":"QRCode Generator","status":1,"isDeleted":0},{"id":155,"tech":"QuickBlox","status":1,"isDeleted":0},{"id":156,"tech":"QuickBooks","status":1,"isDeleted":0},{"id":126,"tech":"Razorpay","status":1,"isDeleted":0},{"id":8,"tech":"React Native","status":1,"isDeleted":0},{"id":10,"tech":"ReactJs","status":1,"isDeleted":0},{"id":87,"tech":"RealityKit","status":1,"isDeleted":0},{"id":78,"tech":"Realm","status":1,"isDeleted":0},{"id":150,"tech":"Redis","status":1,"isDeleted":0},{"id":76,"tech":"Redux","status":1,"isDeleted":0},{"id":74,"tech":"Redux-saga","status":1,"isDeleted":0},{"id":75,"tech":"Redux-thunk","status":1,"isDeleted":0},{"id":166,"tech":"RoomDB (Android)","status":1,"isDeleted":0},{"id":189,"tech":"Scrum Master","status":1,"isDeleted":0},{"id":94,"tech":"Selenium IDE","status":1,"isDeleted":0},{"id":95,"tech":"Selenium WebDriver","status":1,"isDeleted":0},{"id":161,"tech":"Sendbird","status":1,"isDeleted":0},{"id":145,"tech":"Sendgrid","status":1,"isDeleted":0},{"id":187,"tech":"Sentry.io","status":1,"isDeleted":0},{"id":178,"tech":"Serverless","status":1,"isDeleted":0},{"id":179,"tech":"Shell Script","status":1,"isDeleted":0},{"id":49,"tech":"Shopify","status":1,"isDeleted":0},{"id":153,"tech":"Socket.io","status":1,"isDeleted":0},{"id":57,"tech":"SQLite","status":1,"isDeleted":0},{"id":149,"tech":"SSL Setup","status":1,"isDeleted":0},{"id":148,"tech":"SSO","status":1,"isDeleted":0},{"id":125,"tech":"Stripe","status":1,"isDeleted":0},{"id":174,"tech":"SVN","status":1,"isDeleted":0},{"id":34,"tech":"Swift","status":1,"isDeleted":0},{"id":71,"tech":"SwiftUI","status":1,"isDeleted":0},{"id":105,"tech":"Switches & Firewall Installation","status":1,"isDeleted":0},{"id":106,"tech":"Switching and Routing","status":1,"isDeleted":0},{"id":52,"tech":"Symfony","status":1,"isDeleted":0},{"id":129,"tech":"System Pay","status":1,"isDeleted":0},{"id":51,"tech":"Tailwind","status":1,"isDeleted":0},{"id":50,"tech":"Terraform","status":1,"isDeleted":0},{"id":98,"tech":"TestNG","status":1,"isDeleted":0},{"id":117,"tech":"Textract","status":1,"isDeleted":0},{"id":122,"tech":"threeJS","status":1,"isDeleted":0},{"id":108,"tech":"Troubleshooting","status":1,"isDeleted":0},{"id":141,"tech":"Twilio","status":1,"isDeleted":0},{"id":77,"tech":"Typescript","status":1,"isDeleted":0},{"id":27,"tech":"UI\\/UX Designer","status":1,"isDeleted":0},{"id":88,"tech":"VisonKit","status":1,"isDeleted":0},{"id":45,"tech":"VueJs","status":1,"isDeleted":0},{"id":104,"tech":"WAN Networking","status":1,"isDeleted":0},{"id":151,"tech":"Web Socket","status":1,"isDeleted":0},{"id":112,"tech":"Windows-OS","status":1,"isDeleted":0},{"id":16,"tech":"Wordpress","status":1,"isDeleted":0},{"id":177,"tech":"Yii (PHP)","status":1,"isDeleted":0},{"id":157,"tech":"Zero Accounting","status":1,"isDeleted":0},{"id":152,"tech":"ZMQ","status":1,"isDeleted":0},{"id":191,"tech":"Zoom Meeting API","status":1,"isDeleted":0},{"id":181,"tech":"Zustand","status":1,"isDeleted":0}\]'; skills = JSON.parse(skills); var skillsOptions = skills.map(function(item) { return { id: item.id, text: item.tech }; }); var skillselect = $('select\[name=skill-set\]'); $(skillselect).select2({ data: skillsOptions, multiple: true, placeholder: 'Select Skills' }); $(skillselect).on('change', function (e) { var skillsvalues = $(skillselect).select2('data'); var skillsetdeck = skillsvalues.map(function(skill){ return skill.id; }); $('#skill-set-deck').val(skillsetdeck.toString()); var skillsetemail = skillsvalues.map(function(skill){ return skill.text; }); $('#skill-set-email').val(skillsetemail.toString()); }); var min = $('#total-experience-element').attr('min'); var max = $('#total-experience-element').attr('max'); for(var i = min; i <= max; i++){ $('.ticks').append('<span class="tick">'+i+'</span>'); } $('#total-experience-element').on('change', function () { $('#total-experience').val($(this).val()); }); }); if (navigator.platform.toUpperCase().includes('MAC')) { document.body.classList.add('is-mac'); } var technostacks\_data = {"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php","site\_url":"https://technostacks.com","plugin\_url":"https://technostacks.com/wp-content/plugins/techno-2025-blocks"}; //# sourceURL=technostacks-js-extra ( function() { var skipLinkTarget = document.querySelector( 'main' ), sibling, skipLinkTargetID, skipLink; // Early exit if a skip-link target can't be located. if ( ! skipLinkTarget ) { return; } /\* \* Get the site wrapper. \* The skip-link will be injected in the beginning of it. \*/ sibling = document.querySelector( '.wp-site-blocks' ); // Early exit if the root element was not found. if ( ! sibling ) { return; } // Get the skip-link target's ID, and generate one if it doesn't exist. skipLinkTargetID = skipLinkTarget.id; if ( ! skipLinkTargetID ) { skipLinkTargetID = 'wp--skip-link--target'; skipLinkTarget.id = skipLinkTargetID; } // Create the skip link. skipLink = document.createElement( 'a' ); skipLink.classList.add( 'skip-link', 'screen-reader-text' ); skipLink.id = 'wp-skip-link'; skipLink.href = '#' + skipLinkTargetID; skipLink.innerText = 'Skip to content'; // Inject the skip link. sibling.parentElement.insertBefore( skipLink, sibling ); }() ); //# sourceURL=wp-block-template-skip-link-js-after wp.i18n.setLocaleData( { 'text direction\\u0004ltr': \[ 'ltr' \] } ); //# sourceURL=wp-i18n-js-after var wpcf7 = { "api": { "root": "https:\\/\\/technostacks.com\\/wp-json\\/", "namespace": "contact-form-7\\/v1" }, "cached": 1 }; //# sourceURL=contact-form-7-js-before var dnd\_cf7\_uploader = {"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php","ajax\_nonce":"1de1dff79d","drag\_n\_drop\_upload":{"tag":"h3","text":"Drag & Drop Files Here","or\_separator":"or","browse":"Browse Files","server\_max\_error":"The uploaded file exceeds the maximum upload size of your server.","large\_file":"Uploaded file is too large","inavalid\_type":"Uploaded file is not allowed for file type","max\_file\_limit":"Note : Some of the files are not uploaded ( Only %count% files allowed )","required":"This field is required.","delete":{"text":"deleting","title":"Remove"}},"dnd\_text\_counter":"of","disable\_btn":""}; //# sourceURL=codedropz-uploader-js-extra var wpcf7r = {"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php"}; //# sourceURL=wpcf7-redirect-script-js-extra var wpcf7\_recaptcha = { "sitekey": "6LetLXsqAAAAABCW2w554qT7XBtsqB-SyuEIf-Kg", "actions": { "homepage": "homepage", "contactform": "contactform" } }; //# sourceURL=wpcf7-recaptcha-js-before var ubermenu\_data = {"remove\_conflicts":"on","reposition\_on\_load":"off","intent\_delay":"300","intent\_interval":"100","intent\_threshold":"7","scrollto\_offset":"50","scrollto\_duration":"1000","responsive\_breakpoint":"959","accessible":"on","mobile\_menu\_collapse\_on\_navigate":"on","retractor\_display\_strategy":"responsive","touch\_off\_close":"on","submenu\_indicator\_close\_mobile":"on","collapse\_after\_scroll":"on","v":"3.8.5","configurations":\["main"\],"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php","plugin\_url":"https://technostacks.com/wp-content/plugins/ubermenu/","disable\_mobile":"off","prefix\_boost":"","use\_core\_svgs":"off","aria\_role\_navigation":"off","aria\_nav\_label":"off","aria\_expanded":"off","aria\_haspopup":"off","aria\_hidden":"off","aria\_controls":"","aria\_responsive\_toggle":"off","icon\_tag":"i","esc\_close\_mobile":"on","keyboard\_submenu\_trigger":"enter","theme\_locations":\[\]}; //# sourceURL=ubermenu-js-extra !function(e,n){if("undefined"!=typeof EnlighterJS){var o={"selectors":{"block":"pre.EnlighterJSRAW","inline":"code.EnlighterJSRAW"},"options":{"indent":4,"ampersandCleanup":true,"linehover":true,"rawcodeDbclick":false,"textOverflow":"break","linenumbers":true,"theme":"dracula","language":"generic","retainCssClasses":false,"collapse":false,"toolbarOuter":"","toolbarTop":"{BTN\_RAW}{BTN\_COPY}{BTN\_WINDOW}{BTN\_WEBSITE}","toolbarBottom":""}};(e.EnlighterJSINIT=function(){EnlighterJS.init(o.selectors.block,o.selectors.inline,o.options)})()}else{(n&&(n.error||n.log)||function(){})("Error: EnlighterJS resources not loaded yet!")}}(window,console); //# sourceURL=enlighterjs-js-after var technostacks\_theme = {"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php","site\_url":"https://technostacks.com","theme\_url":"https://technostacks.com/wp-content/themes/techno-2025"}; //# sourceURL=techno-main-js-extra {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://technostacks.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://technostacks.com/wp-includes/js/wp-emoji-loader.min.js (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.\_\_CF$cv$params={r:'9b88f6fd4ccb7a16',t:'MTc2NzUxMTEzNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')\[0\].appendChild(a);";b.getElementsByTagName('head')\[0\].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
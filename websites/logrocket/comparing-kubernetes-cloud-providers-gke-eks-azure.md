---
title: "Comparing Kubernetes across GKE, EKS, and Azure - LogRocket Blog"
date: "2021-11-19T03:00:27+00:00"
slug: "comparing-kubernetes-cloud-providers-gke-eks-azure"
image: "https://blog.logrocket.com/wp-content/uploads/2019/02/kubernetes-across-cloud-providers.png"
description: "Explore the pros and cons of running Kubernetes on GKE, EKS, and Azure, covering integration, cost, and features for each."
tags: []
original_url: "https://blog.logrocket.com/comparing-kubernetes-cloud-providers-gke-eks-azure/"
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

2021-11-18

1948

#kubernetes

Gigi Sayfan

88

Nov 18, 2021 ⋅ 6 min read

# Comparing Kubernetes across GKE, EKS, and Azure

[![](https://blog.logrocket.com/wp-content/uploads/2019/04/gigi.jpeg?w=150&h=150&crop=1)](https://blog.logrocket.com/author/gsayfan/)

[Gigi Sayfan](https://blog.logrocket.com/author/gsayfan/) Gigi has been developing software professionally for more than 20 years in domains as diverse as instant messaging, morphing, chip fabrication process control, embedded multimedia applications for game consoles, brain-inspired machine learning, custom browser development, web services for 3D distributed game platforms, IoT sensors, and virtual reality.

Table of contents

*   [Should you run your system on the cloud?](https://blog.logrocket.com/comparing-kubernetes-cloud-providers-gke-eks-azure/#shouldyourunyoursystemonthecloud)
    
*   [Google Kubernetes Engine (GKE)](https://blog.logrocket.com/comparing-kubernetes-cloud-providers-gke-eks-azure/#googlekubernetesenginegke)
    
*   [Microsoft Azure Kubernetes Service (AKS)](https://blog.logrocket.com/comparing-kubernetes-cloud-providers-gke-eks-azure/#microsoftazurekubernetesserviceaks)
    
*   [Amazon Elastic Kubernetes Service (EKS)](https://blog.logrocket.com/comparing-kubernetes-cloud-providers-gke-eks-azure/#amazonelastickubernetesserviceeks)
    
*   [K3s: A new alternative to K8s](https://blog.logrocket.com/comparing-kubernetes-cloud-providers-gke-eks-azure/#k3sanewalternativetok8s)
    
*   [Conclusion](https://blog.logrocket.com/comparing-kubernetes-cloud-providers-gke-eks-azure/#conclusion)
    

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

> **Editor’s note**: This post was last updated on 2 December 2021 to include information about recent updates to GKE, EKS, and Microsoft Azure.
> 
> ![Kubernetes Across Cloud Providers GCP AWS Azure](https://blog.logrocket.com/wp-content/uploads/2019/02/kubernetes-across-cloud-providers.png)

Assuming you’ve already decided to run Kubernetes, also called K8s, you may have some concerns and questions regarding where to run it.

There are actually quite a few [cloud providers that support Kubernetes](https://blog.logrocket.com/kubevela-intro-better-way-ship-applications/), but we’ll focus on the three major ones, Google Kubernetes Engine (GKE), Microsoft’s Azure Kubernetes Service (AKS), and Amazon’s Elastic Kubernetes Service (EKS).

In this article, I’ll discuss the main features and capabilities of the three main cloud providers, presenting what I think are some crystal clear criteria for choosing your target platform: your own on-prem data centers and virtual service providers.

### Table of contents

*   [Should you run your system on the cloud?](#shouldyourunyoursystemonthecloud)
*   [Google Kubernetes Engine (GKE)](#googlekubernetesenginegke)
*   [Microsoft Azure Kubernetes Service (AKS)](#microsoftazurekubernetesserviceaks)
*   [Amazon Elastic Kubernetes Service (EKS)](#amazonelastickubernetesserviceeks)
*   [K3s: A new alternative to K8s](#k3sanewalternativetok8s)
*   [Conclusion](#conclusion)

#replay-signup { margin-block: 1rem; display: flex; gap: 0.5rem; flex-direction: column; align-items: center; border: 1px solid #E6DFF6; border-radius: 16px; padding: 0.5rem 2rem; background-color: #F4F0FB; font-family: 'Proxima Nova', sans-serif; font-size: 0.95rem; h3 { margin: 0; font-weight: bold; } p { max-inline-size: 65ch; } .replay-signup-form-wrapper { width: 60%; } .nf-before-form-content { display: none; } input.nf-element\[type="submit"\] { background-color: #764abc; color: #fff; border-radius: 8px; padding-block: 10px; height: unset; width: 100%; display: block; } .nf-response-msg { font-size: 1.2rem; text-align: center; } }

### 🚀 Sign up for The Replay newsletter

[**The Replay**](https://blog.logrocket.com/the-replay-archive/) is a weekly newsletter for dev and engineering leaders.

Delivered once a week, it's your curated guide to the most important conversations around frontend dev, emerging AI tools, and the state of modern software.

Notice: JavaScript is required for this content.

var formDisplay=1;var nfForms=nfForms||\[\];var form=\[\];form.id='48';form.settings={"objectType":"Form Setting","editActive":true,"title":"Replay Newsletter Signup","show\_title":0,"allow\_public\_link":0,"embed\_form":"","clear\_complete":1,"hide\_complete":1,"default\_label\_pos":"above","wrapper\_class":"","element\_class":"","form\_title\_heading\_level":"3","key":"","add\_submit":0,"changeEmailErrorMsg":"Please enter a valid email address!","changeDateErrorMsg":"Please enter a valid date!","confirmFieldErrorMsg":"These fields must match!","fieldNumberNumMinError":"Number Min Error","fieldNumberNumMaxError":"Number Max Error","fieldNumberIncrementBy":"Please increment by ","formErrorsCorrectErrors":"Please correct errors before submitting this form.","validateRequiredField":"This is a required field.","honeypotHoneypotError":"Honeypot Error","fieldsMarkedRequired":"Fields marked with an <span class=\\"ninja-forms-req-symbol\\">\*<\\/span> are required","currency":"","unique\_field\_error":"A form with this value has already been submitted.","logged\_in":false,"not\_logged\_in\_msg":"","sub\_limit\_msg":"The form has reached its submission limit.","calculations":\[\],"conditions":\[\],"mp\_breadcrumb":1,"mp\_progress\_bar":1,"mp\_display\_titles":0,"formContentData":\[{"formContentData":\["email","submit\_1760469924554"\],"order":0,"type":"part","clean":true,"title":"Part Title","key":"hzyqqobd"}\],"objectDomain":"display","drawerDisabled":false,"ninjaForms":"Ninja Forms","fieldTextareaRTEInsertLink":"Insert Link","fieldTextareaRTEInsertMedia":"Insert Media","fieldTextareaRTESelectAFile":"Select a file","formHoneypot":"If you are a human seeing this field, please leave it empty.","fileUploadOldCodeFileUploadInProgress":"File Upload in Progress.","fileUploadOldCodeFileUpload":"FILE UPLOAD","currencySymbol":"&#36;","thousands\_sep":",","decimal\_point":".","siteLocale":"en\_US","dateFormat":"m\\/d\\/Y","startOfWeek":"1","of":"of","previousMonth":"Previous Month","nextMonth":"Next Month","months":\["January","February","March","April","May","June","July","August","September","October","November","December"\],"monthsShort":\["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"\],"weekdays":\["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"\],"weekdaysShort":\["Sun","Mon","Tue","Wed","Thu","Fri","Sat"\],"weekdaysMin":\["Su","Mo","Tu","We","Th","Fr","Sa"\],"recaptchaConsentMissing":"reCaptcha validation couldn&#039;t load.","recaptchaMissingCookie":"reCaptcha v3 validation couldn&#039;t load the cookie needed to submit the form.","recaptchaConsentEvent":"Accept reCaptcha cookies before sending the form.","currency\_symbol":"","beforeForm":"","beforeFields":"","afterFields":"","afterForm":""};form.fields=\[{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"email","label":"Email","key":"email","label\_pos":"hidden","required":1,"default":"","placeholder":"Email","container\_class":"","element\_class":"","admin\_label":"","help\_text":"","custom\_name\_attribute":"email","personally\_identifiable":1,"value":"","manual\_key":true,"drawerDisabled":false,"id":401,"beforeField":"","afterField":"","parentType":"email","element\_templates":\["email","input"\],"old\_classname":"","wrap\_template":"wrap"},{"objectType":"Field","objectDomain":"fields","editActive":false,"order":999,"idAttribute":"id","type":"submit","label":"Submit","processing\_label":"Submitting...","container\_class":"","element\_class":"","key":"submit\_1760469924554","admin\_label":"","drawerDisabled":false,"id":402,"beforeField":"","afterField":"","value":"","label\_pos":"above","parentType":"textbox","element\_templates":\["submit","button","input"\],"old\_classname":"","wrap\_template":"wrap-no-label"}\];nfForms.push(form); <div class="nf-mp-header"></div> <div class="nf-mp-body"></div> <div class="nf-mp-footer"></div> {{{ data.renderProgressBar() }}} {{{ data.renderBreadcrumbs() }}} {{{ data.renderPartTitle() }}} <h3> {{{ data.title }}} </h3> {{{ data.renderNextPrevious() }}} <ul class="nf-next-previous"> <# if ( data.showPrevious ) { #> <li class="nf-previous-item"> <input type="button" class="nf-previous" value="{{{ data.prevLabel }}}" /> </li> <# } #> <# if ( data.showNext ) { #> <li class="nf-next-item"> <input type="button" class="nf-next" value="{{{ data.nextLabel }}}" /> </li> <# } #> </ul> <ul class="nf-breadcrumbs"> <# \_.each( data.parts, function( part, index ) { #> <li class="{{{ ( data.currentIndex == index ) ? 'active' : '' }}} {{{ ( part.errors ) ? 'errors' : '' }}}"> <a href="#" class="nf-breadcrumb" data-index="{{{ index }}}">{{{ ( part.errors ) ? '' : '' }}} {{{ part.title }}}</a> </li> <# } ); #> </ul> <div class="nf-progress-container"> <div class="nf-progress" style="width: {{{ data.percent }}}%;"></div> </div>

function registerNinjaFormsCallback() { if (!(window.nfRadio && window.lr\_analytics)) { return; } window.nfRadio.channel("forms").on("submit:response", function(submission) { console.log(submission); if (submission.data.form\_id !== "48") { return; } window.lr\_analytics.track("blog-replay-newsletter-signup", { post: window.location.pathname, email: submission.data.fields\_by\_key?.email?.value, }); }); } registerNinjaFormsCallback();

## Should you run your system on the cloud?

As a modular, flexible, and extensible platform, you can deploy K8s on-prem, in a third-party data center, in any of the popular cloud providers, or even across multiple cloud providers. The right course of action, of course, depends on your unique project. Let’s consider the following scenarios.

For one, let’s say you run your system on-prem or in third-party data centers. You invested a lot of time, money, and training into your bespoke infrastructure. The challenges of roll-your-own infrastructure become more and more burdensome over time.

Alternately, you run your non-Kubernetes system on one of the cloud providers, but you want to benefit from the strengths of K8s.

You’ll note that in both scenarios, I didn’t mention containers. If you’re already containerized , good for you! If not, consider it an entry fee.

### On-prem or third-party data center

You may have very good reasons to run in an environment that you control closely, for example, security, regulations, compliance, performance, or cost. In this case, the cloud providers might be a non-starter. However, you can still reap the benefits of K8s by running it yourself. Since you’re already doing it, you have the expertise, skills, and experience to manage the underlying infrastructure.

However, if you made the choice to invest in your on-prem infrastructure, or you’re deployed across multiple virtual service providers simply because you started before the cloud was a reliable solution for the enterprise, it’s a different story.

You have the opportunity to upgrade everything in one complicated shot. You can switch to managed infrastructure in the cloud, package your system in containers, and orchestrate them using K8s.

### You’re already in the cloud

In the second scenario, choosing to run K8s managed by your cloud provider is probably a no-brainer since you already run in the cloud. K8s gives you the opportunity to replace a lot of layers of management, monitoring, and security you had to build, integrate, and maintain yourself with a slick experience, which improves each time Kubernetes releases another version.

Now that we’ve reviewed some of the fundamentals of Kubernetes, let’s take a look at the three cloud providers we listed earlier.

* * *

[

![](https://blog.logrocket.com/wp-content/uploads/2023/07/Screen-Shot-2023-07-06-at-7.43.53-AM.png)

## Over 200k developers use LogRocket to create better digital experiences

![](https://blog.logrocket.com/wp-content/uploads/2022/08/rocket-button-icon.png)Learn more →





](https://lp.logrocket.com/blg/learn-more)

* * *

@media all and (max-width: 800px){ .tweet-embed-container {flex-direction: column !important;} .single-tweet, .embed-tweet-right {width: 100% !important;} } .embed-link {text-decoration: none;} .embed-link:hover {text-decoration: none;} .tweet-embed-container {border-radius: 20px; background: radial-gradient(79.69% 102.24% at 100% 100.11%, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), radial-gradient(89.7% 115.09% at 3.43% 2.75%, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)), #764ABC; background-blend-mode: overlay, overlay, normal; box-shadow: 0 4px 0 #d5d5d5; width: auto; padding: 20px 15px; display: flex; flex-direction: row; justify-content: space-evenly; align-items: center; margin: 0 auto; gap: 3%; } .single-tweet {width: 50%;} .single-tweet img {max-width: 100%;height: auto; border-radius:7px;} .embed-tweet-right {width: 46%;} .embed-tweet-right h2 {font-family: 'Avenir'; font-style: normal; font-weight: 500; font-size: 16px; line-height: 28px; color: #FFFFFF;} .embed-btn { display: flex; flex-direction: row; justify-content: left; width: 170px; gap: 5px; align-items: center; padding: 0px 10px; font-family: 'Avenir'; font-style: normal; font-weight: 900; font-size: 16px; line-height: 16px; color: #764ABC; height: 48px; /\* White \*/ background: #FFFFFF; mix-blend-mode: normal; box-shadow: 0px 24px 30px rgba(0, 0, 0, 0.11); border-radius: 80px; border: none; }

## Google Kubernetes Engine (GKE)

### GKE Integration

K8s came from Google, making [GKE Google’s official method for managing Kubernetes](https://cloud.google.com/kubernetes-engine). Google SREs manage the K8s control plane and provide auto-upgrades. Because Google influences K8s and has used it as the container orchestration solution of the Google cloud platform since day one, it makes sense that GKE would provide the best integration.

Similarly, you can trust GKE as the most up to date provider. GKE performs more testing on new K8s features and capabilities than other cloud providers.

### GKE cost

On GKE, you don’t have to pay for the K8s control plane, however, you do need to pay for the worker nodes. You’ll also get access to the Google Container Registry (GCR), as well as Stackdriver Logging and Stackdriver Monitoring, which provide integrated central logging and monitoring. Lastly, to secure and optimize your deployment pipeline, you can leverage the native CI/CD tooling included with K8s.

### GKE features

Google networking is considered top of the line in comparison to other cloud providers. At the time of writing, support for multi-instance [GPUs in GKE is in preview](https://cloud.google.com/blog/products/containers-kubernetes/gke-now-supports-multi-instance-gpus).

GKE has some other neat tricks, for example, it takes advantage of general purpose K8s concepts like Service and Ingress for fine-grained control over load balancing. If your K8s service is of type `LoadBalancer`, GKE will expose it to the world via a plain L4 TCP load balancer. However, if you create an `Ingress` object in front of your service, GKE will create an L7 load balancer capable of doing SSL termination. If you annotate it correctly, the L7 load balancer is even capable of allowing gRPC traffic if you annotate it correctly.

GKE also offers two different operations modes, standard and autopilot. The standard experience has been offered from the beginning, while [autopilot](https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview) is an automated manager of your cluster that only charges you for running pods to optimize billing.

GKE even includes prebuilt K8s templates that you can use for your deployments. These are available on [Google Cloud Marketplace](https://console.cloud.google.com/marketplace/browse?filter=solution-type:k8s&_ga=2.217175377.69959840.1636458606-1489105345.1636458606&pli=1).

K8s itself is platform agnostic. In theory, you can easily switch from any cloud platform to another as well as run on your own infrastructure. In practice, when you choose a platform provider, you often want to utilize and benefit from the specific services that require extra work to migrate to a different provider or on-prem.

[GKE On-Prem](https://cloud.google.com/gke-on-prem/) provides tools, integrations, and access to help unify the experience and treat on-prem clusters as if they run in the cloud. It’s not fully transparent, and it shouldn’t be, but it helps.

## Microsoft Azure Kubernetes Service (AKS)

Microsoft Azure originally offered a solution called ACS, which supported Apache Mesos, K8s, and Docker Swarm. In October 2017, it introduced Azure Kubernetes Service, AKS, as a dedicated Kubernetes hosting service, causing the other options to fizzle out.

### AKS cost

[AKS is Microsoft’s K8s solution offering](https://azure.microsoft.com/en-us/services/kubernetes-service/#solution-architectures). AKS is very similar to GKE, for example, it also manages a K8s cluster for you for free. It is certified by CNCF as K8s conformant, meaning there are no custom hacks.

### AKS integration

Microsoft invested resources heavily into K8s in general and AKS in particular. AKS includes strong integration with `ActiveDirectory` for authentication and authorization, integrated monitoring and logging, and Azure storage. You also get built-in container registry, networking, and GPU-enabled nodes.

One of the most interesting features of AKS is its usage of the virtual-kublet project to integrate with [Azure Container Instances (ACI)](https://docs.microsoft.com/en-us/samples/azure-samples/virtual-kubelet-aci-burst/bursting-from-aks-to-aci-with-the-virtual-kubelet/). The ACI takes away the need to provision nodes for your cluster, which is a huge burden if you’re dealing with a highly variable load.

### Criticisms of AKS

In comparison to GKE, which is essentially the gold standard, developers share a few of the same criticisms of AKS. In the very first implementations of AKS, setting up a cluster on AKS took a long time, on average 20 minutes. Additionally, the startup time experienced high volatility, taking more than an hour on some occasions, causing a poor developer experience.

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

Originally, you’d also need some combination of a web UI, like Azure Portal Manager, PowerShell, and a plain CLI to provision and set everything up. However, with recent upgrades, the experience has been improved with [integrations with Visual Studio](https://docs.microsoft.com/en-us/visualstudio/bridge/bridge-to-kubernetes-vs?view=vs-2022), [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/) for pipeline management, and [Azure Monitor](https://azure.microsoft.com/en-us/services/monitor/) for logging and monitoring your infrastructure.

### AKS features

[Azure Monitor](https://docs.microsoft.com/en-us/azure/azure-monitor/insights/container-insights-overview) includes optimizations to help your application’s performance overall. For example, it tells you what is running on each node, as well as average CPU and memory utilization. It also provides information about which containers reside in a controller or a pod, helping you monitor overall performance.

Azure Monitor reviews the resource utilization of workloads running on the host that are unrelated to the standard processes that support the pod. It understands the behavior of the cluster under average and heaviest loads, helping you identify capacity needs and determine the maximum load that the cluster can sustain.

Today, both Visual Studio and Azure DevOps are widely used by developers. Support and integrations with those two services greatly improve the AKS developer experience.

## Amazon Elastic Kubernetes Service (EKS)

Amazon was a little late to the K8s scene. It always had its own Elastic Container Service (ECS) container orchestration platform. However, customer demand for K8s was overwhelming. Many organizations ran their K8s clusters on EC2 using [Kubernetes Operations](https://github.com/kubernetes/kops) (kOps) or similar tools.

### EKS integrations

AWS moved to provide proper support with official integrations, and today, EKS integrates with IAM for identity management, AWS load balancers, networking, and other various storage options.

An interesting twist for AWS is the [promised integration with Fargate](https://aws.amazon.com/fargate/), which is similar to AKS with ACI. The integration will eliminate the need to provision worker nodes. Additionally, it may potentially allow Kubernetes to automatically scale up and down via its Horizontal Pod Autoscaler (HPA) and Vertical Pod Autoscaler (VPA) capabilities, providing a truly elastic experience.

### EKS cost

On EKS, you have to pay for the managed control plane, which could be a limiting factor if you just want to experiment with K8s or you have lots of small clusters.

### EKS performance

As far as performance goes, EKS falls somewhere in the middle. It takes about ten to 15 minutes to start a cluster. As you’d expect, the performance of complex distributed systems is very nuanced, and it can’t be captured by a single metric. That said, EKS itself is still relatively new, and it might take a while until it is able to take full advantage of the robust foundation of AWS.

EKS also has offerings tailored to several [different usecases](https://aws.amazon.com/eks/). For one, you can leverage EKS with a completely cloud based infrastructure, including Fargate or EC2s. Amazon EKS Anywhere is a prepackaged solution that can be run in on prem or hybrid environments. Lastly, Amazon EKS Distro lets you deploy EKS with your own tooling.

## K3s: A new alternative to K8s

In addition to the implementation of K8s that we’ve covered above, there is a newer[,](https://k3s.io/) lightweight alternative called K3s. K3s is targeted toward edge or IoT-based applications, and as a single packaged binary, it has a more lightweight footprint than traditional K8s.

You can set up and install K3s with the major cloud providers, but you have to do a lot of the legwork yourself by installing the binary on the cloud instance that you are working with.

However, this opens up the market for clusters to more distributed devices, which could be a great offering for customers interested in the benefits of K8s without the traditional infrastructure requirements.

## Conclusion

We know that [Kubernetes is an excellent choice for container orchestration](https://blog.logrocket.com/kubernetes-toolbox/), but the big question for you is where you should run it. Usually, the answer is simple. If you’re already running on one of the cloud providers, just migrate your system to K8s on that cloud platform.

If you have specialized needs and run on your own hardware, you can either run your own K8s cluster, or you can take the opportunity of having such a big infrastructure migration project and move to the cloud already.

You could also use K3s if you have more specialized needs but want some of the benefits that K8s has traditionally provided. Whatever your use case, there are a lot of options for your applications.

.share-icon.share-twitter span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-twitter.svg"); } .share-icon.share-reddit span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-reddit.svg"); } .share-icon.share-linkedin span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-linkedin.svg"); } .share-icon.share-facebook span:first-child { background-image: url("https://blog.logrocket.com/wp-content/themes/logrocket/assets/svgs/share-facebook.svg"); }

*   [#kubernetes](https://blog.logrocket.com/tag/kubernetes/)

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

### Leave a Reply[Cancel reply](/comparing-kubernetes-cloud-providers-gke-eks-azure/#respond)

document.addEventListener('DOMContentLoaded', function () { var commentForms = document.getElementsByClassName('jetpack\_remote\_comment'); for (var i = 0; i < commentForms.length; i++) { commentForms\[i\].allowTransparency = false; commentForms\[i\].scrolling = 'no'; } });

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/logrocket/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]}

Hey there, want to help make our blog better?

Yea No Thanks

Join LogRocket’s Content Advisory Board. You’ll help inform the type of content we create and get access to exclusive meetups, social accreditation, and swag.

[Sign up now](https://lp.logrocket.com/blg/content-advisory-board-signup)

var codePrettifyLoaderBaseUrl = "https:\\/\\/blog.logrocket.com\\/wp-content\\/plugins\\/code-prettify\\/prettify"; //# sourceURL=code-prettify-js-before var WPGroHo = {"my\_hash":""}; //# sourceURL=wpgroho-js-extra \_stq = window.\_stq || \[\]; \_stq.push(\[ "view", JSON.parse("{\\"v\\":\\"ext\\",\\"blog\\":\\"217016018\\",\\"post\\":\\"88\\",\\"tz\\":\\"-5\\",\\"srv\\":\\"blog.logrocket.com\\",\\"hp\\":\\"vip\\",\\"j\\":\\"1:15.1.1\\"}") \]); \_stq.push(\[ "clickTrackerInit", "217016018", "88" \]); //# sourceURL=jetpack-stats-js-before {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://blog.logrocket.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://blog.logrocket.com/wp-includes/js/wp-emoji-loader.min.js (function () { const iframe = document.getElementById( 'jetpack\_remote\_comment' ); const watchReply = function() { // Check addComment.\_Jetpack\_moveForm to make sure we don't monkey-patch twice. if ( 'undefined' !== typeof addComment && ! addComment.\_Jetpack\_moveForm ) { // Cache the Core function. addComment.\_Jetpack\_moveForm = addComment.moveForm; const commentParent = document.getElementById( 'comment\_parent' ); const cancel = document.getElementById( 'cancel-comment-reply-link' ); function tellFrameNewParent ( commentParentValue ) { const url = new URL( iframe.src ); if ( commentParentValue ) { url.searchParams.set( 'replytocom', commentParentValue ) } else { url.searchParams.delete( 'replytocom' ); } if( iframe.src !== url.href ) { iframe.src = url.href; } }; cancel.addEventListener( 'click', function () { tellFrameNewParent( false ); } ); addComment.moveForm = function ( \_, parentId ) { tellFrameNewParent( parentId ); return addComment.\_Jetpack\_moveForm.apply( null, arguments ); }; } } document.addEventListener( 'DOMContentLoaded', watchReply ); // In WP 6.4+, the script is loaded asynchronously, so we need to wait for it to load before we monkey-patch the functions it introduces. document.querySelector('#comment-reply-js')?.addEventListener( 'load', watchReply ); const commentIframes = document.getElementsByClassName('jetpack\_remote\_comment'); window.addEventListener('message', function(event) { if (event.origin !== 'https://jetpack.wordpress.com') { return; } if (!event?.data?.iframeUniqueId && !event?.data?.height) { return; } const eventDataUniqueId = event.data.iframeUniqueId; // Change height for the matching comment iframe for (let i = 0; i < commentIframes.length; i++) { const iframe = commentIframes\[i\]; const url = new URL(iframe.src); const iframeUniqueIdParam = url.searchParams.get('iframe\_unique\_id'); if (iframeUniqueIdParam == event.data.iframeUniqueId) { iframe.style.height = event.data.height + 'px'; return; } } }); })(); <span id="nf-form-title-{{{ data.id }}}" class="nf-form-title"> {{{ ( 1 == data.settings.show\_title ) ? '<h' + data.settings.form\_title\_heading\_level + '>' + data.settings.title + '</h' + data.settings.form\_title\_heading\_level + '>' : '' }}} </span> <div class="nf-form-wrap ninja-forms-form-wrap"> <div class="nf-response-msg"></div> <div class="nf-debug-msg"></div> <div class="nf-before-form"></div> <div class="nf-form-layout"></div> <div class="nf-after-form"></div> </div> {{{ data.beforeForm }}} {{{ data.afterForm }}} <div class="nf-form-fields-required">{{{ data.renderFieldsMarkedRequired() }}}</div> {{{ data.beforeFields }}} {{{ data.afterFields }}} <div id="nf-form-errors-{{{ data.id }}}" class="nf-form-errors" role="alert"></div> <div class="nf-form-hp"></div> {{{ data.beforeField }}} {{{ data.afterField }}} <form> <div> <div class="nf-before-form-content"></div> <div class="nf-form-content {{{ data.element\_class }}}"></div> <div class="nf-after-form-content"></div> </div> </form> <label id="nf-label-field-hp-{{{ data.id }}}" for="nf-field-hp-{{{ data.id }}}" aria-hidden="true"> {{{ nfi18n.formHoneypot }}} <input id="nf-field-hp-{{{ data.id }}}" name="nf-field-hp" class="nf-element nf-field-hp" type="text" value="" aria-labelledby="nf-label-field-hp-{{{ data.id }}}" /> </label> <div id="nf-field-{{{ data.id }}}-container" class="nf-field-container {{{ data.type }}}-container {{{ data.renderContainerClass() }}}"> <div class="nf-before-field"></div> <div class="nf-field"></div> <div class="nf-after-field"></div> </div> {{{ data.beforeField }}} <# /\* \* Render our input limit section if that setting exists. \*/ #> <div class="nf-input-limit"></div> <# /\* \* Render our error section if we have an error. \*/ #> <div id="nf-error-{{{ data.id }}}" class="nf-error-wrap nf-error" role="alert" aria-live="assertive"></div> <# /\* \* Render any custom HTML after our field. \*/ #> {{{ data.afterField }}} <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <# /\* \* This is our main field template. It's called for every field type. \* Note that must have ONE top-level, wrapping element. i.e. a div/span/etc that wraps all of the template. \*/ #> <# /\* \* Render our label. \*/ #> {{{ data.renderLabel() }}} <# /\* \* Render our field element. Uses the template for the field being rendered. \*/ #> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <# /\* \* Render our Description Text. \*/ #> {{{ data.renderDescText() }}} </div> <div id="nf-field-{{{ data.id }}}-wrap" class="{{{ data.renderWrapClass() }}}" data-field-id="{{{ data.id }}}"> <div class="nf-field-label"></div> <div class="nf-field-element">{{{ data.renderElement() }}}</div> <div class="nf-error-wrap"></div> </div> {{{ data.renderElement() }}} <div class="nf-error-wrap"></div> <div class="nf-field-label"> <# if ( data.type === "listcheckbox" || data.type === "listradio" || data.type === "listimage" || data.type === "date" || data.type === "starrating" ) { #> <span id="nf-label-field-{{{ data.id }}}" class="nf-label-span {{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </span> <# } else { #> <label for="nf-field-{{{ data.id }}}" id="nf-label-field-{{{ data.id }}}" class="{{{ data.renderLabelClasses() }}}"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} {{{ ( 'undefined' != typeof data.required && 1 == data.required ) ? '<span class="ninja-forms-req-symbol">\*</span>' : '' }}} {{{ data.maybeRenderHelp() }}} </label> <# } #> </div> <div class="nf-error-msg nf-error-{{{ data.id }}}" aria-live="assertive">{{{ data.msg }}}</div> <div class="nf-error-msg nf-error-{{{ data.id }}}">{{{ data.msg }}}</div> {{{ data.currentCount() }}} {{{ nfi18n.of }}} {{{ data.input\_limit }}} {{{ data.input\_limit\_msg }}} <input type="email" value="{{{ \_.escape( data.value ) }}}" class="{{{ data.renderClasses() }}} nf-element" id="nf-field-{{{ data.id }}}" name="{{ data.custom\_name\_attribute || 'nf-field-' + data.id + '-' + data.type }}" {{{data.maybeDisableAutocomplete()}}} {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <input id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" aria-invalid="false" aria-describedby="<# if( data.desc\_text ) { #>nf-description-{{{ data.id }}} <# } #>nf-error-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element" type="text" value="{{{ \_.escape( data.value ) }}}" {{{ data.renderPlaceholder() }}} {{{ data.maybeDisabled() }}} aria-labelledby="nf-label-field-{{{ data.id }}}" {{{ data.maybeRequired() }}} > <# let myType = data.type if('save'== data.type){ myType = 'button' } #> <input id="nf-field-{{{ data.id }}}" class="{{{ data.renderClasses() }}} nf-element " type="{{{myType}}}" value="{{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}}" {{{ ( data.disabled ) ? 'aria-disabled="true" disabled="true"' : '' }}}> <button id="nf-field-{{{ data.id }}}" name="nf-field-{{{ data.id }}}" class="{{{ data.classes }}} nf-element"> {{{ ( data.maybeFilterHTML() === 'true' ) ? \_.escape( data.label ) : data.label }}} </button>
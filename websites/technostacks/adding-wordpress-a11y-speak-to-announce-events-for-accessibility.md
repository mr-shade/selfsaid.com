---
title: "Adding WordPress A11y Speak to Announce Events for Accessibility | Technostacks"
date: "2024-12-09T08:45:59+00:00"
slug: "adding-wordpress-a11y-speak-to-announce-events-for-accessibility"
image: "https://technostacks.com/wp-content/uploads/2024/12/WordPres-a11y-events-accessibility.png"
description: "Learn how to enhance accessibility on your WordPress site by using A11y Speak to announce events. This guide covers the steps to implement A11y Speak, ensuring a more inclusive experience for all users."
tags: []
original_url: "https://technostacks.com/blog/adding-wordpress-a11y-speak-to-announce-events-for-accessibility/"
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

![WordPress A11y Speak to Announce Events for Accessibility](https://technostacks.com/wp-content/uploads/2024/12/WordPres-a11y-events-accessibility.png)

![Technostacks Avatar](https://technostacks.com/wp-content/uploads/2023/04/Technostacks-PNG.png)

Written by

### 

Technostacks

Technostacks is a global IT solutions company specializing in AI, IoT, and SaaS, delivering innovative digital products for businesses.

### Share with your community!

[

![facebook](https://technostacks.com/wp-content/uploads/2025/02/facebook.svg)

](https://www.facebook.com/sharer/sharer.php?u=https://technostacks.com/blog/adding-wordpress-a11y-speak-to-announce-events-for-accessibility/)[

![X](https://technostacks.com/wp-content/uploads/2025/02/twitter.svg)

](https://x.com/intent/tweet?url=https://technostacks.com/blog/adding-wordpress-a11y-speak-to-announce-events-for-accessibility/&text=Adding WordPress A11y Speak to Announce Events for Accessibility)[

![linkedin](https://technostacks.com/wp-content/uploads/2025/02/linkedin.svg)

](https://www.linkedin.com/sharing/share-offsite/?url=https://technostacks.com/blog/adding-wordpress-a11y-speak-to-announce-events-for-accessibility/)

[Designing & Development](https://technostacks.com/category/designing-development/) [WordPress](https://technostacks.com/category/wordpress/)

# Adding WordPress A11y Speak to Announce Events for Accessibility

09 Dec 2024

For many websites, making sure all users, including those with disabilities, can access content equitably is a priority. In WordPress, this means not only ensuring layouts are responsive and content is clear, but also that dynamic content changes are announced to screen reader users, an area known as accessible event notification. This article covers how to use the WordPress A11y speak function to announce events for screen reader users in WordPress.

## What Is WordPress A11y Speak?

[WordPress A11y Speak](https://make.wordpress.org/accessibility/handbook/markup/wp-a11y-speak/) is part of WordPress’s accessibility toolkit, specifically developed for notifying screen readers of updates on a page. The wp.a11y.speak function works by injecting text into a hidden element that is automatically read by screen readers. This ensures that any important changes—like form submissions, AJAX updates, or navigation changes—are announced, providing context and feedback for users with visual impairments.

## Why Use A11y Speak?

Many standard interactions in WordPress happen dynamically without refreshing the page, such as loading new posts via AJAX or displaying error messages. Without appropriate notifications, screen reader users can be left in the dark, as they won’t automatically know that something on the page has changed. With A11y Speak, you can ensure these dynamic updates are announced, making your WordPress site more accessible.

## How to Use wp.a11y.speak in WordPress?

Setting up A11y Speak in WordPress is straightforward. Here’s a step-by-step guide on how to implement it:

### Step 1: Enqueue the WordPress A11y Speak Script

To use wp.a11y.speak, you must make sure the necessary accessibility script is loaded. WordPress includes the A11y Speak functionality by default, but it’s good practice to ensure the script is enqueued:

function enqueue\_accessibility\_scripts() {
    wp\_enqueue\_script( 'wp-a11y' );
}
add\_action( 'wp\_enqueue\_scripts', 'enqueue\_accessibility\_scripts' );

### Step 2: Trigger Speak Notifications

Once you’ve enqueued the script, you can use wp.a11y.speak in your JavaScript files to announce changes.

The speak function accepts two parameters:

1\. The message you want to announce.  
2\. The priority of the announcement—either polite (default) or assertive.

Here’s an example of how you might announce a form submission success message:

// Trigger a screen reader announcement upon form submission
jQuery(document).ready(function($) {
    $('#my-form').on('submit', function(e) {
        e.preventDefault();
        // Your AJAX or form processing code here

        // Use wp.a11y.speak to announce the form submission success
        wp.a11y.speak( 'Form submitted successfully!', 'assertive' );
    });
});

In this example, when a user submits the form, the screen reader announces, “Form submitted successfully!” assertively, interrupting any other ongoing announcements.

**Priority Levels: Polite vs. Assertive**

The wp.a11y.speak function lets you specify the urgency of the announcement. Choose the priority level that best suits the context:

*   **Polite:** For non-urgent messages, like an image loading or a countdown timer starting.
*   **Assertive:** For urgent messages, like error messages, successful form submissions, or security-related notifications.

// Example of polite announcement
wp.a11y.speak( 'Loading new content...', 'polite' );

// Example of assertive announcement
wp.a11y.speak( 'Your session has expired. Please log in again.', 'assertive' );

### Step 3: Integrate A11y Speak with Dynamic Content

If your WordPress site uses AJAX to load content dynamically, you can use wp.a11y.speak to announce these updates. Here’s how to announce newly loaded posts to screen readers:

jQuery(document).ready(function($) {
    $('#load-more-posts').on('click', function() {
        $.ajax({
            url: '/wp-admin/admin-ajax.php',
            data: {
                action: 'load\_more\_posts'
            },
            success: function(response) {
                $('#posts-container').append(response);
                
                // Announce that new posts have been loaded
                wp.a11y.speak( 'New posts have been loaded', 'polite' );
            }
        });
    });
});

### Step 4: Using A11y Speak in PHP

Sometimes, you may need to call A11y Speak directly from PHP. While JavaScript is the preferred method, here’s how you could pass an announcement from PHP to JavaScript:

function announce\_error\_message() {
    ?>
    <script type="text/javascript">
        wp.a11y.speak( 'An error occurred. Please try again.', 'assertive' );
    </script>
    <?php
}
add\_action( 'wp\_footer', 'announce\_error\_message' );

## Best Practices for Accessible Event Notifications

**1\. Use Clear, Concise Messages:** Ensure brief but informative announcements.

**2\. Limit Usage:** Use A11y Speak sparingly to avoid overwhelming screen reader users.

**3\. Choose Priority Levels Wisely:** Reserve assertive for critical information.

## Testing Your A11y Speak Implementation

Before going live, test your announcements with a screen reader, such as NVDA (for Windows) or VoiceOver (for macOS). Check that:

*   Announcements are read at the right time and with the correct priority.
*   Users can navigate away from content if needed without interruption.
*   The messages provide meaningful feedback about the user’s actions.

## Conclusion

Using WordPress A11y Speak to announce events and dynamic content changes can make your site more accessible, particularly for users relying on screen readers. By implementing this simple but powerful tool, you ensure that all users, regardless of ability, can navigate and interact with your site’s content more effectively. Accessible design benefits everyone, and WordPress makes it easier than ever with tools like wp.a11y.speak.

If you need WordPress-related solutions, our team is here to help! [Contact Us.](https://technostacks.com/contact-us/)

## FAQs

### 1\. What is wp.a11y.speak() in WordPress?

wp.a11y.speak() is a JavaScript method in WordPress that announces dynamic content changes to screen readers using ARIA live regions, enhancing accessibility for users with visual impairments.

### 2\. How do I implement wp.a11y.speak() in my WordPress theme?

To implement wp.a11y.speak(), you need to enqueue the wp-a11y script in your theme and use the wp.a11y.speak() function in your JavaScript code to announce changes.

### 3\. What are the benefits of using wp.a11y.speak() for accessibility?

Using wp.a11y.speak() improves the user experience for screen reader users by providing real-time updates on dynamic content changes, making your website more inclusive and accessible.

### 4\. Can wp.a11y.speak() be used for both polite and assertive announcements?

Yes, wp.a11y.speak() supports both polite and assertive announcements. You can specify the politeness level by passing ‘polite’ or ‘assertive’ as the second parameter in the function.

### 5\. Are there any best practices for using wp.a11y.speak() in WordPress?

Best practices include ensuring the wp-a11y script is loaded after the DOM is ready, using concise and clear messages, and testing with various screen readers to ensure the announcements are effective.

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

{"prefetch":\[{"source":"document","where":{"and":\[{"href\_matches":"/\*"},{"not":{"href\_matches":\["/wp-\*.php","/wp-admin/\*","/wp-content/uploads/\*","/wp-content/\*","/wp-content/plugins/\*","/wp-content/themes/techno-2025/\*","/\*\\\\?(.+)"\]}},{"not":{"selector\_matches":"a\[rel~=\\"nofollow\\"\]"}},{"not":{"selector\_matches":".no-prefetch, .no-prefetch a"}}\]},"eagerness":"conservative"}\]} function dnd\_cf7\_generateUUIDv4() { const bytes = new Uint8Array(16); crypto.getRandomValues(bytes); bytes\[6\] = (bytes\[6\] & 0x0f) | 0x40; // version 4 bytes\[8\] = (bytes\[8\] & 0x3f) | 0x80; // variant 10 const hex = Array.from(bytes, b => b.toString(16).padStart(2, "0")).join(""); return hex.replace(/^(.{8})(.{4})(.{4})(.{4})(.{12})$/, "$1-$2-$3-$4-$5"); } document.addEventListener("DOMContentLoaded", function() { if ( ! document.cookie.includes("wpcf7\_guest\_user\_id")) { document.cookie = "wpcf7\_guest\_user\_id=" + dnd\_cf7\_generateUUIDv4() + "; path=/; max-age=" + (12 \* 3600) + "; samesite=Lax"; } }); jQuery(document).ready(function($){ var skills = '\[{"id":37,"tech":".Net","status":1,"isDeleted":0},{"id":192,"tech":"Accountant","status":1,"isDeleted":0},{"id":186,"tech":"AdMob","status":1,"isDeleted":0},{"id":139,"tech":"AES Encryption & Decryption","status":1,"isDeleted":0},{"id":159,"tech":"Agora.io","status":1,"isDeleted":0},{"id":169,"tech":"Amazon Rekognition","status":1,"isDeleted":0},{"id":5,"tech":"Android","status":1,"isDeleted":0},{"id":25,"tech":"AngularJs","status":1,"isDeleted":0},{"id":96,"tech":"Appium","status":1,"isDeleted":0},{"id":103,"tech":"ARCore","status":1,"isDeleted":0},{"id":91,"tech":"ARKit","status":1,"isDeleted":0},{"id":133,"tech":"Authorize.net","status":1,"isDeleted":0},{"id":93,"tech":"Automation Testing","status":1,"isDeleted":0},{"id":162,"tech":"AWS Amplify","status":1,"isDeleted":0},{"id":68,"tech":"AWS API GateWay","status":1,"isDeleted":0},{"id":167,"tech":"AWS CloudFormation","status":1,"isDeleted":0},{"id":66,"tech":"AWS CloudWatch","status":1,"isDeleted":0},{"id":170,"tech":"AWS CodeCommit","status":1,"isDeleted":0},{"id":70,"tech":"AWS CognitoPool","status":1,"isDeleted":0},{"id":60,"tech":"AWS EC2","status":1,"isDeleted":0},{"id":63,"tech":"AWS IAM","status":1,"isDeleted":0},{"id":102,"tech":"AWS IOT","status":1,"isDeleted":0},{"id":168,"tech":"AWS KMS","status":1,"isDeleted":0},{"id":67,"tech":"AWS Lambda","status":1,"isDeleted":0},{"id":116,"tech":"AWS lex","status":1,"isDeleted":0},{"id":61,"tech":"AWS Route53","status":1,"isDeleted":0},{"id":65,"tech":"AWS S3","status":1,"isDeleted":0},{"id":62,"tech":"AWS SES","status":1,"isDeleted":0},{"id":64,"tech":"AWS SNS","status":1,"isDeleted":0},{"id":164,"tech":"Azure Blob","status":1,"isDeleted":0},{"id":120,"tech":"Banner Design","status":1,"isDeleted":0},{"id":24,"tech":"BDE","status":1,"isDeleted":0},{"id":173,"tech":"Bitbucket","status":1,"isDeleted":0},{"id":31,"tech":"Blockchain Dev","status":1,"isDeleted":0},{"id":59,"tech":"Bootstrap CSS","status":1,"isDeleted":0},{"id":142,"tech":"BudgetSMS","status":1,"isDeleted":0},{"id":11,"tech":"Business Analyst","status":1,"isDeleted":0},{"id":15,"tech":"Business Development Executive","status":1,"isDeleted":0},{"id":40,"tech":"C++","status":1,"isDeleted":0},{"id":58,"tech":"CakePHP","status":1,"isDeleted":0},{"id":140,"tech":"Catchoom","status":1,"isDeleted":0},{"id":111,"tech":"CCIE","status":1,"isDeleted":0},{"id":109,"tech":"CCNA","status":1,"isDeleted":0},{"id":110,"tech":"CCNP","status":1,"isDeleted":0},{"id":172,"tech":"CircleCI","status":1,"isDeleted":0},{"id":22,"tech":"CodeIgniter","status":1,"isDeleted":0},{"id":32,"tech":"Content Writer","status":1,"isDeleted":0},{"id":89,"tech":"Core Data","status":1,"isDeleted":0},{"id":47,"tech":"CoreML","status":1,"isDeleted":0},{"id":119,"tech":"CRM","status":1,"isDeleted":0},{"id":9,"tech":"CSS","status":1,"isDeleted":0},{"id":118,"tech":"Data Analysis","status":1,"isDeleted":0},{"id":39,"tech":"Data Mining\\/ Research","status":1,"isDeleted":0},{"id":30,"tech":"DevOps","status":1,"isDeleted":0},{"id":14,"tech":"Digital Marketing","status":1,"isDeleted":0},{"id":83,"tech":"Django Framework","status":1,"isDeleted":0},{"id":84,"tech":"Django REST Framework","status":1,"isDeleted":0},{"id":53,"tech":"Docker","status":1,"isDeleted":0},{"id":69,"tech":"DynamoDB","status":1,"isDeleted":0},{"id":80,"tech":"ECMA5","status":1,"isDeleted":0},{"id":81,"tech":"ECMA6","status":1,"isDeleted":0},{"id":82,"tech":"Elasticsearch","status":1,"isDeleted":0},{"id":185,"tech":"Email Automation","status":1,"isDeleted":0},{"id":184,"tech":"Email marketing","status":1,"isDeleted":0},{"id":21,"tech":"Embedded","status":1,"isDeleted":0},{"id":143,"tech":"Face Recognition","status":1,"isDeleted":0},{"id":123,"tech":"Fast API","status":1,"isDeleted":0},{"id":79,"tech":"Firebase","status":1,"isDeleted":0},{"id":158,"tech":"Flask","status":1,"isDeleted":0},{"id":137,"tech":"Flurry","status":1,"isDeleted":0},{"id":29,"tech":"Flutter","status":1,"isDeleted":0},{"id":26,"tech":"Frontend Dev","status":1,"isDeleted":0},{"id":19,"tech":"Fullstack","status":1,"isDeleted":0},{"id":171,"tech":"Github","status":1,"isDeleted":0},{"id":190,"tech":"GitLab","status":1,"isDeleted":0},{"id":147,"tech":"Google Map APIs","status":1,"isDeleted":0},{"id":183,"tech":"Google sheet API","status":1,"isDeleted":0},{"id":28,"tech":"Graphics Designer","status":1,"isDeleted":0},{"id":163,"tech":"GraphQL","status":1,"isDeleted":0},{"id":115,"tech":"Gulp-SASS","status":1,"isDeleted":0},{"id":20,"tech":"HR","status":1,"isDeleted":0},{"id":4,"tech":"HTML","status":1,"isDeleted":0},{"id":134,"tech":"InApp Purchase","status":1,"isDeleted":0},{"id":6,"tech":"iOS","status":1,"isDeleted":0},{"id":33,"tech":"IT Recruiter","status":1,"isDeleted":0},{"id":41,"tech":"Java","status":1,"isDeleted":0},{"id":2,"tech":"JavaScript","status":1,"isDeleted":0},{"id":100,"tech":"Jenkins","status":1,"isDeleted":0},{"id":175,"tech":"JIRA","status":1,"isDeleted":0},{"id":99,"tech":"JMeter","status":1,"isDeleted":0},{"id":165,"tech":"Joomla E-Commerce","status":1,"isDeleted":0},{"id":3,"tech":"jQuery","status":1,"isDeleted":0},{"id":180,"tech":"Jupyter Notebook (Python)","status":1,"isDeleted":0},{"id":42,"tech":"Kivy","status":1,"isDeleted":0},{"id":43,"tech":"KivyMD","status":1,"isDeleted":0},{"id":131,"tech":"KNET","status":1,"isDeleted":0},{"id":36,"tech":"Kotlin","status":1,"isDeleted":0},{"id":1,"tech":"Laravel","status":1,"isDeleted":0},{"id":44,"tech":"LiDAR","status":1,"isDeleted":0},{"id":113,"tech":"Linux-OS","status":1,"isDeleted":0},{"id":114,"tech":"Mac-OS","status":1,"isDeleted":0},{"id":101,"tech":"Machine Learning","status":1,"isDeleted":0},{"id":48,"tech":"Magento","status":1,"isDeleted":0},{"id":146,"tech":"MailChimp","status":1,"isDeleted":0},{"id":127,"tech":"Mango Pay","status":1,"isDeleted":0},{"id":92,"tech":"Manual Testing","status":1,"isDeleted":0},{"id":144,"tech":"Mapbox","status":1,"isDeleted":0},{"id":121,"tech":"Market Research","status":1,"isDeleted":0},{"id":188,"tech":"Marketing Sales Funnel","status":1,"isDeleted":0},{"id":97,"tech":"Maven","status":1,"isDeleted":0},{"id":18,"tech":"MEAN\\/MERN Stack","status":1,"isDeleted":0},{"id":38,"tech":"MognoDB","status":1,"isDeleted":0},{"id":132,"tech":"Mollie","status":1,"isDeleted":0},{"id":55,"tech":"MySQL","status":1,"isDeleted":0},{"id":73,"tech":"NestJS","status":1,"isDeleted":0},{"id":107,"tech":"Network Design","status":1,"isDeleted":0},{"id":72,"tech":"NextJS","status":1,"isDeleted":0},{"id":13,"tech":"NodeJS","status":1,"isDeleted":0},{"id":85,"tech":"Numpy","status":1,"isDeleted":0},{"id":35,"tech":"Objective C","status":1,"isDeleted":0},{"id":46,"tech":"OpenCV","status":1,"isDeleted":0},{"id":86,"tech":"Pandas","status":1,"isDeleted":0},{"id":124,"tech":"PayPal","status":1,"isDeleted":0},{"id":130,"tech":"PayU","status":1,"isDeleted":0},{"id":128,"tech":"PayUMoney","status":1,"isDeleted":0},{"id":135,"tech":"PDF Generator","status":1,"isDeleted":0},{"id":23,"tech":"PHP","status":1,"isDeleted":0},{"id":160,"tech":"POLi Payments(NZ)","status":1,"isDeleted":0},{"id":56,"tech":"PostgreSQL","status":1,"isDeleted":0},{"id":12,"tech":"Project Manager","status":1,"isDeleted":0},{"id":90,"tech":"PubNub","status":1,"isDeleted":0},{"id":154,"tech":"PubNub","status":0,"isDeleted":0},{"id":138,"tech":"Push notification","status":1,"isDeleted":0},{"id":7,"tech":"Python","status":1,"isDeleted":0},{"id":17,"tech":"QA","status":1,"isDeleted":0},{"id":136,"tech":"QRCode Generator","status":1,"isDeleted":0},{"id":155,"tech":"QuickBlox","status":1,"isDeleted":0},{"id":156,"tech":"QuickBooks","status":1,"isDeleted":0},{"id":126,"tech":"Razorpay","status":1,"isDeleted":0},{"id":8,"tech":"React Native","status":1,"isDeleted":0},{"id":10,"tech":"ReactJs","status":1,"isDeleted":0},{"id":87,"tech":"RealityKit","status":1,"isDeleted":0},{"id":78,"tech":"Realm","status":1,"isDeleted":0},{"id":150,"tech":"Redis","status":1,"isDeleted":0},{"id":76,"tech":"Redux","status":1,"isDeleted":0},{"id":74,"tech":"Redux-saga","status":1,"isDeleted":0},{"id":75,"tech":"Redux-thunk","status":1,"isDeleted":0},{"id":166,"tech":"RoomDB (Android)","status":1,"isDeleted":0},{"id":189,"tech":"Scrum Master","status":1,"isDeleted":0},{"id":94,"tech":"Selenium IDE","status":1,"isDeleted":0},{"id":95,"tech":"Selenium WebDriver","status":1,"isDeleted":0},{"id":161,"tech":"Sendbird","status":1,"isDeleted":0},{"id":145,"tech":"Sendgrid","status":1,"isDeleted":0},{"id":187,"tech":"Sentry.io","status":1,"isDeleted":0},{"id":178,"tech":"Serverless","status":1,"isDeleted":0},{"id":179,"tech":"Shell Script","status":1,"isDeleted":0},{"id":49,"tech":"Shopify","status":1,"isDeleted":0},{"id":153,"tech":"Socket.io","status":1,"isDeleted":0},{"id":57,"tech":"SQLite","status":1,"isDeleted":0},{"id":149,"tech":"SSL Setup","status":1,"isDeleted":0},{"id":148,"tech":"SSO","status":1,"isDeleted":0},{"id":125,"tech":"Stripe","status":1,"isDeleted":0},{"id":174,"tech":"SVN","status":1,"isDeleted":0},{"id":34,"tech":"Swift","status":1,"isDeleted":0},{"id":71,"tech":"SwiftUI","status":1,"isDeleted":0},{"id":105,"tech":"Switches & Firewall Installation","status":1,"isDeleted":0},{"id":106,"tech":"Switching and Routing","status":1,"isDeleted":0},{"id":52,"tech":"Symfony","status":1,"isDeleted":0},{"id":129,"tech":"System Pay","status":1,"isDeleted":0},{"id":51,"tech":"Tailwind","status":1,"isDeleted":0},{"id":50,"tech":"Terraform","status":1,"isDeleted":0},{"id":98,"tech":"TestNG","status":1,"isDeleted":0},{"id":117,"tech":"Textract","status":1,"isDeleted":0},{"id":122,"tech":"threeJS","status":1,"isDeleted":0},{"id":108,"tech":"Troubleshooting","status":1,"isDeleted":0},{"id":141,"tech":"Twilio","status":1,"isDeleted":0},{"id":77,"tech":"Typescript","status":1,"isDeleted":0},{"id":27,"tech":"UI\\/UX Designer","status":1,"isDeleted":0},{"id":88,"tech":"VisonKit","status":1,"isDeleted":0},{"id":45,"tech":"VueJs","status":1,"isDeleted":0},{"id":104,"tech":"WAN Networking","status":1,"isDeleted":0},{"id":151,"tech":"Web Socket","status":1,"isDeleted":0},{"id":112,"tech":"Windows-OS","status":1,"isDeleted":0},{"id":16,"tech":"Wordpress","status":1,"isDeleted":0},{"id":177,"tech":"Yii (PHP)","status":1,"isDeleted":0},{"id":157,"tech":"Zero Accounting","status":1,"isDeleted":0},{"id":152,"tech":"ZMQ","status":1,"isDeleted":0},{"id":191,"tech":"Zoom Meeting API","status":1,"isDeleted":0},{"id":181,"tech":"Zustand","status":1,"isDeleted":0}\]'; skills = JSON.parse(skills); var skillsOptions = skills.map(function(item) { return { id: item.id, text: item.tech }; }); var skillselect = $('select\[name=skill-set\]'); $(skillselect).select2({ data: skillsOptions, multiple: true, placeholder: 'Select Skills' }); $(skillselect).on('change', function (e) { var skillsvalues = $(skillselect).select2('data'); var skillsetdeck = skillsvalues.map(function(skill){ return skill.id; }); $('#skill-set-deck').val(skillsetdeck.toString()); var skillsetemail = skillsvalues.map(function(skill){ return skill.text; }); $('#skill-set-email').val(skillsetemail.toString()); }); var min = $('#total-experience-element').attr('min'); var max = $('#total-experience-element').attr('max'); for(var i = min; i <= max; i++){ $('.ticks').append('<span class="tick">'+i+'</span>'); } $('#total-experience-element').on('change', function () { $('#total-experience').val($(this).val()); }); }); if (navigator.platform.toUpperCase().includes('MAC')) { document.body.classList.add('is-mac'); } var technostacks\_data = {"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php","site\_url":"https://technostacks.com","plugin\_url":"https://technostacks.com/wp-content/plugins/techno-2025-blocks"}; //# sourceURL=technostacks-js-extra ( function() { var skipLinkTarget = document.querySelector( 'main' ), sibling, skipLinkTargetID, skipLink; // Early exit if a skip-link target can't be located. if ( ! skipLinkTarget ) { return; } /\* \* Get the site wrapper. \* The skip-link will be injected in the beginning of it. \*/ sibling = document.querySelector( '.wp-site-blocks' ); // Early exit if the root element was not found. if ( ! sibling ) { return; } // Get the skip-link target's ID, and generate one if it doesn't exist. skipLinkTargetID = skipLinkTarget.id; if ( ! skipLinkTargetID ) { skipLinkTargetID = 'wp--skip-link--target'; skipLinkTarget.id = skipLinkTargetID; } // Create the skip link. skipLink = document.createElement( 'a' ); skipLink.classList.add( 'skip-link', 'screen-reader-text' ); skipLink.id = 'wp-skip-link'; skipLink.href = '#' + skipLinkTargetID; skipLink.innerText = 'Skip to content'; // Inject the skip link. sibling.parentElement.insertBefore( skipLink, sibling ); }() ); //# sourceURL=wp-block-template-skip-link-js-after wp.i18n.setLocaleData( { 'text direction\\u0004ltr': \[ 'ltr' \] } ); //# sourceURL=wp-i18n-js-after var wpcf7 = { "api": { "root": "https:\\/\\/technostacks.com\\/wp-json\\/", "namespace": "contact-form-7\\/v1" }, "cached": 1 }; //# sourceURL=contact-form-7-js-before var dnd\_cf7\_uploader = {"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php","ajax\_nonce":"1de1dff79d","drag\_n\_drop\_upload":{"tag":"h3","text":"Drag & Drop Files Here","or\_separator":"or","browse":"Browse Files","server\_max\_error":"The uploaded file exceeds the maximum upload size of your server.","large\_file":"Uploaded file is too large","inavalid\_type":"Uploaded file is not allowed for file type","max\_file\_limit":"Note : Some of the files are not uploaded ( Only %count% files allowed )","required":"This field is required.","delete":{"text":"deleting","title":"Remove"}},"dnd\_text\_counter":"of","disable\_btn":""}; //# sourceURL=codedropz-uploader-js-extra var wpcf7r = {"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php"}; //# sourceURL=wpcf7-redirect-script-js-extra var wpcf7\_recaptcha = { "sitekey": "6LetLXsqAAAAABCW2w554qT7XBtsqB-SyuEIf-Kg", "actions": { "homepage": "homepage", "contactform": "contactform" } }; //# sourceURL=wpcf7-recaptcha-js-before var ubermenu\_data = {"remove\_conflicts":"on","reposition\_on\_load":"off","intent\_delay":"300","intent\_interval":"100","intent\_threshold":"7","scrollto\_offset":"50","scrollto\_duration":"1000","responsive\_breakpoint":"959","accessible":"on","mobile\_menu\_collapse\_on\_navigate":"on","retractor\_display\_strategy":"responsive","touch\_off\_close":"on","submenu\_indicator\_close\_mobile":"on","collapse\_after\_scroll":"on","v":"3.8.5","configurations":\["main"\],"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php","plugin\_url":"https://technostacks.com/wp-content/plugins/ubermenu/","disable\_mobile":"off","prefix\_boost":"","use\_core\_svgs":"off","aria\_role\_navigation":"off","aria\_nav\_label":"off","aria\_expanded":"off","aria\_haspopup":"off","aria\_hidden":"off","aria\_controls":"","aria\_responsive\_toggle":"off","icon\_tag":"i","esc\_close\_mobile":"on","keyboard\_submenu\_trigger":"enter","theme\_locations":\[\]}; //# sourceURL=ubermenu-js-extra !function(e,n){if("undefined"!=typeof EnlighterJS){var o={"selectors":{"block":"pre.EnlighterJSRAW","inline":"code.EnlighterJSRAW"},"options":{"indent":4,"ampersandCleanup":true,"linehover":true,"rawcodeDbclick":false,"textOverflow":"break","linenumbers":true,"theme":"dracula","language":"generic","retainCssClasses":false,"collapse":false,"toolbarOuter":"","toolbarTop":"{BTN\_RAW}{BTN\_COPY}{BTN\_WINDOW}{BTN\_WEBSITE}","toolbarBottom":""}};(e.EnlighterJSINIT=function(){EnlighterJS.init(o.selectors.block,o.selectors.inline,o.options)})()}else{(n&&(n.error||n.log)||function(){})("Error: EnlighterJS resources not loaded yet!")}}(window,console); //# sourceURL=enlighterjs-js-after var technostacks\_theme = {"ajax\_url":"https://technostacks.com/wp-admin/admin-ajax.php","site\_url":"https://technostacks.com","theme\_url":"https://technostacks.com/wp-content/themes/techno-2025"}; //# sourceURL=techno-main-js-extra {"baseUrl":"https://s.w.org/images/core/emoji/17.0.2/72x72/","ext":".png","svgUrl":"https://s.w.org/images/core/emoji/17.0.2/svg/","svgExt":".svg","source":{"concatemoji":"https://technostacks.com/wp-includes/js/wp-emoji-release.min.js?ver=6.9"}} /\*! This file is auto-generated \*/ const a=JSON.parse(document.getElementById("wp-emoji-settings").textContent),o=(window.\_wpemojiSettings=a,"wpEmojiSettingsSupports"),s=\["flag","emoji"\];function i(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function c(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0);const a=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data);return t.every((e,t)=>e===a\[t\])}function p(e,t){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var n=e.getImageData(16,16,1,1);for(let e=0;e<n.data.length;e++)if(0!==n.data\[e\])return!1;return!0}function u(e,t,n,a){switch(t){case"flag":return n(e,"\\ud83c\\udff3\\ufe0f\\u200d\\u26a7\\ufe0f","\\ud83c\\udff3\\ufe0f\\u200b\\u26a7\\ufe0f")?!1:!n(e,"\\ud83c\\udde8\\ud83c\\uddf6","\\ud83c\\udde8\\u200b\\ud83c\\uddf6")&&!n(e,"\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40\\udc65\\udb40\\udc6e\\udb40\\udc67\\udb40\\udc7f","\\ud83c\\udff4\\u200b\\udb40\\udc67\\u200b\\udb40\\udc62\\u200b\\udb40\\udc65\\u200b\\udb40\\udc6e\\u200b\\udb40\\udc67\\u200b\\udb40\\udc7f");case"emoji":return!a(e,"\\ud83e\\u1fac8")}return!1}function f(e,t,n,a){let r;const o=(r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):document.createElement("canvas")).getContext("2d",{willReadFrequently:!0}),s=(o.textBaseline="top",o.font="600 32px Arial",{});return e.forEach(e=>{s\[e\]=t(o,e,n,a)}),s}function r(e){var t=document.createElement("script");t.src=e,t.defer=!0,document.head.appendChild(t)}a.supports={everything:!0,everythingExceptFlag:!0},new Promise(t=>{let n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+\[JSON.stringify(s),u.toString(),c.toString(),p.toString()\].join(",")+"));",a=new Blob(\[e\],{type:"text/javascript"});const r=new Worker(URL.createObjectURL(a),{name:"wpTestEmojiSupports"});return void(r.onmessage=e=>{i(n=e.data),r.terminate(),t(n)})}catch(e){}i(n=f(s,u,c,p))}t(n)}).then(e=>{for(const n in e)a.supports\[n\]=e\[n\],a.supports.everything=a.supports.everything&&a.supports\[n\],"flag"!==n&&(a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&a.supports\[n\]);var t;a.supports.everythingExceptFlag=a.supports.everythingExceptFlag&&!a.supports.flag,a.supports.everything||((t=a.source||{}).concatemoji?r(t.concatemoji):t.wpemoji&&t.twemoji&&(r(t.twemoji),r(t.wpemoji)))}); //# sourceURL=https://technostacks.com/wp-includes/js/wp-emoji-loader.min.js (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.\_\_CF$cv$params={r:'9b88f6cc9cdf7a2e',t:'MTc2NzUxMTEyOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')\[0\].appendChild(a);";b.getElementsByTagName('head')\[0\].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
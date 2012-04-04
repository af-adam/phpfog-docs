---
title: Troubleshooting
layout: doc-page
weight: 15
---

The Load Balancer between the HTTP Client and your application is configured to timeout requests after 60 seconds and result in a "504 Gateway Time-out" error being returned to the HTTP client (i.e. browser). This can be caused by blocking sync calls to other services or because of CPU over-utilization. There are also a number of mitigations to deal with these problems.

Blocking calls to other services
If your application makes calls to third party services (like the examples below) these calls may be blocking. That is, when your applications make a call to a method like file_get_contents() it will not return until the full HTTP transaction is complete. Making numerous calls like this may cause the time to complete all the transactions longer than the timeout period of the HTTP servers.

Sending an email
Calling a remote API (e.g. Twitter, Facebook, etc)
Web scraping
CPU over-utilization
If using the Silver or Free plan the CPU utilization is throttled in "Bursts". These plans provide a small amount of consistent CPU resources and allow your application to burst CPU capacity when additional cycles are available. They are well suited for lower throughput applications and web sites that consume significant compute cycles periodically. If the processing takes longer than a burst, the processing gets heavily throttled. This means something that can take just a few seconds on your desktop might take much longer on these plans and therefore cause the HTTP request to timeout.

Rendering an image or PDF
XML parsing of a large file
Heave calculations (e.g. Fourier transform of an MP3)
Mitigations
Use asynchronous calls instead of synchronous calls. This only makes sense when your application doesn't need the returned value. Check out the StackOverflow article Asynchronous PHP Calls for more info.
Upgrade to a Gold or Platinum plan. The Gold and Platinum plans are not throttle for bursts therefore your application gets consistent processing. This is a very simple implementation; however, it might not suffice. This is only useful if the processing time is fast enough that it can be processed synchronously and returned to the requester.
Use a dedicated EC2 sever for asynchronous processing. Create a new Amazon EC2 server dedicated to the heavy processing (the "worker"), and use the Amazon SQS to queue jobs. This way the front-end can add jobs to the queue and then the worker can pull and process them as it becomes available. This design enables more efficient utilization of resources and ability to handle

Why They Happen
HTTP 500 errors occur due to server side error. These generic errors indicate that the web server was unable to fulfill the HTTP/S request by the client. Issues of this nature are usually related to syntax errors, script run times, or deployment issues to name a few. All of these will prevent code from executing on your app.

Resolving HTTP 500 Errors
HTTP 500 errors occur for a variety of reasons. See below documentation for more information on specific errors and what steps can be taken to resolve them.

HTTP 502 Bad Gateway
HTTP 502 errors, although very rare, are characteristic of a infrastructure failure in the system. If you receive this error wait a few minutes and try again. If you continue to have this issue please
email us and we will work to resolve the issue as fast as possible.

HTTP 503 Service Unavailable
HTTP 503 errors are effectively "Closed For Repair" errors and are specified by your app. These errors happen when your app is set to return this error directly. To resolve this error message you will need to check your Apps' settings and code to stop your app from returning this error directly.

HTTP 504 Gateway Timeout
This error is due to your app being unable to service requests. Because this error is returned by Apache, it is highly likely your App being overloaded with requests from visitors. To address this issue read this article talking about 504 errors.

More Information
For more information on 500 errors and how to diagnose them for your specific situation, please check out the following links:

Wikipedia Article
Drupal
WordPress


### SSH Keys

* Mac OS X keychain access

* permission denied
* unauthorized access


### SSL

My browser says that there is a "domain name mismatch" what does that mean?
A domain name mismatch happens when your certificate says you domain name is something and your site address is actually something else (IE www.foo.com vs foo.com)
The Solution: Change your site's name to match the certificate. Alternatively, you can have a new certificate issued to match your site (this includes wildcard certificates i.e. *.foo.com)

My browser says that it "Cannot Verify" the site! What's going on?
Many things could be wrong. Most commonly, however, your certificate has expired.
The Solution: Get your Certificate Authority to update your certificate.
My Certificate authority says I need a CSR, what can I do?
The Solution: To generate a CSR on your local machine for PHP Fog check out this Document

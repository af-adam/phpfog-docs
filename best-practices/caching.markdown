---
title: Caching
layout: doc-page
weight: 11
---

### Varnish

All applications on PHP Fog are fronted by Varnish, an HTTP caching server. Varnish will cache responses from your PHP application based on cues provided in standard HTTP response headers. These headers instruct Varnish with information on how/if contents should be cached, and for how long. These standard headers are the same headers that your browser uses for caching, so your PHP Fog application gets a double boost when they are used properly.

While using caching properly can lead to a great performance boost; used incorrectly it can lead to serving stale content and problems in your application. It is important to use these correctly; so this guide will help you setup your applications to take advantage of Varnish caching.

Default Caching
By default, Varnish will cache content for 300s (5 minutes). However, there are two key exceptions. First, if cookies are present in the headers on the request or response, the page will not be cached (more information below). Secondly, only responses to GET requests can be cached.

Handing cookies in cache
Requests with cookies are not cached by default. This is done in order to ensure stale cookies don't impact the application behavior as applications are typically designed with the assumption that cookies are not cached.
In a few cases cookies are used client-side only, that is, the cookies may be produced and consumed by JavaScript but are never processed by the PHP application. One such case is Google Analytics which uses cookies to store information about the page. In order to try to maximize default caching, Varnish will drop these special-case cookies being sent in the HTTP request to the application. If those cookies are dropped and no other cookies are present, the page can follow the default behavior for caching. Currently only the following cookies are dropped:

Cookies with no values (i.e. empty)
Cookies from Google Analytics
Cookies with the name "has_js"
If you believe other cookies should be dropped, please let us know by emailing support@appfog.com. We can also setup a custom configuration for your application. In the future we will build more controls to manage the caching of your applications.

Caching Dynamic Contents
Caching dynamic contents in Varnish can greatly improve the performance of your application if the contents doesn't have to be processed by the application. You can explicitly instruct Varnish to cache the requests and for how long.
The simplest way to cache a page is to set a header on output which cues Varnish that this page can be served, unmodified, to everyone visiting that same URL. The Cache-Control header also specifies how long the cached copy should be retained. The following is a PHP example of setting the cache to 10 minutes (600 seconds)
header("Cache-Control: public, max-age=600");

Preventing Caching
To prevent caching set the "Cache-Control" header to "no-cache". This is generally required in applications which don't produce/consume cookies, but have contents that is actually dynamic. Here is the PHP example to set the Cache-Control header.
header("Cache-Control: no-cache");

Purging Cache Data
We are currently working on tools to reset the cache; however, this is not yet functional. In the mean time if you need to purge the cache, please email support@appfog.com.

Caching in WordPress
WordPress by default takes little advantage of caching; however, there are plugins that can improve caching by intelligently presenting the appropriate cache headers.
The WP Super Cache Plugin and the WordPress Varnish Plugin are two plug-ins we recommend installing to take advantage of Varnish.

Caching in Drupal
Drupal by default takes little advantage of caching. As an alternative we recommend PressFlow, which is a distribution of Drupal optimized for performance. Currently we do not support PressFlow as a default Jump Start; however, we are working on adding support soon. Alternatively you can install PressFlow yourself by starting with a custom application.

### APC

What is APC?
APC or "The Alternative PHP Cache" is a free and open opcode cache for PHP. This tool significantly assists with performance in users' applications.

How do I get it?

APC is setup by default for all Dedicated hosts and is a great addition to your app.

How do I use it?

Implementation of APC varies depending on your application. For example, The Cake framework has documentation here. Other frameworks will have similar documentation on APC's implementation.

What if all my code is custom?

Custom code will require a manual implementation of APC. Check out this link for more information on how to implement APC in your app.

Pitfalls

A common issue is that your apps are using the same cache to complete requests! Daniel Arroyo, CEO of Flaretag wrote a great article on dealing with this issue in CakePHP. You can find it here

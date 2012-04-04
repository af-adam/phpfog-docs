---
title: Caching
layout: doc-page
weight: 11
---

### Varnish

All PHP Fog apps are fronted by Varnish, a web application accelerator that runs in front of your app server and caches content according to your HTTP Header information. Varnish can speed up delivery of your content by a factor of 300-1000, depending on your app. For more information, check out [the Varnish site](https://www.varnish-cache.org/). 

### Default Caching

Varnish caches content automatically for 300 seconds (5 minutes). For static content, this means you don't you have to do anything to take advantage of Varnish.

There are two key exceptions, though. First, if there are cookies in the HTTP header on the request or response, the page will not be cached. Second, only responses to GET requests can be cached.

### Caching with Cookies

Requests that include cookies are not cached by default so that stale cookies don't impact the application behavior.

In a few cases cookies are used client-side only, i.e. the cookies may be produced and consumed by JavaScript but are never processed by the PHP application. For example, Google Analytics uses cookies to store information about the page. In order to try to maximize default caching, Varnish will drop these special case cookies being sent in the HTTP request to the app. If those cookies are dropped and no other cookies are present, the page can follow the default caching behavior. 

Currently only the following cookies are dropped:

* Cookies with no values (i.e. empty).
* Cookies from Google Analytics.
* Cookies with the name "has_js".

We can also setup a custom configuration for your application. We're also building tools for you to manage caching, so stay tuned!

### Caching Dynamic Content

Caching dynamic content in Varnish can greatly improve the performance of your app. You can explicitly instruct Varnish to cache the requests and for how long.

The simplest way to cache a page is to set a header on output which cues Varnish that this page can be served unmodified to anyone visiting a given URL. The "Cache-Control" header also specifies how long the cached copy should be retained. The following is a PHP example of setting the cache to 10 minutes (600 seconds):

	header("Cache-Control: public, max-age=600");

Note: The longest Varnish will cache any content is 1 day. 

### Preventing Caching

To prevent caching set the "Cache-Control" header to "no-cache". This is generally required in applications that don't produce or consume cookies, but serve dynamic content. This is how to set the "Cache-Control" header in PHP:

	header("Cache-Control: no-cache");

### Purging Cache Data

We are currently working on tools to reset the cache; however, this is not yet functional. In the mean time if you need to purge the cache, please email support@appfog.com.

### Caching in WordPress

WordPress by default takes little advantage of caching; however, there are plugins that can improve caching by intelligently presenting the appropriate cache headers.

The WP Super Cache Plugin and the WordPress Varnish Plugin are two plug-ins we recommend installing to take advantage of Varnish.

### Caching in Drupal

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

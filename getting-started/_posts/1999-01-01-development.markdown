---
title: Development
layout: doc-page
weight: 4
---

Now that you can push code to and from your app, you'll want to set up a local development environment before doing anything serious. Setting up a local environment allows you to shorten the feedback loop on your development process. It also keeps all of your code in git, which makes it easy to roll back changes and makes your app easily scalable. 

### 1. Set up your local environment.

###### Mac OSX

Download and install <a href="http://www.mamp.info/en/index.html">MAMP</a>.

###### Linux

Install <a href="/faqs#version">these versions</a> of Apache, MySQL, and PHP.

###### Windows

Download and install <a href="http://www.wampserver.com/en/">WAMPP</a>.

### 2. Create environment variables.

After you have your local environment set up, you'll want to be able to deploy the same code in both your local environment and your live PHP Fog Cloud. In order to do this, you'll place the necessary configuration elements in environment variables.

<ol>
<li type="a">Make sure your code references relative URLs.</li>
<li type="a">Create environment variables on your local machine. You'll want these to include database host name, database name, username, and password.</li>
<li type="a">Go to your PHP Fog app console and create those same environment variables with the PHP Fog values.</li>
<li type="a">Change those values in your code base to the environment variables.</li>
</ol>


### WordPress Walkthrough

Smashing Magazine has [a great walkthrough](http://wp.smashingmagazine.com/2011/09/28/developing-wordpress-locally-with-mamp/) on setting up a local development environment for WordPress.

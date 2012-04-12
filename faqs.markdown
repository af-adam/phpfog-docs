---
layout: doc-page
title: Frequently Asked Questions
weight: 14
---

### Does PHP Fog support SSL?

We provide SSL for all phpfogapp.com subdomains and support SSL on custom subdomains, including www. Check out [this guide](/customize/ssl) for additional details.

### What type of SLA does PHP Fog offer?

We don't offer a general SLA, but if you have specific SLA requirements, feel free to contact us at [support@appfog.com](mailto:support@appfog.com). 

### Do I have to modify my app to run on PHP Fog?

Nope. We've set everything up to run without any changes.

### What version of PHP, Apache, and MySQL does PHP Fog use?

* PHP version 5.3.2
* Apache version 2.2.14
* MySQL version 5.1.41

### Can I get SSH access?

To maintain security across our service, we don't offer SSH access. 

### Can I get FTP access?

We have an SFTP feature on our roadmap, but no ETA. Meanwhile, you can access your source code using our [PF Command Line Tool](/getting-started/pf-command-line-tool) or [Git](/getting-started/git).

### Can my app access third party services?

Yes. PHP Fog apps have no firewalls or other network blocking mechanisms, so your app is free to call external web services.

### How do I log in to New Relic? 

Just use the email address your PHP Fog account is under as your username and your original MySQL password. 

### How do I set up email for my domain name? 

PHP Fog doesn't offer email as a service directly, but we set up integration with GMail by default, so you can easily use Google Apps to host your email. [Click here](TK) to get started setting up GMail for your custom domain name. The DNS records for PHP Fog apps are already configured. TKTKTK set up gmail section.

### Is PHP Fog PCI compliant? 

We're not PCI compliant as a service or as a host yet. We are in the process of getting PCI compliance certification for our service. We have no current plans for offering PCI compliance on our hosting, but if you'd like to see it, let us know by contacting [support@appfog.com](mailto:support@appfog.com).

### Can I migrate from a Dedicated Cloud to a Shared Cloud?

No. Our Shared Cloud is more restricted than our Dedicated Clouds, so seamless and automated migration from Dedicated to Shared isn't possible. An alternative way to do this is to start a new Shared app and migrate your source code using [git](/getting-started/git).

### Is my app still running when PHP Fog is under maintenance?

Yes. While the PHP Fog website and your app console will be inaccessible during maintenance, your app will continue to run. You'll also continue to have access to your source code. 

# Billing

### I just upgraded from Shared to a Dedicated Cloud. How will I be billed? 

We bill on a monthly schedule and prorate your initial bill from the day you upgrade to the end of the month. For example, if you upgrade to a Silver Cloud on the April 15th, we'll charge you $14.50 (50%) when you upgrade.

### If I run one server all month and I want to scale up for a day, how will I be billed? 

We'll charge you the prorated amount for the rest of the month, then credit your account the prorated amount when you scale back.

So if you run one server on a Silver Cloud at $29 for the whole month, but add four more servers for just one day, then you'll end up paying an additional $3.87 that month. When you first scale up you'll be charged 4 &times; $29 prorated for the month (remaining days in the month / total days in the month). When you scale back the next day, you'll be credited the remainder using the same calculation, leaving you with an extra charge of $3.87. 

We charge in 24 hour increments, so even if you use a server for only 2 hours in a day, you'll be charged for the full 24 hours.

### My card expired or I haven't provided a payment for a paid service yet. What going to happen? 

If the payment for a service is invalid, we'll continue to provide service for 10 days after the billing due date. During this 10 day grace period:

* You'll continue to accrue charges.
* You won't be able to subscribe to new services.
* Your access to source code will be restricted to read-only.
* Your app console will notify you that your bill is overdue.
* Our automated system will notify you daily by email that your bill is overdue.

After this 10 day grace period, the account will be terminated and the contents deleted. Please be aware that these files are *not* recoverable! If you receive an overdue bill notification, please update your credit card information in your account settings.

TK TK TK I have been a customer for months now, why am I being charged? There a number of reasons why you may be being charged, the most common reasons are as follows: 1. Your account may have had credits which were being consumed by a specific service (such as wildcard sub-domains), and you have run out of credit on your account without a credit card on file. To correct you will need to add a credit card to your account. That card will be billed once you have submitted the card information. 2. Your card on file was declined. To correct this issue you will need to input a new credit card, which will be billed upon input.

# Reliability

### How reliable is PHP Fog?

Very! We have redundancy and failover built into every piece of the PHP Fog stack end-to-end. 

Here's a walkthrough for an HTTP request from the client all the way to the database for a better look at our reliability mechanisms:

#### DNS Lookup 

When a client makes an HTTP request to your PHP Fog app, the first step is to perform a DNS lookup for the IP address of your application. In our guide for [setting up custom domains](/getting-started/custom-domain-names), we recommended using a CNAME record. This is a mechanism to help with failover. While the CNAME record currently points to Amazon's Elastic Load Balancer, in the case of a failure, we can update our DNS records to reference a different service, maintaining service. This particular failover mechanism is built into a point before a request even touches any PHP Fog components. 

On the other hand, an A record references a static IP address, which is a single point of failure. This is why we recommend CNAME over A records.

#### First Load Balancer

After the DNS lookup is complete, the HTTP request is routed to the Amazon Elastic Load Balancer. Amazon's load balancer distributes the load of the requests across numerous servers and provides redundancy.

#### Caching Server 

Next, the load balancer forwards the request to one of our Varnish Cache Servers. We've set up multiple cache servers to handle requests and we've distributed them across different "availability zones". Availability zones are distinct locations that are engineered to be insulated from failures in other availability zones and provide low latency network connectivity to other availability zones. Properly configured, the Caching Servers can actually load static contents from your app, even when your app server is down.

Second load balancer After the caching server, the requests go to the second load balancer. The load balancer directs requests to the application server best able to handle the requests. If a server is unavailable, it is routed to a new server thus improves the reliability of your application.

Application servers and code repository If you have a dedicated server you can run your application on multiple servers. Each of the servers is constantly monitored and if any hiccups occur, the application is migrated to a healthy application server. Note, that you must be on a dedicated plan with multiple servers to have redundancy, it is not available for the free shared hosting plans.

Git Server The core of your application is stored on a git server and it is distributed to the application servers. This means that even if your application server fails, the code is still available on the git server so it can be re-spawned on a new server. This git server is also backed up.

Databases The last step in the request path is the database. All applications get a primary and passive MySQL database. The primary database server is synchronized to a passive database slave which provides an up-to-the-minute snapshot of your MySQL databases. The database slave is used for application fail-over in case the primary server isn’t behaving properly. The secondary database is placed in a separate Availability Zone. Your Database calls will always will go to the master when everything is working properly, the slave replaces the master if something goes wrong. You do not have to do anything in your application to take advantage of this. If for whatever reason the master fails the slave will replace the master. Then we will add a new database server. The new database server will act as the new slave, and the old slave will act like the new monitor.

Monitoring In order to ensure the highest reliability, we must have great visibility. We use Pingdom and New Relic to monitor our servers from the outside-in for uptime. We also use Nagios to monitor our infrastructure for health. In addition to monitoring our own servers, we also provide monitoring for you. We have partnered with New Relic so you can monitor your application health (e.g. memory, CPU, etc) of your application on the dedicated servers. New Relic can also be used to test uptime of your application from the outside-in.

Can you make it even better? Yes, absolutely. We have done great work so far to make this reliable; however, we continue to push to make the service even more resilient. While we have redundancy and failover in the entire stack, we want to make each of the components available not just in different availability zones, but different regions, and even different cloud providers altogether.

Shared vs. Dedicated
The following are the constraints on the shared hosting environment. These limits are only applicable to shared hosting; on the dedicated (Silver, Gold, Platinum) these limits do not apply. In order to ensure the security of your application in the shared environment we must restrict certain configurations and functions.

Server Resources The server on which the free applications run on is a shared server with a number of application, therefore the server resources are also limited. If your application demands little resources, this will not impact your application; however, in some cases you may see errors. For example, if you have faulty code that uses too much memory, it will be terminated by the server.

Only 100M storage Shared resources: shared cpu, shared mem, shared filesystem, etc. A number of PHP functions are disabled (see list below). Memory Limits on an instance is 48MB on Shared, 128MB on dedicated Configuration differences APC opcode cache is disabled on shared New Relic monitoring is disabled on shared Disabled Functions The following functions are disabled on the shared environment to ensure the security of your application.

escapeshellarg escapeshellcmd exec passthru pcntl_exec proc_close proc_get_status proc_open proc_nice proc_terminate shell_exec system ini_restore popen file_get_contents for remote URLS fopen for remote URLS pclose dl disk_free_space diskfreespace disk_total_space set_time_limit tmpfile openlog show_source highlight_file link symlink php_uname apache_child_terminate apache_get_modules apache_get_version apache_getenv apache_note apache_setenv posix_kill posix_mkfifo posix_setpgid posix_setsid posix_setuid posix_getpwuid posix_uname

Security
How your app is secured The entire environment is secured at every layer. When your application runs on one of the paid plans, it runs on a dedicated server. Only your applications run on that dedicated server. At the system level, access is limited to allow only our software agents and staff members. This is strictly enforced by our security and firewall policies. Every app is guaranteed to be on a server tied to your account. Network access is limited by security and firewall policies. Access is strictly monitored. Your code, files, and credentials are only accessible by our software agents and staff members. Regarding your application, you have full control over what you want to make accessible in your public web directory In the shared environment (free apps), we've taken a more cautious approach to security. System functions have been disabled, and functions which allow other types of abuse have also been disabled. Check out the "What are the limits of Free (shared) hosting?" article for more information.


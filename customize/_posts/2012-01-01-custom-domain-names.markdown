---
title: Custom Domain Names
layout: doc-page
weight: 5
---

With PHP Fog you can host custom domain names (e.g. my-web-app.com) or PHP Fog domain names (e.g. my-web-app.phpfogapp.com). If you use a phpfogapp.com domain name, then PHP Fog manages the DNS records for you, so you don't have to do anything. If you want to use a custom domain name, read on.

### DNS

We recommend using the `www.` subdomain as your canonical domain.

1. At your domain host, set up a redirect (302) from your root domain `yourdomain.com` to `www.yourdomain.com`. This is a fairly standard tool that DNS services provide. If you don't see an option for it at your domain host, contact their support services and they should be able to do that for you.

2. Create a CNAME record for `www.yourdomain.com` to `cname01.phpfog.com`.

That's the simplest and most reliable method. But if you want to make your root domain (`yourdomain.com`) canonical, here's how:

Create three A records to: 

	50.19.115.173
	184.72.222.30
	107.22.161.126

Then set up a redirect from `www.yourdomain.com` to `yourdomain.com`, either at your domain host or in your .htaccess configuration. Make sure to use all three A records to take full advantage of our load balancers.

### Change the domain name setting in the PHP Fog app console.

Go to your app console at PHP Fog and click on the "Domain Name" tab on the left. Enter your custom domain name in the field. Use the root domain name (`yourdomain.com`) whether you're using `www`. or the root domain.

Note: With WordPress apps, you *must* change your domain name in the WordPress administration panel before changing it in the PHP Fog app console.

### Wait for your DNS settings to propagate.

This can take anywhere from a few minutes to 48 hours, depending on your location. 

### Recommended DNS Providers

* Amazon's Route 53

### Handling Subdomains with Wildcards

If you want to enable wildcards and host content that's dependent on the subdomain, here's how:

	$url_parts = explode('.', str_replace('.yourdomain.com', '', $_SERVER['HTTP_HOST']));
	$subdomain = $url_parts[0];
	if ($subdomain == 'www' || $subdomain == '')
	{
	// show home page
	}
	else if ($subdomain == 'help')
	{
	// show help page
	}

### Sharing sessions between subdomains

Thanks to [albeik](http://community.phpfog.com/discussion/85/sharing-sessions-between-subdomains) for this tip on our [community forums](http://community.phpfog.com)!

If you've enabled wildcard domains and want to share your session data between subdomains, add the following code snippet to your "entry point" PHP file (e.g. index.php):

	("session.cookie_domain", ".domain.com");

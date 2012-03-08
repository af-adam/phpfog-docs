---
title: The Personal Cloud
layout: blog-post
---


Things seem inexorably trending toward cloud models of
computing.[^1] Which is great, right? You can have access to your
data, apps, accounts, and settings from anywhere. Somebody else does all
the administration, including security updates, backups, etc. And it all
only gets better as the internet does, i.e. as connections get more
ubiquitous and more ubiquitously faster.

But if these things are cyclical, what does it look like when the
pendulum swings back? Certainly there are reasons to want it to. There
are the obvious privacy implications, which I don't actually care that
much about. But there are also related legal issues, like law
enforcement agencies getting access to your data through the cloud
hosting services you use. It also creates a single point of failure for
your entire web life: your login. There are numerous horror stories of
people's accounts being hacked or revoked, featuring Kafkaesque
experiences of trying to prove account ownership, or even just trying to
find someone to prove ownership *to*. All of these basically boil down
to: the centralization of information, and the relinquishment of control
to the centralized authorities.

### Carry Capacity

I spent approximately 75% of my enlistment in the Marine Corps
complaining. A lot of that time I was complaining about how much gear we
had to carry. It was a ridiculous amount (I would say to anyone within
earshot) just barely not enough to completely immobilize us. With all of
modern technology at our disposal, why was it that we had to carry so
much weight?

What I didn't realize at the time (Nick pointed out to me later) was
that the amount of weight that soldiers have carried has stayed pretty
much constant since soldiering first became a thing. The range and
capabilities of an individual soldier has increased as technology made
gear lighter, but the fundamental point is that you still want to pack a
given soldier with as much stuff as he can carry.

Consumer computer hardware has historically worked in a similar way.
People have always spent generally the same amount of money on
computers, and as computers got faster and cheaper, we bought better
computers with the same amount of money, because they were never really
fast enough. But at some point, they sort of did get fast enough and we
stopped spending as much as we possibly could on computers. It was as if
soldiering technology got so good that a soldier's range and
capabilities were unlimited. You didn't have to load him up to capacity
any more.

So we started spending some of that money on mobile devices, which have
different constraints like size and power consumption, that make the
calculus of capacity limits very different. But the general principle
remains, and at some point in the near future, mobile devices are going
to be fast enough that we won't have to spend the maximum available
resources for acceptable performance, especially as cloud computing
becomes dominant and presents different bottlenecks (mostly wireless
bandwidth).

### Eating and Having Cake

If the pendulum is going to swing back toward decentralization, then,
the imminent computing paradigm has to offer the best of personal
computing and cloud computing: the personal cloud. The term is kind of
nebulous right now, with some vendors using it to refer to their
web-accessible network storage devices[^2], and others
confusingly using it to refer to personal use of cloud services. What I
have in mind might be better described as the self-hosted cloud.

Under personal computing, the canonical data lives on the client device
(because there basically was no other place for it). Under cloud
computing, the canonical data lives on the hosting service's servers.
Your Gmail data, for example, lives on Google's servers, and it gets
synced to your browser or your mail client. When you take an action like
reading or sending mail, your client sends that information to the
server, the server takes the action and updates itself, then sends the
new canonical data to all of the clients. Under the personal cloud,
canonical data will live on a server you own, that sits in your home or
office. To access the data, you simply go to your home server's url from
anywhere with web access and log in. All the convenience, full control.

More interestingly, you'll be able to install applications to your
server, ideally with one click from the web. A webmail service, for
example, that you have complete control over and access to from
anywhere, including APIs for access from client devices and third-party
services. Calendars, notes, photos, music, movies, etc. with granular
control over access. Publishing platforms are basically already there.
Office productivity apps are too, more or less.

The operating system and applications could be silently and
automatically updated, like Chrome/Chrome OS. I would imagine that home
servers would be modular enough that to add capacity, you could simply
buy more, faster, larger-capacity boxes and add them to the network. You
might still use proper cloud services, but probably strictly for
encrypted backups of data that the hosts have no access to. No more
privacy/legal concerns. No more account revocation/customer service
nightmare.

The implications of widespread adoption of this model are interesting to
think about. I'm not sure how the trade-off math would work for simple
web apps. On one hand, the infrastructure needs are reduced to
distribution of the application; no more user data, server
administration, or even much user account administration. On the other,
maybe more end user support? More profoundly, this would make
decentralized, interoperable social networks much more viable. You'd
have all of your canonical social data on your own server, with full
ownership of your social graph, and granular control over who gets
access to what. It would also make spinning up and spinning down of
private or transient social networks much more viable, since everyone
has a server.

### Apple or Google? Neither.

There are already approximations of this model in existence. Some people
VNC or ssh into remote machines to work using their device effectively
as a thin client. But the user experience would obviously have to be a
lot easier and more seamless for this model to be at all viable. It
would have to be at least as easily deployable as a regular Windows PC
is today, and I think the necessary client and server technology is only
now becoming fast/cheap enough for this to be really productized for the
consumer.

Apple does seem to be gesturing in this direction with [their
release](http://thisismynext.com/2011/06/06/mac-os-lion-server-runs-50-july-adds-ipad-file-sharing-ios-push-notification-support/)
of Mac OS X Lion Server for $50. But Apple's core competency is in the
narrow user experience of the robust client and, again, the company only
seems to be interested in using cloud technologies to make that
experience as great as possible.

Google on the other hand, wants to commoditize everything between the
user and the web, more specifically, between the user and its own
products, where they can expose the user to ads. These products, like
free Android and ChromeOS on cheap devices to use Gmail and Google Docs
and other web services means no one has to pay for expensive software
suites anymore.

Microsoft got double-disrupted by Google and Apple. Apple's invention
(basically) of a viable mobile computing market means people barely even
need computers anymore.[^3] As everything, including enterprise,
goes web and mobile, Microsoft is getting squeezed out of the market.
It's going to take a while, but it's happening. They're certainly still
profitable and will be for a while, but the market trends are pretty
clear.

As Nick [points
out](http://blog.byjoemoon.com/post/6228050657/windows-8#comment-219607914),
Microsoft is moving toward a full cloud business, Azure, with Windows 8
as a stopgap. But the model isn't Microsoft's core competency the way it
is Google's (or even Amazon's), and it seems unlikely that Microsoft
will be able to price their services competitively. But maybe I'm
totally wrong about that.

But selling and supporting home server software on commodity hardware
seems exactly like what Microsoft has always been good at. They've
already been doing something very similar in the enterprise market for a
long time, and they have plenty of experience in the consumer market
(unlike, for example, Oracle).

If Apple has a flaw, it's a neglect of the web. If Google has a flaw,
it's over-centralization. I think Microsoft has a chance at disrupting
its disruptors, at riding the pendulum swing to long-term relevance in
the computing industry.

### Notes

[^1]: Even Apple joined in yesterday by
    [unveiling](http://thisismynext.com/2011/06/06/icloud-announced-apple-wwdc/)
    their "iCloud" service, which is an interesting take on the cloud:
    peculiarly (but perhaps predictably) device-centric, in an
    increasingly web-centric world. I.e. iCloud leverages cloud
    technology to make your experience with Apple devices much more
    seamless, but it doesn't offer access to cloud data from the web or
    enable any sort of collaboration, at least as far as I can tell.
    "Google's frame is the browser window. Apple's frame is the screen,"
    as John Gruber [put it](http://daringfireball.net/2011/06/demoted),
    rather succinctly. 

[^2]: E.g. [Tonido](http://www.tonido.com/),
    [Iomega](http://www.iomegacloud.com/landing_page.php), and
    [Pogoplug](http://www.pogoplug.com/).
    

[^3]: With the addition of over-the-air syncing, OS activation, and
    updates, this is now more true than ever.

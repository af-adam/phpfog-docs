---
title: Google's Open Hand and Closed Fist
layout: post
alias: /post/9579550453/googles-open-hand-and-closed-fist
---

Paul Buchheit coined Google's unofficial motto--"Don't be evil"--early
in the company's existence. But Google has only been pushing the vague
notion of "open" in the last few years. The notion is vague at least
partly because it's so all-encompassing and partly because of Google's
penchant for using it in whatever way is most convenient at the time.
But that sword cuts both ways, as it makes it easy for Google's critics
to [call the company out](http://techcrunch.com/2011/03/26/open/) when
they don't live up to an equally vague standard. So, what exactly does
Google mean by ‘open,' and how open is Google?

### Open

As laid out in this [this blog
post](http://googleblog.blogspot.com/2009/12/meaning-of-open.html),
Google refers to a couple of different things with the term: "open
technology" and "open information." Open technology, in turn, consists
of: open source; and open standards and APIs. Google is unequivocally
open on these two technology vectors with respect to certain products:
Chrome, Chrome OS, Wave, Buzz, Pubsubhubbub, etc.[^1]

### Closed

On others, they're decidedly closed. Google's search and advertising
businesses are very opaque.[^2] Which is certainly
understandable, since Google makes the vast majority of its money on
search and ads. It can't really be open with these because their entire
business depends on them, and I think most reasonable people can
understand that.

Many have also rightly criticized Google for its notoriously bad
customer service, but I don't think this qualifies as ‘closedness' as
much as poor execution. From what I understand, this opacity isn't a
result of any desire to keep secrets so much as an unwillingness to
regard the problem as a non-engineering one and devote adequate human
resources.

I'm not sure if Google's level of secrecy in general is less or greater
than the average large corporation, but my sense is that it's not. It's
a little beside the point, anyway, because this isn't one of the things
Google refers to when it claims to be open.

### Android

The venue in which Google has taken the most criticism, Android, is a
complex and ambiguous one. There are several vectors of criticism here,
too. Part of the problem is that there are two distinct parts to
Android. There is the completely open source part, the source code to
which is available to anyone who wants to download it and run on any
device they feel like.[^3] Then there's the ‘Google experience'
Android that ships with Google's closed source apps: Market, Gmail,
Maps, Navigation, and Voice; and only with explicit approval from
Google. For clarity, I'll refer to them as AOSP (for Android Open Source
Project, as its generally referred to in open source circles) and
Android, respectively.

### AOSP

AOSP has taken some heat from the Open Source Software (OSS) community
for two reasons. First, there's been some discussion of Google possibly
violating the [GPL](http://www.gnu.org/copyleft/gpl.html) license, but
there's mostly disagreement on the topic and, from what I gather, even
if true it's a borderline violation. Second is AOSP's somewhat
unconventional operation. Unlike most OSS projects, even other Google
ones like Chrome and Chrome OS, Google develops most of the software
internally with little to no transparency or input from the community,
only periodically dumping the releases into the public. This has been
the Android team's modus operandi since the beginning. In this respect,
Google is more closed with AOSP than most OSS projects, even other
Google ones. With Honeycomb, the latest version of Android, this has
gotten even worse. The delay between Google's release of the source code
to its partners and its release to the public is the longest to date.

But let's put this into perspective by considering the total spectrum of
open to closed. From this vantage, the difference in openness between
AOSP and other OSS projects is basically neglibile compared to the
difference in openness between AOSP and any other major player in the
industry. Because there are no other OSS mobile operating
systems.[^4] So is Google open with AOSP? I would say yes, even
at its most closed.

### Developers

Another vector within Android is in relation to developers. Here,
Android as a whole is as open as it gets. The Android Market is
available to anyone who wants to develop for it.[^5] Developers
can use any tools they want. And app distribution isn't even restricted
to the Market; i.e. you can install any compatible app from any source,
including simple internet downloads. Amazon has even released their own
app store for Android.

### Consumers

A third vector is in relation to consumers. Here, again, Android is
completely open. On the devices that Google was directly involved with,
like the original G1, the original Droid, and Google's flagship Nexus
devices, the hardware is unlocked and root access is readily available,
which means you can install third party mods or ROMs, i.e. custom
modifications to the operating system. Some of these third party mods,
like CyanogenMod, have an active, thriving open source development
community, and are adding features faster than Android proper.

### Manufacturers and Carriers

The caveat here, of course, is that the majority of handsets are locked
down by the manufacturers, probably at least in part at the behest of
carriers.[^6] And so here we come to a vector on which Google is
not completely open. Google's policies toward vendors in the early days
of Android were quite open. And the vendors took full advantage, by
locking down the hardware and adding extensive user interface
customizations on top of stock Android in an effort to differentiate
their brands. They also began to pre-install apps that you couldn't
uninstall. It even extended to such liberties as making Bing the default
search engine with no option to switch. The result was a fragmented
Android ecosystem as well as a generally poorer experience for the end
user.

But Google is increasingly using control of its closed source
application suite and access to the Android Market to exert pressure on
the manufacturers and carriers away from these practices. Some of the
details that came out of the Skyhook[^7] trial even indicate that
Google now requires explicit approval over each model before it ships.

So what we see here is Google stuck between opposing vectors: open to
consumers vs. open to vendors. It can't be completely open to both. They
seem increasingly to be choosing openness for consumers, which
necessarily means being more closed with the vendors. So is Google being
less open in some ways with Android? Yes. Do I care? Not a single iota,
because it means they're being more open along a different, more
important vector. In fact, I encourage it.

### Mostly Open

So is Google perfectly open in every way? Of course not. But overall, if
we can consider openness on a spectrum, then, yes, they are more open by
a ridiculous margin than any of their competitors in any business except
search and advertising. In that business they are exactly as open as
everyone else (which is to say: not at all). Is that enough to
legitimately claim to be ‘open' as a PR/marketing tactic? I say yes. I
obviously think there's a lot of nuance that they elide over, but I
don't think it's ultimately disingenous. I would appreciate if they
addressed this nuance more, but I have no idea if it would be practical.
(Because does the general public know or care about any of this?
Probably not. Of the people who do care, will any of them be swayed?
Seems unlikely.)

### "Don't be evil."

So, is Google open out of moral sentiment or out of self-interest? Well,
here's what's special about the company: both. Google has managed to
invent a business model wherein their incentives align with consumers'.
Their promotion of an open, decentralized, interoperable Web accessed
through commoditized (maximally available) hardware and software serves
Google and the world at large simultaneously. It also sidesteps the
adversarial nature of selling things to customers. And despite what I
think is a [fundamental
conflict](http://blog.byjoemoon.com/post/7590977101/googles-existential-crisis),
Google does this by making advertising useful.

Are there also some incentives that are bad? Yes. Google has a strong
incentive to collect data. This is mitigated by their need to keep their
user base happy. Which means they have to weigh data collection against
privacy intrusion. But the incentive exists. How is Google doing on this
front? Not perfectly, but certainly better than others, and certainly
not as bad as they could probably get away with without getting in
trouble with the general public.

And I think this is where the company's moral founding principles
emerge. "Don't be [evil](http://www.aaronsw.com/weblog/googevil)" may be
glib and too broad by far. It may lack the nuance to address some real
issues. But it propagates, in a blunt way, from the founders and
leadership down into important decision-making, recruiting, etc. Google
has made compromises, certainly. The partnership with Verizon on net
neutrality and its complex history in China are the two examples that
dismayed me the most. But Google's public and open espousal of such a
simple and powerful principle as "Don't be evil" leaves them open to
criticism. It makes them accountable for their actions to more than just
the shareholders in an important way.

### Notes

[^1]: Google+ is a notable exception to this list. Google hasn't said much
    about it, but my working theory is that, after the disastrous
    failures of both Wave and Buzz, their plan with Google+ is to try to
    offer a solid, compelling user experience first to gain significant
    adoption, and only then start to open up the technology for people
    to start creating their own interoperable social networking
    services. I think some of its inexplicably draconian policies, [on
    pseudonyms](http://epeus.blogspot.com/2011/08/google-plus-must-stop-this-identity.html),
    for example, make sense from this perspective.
    

[^2]: Though, they *do* [talk about
    it](http://insidesearch.blogspot.com/2011/08/another-look-under-hood-of-search.html).
    

[^3]: This is the Android that Andy Rubin was referring to in his infamous
    [tweet](http://twitter.com/#!/Arubin/status/27808662429).
    

[^4]: Though Nokia did partner with Intel to create an open source mobile
    operating system called Meego, it never grew out of vaporware
    status. 

[^5]: Though the ability to sell paid applications on the market is
    restricted on a country-by-country basis, with full access only
    slowly being rolled out. 

[^6]: This means it takes time for third party mod developers to find the
    necessary exploits to get root access and bootloader access before
    they can install custom mods. While this often happens before the
    devices are even released, it also often takes weeks or months, and
    sometimes never happens at all. There's been a push away from these
    restrictive policies, however. HTC recently released a bootloader
    unlocking tool that gives you full access to the hardware, though
    its use voids the device's warranty.
    

[^7]: More [here](http://www.socialaw.com/slip.htm?cid=20416&sid=121).

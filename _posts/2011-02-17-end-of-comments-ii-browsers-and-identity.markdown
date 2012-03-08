---
title: "End of Comments II: Browsers and Identity"
layout: blog-post
---

I think it's pertinent to note first that my thoughts on this thread and
some others comes from a place of deep interest in technology, but basic
technical laity. I have very little understanding of what's under the
floorboards of the internet. I mostly only see the levers and buttons
that are exposed to me, and can imagine many lever/button layouts that
would potentially make my life easier and better without first being
hobbled by the foreknowledge of the many (I'm sure) technical
limitations. I will try to discuss the technical aspects as far as I am
able, but be aware that that's not very far.

[Dave Winer](http://en.wikipedia.org/wiki/Dave_Winer), father of two of
my favorite things, RSS and podcasting, as well as huge influence on how
I think about the internet, stopped by and commented on [my last blog
post](http://blog.byjoemoon.com/post/3112676038/the-end-of-comments).
And then made the comment into a post on his own blog, [Scripting
News](http://scripting.com/). Which is a great illustration of the point
of my last post. This is unnecessary duplication and broken connection.
The way I wish it would work, and the way that I was trying to describe
in my last post is this: when Dave comments on my blog post, the comment
would also automatically appear on his blog, with a link to my post. Or
maybe more accurately, Dave would write a blog post (which would
naturally appear on his blog) with a reference to my blog post and then
my blog post would aggregate all responses to it (including Dave's) and
publish them underneath the text of the my post (with links back to all
of them).

I think the difference in mindset is still basically a Web 1.0/2.0 one
of read-only web vs. read-write web. When you stop making the
distinction between a user and something-above-a-user (publisher,
content-creator, aggregator, editor, administrator) you start to realize
that it's even flatter than we thought. Comments as they are now are
like a bunch of micro-blogs that everyone creates on everyone else's
sites. Disqus starts to connect them so that all of a user's comments
made through Disqus are a more like a single micro-blog. My point is
that microblogs are just a subset of blogs and all the contributions you
make to the internet should be connected. It should all be part of your
blog.

So I intended for this post to be just an elaboration on how I think the
browser should encourage richer interaction, but the comments on my last
post got me thinking more and more about how that's really a subset of
the problem of online identity (or lack thereof). So I'll talk about the
browser thing first and then talk about identity at large afterward.

Browser The thing about the internet is that you can be a producer of
content very easily (and more easily as tools get better). You can be
and are on the verge of contributing to the internet at all times. But
our tools can better expose this potential to us as users, as well as
encourage a richer contribution.

The components of my vision:

1.  A browser.
2.  An automatically created personal blog for every user.
3.  A [TrackBack](http://en.wikipedia.org/wiki/Trackback)-like protocol
    that aggregates all posts with reference to a post.
4.  A set of filters for those TrackBacks.
5.  Alternate views. I'll elaborate on these in order:

6.  I think it's pretty obvious how the browser fits into the scheme but
    I also think that "browser" is no longer an adequate term for what
    these applications do now. "Browsing" is very low on the list of
    things I use my browser for, and already we're linguistically
    confining ourselves to a passive role on the internet. "User agent"
    is somewhat clunky (plus I don't really know precisely what it
    technically refers to), but I'll go with that (or UA) until I think
    of something better.

7.  The UA would also hook directly into a user's personal blog when she
    logs into the UA (and ideally would take over most of the use-cases
    for most of other web services we use, especially simple ones like
    micro-blogs). Whenever the user feels the inclination, she may hit a
    button to invoke a horizontal or vertical split in the UA's window
    between whatever content she was viewing and a large, expansive,
    non-modal WYSIWYG rich text field. (Alternatively, it could open a
    new window for the text editor.) Optional title field, optional body
    field. Optional tag field. Any post made from the UA would be
    published on the personal blog. Dave Winer's [Minimal Blogging
    Tool](http://scripting.com/stories/2011/01/05/upcomingTheMinimalBlogging.html)
    comes from a similar line of thought, I think (the collapse in
    hierarchy between input and output by users).

8.  As far as I can tell, that last part could be implemented now on the
    application level, basically in a vaccuum. But I think the TrackBack
    part would need some sort of open standard protocol to work in a
    decentralized way. What it would look like for a user would be that
    at the bottom of any web page, or maybe by invoking another hard
    browser button, you could see all the UA-level blog post responses
    by anyone. Google actually implemented a very similar feature into
    the Google toolbar called
    [Sidewiki](http://www.google.com/sidewiki/intl/en/index.html). It
    failed as far as I can tell, and was panned by users and site owners
    alike, probably for good reason. My bet is that this was because of
    execution and lack of filtering, which I'll talk about later. The
    bigger problem to me is that I think this used Google infrastructure
    to store and maintain the whole thing (corporate silo). I suppose
    the current TrackBack system or something like it would work, but it
    depends on 1. the original post to be able to receive communication
    from referring posts and maintain a list of them; and 2. the
    referring posts to notify the original post that they exist. I guess
    there's not really any way around it needing some incarnation of
    both of those parts to work, which would need some sort of
    standarization of implementation of blogging platforms.

9.  A user should be able to filter these responses/TrackBacks in any
    number of ways. I suppose the default would be a chronological
    firehose, but there should be a way to promote responses from
    different contact lists to the top of the pile. There should also be
    a way to filter by community/distributed collaborative filtering.
    This is more or less what Digg, Reddit, Slashdot, and Hacker News
    already are. They share stories, comment on them, then crowd-source
    the ranking of both stories and comments. The model of the Atlantic
    Monthly blogs' comment spaces of well-moderated, directed discussion
    could also pretty easily be converted this way, I think.

10. The UA should have the ability to look at more than a single page at
    a time. The particular application for this that I have in mind is a
    view of an entire conversation thread. Tweetdeck for Android has a
    neat feature with which you can drill down into an @reply tweet and
    hit "conversation" and it'll show you, where applicable, the entire
    conversation as far back as the back and forth @replies go. I like
    this because context is always good and it exposes the
    conversational, derivative, shoulders-of-giants, re-mix nature of
    ideas in general. Imagine reading an especially compelling post,
    then being able to hit a button that extends it up and down, showing
    the conversational context and thought process that led to it, as
    well as any number of responses.[^1]

This vision is only additive (and barely that). One could still navigate
every part of this with a regular old web browser, because it's still
really just web pages and hyperlinks. None of the technology is new.
It's simply a different way of presenting options and artifacts that
already exist in order to encourage better, more considered contribution
to the community/communities of ideas.

It's also really just another take on this idea of several posts ago
(all content is the same, everything is streams and filters).[^2]

### Identity

Let me now apply my lens of elevating the user/collapsing the
distinction between user and producer to identity on the internet. I've
already spent a bit of time thinking about this, and I still have mostly
the same position I laid out in this post about persistent online
identity. The problem I see in all the current projects like OpenID and
OAuth, are the limited scope. OpenID allows me to not have another
password to memorize, and OAuth gives me the ability to allow granular
access to my data from one service to another, but neither of these do
anything to connect the services that are associated with an OpenID or
OAuth.

Here are the components of online identity as I see it:

A feed/feeds. Contact list/lists.[^3] Home page/Profile/public
firehose/private feeds. You can see how this is mostly already described
in my discussion of the User Agent.

Any User Agent home page or dashboard should contain not just incoming
feeds and subscriptions, etc. (as described here), but also provide a
field for output. A text entry field. And not small, but big, or barring
that, at least one that resizes as your post grows longer (expands with
your ideas).

It seems to me that the best chance of all of this happening is for
Google to do it.[^4] Google already owns every necessary
component: Chrome, Blogspot, Buzz, Contacts, and Profiles. And maybe
even a protocol to connect all of it, similarly to how I describe:
PubSubHubbub. And, indeed, they seem to be at the beginning of a slow
process of rolling out some sort of identity service, either in the [top
bar](http://blog.byjoemoon.com/post/3357516295/%22http://techcrunch.com/2011/02/16/google-new-toolbar/)
of different Google services, or in the form of a toolbar.

The only thing really missing is a decentralized/federated way for
people to host their own implementation and data, which isn't
necessarily out of the question, either, considering Google's history.

### Notes

[^1]: To take this in a slightly different direction: Currently, looking
    at web pages one at a time is the primary activity afforded by
    browsers. Reading feeds (for me in Google Reader) is sort of a
    secondary, virtualized (because a web-app) activity that's not as
    robust or as fast, presumably because it's not native (and none of
    the native feed readers I've tried have been particularly
    compelling). I kind of wish it were the other way around, because
    feeds are now primarily how I interact with the web.
    
[^2]: A distinction worth noting that I should add to the public-private
    spectrum: Public (or published) vs. Broadcast. There are things that
    I might want to put in front of everyone I know. There are other
    things that I don't feel the need to hide from public view, but I
    don't necessarily want to shove in front of everyone's faces. I.e. I
    may want to have an exchange with someone that I don't care is
    public, but I don't necessarily want to clutter up people's feeds.
    
[^3]: There is a tension between people's desire for granular control and
    their hatred of granular management. This seems like kind of an
    intractable problem to a degree, but hopefully once identity and
    contact management are standardized and portable, you'll only have
    to create lists once, and then the ongoing new contact sort would
    remain relatively manageable after that.
    
[^4]: It looks like [Mozilla was working on making the browser the center
    for
    identity](http://www.azarask.in/blog/post/identity-in-the-browser-firefox/),
    too, but that post is pretty old and it doesn't seem like it's gone
    anywhere. Edit: I forgot about
    [this](http://hacks.mozilla.org/2010/04/account-manager-coming-to-firefox/).

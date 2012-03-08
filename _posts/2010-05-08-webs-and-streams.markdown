---
title: Webs and Streams
layout: post
---

There was a lot of mayhem surrounding the release of Google Buzz that
I've been thinking about. First, of course, were the many complaints
about privacy, some of which were entirely reasonable, and others of
which were not. I think most of the reasonable complaints boil down to
the actual, technical process of releasing the technology as opposed to
the technology itself, which when regarded alone doesn't add anything
particularly novel to the social networking ecosystem. These actual,
technical process issues, like integrating with GMail and automatically
populating a public contact list, etc. are not especially interesting to
me, and others ([danah
boyd](http://www.danah.org/papers/talks/2010/SXSW2010.html)) have
written more intelligently than I could hope to on the subject.

There are two other aspects of Buzz that I find much more interesting.
One is the well trod issue of the public-private spectrum, and the other
is the discussion around "crossing streams," or automatically feeding
content from one service to another/others. I'll address the former
briefly, but only in how it pertains to my larger point, which is mostly
about crossing streams.

The social web as we know it today has formed into distinct
[silos](http://www.tbray.org/ongoing/When/201x/2010/03/28/Compartmentalization)
of information; to different degrees, you must subscribe to each
individual service in order to add to or draw from each distinct pool of
data. While some are explicitly more public venues (like Twitter), and
others are moving in public direction (Facebook), they're all more or
less isolated, and the only way to operate across them is to use some
sort of automated feed duplication service, which can be annoying for
several reasons. And while Buzz is not that interesting to me as another
one of these services (the roll-out was botched, the integration with
GMail is weird, and the UI of the service itself is just acceptable), it
is interesting in that it pushes open standards for social networking
content, making it a force for interoperability.

Interoperability changes things. Ultimately, it kind of elides the
differences between the types of content that the different services are
used for, and even introduces elision between content outside of social
networks. If you take interoperability to its logical extreme, almost
all digital communication is the same kind of stuff; [it's all just
content](http://www.buzzmachine.com/2010/04/07/what-is-content-then/).
To include:

-   News articles, essays, and blog posts
-   Tweets and status updates
-   Shared links
-   Photos/photo sets
-   Podcasts (maybe)
-   Comments ([Jeff Jarvis on
    comments](http://www.buzzmachine.com/2010/03/23/the-problem-with-comments-isnt-them/).)
-   "Likes"
-   Email
-   Chats\
-   SMS

In the abstract, there are very few true distinctions between these
types of content. The distinctions are mostly artificial. The
public-private spectrum seems like one that's real and relevant, so I'll
explore that a bit here.

Let me enumerate all the distinct points on this spectrum that I can
think of.

First, there's public content. Public content goes from one point to
every other point. This is broadcast content, which most traditional web
1.0 content is.

There's also public, but directed content, like @replies on Twitter,
Buzz, Facebook's Wall, comments in general (sort of), etc. These are
viewable by anyone, but directed at someone specific, i.e. public
content from one point to another.

This kind of public content (tweets at least) can address more than one
person specifically, though, so the next would one would public content
from one point to many.

Then there are things like mailing lists, private IRC channels, and
protected tweets, which are not open to the public but involve
(potentially) many points. Each piece of content in these mediums goes
from one point to many but not all, i.e. private content from one to
many.

Then there are text messages, chats, and e-mails, that (usually) go from
one point to another, privately.

So five basic types: 1→all, 1→1[public], 1→many[public],
1→many[private], 1→1[private].

Fairly obviously, however, there's no fundamental difference between
1→1[private] and 1→many[private]; the former is simply a subset of the
latter. Likewise with the [public] counterparts. Which leave us with
three: 1→all, 1→many[private], and 1→many[public].

The difference between, 1→all and 1→many[public], though, is also
somewhat artificial in that it's really an extraneous piece of metadata.
The public nature of the content renders the fact of any intended
recipient sort of functionally meaningless.

So, basically, the only real difference between any of these content
types is publicity vs. privacy (or public-ness vs. private-ness).
(There's a problem here, too, namely the "information wants to be free"
one. Fact is: there's nothing stopping anyone from forwarding or
publishing anything sent to them, privately or not, and there are not
clear legal or social rules governing most private information retention
behavior (outside of medical and legal contexts). See: [Calacanis vs.
Odio](http://sam.bluwiki.com/blog/2010/03/confession-i-was-one-who-came-forward.php).)

It's not really a spectrum at all, then, but a simple binary, and a
tenuous one at that.

(Ok, so this is maybe abstracting the issue to the point of breaking.
Realistically it's probably more like what Jeff Jarvis is saying: [There
is public, and then there are
publics](http://www.buzzmachine.com/2010/05/08/confusing-a-public-with-the-public/).
This is worth talking about separately, I think.)

Most other differences between the above listed types of data,
distinctions like length (whether it's enforced or not), immediacy,
context, and format are so self-evidently arbitrary and artificial, that
I think they can be dealt with quite handily with proper use of
metadata.

So, let's imagine a web of total interoperability. I think a "web" is
actually no longer as appropriate a metaphor, and would have to give way
to a metaphor of a river or stream. All public data produced would be
available in real time all at once. Without intervening silos like the
the social networks that currently exist, there would be only two
fundamental points of filter: production and consumption. Producers of
content would be responsible for attaching appropriate metadata, which
would include many of the points of distinction above: intended
recipients, importance, subject (both in the sense of taxonomical
subject, e.g. "technology," as well as in the sense of topic, such as
"re:[html link]"), location, etc. Consumers could then apply filters
using the available metadata, and display different filter sets in
customized ways, with the obvious different toggles for displaying a
specific filter set being chronology and real time updates.

So, let's imagine all above-defined content posted by everyone as a
single Stream of (as yet) undifferentiated data. What web services
currently do as clients of the Stream, essentially, is to filter it into
discrete streams and display them in conventional ways. Twitter filters
out everything but the people you follow on Twitter, and displays them
in reverse-chronological order. Your email client filters out everything
except things addressed to you (and spam, generally (and in herein you
already see some pretty intense algorithmic filtering coming into
play)).

You can even think of individual websites as this sort of a River
client. If individual people are the only real content creation points,
a website simply aggregates certain pieces of content from one or more
individuals (or, from a filter-only perspective, filters out everything
except certain pieces of content from one or more individuals).

What I like about looking at web activity this way is that, with the
right client, one could cut out all these intervening services and have
a direct stream of all the data you want to see, displayed the way you
want. My dream client would consist of a multi-column display with each
column representing a different filter or set of filters, each
independently configured to display its data in a way appropriate to its
contents. For example, my "inbox" would be all new, private content
addressed to me from whitelisted contacts, displayed in chronological
order. In the next column would be private messages to me from
non-whitelisted contacts, mailing lists, etc. The third column might be
the "social" column, which would aggregate everything posted by close
friends and family, stuff I don't want to miss any of, displayed in
chronological order. Then a "news" column, which would be posts from
blogs, twitter, etc. in reverse chronological order, so I could see just
the latest updates at any given time. This column would probably only
display headlines. (So, basically, this would be my twitter replacement,
since a large portion of my twitter feed is really just headlines or
short descriptions of blog posts and news items, with links.) I could
configure this column to scroll constantly, or not. Another alternative
display would be an algorithmic one, designed to show you first things
you will find most relevant and interesting, like Google Reader's
"magic" sort.

I also imagine this client to include output functions, which would
consist of more columns, each configured with different preset filters:
one broadcasting publicly, another to share with friends, family, etc. I
could alternatively configure certain outgoing filter-columns to append
metadata pertaining to the content, or manually tag each post as I write
it. I would tag this post, for example, with "boring, unrealistic web
nonsense," and you could subscribe to my public feed, but filter out
everything I post with this tag. Or you could subscribe to only this
stuff. Or only this stuff and photos. Etc.

Like I mentioned, this is really just a simplification/streamlining of
what already happens, but I think what's powerful about the idea is that
it removes the current data silos like Twitter and Facebook, and
decentralizes them, so that each individual has more control over which
data is siloed and how.

I think it also flattens the publishing environment, putting more
emphasis on individual authors. Websites and news organizations could
more explicitly be understood for what they are: aggregators. One way I
can imagine a publishing model is for individual authors to introduce
advertisements inline in all or some of the items in the feeds they
consider "published content."

None of this is to say that I think the entire Web should be a Stream.
There are clearly a lot of websites that should be website and not
streams of content. All stores (or more broadly: organizations), for
example, including online stores and the websites of physical stores
make more sense as more or less static websites. Web applications like
maps and Wikipedia and countless others make more sense as static web
pages. But I think a Stream is a better metaphor for a large part of
current communicative Web activity.

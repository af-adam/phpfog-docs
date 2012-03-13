---
title: The End of Comments
layout: post
alias: /post/3112676038/the-end-of-comments
---

It's a truism that medium and message are intrinsically intertwined.
This is the problem I have with the emerging (or maybe more accurately:
emerged) social networking platforms like Facebook and Twitter.

I don't care about the privacy implications (besides Facebook's
dis-ingenuousness toward the issues and the inherent conflicts of
interest) so much as I care about the inherent restrictiveness of
expression. In [this
review](http://www.nybooks.com/articles/archives/2010/nov/25/generation-why/)
of [The Social Network](http://www.imdb.com/title/tt1285016/), Zadie
Smith talks about how Mark Zuckerberg's personal limitations inform and
define Facebook's.

> The striking thing about the real Zuckerberg, in video and in print,
> is the relative banality of his ideas concerning the "Why" of
> Facebook. He uses the word "connect" as believers use the word
> "Jesus," as if it were sacred in and of itself: "So the idea is really
> that, um, the site helps everyone connect with people and share
> information with the people they want to stay connected with…."
> Connection is the goal. The quality of that connection, the quality of
> the information that passes through it, the quality of the
> relationship that connection permits--none of this is important. That a
> lot of social networking software explicitly encourages people to make
> weak, superficial connections with each other (as Malcolm Gladwell has
> recently argued), and that this might not be an entirely positive
> thing, seem to never have occurred to him.

I'm not and never have been a Facebook user, but as far as I can tell,
its domination of the market is basically an accident. It's never had a
novel feature-set or a particularly compelling or usable design. It was
marketing and the slow erosion of initial exclusivity timed perfectly to
coincide with when the mainstream was ready for a service like it,
riding a rising tide of recursive network effect.

It made Zuckerberg's "connection" accessible. But the price of
accessibility was a degraded signal. As Smith writes, the quality of the
connections on Facebook is very poor. And this is because the signals
are low bandwidth by design. Input fields for text updates are small and
restrictive. Photos are easy to share but poorly presented, the system
implemented not to share rich, expressive photos, but low-grade,
mundane, documentarian ones: I was here; I did this; I was with these
people. Ubiquitous interaction is reduced to comment fields that
encourage short, *ad hoc* reactions, or--worse--to the elemental, further
irreducible unary piece of information: the "like" (though I suppose the
"poke" contains even less information). Facebook casts an extremely wide
net into the waters of the collective mind-space of its users, but that
net penetrates only into the shallowest of depths.

Twitter provides accessibility with a similar sacrifice of bandwidth.
I've always felt like Twitter's great innovation was not the arbitrary
character limit[^1], but the frictionless interface that
collapses the separation between input and output. The system itself
doesn't judge how noteworthy your expression is, leaving that to the
network at large in as close to a democratic way as is really
conceivable. But the limitations, also similarly to Facebook's, enforce
a shallowness of sentiment, encourage pith over comprehensiveness, and
discourage real discourse, or any sort of conversation at all.

I'm obviously not crazy about this trend. I think accessibility at the
cost of genuine communication of ideas is just connection for
connection's sake. What I want is an equally accessible system that is
robust enough to handle not only all the depth of communication we've
experienced as a species so far, but even more.

There are certain services that are getting closer to what I want.
[Disqus](http://www.disqus.com/) makes it part of the way there (by
creating persistent identities for commenting across the web).
[Posterous](http://www.posterous.com/) and
[Tumblr](http://www.tumblr.com/) are headed in that direction, too.
Posterous provides a bunch of tools that take ubiquitous capture and
turn it into ubiquitous capture and share. But Tumblr, especially, and
more profoundly, flattens and opens up the comment-space. In a
traditional commenting system, there is an explicit heirarchy between
the post and its comments that is enforced (often) by aspects of
presentation, input field size, and not least by comments' isolation
from the rest of the web. In Tumblr, when you re-blog something, it
appears in your own feed/page where you have the option to simply share
it as is, or expand on it however you see fit, and the original post
essentially just aggregates all the re-blogs underneath the original
content. This effectively promotes comments to the level of posts in and
of themselves. It also ties comments to a persistent identity. Twitter
@mentions are similarly flattened and open[^2], in that they are
on the same(-ish) level as regular tweets and tied to a persistent
identity.[^3]

The problem with both Twitter and Tumblr, of course, is that they only
work within the confines of the respective services. An ideal platform
would be distributed, independent of any particular corporate silo. Of
course, there is already a platform that fits this description: the
World Wide Web.

There are certain technologies in place that get us most of the way
there. There are a bunch of fairly simple to set up blogging platforms,
for instance, that are basically interoperable with the rest of the web
through the magic of hyperlinks.
[TrackBacks](http://en.wikipedia.org/wiki/Trackback) offer a halfway
solution to distributed responses. I think the thing that's really
lacking still is accessibility.

It seems pretty clear to me that the only way for persistent identity
and distributed responses to really become truly accessible in the way
that Facebook and Twitter are is for the browser to integrate these
features. The browser should keep your identity. It should have a large,
blank, easily-invokable input field for text, photos, videos, whole web
pages, with a drag-and-drop interface. And it should aggregate responses
to any given web page, from across the web and from user-selected
groups.

I'll leave the specifics vague for now and lay out more details in my
next post.

Edit: continued
[here](http://blog.byjoemoon.com/post/3357516295/end-of-comments-ii-browsers-and-identity).

### Notes

[^1]: The 140-character limit exists because Twitter started as a way to
    propagate SMS to groups easily. My theory is that the founders of
    Twitter have no idea why it was successful, and are afraid to kill
    the limit because they don't want to mess with the voodoo. In
    practice, from what I can tell, a significant percentage of Twitter
    usage is in the form of a headline plus a link to a larger post,
    which is not very different from things that came before, notably
    RSS. 

[^2]: This is less the case than it used to be. Twitter used to publish
    all @replies into a user's main tweet-stream but changed this
    implementation in May of 2009. Now, you only see someone's @replies
    if you also follow the person they are replying to.
    
[^3]: Twitter has a similar function to aggregate replies; you can always
    click on a user's profile and drill down into their @mentions (which
    I would assume is a simply a front end to a search for that user's
    @handle), but unfortunately you can't drill down into an individual
    tweet's replies. There is a function by which you can drill down
    into a tweet that is an @mention and see the tweet to which it's
    replying, but it's inconsistent: support is on a per-client basis
    (Tweetdeck seems to handle it quite well) and it only works if the
    @mention was through a client's implementation of the official
    @mention API, whose support by clients is also not universal. It
    also naturally won't work if the @mention was simply manually typed
    into the tweet input field. 

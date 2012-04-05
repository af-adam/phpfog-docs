---
title: A New Metaphor for Social Networking
layout: post
alias: /post/7072771434/a-new-metaphor-for-social-networking
---

Yesterday, Google launched [Google+](https://plus.google.com/), which,
according to [Steven Levy's Wired
article](http://www.wired.com/epicenter/2011/06/inside-google-plus-social/all/1),
is less of a product and more of a new direction for the search company,
a redefinition of its approach to its core mission of "organizing the
world's information." Treating a social networking product as an
extension of this mission is simultaneously reassuring and slightly
creepy. Creepy because of the way Google constitutionally seems to treat
people as just another category of information to be indexed, and, well,
reassuring for the same reason, because it seems like a way for Google
to finally get it right.

There don't appear to be any truly new features included in Google+.
Instead, there's a clean and uncharacteristically whimsical user
interface to a core set of features that many social networks have done
before: sharing, photos, group chat, group video chat, etc. One word
that's conspicuously missing from the announcement, though: "open." No
mention of open source, APIs, protocols, federation, or
interoperability. Which is sad, but perhaps understandable after the
abject failures of Wave and Buzz.[^1]

The feature I'm most conflicted about is "Circles." Circles is Google+'s
take on friend/list management, and works a lot like Facebook's
"Groups." Where Facebook's feature is a tacked-on afterthought, though,
reportedly ranging from barely useable to horribly broken, Circles, as a
tightly integrated core feature, looks a lot friendlier, faster, and
more fun to use. What's conflicting about it is that lists, while the
most obvious and seemingly flexible solution to the problem of selective
interaction, are actually quite limited and deceptively complex.

### Two Problems: Ambiguity and Asymmetry

It seems straightforward enough. Jill has different lists. When she
shares something on one list, everyone on that list can see the item.
Simple. It quickly gets more complicated, though. For example, what if
Jack wants to comment on that item? Who can see the comment? In Google
Reader, anyone who was in the original list can see the comment. Which
is potentially confusing for Jack, who has no idea who can see his
comment, and for Jim, who can suddenly see a comment from someone he
doesn't know on an item in his feed. This is normal on the open web,
where there is an explicit expectation of total publicity. But in a
social networking context of commenting on a friend's item, it can
easily feel like overexposure. An alternative way to do it might be for
only Jill to be able to see comments on her shared items, but this would
simply resolve into many one-on-one conversations between Jill and
anyone who comments on her item. A third way to handle this would be to
only expose Jack's comments to people in Jack's friend list. But which
of Jack's lists? And should it be only the overlap between Jack's list
and the original list Jill shared it to?

Straightforward lists start out simple, but once you make them
bi-directional, quickly gain an order of complexity. And not only are
the individual ways to do it somewhat hard to define and explicate, but
so is even the question of which of these is in use. The way Facebook
Groups and Google+ Circles address the issue is that everyone involved
can check to see who is on the list of people included in the share of
the particular item. Which may seem like it solves the problem, and
perhaps does to some degree, but it fails to address what the issue
really is, which is social context. An example: Jack is friends with
Jill both at work and outside of work. Jack shares something to his
"Work" Circle. Jill sees the item, but mistakenly thinking she's in a
non-work context, makes a crude comment. While this system does give you
access to the current social context, it doesn't make it immediately
obvious. I.e. Jill could conceivably check to see who will be able to
see her comment each time she makes a comment, but the cognitive load
and general uncertainty will push Jill to undershare, rather than have
to manually check the social context each time she makes a comment.

It also does not address the problem of asymmetry between my circles and
my friends' circles. Let's say Jill logs onto Google+, clicks on her
"Friends" Circle, and begins to peruse her friends' posts there. When
she clicks on one of Jack's shared items to comment on it, she might
have the expectation that her comment is going out to the Circle that
she's in at the moment, which is different from the Circle that Jack
posted to in the first place. This expectation is reinforced by the fact
that in her user interface, she's still in her Friends Circle. But her
comment will actually be going to Jack's, of course. Which is
potentially pretty confusing. The fundamental problem here being output
lists are different from input lists, but they're called the same thing,
and the conceptual difference isn't easy to keep track of.

Ultimately, the problem is that the way information flows in any of
these situations is non-obvious, complex, hard to model coherently in a
simple user interface, and there's no metaphor that you can map the
interaction onto.

### "Places"

Here's a better idea than Groups or Circles: Instead of or in addition
to lists, imagine a Place that represents a semi-permanent grouping
that's easy to create and archive, centered around anything from topic
to group to actual physical location or event. A Place could be public
or private[^2] (meaning no one outside of the Place could see
what happens there), and could be closed to or open for anyone to
join.[^3] The metaphor solves both problems of ambiguity and
asymmetry, by transparently conflating the input and output lists.

The primary way to use this sort of system would be to visit each Place
serially as separate feeds, such that the user would have a clear idea
of "where" she is as well as in what social context.[^4]

So when Jill clicks on her "Work" Place, she always knows more or less
exactly who's there and, maybe more importantly, she understands the
social context. Likewise, Jack also always knows this, and when Jack
comments on Jill's post in Work, he goes to the same place in his UI
(Work) that Jill went in hers to make the original post, which
eliminates the confusion about how the information flows. It's also the
same list of people for both of them (and everyone else in the Place),
so there's no confusion about who's going to see the post or the
comment; it's always obvious.

Not that it would always be obvious. If Jill is a part of Jack's "Bar
People" Place, but doesn't really know everyone else there, she'll have
to check to see who's on the list. But importantly, she won't
necessarily have to in order to understand immediately what the social
context is, and to have a general idea of how familiar she is with the
Place.

Note that I am not proposing anything functionally very different from
the list systems that Facebook and Google+ already have in place. Places
are just slightly more restrictive and present the information in a
different way. They give the user a mental model that makes it much
easier to immediately and intuitively understand how her information
flows, who or at least what kind of people are involved in the
conversation, and what sort of tone would be appropriate.

Places also add conceptual use-cases, like event-centered streams.
Imagine Jill creates a Place called "Birthday Party" and invites
everyone who will be there. Then all the planning, conversation, and
photography can take place there, automatically aggregating all the
relevant data and simultaneously creating a record of the event in an
organic way. This could easily scale to even very large events,
including conferences, classes, and concerts. It's hashtag 2.0.

While I had originally been thinking about this concept in the context
of open, interoperable social networks and self-hosted identities and
social graphs, where current social networks would be what I call Places
(Twitter for shouting pithy aphorisms, LinkedIn for 'professional
networking,' Flickr for sharing photos, Facebook for... I'm not sure), I
thought it could be illuminating to see how well it would apply inside
of a social network. Pretty well, it would seem.

But, really, another (albeit prettier) data silo doesn't do much for me.
The fact that it's from Google makes me immediately interested, but I'm
disappointed that it's not a more open initiative. I'm still hopeful
that that part is in the works.

### Notes

[^1]: Though I really wouldn't attribute the failures of those products to
    their 'open' nature. 

[^2]: It seems important to me to give clear indication of the privacy
    setting in each Place in the UI, perhaps by changing the color
    scheme: e.g. dark background with light text for a private Place,
    vice versa for a public one. 

[^3]: I leave up to the reader to think about who sets the privacy
    setting, whether and how the privacy setting can change, who can
    invite people, who can control who can invite people, who can have
    write access as well as read access, and who controls that, and the
    different mechanisms that would have to be involved for each of
    these decisions. I'd like to point out here that Google+ seems to
    subscribe to some of the basic content relationships I wrote about
    [here](http://blog.byjoemoon.com/post/582452757/webs-and-streams).
    
[^4]: It's not that hard to imagine an alternate view that collapses all
    the different Place streams together, but gives a clear indication
    of which Place each individual post belongs to.

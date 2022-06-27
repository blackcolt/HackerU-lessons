Angular:
Please create an angular project

- Lets call this project the-facebok
  in the facebook we will have couple of entities

Facebook. (will be the the entity to hold all the entities->class)
user
feeadble->
post
ad
feed (a list of posts and ads )

user->name, passwoed, feed[feeadble], posts: [post]

user have a feed.
user also have is own posts (list of posts.)
in the route /:id we will see the current user feed.
->feedPage->feedable-container->feedable
->search  
<feedpage>
<feed-search>
<feedContainer><feed></feed></feedContainer>
<feedpage>

<user>
<feedContainer><feed></feed></feedContainer>
<user>

<userContainer>
  <user>
    <feedContainer><feed></feed></feedContainer>
  <user>
</userContainer>

posts/userId/123
in the route /posts/userId/:id we will see all the post of a certain user.
<feedContainer><feed></feed></feedContainer>
in the route /posts/:id we will see post with this id.
<feed></feed>
in the route /users/:id we will see the user with this id.
<user>
<feedContainer><feed></feed></feedContainer>
<user>
in the route /users we will see all the users.
<userContainer>
<user>
<feedContainer><feed></feed></feedContainer>
<user>
</userContainer>
interview questions:

- What are the advantages and disadvantages of using use strict?
- What are the differences between ES6 class and ES5 function constructors?
- How to compare two objects in JavaScript?
- Suggest one simple way of removing duplicates from an array using ES6
- Check if a given string is a isomorphic

abba
attttta
ayyybya

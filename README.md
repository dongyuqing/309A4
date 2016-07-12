# Shifter
CSC309 Assignment 4: The Sharing Economy

## Topic

Shifter makes it easy for coworkers to trade work shifts. Current methods to trade shifts are too dispersed (text message, facebook, email, ...), unreliable, and not open enough to people outside circles of friendships.

TODO: talk about the benefits of the Shifter platform.


## Creativity of the topic: Is the project creative enough to distinguish it from 10% existing web apps? Comment on the existing products and differences..

TODO

## The structure, organization, and user interface in the page/screen mock- 30% ups (front-end) looks professional and is easy to use.

TODO


## The required feature list has been addressed and any additional features are described. A plan is laid out for implementation and team members are assigned to production of each feature.

TODO



## Team Members

Nigel Fong, g5n, nigel.fong@mail.utoronto.ca

Yuqing Dong, g5dong kee.dong@mail.utoronto.ca

Kyle Long Que Tam, g5tamkyl, kai.tam@mail.utoronto.ca

Li Ju, c5juli, sheldon.ju@mail.utoronto.ca


## Sections & Tasks

### Pages
- [sheldon] Login: sign-in, sign-up, third-party authentication
- [lucas] Transfer: like a piazza forum, shows shift calendar schedule at top, comments (like piazza), 
- [sheldon] Profile page: users (employee, manager), comments (like facebook), shows ratings
- [nigel] Admin page:
- [kyle] Place: work details, rankings (recommendation system) of shift takers, pinboard with history/announcements
- [nigel] Messages: only supports binary relationships, chat history, (kinda like messenger)

### Shared components
- [nigel] Navigation: profile, your places, new shift, browse, messages, notifications, logout/(signin/signup).
- [nigel] Notifications: when new shift available at work, when your shift taken, managers get notified of all activity at their location(s), new message, when someone comments on your page or shift thread, an IOU status change, ...
- [nigel] Create shift popup: should be a fast modal that opens from nav, on any page, with quick picker options.

### Logic decisions for minimum product
- Undo action of taking shifts? Should it release the shift, and notify everyone its available again?
- Messages: should group messages be supported? = No. Currently just binary.



## Enhancement ideas
- Using React.js for all components/props/state...
- Incentives (monetary) from by individuals to motivate shift takers in unpopular shifts (just keeping track of IOUs open/closed, and reputation/rating of reliability)



## Install

```
npm install express
npm install -g nodemon
```

## Run

```
nodemon path/to/server.js
```

Make requests on port `3000` with entrypoint `http://127.0.0.1:3000/` aka `http://localhost:3000/`

Also, `http://127.0.0.1:3000/admin/` aka `http://localhost:3000/admin/`



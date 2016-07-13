# Shifter
CSC309 Assignment 4: The Sharing Economy

## Topic

Shifter makes it easy for coworkers to trade work shifts. Current methods to trade shifts have drawbacks: 
- dispersed (text message, facebook, email, ...)
- unreliable (no response ratings, reputation, ...). 
- not open to people outside circles of friendships.

The Shifter platform notifies coworkers of the shifts that you need to fill, and provides messaging and commenting to sort things out quickly. The platform allows you to offer incentives to increase chances of filling an undesirable shift.

The audience is any shift worker since the platform is not associated to any particular brands. The goal is to become the most widely used platform to trade shifts through the principles of trust, relevance, and convenience.

It's often the case that an employee doesn't know many people at work that well, which reduces the likelihood of participation in discussions to cover shifts. Shifter opens the pool of shift-takers to all eligible coworkers of their workplace. A greater audience results in more successful outcomes.

A shift trading platform, like any open market is prone to bad 'players'. Reputation systems employ trust mechanism help to overcome some of the worries in a transaction. Shifter uses a feedback system, similar to eBay, after a shift exchange. The purpose of feedback is to promote reliability in the system (and discourage unreliability) of both the shifter and shiftee following-through.

Managers can view the activity of employees to stay on-top of changes in staffing, and possibly comment on it.

Notifications keep everyone up-to-date with what matters to them, and help transactions occur quickly. For example shift givers are notified when the spot is filled, and shift takers are notified when coworkers make a new shift available.

Messaging allows for private discussions such as following-up on details of a shift, or a cheeky notification to a friend before posting a new shift, or asking if 'Joe' bailed out on covering your shift too. Notifications for messages are turned on by default.

A workplace ('place') can post announcements on their page (like a Facebook wall), and display the top performing employees, by ratings and amount of times shifts are covered. This enables managers to do things independently like reward top performers..





## Creativity of the topic

Is the project creative enough to distinguish it from existing web apps? 

There are some similar apps (ShiftPlanning, Shyft, WhenIWork, Humanity, 7shifts, Homebase, JoltUp...), but none (that we know of at this time) that use the trust mechanisms, which are so important, described previously.


## Structure, organization

TODO


## User interface.

The goal is to make the user experience (UX) as intuitive and convenient as possible. This refers to the layout of the user interface (UI) as well as the mechanisms used to promote positive interactions in the trading of shifts. One of the main goals of the platform is to make shift trading awesome.


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
- [nigel] Admin page: for (us) platform owners to moderate users.
- [kyle] Place: work details, rankings (recommendation system) of shift takers, pinboard with history/announcements
- [nigel] Messages: only supports binary relationships, chat history, (kinda like messenger)

### Shared components
- [nigel] Navigation: profile with dropdown for (work)places, search (does a db query of all names of coworkers into dropdown), new shift, browse, messages, notifications, logout/(signin/signup).
- [nigel] Notifications: when new shift available at work, when your shift taken, managers get notified of all activity at their location(s), new message, when someone comments on your page or shift thread, an IOU status change, ...
- [nigel] Create shift popup: should be a fast modal that opens from nav, on any page, with quick picker options.

### Logic discussions/decisions for minimum product
- Undo action of taking shifts? Should it release the shift, and notify everyone its available again?
- Messages: should group messages be supported? = No. Currently just binary.
- What if people work at multiple locations? Maybe they want the privacy option to keep multiple profile separate without having to create different accounts. This is another enhancement idea.


## Enhancement ideas
- Open the API to developers, with documentation, and more endpoints.
- Using React.js for all components/props/state...
- Incentives (monetary) from by individuals to motivate shift takers in unpopular shifts (just keeping track of IOUs open/closed, and reputation/rating of reliability)
- Implement some results of the research article to combat: negative rating retaliation in a shift exchange, 
- Shifts can be taken in-part if only part of the time ends up working for someone. Handling scheduling conflicts possible increases the complexity of this assignment beyond the scope..
- Employees enter their hourly, so we can give them the motivating $amount stat, in the last week, month, year... (optional: users define the time range).
- search bar has autofill as characters are typed.

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



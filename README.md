![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Socket.io Namespaces and Rooms

### Author: Becca Lee
paired with Heather Cherewaty

### Links and Resources
![Build Status](https://www.travis-ci.com/beccalee123/09-socket.io-ns.svg?branch=master)
* [repo](https://github.com/beccalee123/09-socket.io-ns)
* [travis](https://www.travis-ci.com/beccalee123/09-socket.io-ns)
* [client application](https://pmww0ww42q.codesandbox.io/)

### Modules
- `app.js` connects to the letter and number namespaces, runs intervals and emits the `next-number` and `next-letter` events;
- `server.js` allows inbound connections to the 2 name spaces, lets the user join rooms, handles numbers and letters related events and functionality

### Setup
#### `.env` requirements
* `PORT` - 3000;

#### Running the app
* Open two tabs in your terminal. In one, run `node server.js`, then in the other, run `node app.js`.
* After both are running, open the client application using the link in this README
* Once that's open, you should see a set of positive and negative numbers and a set of lowercase and uppercase letters that iterate through at a set interval.

#### Tests
* How do you run tests?
I admittedly wasn't clear on the best way to test this app, apart from running it and seeing how things worked, but I did test the lowerCasing function to ensure it was working as expected!

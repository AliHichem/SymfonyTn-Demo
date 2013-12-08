SymfonyTn-Demo
==============

Realtime web application demo including: symfony2, nodejs, redis and socket.io (for websockets).

Requirement
-----------

You need to have all of those packages installed.

 * PHP5 along with PHP5-Sqlite
 * [redis](http://redis.io/) ( redis-server )
 * [nodejs](http://nodejs.org/)
 * [npm](https://npmjs.org/)

NOTE to Windows users : don't worry, all of those packages are installable on windows.

Installation
------------

It's as simple as blinking your eyes :).

 1- under your root project folder :
 
```
composer install
```

 2- under (node) folder 
 
```
npm install
```

that's it :) !


How to use ?
------------

Now all what you have to do is to start your nodejs server with 

```
node node/server.js
```

(of course for production use you will nead to daemonize it)

Now every time you insert a new news from /admin/new all the connected users will see a realtime notification about that news.

 

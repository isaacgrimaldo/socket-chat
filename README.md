# App Description 

this app is a server with connection web-sockets is based in a project from [Victor Herrera](https://fernando-herrera.com/#/ 'web site') in him [Node.js](https://www.udemy.com/course/node-de-cero-a-experto/ 'cours')
, it's was made with [Express](https://www.npmjs.com/package/express 'library') and [Socket.io](https://www.npmjs.com/package/socket.io 'library').



### First install dependencies

```
npm install 
```

### Run App  (Npm commands)
<hr>


### Note 
Check your environment variables

#### Run in development
```
npm run dev
```

### Run in production
```
npm  start
```

# Use

The server can make a duplex connection with the back-end and the front-end to create a  global room  and  private rooms

## Features 

* Send Message to a global room and private rooms
* Emit events on the back-end and the front-end 
* Listen events on the back-end and the front-end
* Send information when it detects a change, if , the web-socket connection  is listend the event
 
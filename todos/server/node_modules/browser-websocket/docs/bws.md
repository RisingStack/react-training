# BrowserWebSocket

Use ```js require('browser-websocket')``` to access the BrowserWebSocket class. 
This class is base on the WebSocket object of browser. If the WebSocket object 
isn't exist, it couldn't instance. You need new the class to connection the server. 
If you need debug message, you can set debug mode true.

```js
var BrowserWebSocket = require('browser-websocket');
var ws = new BrowserWebSocket('ws://localhost:8000', true); // the second parameter is debug mode
```

## BrowserWebSocket.url

Store the url of connection server.

## BrowserWebSocket.on(event, fn)

Bind event listener to the websocket.

```js
// accept events: open, close, error, message
ws.on(event, function(e) {
	// message event has data
	// you can get message from e.data
	console.log('event listener was bound');
})
```

## BrowserWebSocket.off(event, fn)

Remove a previously-attached event handler from the event listener.

```js
var openFunc = function() {
    console.log('already connected');
};
ws.on('open', openFunc);
ws.off('open', openFunc);
```

## BrowserWebSocket.emit(message)

Transmits data to the server over the WebSocket connection.

```js
ws.emit(message); // You need check that ws is already connected or it will be error.
```

## BrowserWebSocket.close()

Closes the WebSocket connection.  If the connection is already CLOSED, this method does nothing.

```js
ws.close();
```

## BrowserWebSocket.reconnect()

Reconnect server when connection is closed.

```js
ws.on('close', function() {
    ws.reconnect();
})
```

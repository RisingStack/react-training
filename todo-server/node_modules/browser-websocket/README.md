# Browser-websocket

This is packaging functions of browser websocket.

## Example

- node

```js
var BrowserWebSocket = require('browser-websocket');
var ws = new BrowserWebSocket('ws://localhost:8000');

ws.on('open', function() {
    ws.emit('hello world');
});

ws.on('message', function(e) {
    var message = e.data;
    console.log(message);
});
```

- html

```js
<script src="browser-websocket.min.js"></script>
<script>
    var ws = new BrowserWebSocket('ws://localhost:8000');

    ws.on('open', function() {
        ws.emit('hello world');
    });

    ws.on('message', function(e) {
        var message = e.data;
        console.log(message);
    });
</script>
```

## Installation

- node install

```js
npm install browser-websocket --save
```

- use in html page

download "browser-websocket.min.js" (in [dist](https://github.com/benjaminchen/browser-websocket/tree/master/dist) folder)

```html
<script src="browser-websocket.min.js"></script>
```

## API Docs

See [`/doc/bws.md`](https://github.com/benjaminchen/browser-websocket/blob/master/docs/bws.md)

## License

Released under the MIT license

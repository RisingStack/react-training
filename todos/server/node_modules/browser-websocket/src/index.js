function BrowserWebSocket(url, debug) {
    if (typeof WebSocket == 'undefined') return false;
    if (this === (function(){return this;})()) return new BrowserWebSocket(url, debug);
    this.url = url;
    this.ws = new WebSocket(url);
    this.debugging = debug;
    this.events = {
        open: [],
        close: [],
        error: [],
        message: []
    };
    if (debug) {
        this.on('open', function() {
            console.log('%s(%d)\nconnect successful: %s ...', Date(), Date.now(), this.url);
        });
        this.on('close', function() {
            console.log('%s(%d)\nconnection interrupted ...', Date(), Date.now());
        });
        this.on('error', function() {
            console.log('%s(%d)\nsomething error ...', Date(), Date.now());
        });
        this.on('message', function(e) {
            var message = e.data;
            console.log('%s(%d)\nreceived message: <-- %s ...', Date(), Date.now(), message);
        });
    }
}

BrowserWebSocket.prototype = {
    on: function(event, fn) {
        if (! event || ! fn) throw new Error('Not enough arguments');
        if (! this.events.hasOwnProperty(event)) throw new Error('Only accept [open, close, error, message] event');
        if (! this.events[event].indexOf(fn) > -1) this.events[event] = this.events[event].concat(fn);
        this.ws.addEventListener(event, fn);
    },
    off: function(event, fn) {
        var index = this.events[event].indexOf(fn);
        if (index < 0) return;
        this.ws.removeEventListener(event, fn);
        this.events[event].splice(index, 1);
    },
    emit: function(message) {
        if (this.ws.readyState !== 1) console.log('%s(%d)\nconnection is not established, please wait ...', Date(), Date.now());
        if (this.debugging) console.log('%s(%d)\nsend message: --> %s ...', Date(), Date.now(), message);
        this.ws.send(message);
    },
    close: function() {
        if (this.debugging) console.log('%s(%d)\nclose connection ...', Date(), Date.now());
        this.ws.close();
    },
    reconnect: function() {
        if (this.debugging) console.log('%s(%d)\ntry to reconnect ...', Date(), Date.now());
        var events = this.events;
        var ws = new WebSocket(this.url);
        var me = this;
        for (var event in events) {
            if (! events.hasOwnProperty(event)) continue;
            for (var index in events[event]) {
                ws.addEventListener(event, events[event][index]);
            }
        }
        ws.addEventListener('open', function() {
            me.ws = ws;
        });
    }
}

module.exports = BrowserWebSocket

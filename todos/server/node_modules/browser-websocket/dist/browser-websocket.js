var BrowserWebSocket =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ })
/******/ ]);
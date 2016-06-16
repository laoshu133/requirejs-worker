# Web Workers loader for RequireJS

The api follow webpack `web-worker` loader


## Usage

```javascript
// main.js
define(['worker!./my-worker'], function(Worker) {
    var worker = new Worker();

    worker.postMessage('Hello');

    worker.onmessage = function(event) {
        var data = event.data;

        console.log(data); // Got "Hello world"
    };
});
```

```javascript
// my-worker.js
self.onmessage = function(e) {
    self.postMessage(e.data + ' world');
};
```

## License

MIT

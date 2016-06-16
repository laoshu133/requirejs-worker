define(['worker!./my-worker'], function(Worker) {
    var worker = new Worker();

    worker.postMessage('Hello');

    worker.onmessage = function(event) {
        var data = event.data;

        console.log(data); // Got "Hello world"
    };
});
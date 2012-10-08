# Unkept promises

POC Promise implementation.

- http://wiki.commonjs.org/wiki/Promises/A
- http://api.jquery.com/category/deferred-object/
- https://groups.google.com/forum/?fromgroups=#!topic/commonjs/6T9z75fohDk

## API

Create a deferred object:

    var deferred = unkept.deferred();

Get the promise from the deferred object:

    var promise = deferred.promise();

Add a handler to be called when the promise is resolved:

    promise.then(function (msg) {
        console.log('resolved: ' + msg);
    });

Add a handler to be called when the promise is rejected:

    promise.fail(function (err) {
        console.log("rejected: " + err.message);
    });

Resolve the deferred object:

    deferred.resolve('success');

which triggers the success handler on the `promise` object and
'resolved: success' is logged to the console.

Other option is to reject the promise (you cannot both resolve and
reject the promise, only the first one applies):

    deferred.reject(new Error('could not resolve'));

which triggers the error handler on the `promise` object and
'rejected: could not resolve' is logged to the console.

## Chaining, `all` etc.

TODO

## Example

    // Get a promise that succeeds sometimes, and fails sometimes.
    // A number is returned for the success callback if everything
    // went a-ok.
    function async() {

        // Create a new deferred object
        var deferred = unkept.deferred();

        window.setTimeout(function () {
            var num = Math.random();

            if (num < 0.5) {
                // Success!
                deferred.resolve(num);
            } else {
                // Fail
                deferred.reject(new Error('Could not succeed :(.'));
            }

        }, 2000);

        return deferred.promise();
    }

    async().then(function (num) {
        console.log('got num:', num);
    }).fail(function (err) {
        console.log('fail with error: ', err.message);
    });

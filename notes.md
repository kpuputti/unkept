# Notes

## "The spec"

- http://wiki.commonjs.org/wiki/Promises/A

### States

A promise can be in of of three states:

- unfulfilled
- fulfilled
- failed

Promise may only move from unfulfilled to fulfilled or
unfulfilled to failed.

The value of a fulfilled or failed promise must not be changed.

### API definition

"A promise is defined as an object that has a function as the
value for the property 'then':"

then(fulfilledHandler, errorHandler, progressHandler)

"All arguments are optional and non-function values are
ignored."

The progressHandler is optional.

## jQuery Deferreds

- http://api.jquery.com/category/deferred-object/

### Usage

"chain-aware function wrapper"

Specify functions to be called:

deferred.then()
deferred.done()
deferrend.fail()

"call" the functions with the supplied args:

deferred.resolve(args)
deferred.reject(args)

### States

"Once the Deferred has been resolved or rejected it stays in
that state; a second call to deferred.resolve() is ignored for
example."

"If more functions are added by deferred.then() after the
Deferred is resolved, they are called immediately with the
arguments previously provided."

"A Deferred object starts in the pending state."

### API

jQuery Deferred API:

deferred.always()
deferred.done()
deferred.fail()
deferred.notify()
deferred.notifyWith()
deferred.pipe()
deferred.progress()
deferred.promise()
deferred.reject()
deferred.rejectWith()
deferred.resolve()
deferred.resolveWith()
deferred.state()
deferred.then()

## when.js

- https://github.com/cujojs/when

### API

when.defer()
when.all()
when.any()
when.some()
when.map()
when.reduce()
when.chain()

deferred.promise

## dojo/Deferred

- http://dojotoolkit.org/reference-guide/1.8/dojo/Deferred.html

### Definition

"dojo/Deferred encapsulates a sequence of callbacks in response
to a value that may not yet be available."

"Packages like dojo/request use this class to return a promise that
gets resolved when the asynchronous thread is complete. In order
trigger a callback to occur when the thread is complete, the .then()
method is used. As well as the thread can be informed to cancel itself
by using the .cancel() method. If the thread has completed, then the
.then() callback will be executed immediately."

".then() returns a new promise that is fulfilled when the callback
completes"

### API

deferred.promise
deferred.isResolved()
deferred.isRejected()
deferred.isFulfilled()
deferred.isCanceled()
deferred.progress(update, strict)
deferred.resolve(value, strict)
deferred.reject(error, strict)
deferred.then(callback, errback, progback)
deferred.cancel(reason, strict)

### Usage

"Basic usage is instantiating a dojo/Deferred object, starting the
thread and when it completes calling .resolve() with any results and
returning the object to the consumer."

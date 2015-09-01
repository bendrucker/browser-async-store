# browser-async-store [![Build Status](https://travis-ci.org/bendrucker/browser-async-store.svg?branch=master)](https://travis-ci.org/bendrucker/browser-async-store)

> Wrap Web Storage APIs in an asynchronous API


## Install

```
$ npm install --save browser-async-store
```


## Usage

```js
var createStore = require('browser-async-store')
var store = createStore(window.localStorage)

store.put('foo', 'bar', function (err) {
  if (!err) {
    store.get('foo', console.log.bind(console))
  }
})
//=> logs: bar
```

## API

#### `createStore(storage, options)` -> `store`

Returns a `store` object.

##### storage

A [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) API, e.g. `localStorage` or `sessionStorage`.

##### options

###### parse

Type: `function`  
Default: `JSON.parse`

###### format

Type: `function`  
Default: `JSON.stringify`

---

#### `store.get(key, callback)` -> `undefined`

Get data from the store.

##### key

*Required*  
Type: `string`

##### callback

*Required*  
Type: `function`  
Arguments: `err, value`

#### `store.put(key, value, [callback])` -> `undefined`

Add an item to the store (or overwrite an existing item).

##### key

*Required*  
Type: `string`

##### value

*Required*  
Type: `any`

##### callback

*Required*  
Type: `function`  
Arguments: `err`

#### `store.remove(key, [callback])` -> `undefined`

Remove an item.

##### key

*Required*  
Type: `string`

##### callback

*Required*  
Type: `function`  
Arguments: `err`

#### `store.clear([callback])` -> `undefined`

Clear the store.

##### callback

*Required*  
Type: `function`  
Arguments: `err`


## License

MIT © [Ben Drucker](http://bendrucker.me)

'use strict'

var extend = require('xtend')
var assert = require('assert-ok')
var dezalgo = require('dezalgo')

var defaults = {
  parse: JSON.parse,
  stringify: JSON.stringify
}

module.exports = function createStore (storage, options) {
  assert(storage, 'Web Storage adapter is required')
  options = extend(defaults, options || {})

  return {
    get: function get (key, callback) {
      var value = storage.getItem(key)
      dezalgo(callback)(null, value != null ? options.parse(value) : null)
    },
    put: function put (key, value, callback) {
      storage.setItem(key, options.stringify(value))
      dezalgo(callback || noop)(null)
    },
    remove: function remove (key, callback) {
      storage.removeItem(key)
      dezalgo(callback || noop)(null)
    },
    clear: function clear (callback) {
      storage.clear()
      dezalgo(callback || noop)(null)
    }
  }
}

function noop () {}

# array-into-object

[![Build Status](https://travis-ci.com/namshi/js-array-into-object.svg?branch=master)](https://travis-ci.com/namshi/js-array-into-object)

Converts an array into an object -- where odd values are keys, and even values are
values.

Confused?

``` js
let a2o = require('array-into-object')

a2o([1, 2, 3, 4]) // {1: 2, 3: 4}
```

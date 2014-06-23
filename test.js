'use strict';

var assert = require('assert')
  , arrayZip = require('./lib/array-zip');

it('should merge two arrays together', function () {
  var result = arrayZip([1, 2], ['a', 'b']);

  assert.equal(result[0][0], 1);
  assert.equal(result[0][1], 'a');

  assert.equal(result[1][0], 2);
  assert.equal(result[1][1], 'b');
});

it('should merge two arrays together with undefined values', function () {
	var result = arrayZip([1, 2], ['a', 'b', 'c']);

  assert.equal(result[0][0], 1);
  assert.equal(result[0][1], 'a');

  assert.equal(result[1][0], 2);
  assert.equal(result[1][1], 'b');
	
  assert.equal(result[2][0], undefined);
  assert.equal(result[2][1], 'c');
});
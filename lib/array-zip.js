/*
 * array-zip
 * https://github.com/frozzare/array-pluck
 *
 * Copyright (c) 2014 Fredrik Forsmo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function () {
	var args = Array.prototype.slice.call(arguments, 0);
	return args.reduce(function (a, b) {
		return a.length > b.length ? a : b;
	}, []).map(function (_, i) {
		return args.map(function (arr) {
			return arr[i];
		});
	});
};

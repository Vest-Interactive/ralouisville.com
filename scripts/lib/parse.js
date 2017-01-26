/*
	Parse
 */

import {forEach} from 'lodash';

// str (string), sep (seperator), eq (equals)
function parse(str, sep, eq) {
	if (sep == null) {
		sep = '&';
	}
	if (eq == null) {
		eq = '=';
	}

	var obj = {};

	forEach(String(str).split(sep), function(param) {

		var ref = param.split(eq),
			key = ref[0],
			val = ref[1];

		return obj[key] = val;

	});

	return obj;
}



export default {
	parse: parse
}
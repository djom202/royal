/* global process */

'use strict';

var extend = require('extend');

/**
 * Production Environment
 */
var prod = {};

/**
 * Test Environment
 */
var test = {
	app: {
		service: {
			url: 'https://miaguila-test.herokuapp.com'
		},
		headers: {
                Authorization: 'Bearer ' + localStorage.auth_token,
                Accept: 'application/json'
        }
	}
};

/**
 * Development Environment
 */
var dev = {
	app: {
		service: {
			url: 'http://localhost:3000'
		}
	}
};

var mode = 'test';

switch (mode) {
	case 'prod':
		module.exports = prod;
		break;
		
	case 'test':
		module.exports = extend(true, prod, test);
		break;
	
	case 'dev':
		module.exports = extend(true, prod, test, dev);
		break;
	default:
		console.error("Necesitas un environment valido");
		process.exit(1);
}

console.log("Environment %s", mode);
module.exports.mode = mode;
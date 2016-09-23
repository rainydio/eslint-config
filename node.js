"use strict";

module.exports = {
	env: {
		"node": true,
		"es6": true,
	},
	rules: {
		"strict": ["error", "global"],
		"prefer-rest-params": "off",
		"prefer-spread": "off",
	},
	extends: [
		"./rules/errors",
		"./rules/best-practices",
		"./rules/variables",
		"./rules/node",
		"./rules/style",
		"./rules/es6",
	].map(require.resolve),
};

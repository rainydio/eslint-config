"use strict";

module.exports = {
	parser: "babel-eslint",
	env: {
		"node": true,
		"es6": true,
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 6,
	},
	rules: {
	},
	plugins: [
		"babel",
	],
	extends: [
		"./rules/errors",
		"./rules/best-practices",
		"./rules/variables",
		"./rules/node",
		"./rules/style",
		"./rules/es6",
		"./rules/babel",
	].map(require.resolve),
};

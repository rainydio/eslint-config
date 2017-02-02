"use strict";

module.exports = {
	extends: require.resolve("./standard"),
	parserOptions: {
		ecmaFeatures: {
			sourceType: "module",
			ecmaVersion: 8,
			experimentalObjectRestSpread: true,
		},
	},
	env: {
		"jest": true,
	},
	plugins: [
		"jest",
	],
	rules: {
		"jest/no-exclusive-tests": "warn",
		"jest/no-identical-title": "warn",
	},
};

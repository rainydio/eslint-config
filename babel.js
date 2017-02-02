"use strict";

module.exports = {
	extends: require.resolve("./standard"),
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 8,
		experimentalObjectRestSpread: true,
	},
	plugins: [
		"babel",
	],
	rules: {
		"babel/new-cap": "warn",
		"babel/object-curly-spacing": ["warn", "always", {
			"objectsInObjects": false,
			"arraysInObjects": false,
		}],
		"babel/no-invalid-this": "warn",
		"babel/no-await-in-loop": "off",
	},
};

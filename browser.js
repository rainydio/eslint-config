"use strict";

module.exports = {
	extends: require.resolve("./standard"),
	parserOptions: {
		sourceType: "script",
		ecmaVersion: 5,
	},
	env: {
		browser: true,
	},
	rules: {
		"comma-dangle": ["error", "never"],
	},
};

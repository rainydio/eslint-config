"use strict";

module.exports = {
	extends: require.resolve("./standard"),
	parserOptions: {
		sourceType: "script",
		ecmaVersion: 5,
	},
	rules: {
		"comma-dangle": ["error", "never"],
	},
};

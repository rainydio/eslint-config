"use strict";

module.exports = {
	extends: [
		require.resolve("./standard"),
	],
	parserOptions: {
		sourceType: "script",
	},
	env: {
		browser: true,
	},
	rules: {
		"comma-dangle": ["error", "never"],
	},
};

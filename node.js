"use strict";

module.exports = {
	extends: [
		require.resolve("./standard"),
		require.resolve("./core/es6"),
	],
	parserOptions: {
		ecmaVersion: 8,
	},
	env: {
		es6: true,
		node: true,
	},
	rules: {
		"comma-dangle": ["warn", "always-multiline"],
	},
};

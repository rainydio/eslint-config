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
		node: true,
	},
};

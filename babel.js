"use strict";

module.exports = {
	extends: [
		require.resolve("./standard"),
		require.resolve("./core/es6"),
		require.resolve("./import"),
	],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 8,
		experimentalObjectRestSpread: true,
	},
	plugins: [
		"babel",
	],
	env: {
		es6: true,
	},
	rules: {
		"babel/new-cap": "warn",
		"babel/object-curly-spacing": "off",
		"babel/no-invalid-this": "off",
		"babel/semi": ["warn", "always"],
		"babel/no-await-in-loop": "off",
	},
};

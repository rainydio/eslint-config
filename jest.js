"use strict";

module.exports = {
	extends: [
		require.resolve("./core/es6"),
		require.resolve("./commonjs"),
	],
	env: {
		es6: true,
		jest: true,
	},
	plugins: [
		"jest",
	],
	rules: {
		"jest/no-disabled-tests": "off",
		"jest/no-focused-tests": "off",
		"jest/no-identical-title": "warn",
	},
};

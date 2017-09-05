"use strict";

module.exports = {
	extends: [
		require.resolve("./commonjs"),
		require.resolve("./node"),
	],
	env: {
		jest: true,
	},
	plugins: [
		"jest",
	],
	rules: {
		"jest/no-disabled-tests": "off",
		"jest/no-focused-tests": "off",
		"jest/no-identical-title": "warn",
		"jest/valid-expect": "warn",
	},
};

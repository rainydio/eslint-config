"use strict";

module.exports = {
	extends: [
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

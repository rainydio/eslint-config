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

		"jest/consistent-test-it": "warn",
		"jest/lowercase-name": "warn",
		"jest/no-hooks": "off",
		"jest/no-jasmine-globals": "warn",
		"jest/no-jest-import": "warn",
		"jest/no-large-snapshots": "warn",
		"jest/no-test-prefixes": "error",
		"jest/prefer-expect-assertions": "off",
		"jest/prefer-to-be-null": "warn",
		"jest/prefer-to-be-undefined": "warn",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-describe": "warn",
		"jest/valid-expect-in-promise": "error",

	},
};

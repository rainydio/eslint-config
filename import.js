"use strict";

module.exports = {
	parserOptions: {
		sourceType: "module",
	},
	plugins: [
		"import",
	],
	rules: {
		"import/no-unresolved": "warn",
		"import/named": "warn",
		"import/default": "warn",
		"import/namespace": "warn",
		"import/no-restricted-paths": "off",
		"import/no-absolute-path": "off",
		"import/no-dynamic-require": "off",
		"import/no-internal-modules": "off",
		"import/no-webpack-loader-syntax": "warn",

		"import/export": "warn",
		"import/no-named-as-default": "warn",
		"import/no-named-as-default-member": "warn",
		"import/no-deprecated": "warn",
		"import/no-extraneous-dependencies": "error",
		"import/no-mutable-exports": "warn",

		"import/unambiguous": "off",
		"import/no-commonjs": "warn",
		"import/no-amd": "warn",
		"import/no-nodejs-modules": "off",

		"import/first": "warn",
		"import/no-duplicates": "warn",
		"import/no-namespace": "off",
		"import/extensions": ["warn", "always", { js: "never", "jsx": "never", "mjs": "never" }],
		"import/order": "warn",
		"import/newline-after-import": "warn",
		"import/prefer-default-export": "off",
		"import/max-dependencies": "off",
		"import/no-unassigned-import": "warn",
		"import/no-named-default": "warn",
		"import/no-anonymous-default-export": "off",

		// deprecated
		"import/imports-first": "off",
	},
};

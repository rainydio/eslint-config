"use strict";

module.exports = {
	rules: {
		"arrow-body-style": "off",
		"arrow-parens": "off",
		"arrow-spacing": "warn",
		"constructor-super": "error",
		"generator-star-spacing": ["warn", {
			"before": true,
			"after": true,
		}],
		"no-class-assign": "error",
		"no-confusing-arrow": "off",
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": "warn",
		"no-new-symbol": "error",
		"no-restricted-imports": "off",
		"no-this-before-super": "error",
		"no-useless-computed-key": "warn",
		"no-useless-constructor": "warn",
		"no-useless-rename": "warn",
		"no-var": "warn",
		"object-shorthand": "warn",
		"prefer-arrow-callback": ["warn", {
			"allowNamedFunctions": true,
		}],
		"prefer-const": "warn",
		"prefer-destructuring": "off",
		"prefer-numeric-literals": "warn",
		"prefer-rest-params": "warn",
		"prefer-spread": "warn",
		"prefer-template": "off",
		"require-yield": "off", // breaks async
		"rest-spread-spacing": "warn",
		"sort-imports": "off",
		"symbol-description": "warn",
		"template-curly-spacing": "warn",
		"yield-star-spacing": ["warn", {
			"before": true,
			"after": true,
		}],
	},
};

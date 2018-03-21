"use strict";

module.exports = {
	rules: {
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"class-methods-use-this": "off",
		"complexity": "off",
		"consistent-return": "warn",
		"curly": ["warn", "multi-line", "consistent"],
		"default-case": "off",
		"dot-location": ["warn", "property"],
		"dot-notation": "off",
		"eqeqeq": "warn",
		"guard-for-in": "warn",
		"no-alert": "warn",
		"no-caller": "error",
		"no-case-declarations": "off",
		"no-div-regex": "off",
		"no-else-return": "off",
		"no-empty-function": "warn",
		"no-empty-pattern": "error",
		"no-eq-null": "off",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "warn",
		"no-extra-label": "warn",
		"no-fallthrough": "warn",
		"no-floating-decimal": "warn",
		"no-global-assign": "error",
		"no-implicit-coercion": ["warn", {
			"boolean": true,
			"number": true,
			"string": true,
			"allow": ["!!"],
		}],
		"no-implicit-globals": "warn",
		"no-implied-eval": "warn",
		"no-invalid-this": "warn",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "warn",
		"no-magic-numbers": "off",
		"no-multi-spaces": ["warn", { exceptions: {
			"Property": true,
			"VariableDeclarator": true,
		}}],
		"no-multi-str": "off",
		"no-new-func": "off",
		"no-new-wrappers": "error",
		"no-new": "off",
		"no-octal-escape": "error",
		"no-octal": "error",
		"no-param-reassign": "off",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-restricted-properties": "off",
		"no-return-assign": "error",
		"no-return-await": "off",
		"no-script-url": "warn",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "warn",
		"no-unused-expressions": ["warn", {
			allowShortCircuit: true,
			allowTernary: true,
		}],
		"no-unused-labels": "error",
		"no-useless-call": "warn",
		"no-useless-concat": "warn",
		"no-useless-escape": "warn",
		"no-useless-return": "warn",
		"no-void": "warn",
		"no-warning-comments": "off",
		"no-with": "warn",
		"prefer-promise-reject-errors": "error",
		"radix": ["warn", "as-needed"],
		"require-await": "warn",
		"vars-on-top": "off",
		"wrap-iife": ["warn", "inside"],
		"yoda": "warn",
	},
};

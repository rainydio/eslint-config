"use strict";

module.exports = {
	rules: {
		"init-declarations": "off",
		"no-catch-shadow": "warn",
		"no-delete-var": "warn",
		"no-label-var": "warn",
		"no-restricted-globals": "off",
		"no-shadow": ["warn", {
			"allow": ["err"],
		}],
		"no-shadow-restricted-names": "error",
		"no-undef": "warn",
		"no-undef-init": "warn",
		"no-undefined": "off",
		"no-unused-vars": "warn",
		"no-use-before-define": "warn",
	},
};

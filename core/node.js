"use strict";

module.exports = {
	rules: {
		"callback-return": ["warn", ["callback", "cb", "next", "done"]],
		"global-require": "off",
		"handle-callback-err": "warn",
		"no-mixed-requires": "warn",
		"no-new-require": "warn",
		"no-path-concat": "off",
		"no-process-env": "off",
		"no-process-exit": "off",
		"no-restricted-modules": "off",
		"no-sync": "off",
	},
};

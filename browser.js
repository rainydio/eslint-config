"use strict";

module.exports = {
	env: {
		"es6": false,
		"browser": true,
		"commonjs": true,
		"shared-node-browser": true,
	},
	globals: {
		process: {
			env: false,
		},
	},
	rules: {
		"strict": ["error", "global"],
		"comma-dangle": ["error", "never"],
		"no-var": "off",
	},
	extends: [
		"./rules/errors",
		"./rules/best-practices",
		"./rules/variables",
		"./rules/node",
		"./rules/style",
	].map(require.resolve),
};

"use strict";

module.exports = {
	extends: require.resolve("./standard"),
	env: {
		browser: true,
		commonjs: true,
	},
	globals: {
		process: {
			env: false,
		},
	},
};

"use strict";

module.exports = {
	extends: [
		require.resolve("./browser"),
	],
	env: {
		commonjs: true,
	},
	globals: {
		process: {
			env: false,
		},
	},
};

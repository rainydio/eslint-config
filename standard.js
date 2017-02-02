"use strict";

module.exports = {
	extends: [
		"./core/best-practices",
		"./core/errors",
		"./core/es6",
		"./core/node",
		"./core/style",
		"./core/variables",
	].map(require.resolve),
	rules: {
		"strict": ["error", "global"],
	},
};

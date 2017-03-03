"use strict";

module.exports = {
	extends: [
		"./core/best-practices",
		"./core/errors",
		"./core/node",
		"./core/style",
		"./core/variables",
	].map(require.resolve),
	rules: {
		"strict": ["error", "global"],
	},
};

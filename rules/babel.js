"use strict";

module.exports = {
	rules: {
		"generator-star-spacing": "off",
		"new-cap": "off",
		"array-bracket-spacing": "off",
		"object-curly-spacing": "off",
		"object-shorthand": "off",
		"arrow-parens": "off",
		"no-await-in-loop": "off",

		"babel/generator-star-spacing": ["warn", {
			"before": true,
			"after": true,
		}],
		"babel/new-cap": "warn",
		"babel/array-bracket-spacing": ["warn", "never"],
		"babel/object-curly-spacing": ["warn", "always", {
			"objectsInObjects": false,
			"arraysInObjects": false,
		}],
		"babel/object-shorthand": "warn",
		"babel/arrow-parens": "off",
		"babel/no-await-in-loop": "off",
		"babel/flow-object-type": ["warn", "comma"],
		"babel/func-params-comma-dangle": "off",
	},
};

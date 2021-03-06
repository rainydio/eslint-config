"use strict";

const extensions = [
	"./babel",
	"./browser",
	"./commonjs",
	"./jest",
	"./node",
	"./react",
	"./standard",
	"./import",
].map(require.resolve);

module.exports = {
	extends: [
		...extensions,
	],
	// deprecated
	rules: {
		"no-native-reassign": "off",
		"no-negated-in-lhs": "off",
		"no-spaced-func": "off",
		"prefer-reflect": "off",

		"react/no-comment-textnodes": "off",
		"react/require-extension": "off",
		"react/wrap-multilines": "off",

		"babel/array-bracket-spacing": "off",
		"babel/arrow-parens": "off",
		"babel/flow-object-type": "off",
		"babel/func-params-comma-dangle": "off",
		"babel/generator-star-spacing": "off",
		"babel/object-shorthand": "off",
	},
};

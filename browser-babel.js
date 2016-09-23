"use strict";

const extensions = [
	"./rules/errors",
	"./rules/best-practices",
	"./rules/variables",
	"./rules/node",
	"./rules/style",
	"./rules/es6",
	"./rules/babel",
].map(require.resolve);

module.exports = {
	parser: "babel-eslint",
	env: {
		"node": false,
		"browser": true,
		"commonjs": true,
		"shared-node-browser": true,
		"es6": true,
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 6,
	},
	plugins: [
		"babel",
		"react",
	],
	extends: [
		...extensions,
		"plugin:react/recommended",
	],
	rules: {
		"react/display-name": "off",
		"react/prop-types": "off",
	},
};

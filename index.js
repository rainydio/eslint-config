"use strict";

const pkgUp = require("pkg-up");

const config = {
	extends: [
		require.resolve("./standard"),
	],
};

const pkg = require(pkgUp.sync());
const hasDep = dep => !!(
	(pkg.dependencies && dep in pkg.dependencies) ||
	(pkg.devDependencies && dep in pkg.devDependencies)
);

if (hasDep("browserify") || hasDep("webpack")) {
	config.extends.push(require.resolve("./commonjs"));
}
else {
	config.extends.push(require.resolve("./node"));
}

if (hasDep("babel")) {
	config.extends.push(require.resolve("./babel"));

	if (hasDep("babel-eslint")) {
		config.parser = "babel-eslint";
	}
	if (hasDep("react")) {
		config.extends.push(require.resolve("./react"));
	}
}

if (hasDep("jest")) {
	config.extends.push(require.resolve("./jest"));
}

module.exports = config;

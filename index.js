"use strict";

const pkgUp = require("pkg-up");

const config = {
	extends: [
		require.resolve("./standard"),
	],
	parserOptions: {
	},
};

const pkg = require(pkgUp.sync());
const hasDep = dep => !!(
	(pkg.dependencies && dep in pkg.dependencies) ||
	(pkg.devDependencies && dep in pkg.devDependencies)
);
let es6 = !!(
	pkg.eslintConfig &&
	pkg.eslintConfig.env &&
	pkg.eslintConfig.env.es6
);

if (hasDep("browserify") || hasDep("webpack")) {
	config.extends.push(require.resolve("./commonjs"));
}
else {
	es6 = true;
	config.extends.push(require.resolve("./node"));
}

if (hasDep("rollup")) {
	config.parserOptions.sourceType = "module";
}

if (hasDep("babel") || hasDep("babel-cli")) {
	es6 = true;
	config.extends.push(require.resolve("./babel"));

	if (hasDep("babel-eslint")) {
		config.parser = "babel-eslint";
	}
	if (hasDep("react")) {
		config.extends.push(require.resolve("./react"));
	}
}

if (hasDep("jest") && es6) {
	config.extends.push(require.resolve("./jest"));
}

module.exports = config;

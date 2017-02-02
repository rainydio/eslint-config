"use strict";

const pkgConf = require("pkg-conf");

const config = {
	extends: [
		require.resolve("./standard"),
	],
};

const eslintConfig = pkgConf.sync("eslintConfig") || { };
const env = eslintConfig.env || { };
const plugins = eslintConfig.plugins || [];

if (env.browser && plugins.indexOf("babel") === -1) {
	config.extends.push(require.resolve("./browser")); // native JS
}
if (env.commonjs) {
	config.extends.push(require.resolve("./commonjs")); // browserify
}
if (plugins.indexOf("babel") !== -1) {
	config.extends.push(require.resolve("./babel"));
}
if (plugins.indexOf("react") !== -1) {
	config.extends.push(require.resolve("./react"));
}
if (plugins.indexOf("jest") !== -1) {
	config.extends.push(require.resolve("./jest"));
}

module.exports = config;

#!/usr/bin/env node
var path = require("path");
var pkg = require("./package.json");

require("standard-engine").cli({
	cmd: "cooger-style",
	version: pkg.version,
	tagline: "darkcooger style",
	eslintConfig: {
		configFile: path.join(__dirname, "eslintrc.json")
	}
});

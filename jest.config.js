// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
	// Automatically clear mock calls and instances between every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	// collectCoverage: false,

	// An array of glob patterns indicating a set of files for which coverage information should be collected
	collectCoverageFrom: [
		'src/**/*.{js,jsx}',
	],
	// The directory where Jest should output its coverage files
	coverageDirectory: '.coverage',

	// An array of regexp pattern strings used to skip coverage collection
	coveragePathIgnorePatterns: [
		'/node_modules/',
	],
	coverageReporters: [
		'text-summary',
		'lcov',
	],
	roots: [
		'./',
	],
	testEnvironment: 'node',
	testMatch: [
		'/**/*.spec.js',
	],
};

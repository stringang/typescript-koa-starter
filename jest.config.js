// https://kulshekhar.github.io/ts-jest/user/config/
// https://jestjs.io/docs/en/configuration.html
const { jsWithBabel } = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
	globals: {
		'ts-jest': {
      tsConfig: 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js'
	},
	testMatch: [
		'**/test/**/*.test.(ts|js)'
	],
	testEnvironment: 'node'
};

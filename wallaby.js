module.exports = function () {

  return {
    files: [
      'tsconfig.json',
      'src/**/*.ts',
      '!test/**/*.ts'
    ],

    tests: [
      '/test/**/*.ts',
      '!test/e2e/**/*.ts',
      '!test/coverage-jest/**/*.ts',
    ],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};

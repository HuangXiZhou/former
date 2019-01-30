module.exports = {
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  "moduleNameMapper": {
    "\\.(css)$": "<rootDir>/__test__/__mocks__/style.js"
  }
};

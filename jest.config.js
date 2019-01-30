module.exports = {
  coverageReporters: [ 'json', 'lcov', 'text-summary', 'clover' ],
  moduleFileExtensions: [ 'js', 'json', 'vue' ],
  transform: { '^.+\\.js$': 'babel-jest' },
  moduleNameMapper: { '\\.(css)$': '<rootDir>/__test__/__mocks__/style.js' },
  snapshotSerializers: [
    '<rootDir>/node_modules/jest-serializer-vue'
  ]
};

module.exports = {
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: -10
        }
    },
    coverageReporters: [ "lcov"],
    coverageDirectory: 'reports',
    moduleNameMapper: {
        '\\.scss$':  '<rootDir>/jest.styles.mock.js'
    }
}
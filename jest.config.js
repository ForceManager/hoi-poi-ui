module.exports = {
    setupFilesAfterEnv: ['react-app-polyfill/jsdom', '<rootDir>/config/jest/setupTests.js'],
    testMatch: ['**/**.spec.jsx'],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
        '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        '^utils(.*)$': '<rootDir>/src/utils$1',
        '^components(.*)$': '<rootDir>/src/components$1',
    },
};

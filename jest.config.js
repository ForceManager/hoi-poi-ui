module.exports = {
    setupFilesAfterEnv: ['react-app-polyfill/jsdom', '<rootDir>/jest/setupTests.js'],
    testMatch: ['**/**.spec.jsx'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        url: 'http://localhost',
    },
    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/jest/fileTransform.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};

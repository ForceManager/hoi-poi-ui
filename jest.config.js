module.exports = {
    setupFilesAfterEnv: ['react-app-polyfill/jsdom', '<rootDir>/jest/setupTests.js'],
    setupFiles: ['<rootDir>/jest/testEncoder.js'],
    testMatch: ['**/**.spec.jsx'],
    testEnvironment: 'jest-environment-jsdom',
    testEnvironmentOptions: {
        url: 'http://localhost',
    },
    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/jest/fileTransform.js',
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['js', 'json', 'jsx'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    moduleNameMapper: {
        'react-markdown': '<rootDir>/node_modules/react-markdown/react-markdown.min.js',
    },
};

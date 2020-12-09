export default {
  rootDir: '.',
  preset: 'ts-jest',
  testMatch: ['<rootDir>/test/**/*test.ts'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};

import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './'
});
const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      lines: 100,
      statements: 100
    }
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  roots: ['<rootDir>/tests'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['//node_modules'],
  verbose: true
};
export default createJestConfig(customJestConfig);

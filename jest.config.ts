import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './'
});
const customJestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ['./src/**'],
  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>/tests'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transformIgnorePatterns: ['//node_modules'],
  verbose: true
};

// ts-prune-ignore-next
export default createJestConfig(customJestConfig);

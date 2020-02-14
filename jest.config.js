module.exports = {
  preset: 'ts-jest',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/__tests__/.*\\.test.(ts|tsx)$',
  moduleFilExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx']
};

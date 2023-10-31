import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app/doubles';   // To change configuration of test coverage location ** not fixed **
const baseTestDir = '<rootDir>/src/test/doubles';  // To change configuration of test location ** not fixed  **

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
    ],
    testMatch: [
        `${baseTestDir}/**/*.ts`
    ]
}

export default config;
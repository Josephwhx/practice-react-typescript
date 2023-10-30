import type { Config } from '@jest/types'

const baseDir = '<rootDir>/src/app/pass_checker';   // To change configuration of test coverage location
const baseTestDir = '<rootDir>/src/test/pass_checker';  // To change configuration of test location

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
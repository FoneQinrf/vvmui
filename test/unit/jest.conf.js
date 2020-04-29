/*
 * @Author: Fone丶峰
 * @Date: 2019-08-09 10:31:35
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 16:49:07
 * @Description: 
 * @Email: qinrifeng@163.com
 */
const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/packages/$1',
    '^~/(.*)$': '<rootDir>/src/$1',
    '^#/(.*)$': '<rootDir>/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'packages/components/**/*.{js,vue}',
    '!build/**.{js,png}',
    '!src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ],
  testURL: 'http://localhost/'
}

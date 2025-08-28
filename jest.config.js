const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  coverageProvider: 'v8',
  collectCoverage: false,
  testEnvironment: "node",
  coverageDirectory: "coverage",
  transform: {
    ...tsJestTransformCfg,
  },
};
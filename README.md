# spfx-unit-testing-pnpjs

## Summary

SPFx sample setup for unit tests with jest

## Used SharePoint Framework Version

![version](https://img.shields.io/badge/version-1.11-green.svg)

## Disclaimer

THIS CODE IS PROVIDED *AS IS* WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.

---

## Installation

- Clone this repository
- Ensure that you are at the solution folder
- in the command-line run:
  - **npm install**
  - **npm test**

## Features

Fixed some issues with previous solutions (see reference below) and updates the versions. The solution uses babel with plugins to overcome issues with `import`, `export`, and `define` that are coming from some @pnp libraries.

### What is fixed here

- does not blow up on PNPJS: `import { sp } from @pnp/sp`
(thatnks to babel and transform-es2015-modules-commonjs)
- does not break on AMD "define" in string resources, i.e. on `import * as strings from 'HelloWorldWebPartStrings'`
(thatnks to babel and transform-amd-to-commonjs)
- some controls from @pnp/spfx-controls-react are working (checked with Placeholder)

### Updated versions

- SPFx 1.11.0 (latest at the moment of writing),
- React 16.8
- Typescript 3.9
- can test both services and components (jest 26 + enzyme)

To run the unit test:
```
npm install
npm test
```
The modifications to the original projects are mostly in the latest commit:
https://github.com/nbelyh/spfx-unit-testing-pnpjs/commit/b32e2e2a894f5433dbd0030c236b8f23edfd86ef

Had to add somehow window.DEBUG = true, looks like there is some issue with PnPTelemetry that is looking for "DEBUG" instead of window.DEBUG, so had to add that as jest startup

## References

- https://github.com/pnp/pnpjs/issues/1425
- https://blog.velingeorgiev.com/unit-test-your-sharepoint-framework-solution-with-jest
- https://www.c-sharpcorner.com/article/spfx-unit-test-with-jest-and-enzyme/
- https://www.eliostruyf.com/sharepoint-framework-unit-tests-with-jest/

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.5.1](https://github.com/runtime-env/import-meta-env/compare/babel0.5.0...babel0.5.1) (2025-03-08)


### Bug Fixes

* **deps:** pin dependencies ([#1788](https://github.com/runtime-env/import-meta-env/issues/1788)) ([6f42d9e](https://github.com/runtime-env/import-meta-env/commit/6f42d9e97ff8c04940b1c0df285e0704b2719517))
* **deps:** update babel monorepo ([#1800](https://github.com/runtime-env/import-meta-env/issues/1800)) ([e88d6bb](https://github.com/runtime-env/import-meta-env/commit/e88d6bb192a1c4b1b673714711d752392efc6dd4))
* **deps:** update babel monorepo to v7.26.9 ([#1845](https://github.com/runtime-env/import-meta-env/issues/1845)) ([f92735e](https://github.com/runtime-env/import-meta-env/commit/f92735e9112725783e464b033b73945d513848cb))

## [0.5.0](https://github.com/runtime-env/import-meta-env/compare/babel0.4.5...babel0.5.0) (2024-09-01)


### ⚠ BREAKING CHANGES

* dotenv is a dependency instead of a peer dependency

### Features

* support single executable applications ([#1424](https://github.com/runtime-env/import-meta-env/issues/1424)) ([31724fd](https://github.com/runtime-env/import-meta-env/commit/31724fd7c3ef83ea7e4410e08e5df1650766f8d2)), closes [#1421](https://github.com/runtime-env/import-meta-env/issues/1421)

### [0.4.5](https://github.com/runtime-env/import-meta-env/compare/babel0.4.4...babel0.4.5) (2023-12-06)


### Bug Fixes

* Update repository links ([#1190](https://github.com/runtime-env/import-meta-env/issues/1190)) ([32c762c](https://github.com/runtime-env/import-meta-env/commit/32c762c4e64be00bba3d673716e3aeb09e39cd7f))

### [0.4.4](https://github.com/runtime-env/import-meta-env/compare/babel0.4.3...babel0.4.4) (2023-07-26)

### [0.4.3](https://github.com/runtime-env/import-meta-env/compare/babel0.4.2...babel0.4.3) (2023-04-05)

### [0.4.2](https://github.com/runtime-env/import-meta-env/compare/babel0.4.1...babel0.4.2) (2023-01-27)


### Bug Fixes

* cannot install newer version ([2f2cb3c](https://github.com/runtime-env/import-meta-env/commit/2f2cb3cb9f450b322d31bfeec4fa2b44826ba693))

### [0.4.1](https://github.com/runtime-env/import-meta-env/compare/babel0.4.0...babel0.4.1) (2022-12-11)


### Bug Fixes

* should not load .env when env option is empty string ([7446f5f](https://github.com/runtime-env/import-meta-env/commit/7446f5f9adfc68e9c88191dfd9b0b7ab6f37fd4c))

## [0.4.0](https://github.com/runtime-env/import-meta-env/compare/babel0.3.0...babel0.4.0) (2022-11-27)

## [0.3.0](https://github.com/runtime-env/import-meta-env/compare/babel0.2.3...babel0.3.0) (2022-11-06)


### ⚠ BREAKING CHANGES

* you have to manually add a script tag to index.html
* drop support for nuxt and qwik for now
* remove shouldInlineEnv option, use transformMode option instead
* no longer support non-static property accessing

### Features

* add transformMode option ([954ab74](https://github.com/runtime-env/import-meta-env/commit/954ab746a04d0ff505be7d4daef8c7986c824b09))
* drop support for entire object and computed-property accessing ([4e4fd9a](https://github.com/runtime-env/import-meta-env/commit/4e4fd9aa54710eafbb79e79aa340ea53e0e864a7))


### Bug Fixes

* generate correct source-maps ([4c1d81d](https://github.com/runtime-env/import-meta-env/commit/4c1d81dc929f104546671fb91e55c26f2fd4061a))

### [0.2.3](https://github.com/runtime-env/import-meta-env/compare/babel0.2.2...babel0.2.3) (2022-10-22)


### Bug Fixes

* should ignore non-import.meta properties ([d692356](https://github.com/runtime-env/import-meta-env/commit/d6923562ab6442f6a20fa47eb9b2e4868acd1251))

### [0.2.2](https://github.com/runtime-env/import-meta-env/compare/babel0.2.1...babel0.2.2) (2022-10-22)


### Bug Fixes

* should ignore non-env properties ([914603c](https://github.com/runtime-env/import-meta-env/commit/914603cbb1480b7614964b02e477725c7878b88b))

### [0.2.1](https://github.com/runtime-env/import-meta-env/compare/babel0.2.0...babel0.2.1) (2022-10-16)


### Bug Fixes

* eval may being blocked by CSP ([8778ceb](https://github.com/runtime-env/import-meta-env/commit/8778ceb356c9696177a295c4347d3c5fc6f7f723))

## [0.2.0](https://github.com/runtime-env/import-meta-env/compare/babel0.1.10...babel0.2.0) (2022-10-13)


### Bug Fixes

* literal string (placeholder) may be removed by minifier ([10c567c](https://github.com/runtime-env/import-meta-env/commit/10c567c288dfee2da866910cf895fb1c00fa338d))

### [0.1.10](https://github.com/runtime-env/import-meta-env/compare/babel0.1.9...babel0.1.10) (2022-10-10)


### ⚠ BREAKING CHANGES

* no longer support node 12

### Features

* no longer support node 12 ([9086406](https://github.com/runtime-env/import-meta-env/commit/908640683e0dff593816c75903da51f971943863))

### [0.1.9](https://github.com/runtime-env/import-meta-env/compare/babel0.1.8...babel0.1.9) (2022-03-25)


### Bug Fixes

* add peer deps ([30012fe](https://github.com/runtime-env/import-meta-env/commit/30012fe3db552c1a246423e04485c4be04e618b9))

### [0.1.8](https://github.com/runtime-env/import-meta-env/compare/babel0.1.7...babel0.1.8) (2022-03-22)


### Bug Fixes

* we couldn't transform Vite specific environment variables in babel context ([418b3e1](https://github.com/runtime-env/import-meta-env/commit/418b3e13567fb1deb74d78f1aa4ed74c53a86fb9))

### [0.1.7](https://github.com/runtime-env/import-meta-env/compare/babel0.1.6...babel0.1.7) (2022-03-22)


### Bug Fixes

* dotenv@11 drop support node@10 ([9406384](https://github.com/runtime-env/import-meta-env/commit/940638468ce164a214a74dbd11035c1cf4898759))

### [0.1.6](https://github.com/runtime-env/import-meta-env/compare/babel0.1.5...babel0.1.6) (2022-03-10)


### Features

* support dotenv@8, 9, 10 too ([f7af582](https://github.com/runtime-env/import-meta-env/commit/f7af5828a716c3348a8373e50b0e20c9c42c86c3))

### [0.1.5](https://github.com/runtime-env/import-meta-env/compare/babel0.1.4...babel0.1.5) (2022-03-08)


### Features

* **babel:** support @vue/cli@4 ([9e8b014](https://github.com/runtime-env/import-meta-env/commit/9e8b0147fc3ffe2fa25e38d239ee748b576636cc))

### [0.1.4](https://github.com/runtime-env/import-meta-env/compare/babel0.1.3...babel0.1.4) (2022-03-04)


### Bug Fixes

* babel plugin should also support env, example options ([9960aae](https://github.com/runtime-env/import-meta-env/commit/9960aae34edf5d0d02e56fb286f790b0289a9cbb))
* it should only inject vite specific environment variables when using vite ([52f0fb6](https://github.com/runtime-env/import-meta-env/commit/52f0fb6800c751afcedd7e9270ad1aa9bac6b9e1))

### [0.1.3](https://github.com/runtime-env/import-meta-env/compare/babel0.1.2...babel0.1.3) (2022-02-28)


### Features

* separate packages ([e030beb](https://github.com/runtime-env/import-meta-env/commit/e030beba3217f6d85f82f9a4ad724516fbcb1160))

### [0.1.2](https://github.com/runtime-env/import-meta-env/compare/babel0.1.1...babel0.1.2) (2022-02-26)

### 0.1.1 (2022-02-26)


### Features

* dynamic key is supported ([1641575](https://github.com/runtime-env/import-meta-env/commit/164157536418cbe737048a5166e7f91baffbbcc4))
* implement babel plugin ([ecc4767](https://github.com/runtime-env/import-meta-env/commit/ecc47677b9a8772b01e687ebc91deeae1eaa3a77))

# Changelog

## [0.10.0](https://github.com/hbstack/hb/compare/v0.9.2...v0.10.0) (2024-02-02)


### Features ✨

* override the _funcs/get-page-images partial to return the name of image and allow using site image resources ([#164](https://github.com/hbstack/hb/issues/164)) ([e5dc9cf](https://github.com/hbstack/hb/commit/e5dc9cf896b0b3880a39ef2aa5fa90371355311c))

## [0.9.2](https://github.com/hbstack/hb/compare/v0.9.1...v0.9.2) (2024-01-25)


### Continuous Integration

* add the hb/assets/css-resource partial ([#160](https://github.com/hbstack/hb/issues/160)) ([eed7546](https://github.com/hbstack/hb/commit/eed75468180c72df0906758808206944a51b432b))

## [0.9.1](https://github.com/hbstack/hb/compare/v0.9.0...v0.9.1) (2024-01-24)


### Bug Fixes

* avoid runtime error ([#159](https://github.com/hbstack/hb/issues/159)) ([f818087](https://github.com/hbstack/hb/commit/f818087bb63416cc45eb7da856cc49b82e2c4cc8))
* **deps:** update dependency stylelint-scss to v6.1.0 ([8397f01](https://github.com/hbstack/hb/commit/8397f010a5fa0475f7bf31f895b93744f2286224))

## [0.9.0](https://github.com/hbstack/hb/compare/v0.8.1...v0.9.0) (2024-01-15)


### Features

* add the hb.color parameter for setting default color mode, default to light ([#150](https://github.com/hbstack/hb/issues/150)) ([341239c](https://github.com/hbstack/hb/commit/341239c1a8798b544393762117ad819a49746701))

## [0.8.1](https://github.com/hbstack/hb/compare/v0.8.0...v0.8.1) (2023-12-24)


### Bug Fixes

* allow specifying default full width for specified page types ([#138](https://github.com/hbstack/hb/issues/138)) ([0fcc5bc](https://github.com/hbstack/hb/commit/0fcc5bc339486d29509d0146b59083fca0826135))

## [0.8.0](https://github.com/hbstack/hb/compare/v0.7.2...v0.8.0) (2023-12-22)


### Features

* add the hb.full_width parameter and page's full_width parameter ([#137](https://github.com/hbstack/hb/issues/137)) ([7c4cc7c](https://github.com/hbstack/hb/commit/7c4cc7cf5b6e33c66c82dabab9e235de4aa815b7))


### Bug Fixes

* **deps:** update dependency stylelint-scss to v5.3.1 ([86dc36d](https://github.com/hbstack/hb/commit/86dc36dacd527d9587f137b78a90e363b5d5a75b))
* **deps:** update dependency stylelint-scss to v6 ([04b8249](https://github.com/hbstack/hb/commit/04b824938cc48b2c73faaad0186ae4963c84e88b))

## [0.7.2](https://github.com/hbstack/hb/compare/v0.7.1...v0.7.2) (2023-11-01)


### Bug Fixes

* **deps:** update dependency stylelint-scss to v5.2.0 ([b0a651b](https://github.com/hbstack/hb/commit/b0a651b1f6e37013bd226f512f0008ef3e09b04d))
* **deps:** update dependency stylelint-scss to v5.2.1 ([6641368](https://github.com/hbstack/hb/commit/6641368ba69acf8edb6f922529ef1115b6e6b73a))
* **deps:** update dependency stylelint-scss to v5.3.0 ([c397431](https://github.com/hbstack/hb/commit/c39743112412d7622c9a0e2a2d3e7450beb1411c))
* **purgecss:** try to find the configuration file in subdirectories ([#108](https://github.com/hbstack/hb/issues/108)) ([1d7ddd3](https://github.com/hbstack/hb/commit/1d7ddd30f31240f6ab55b5fd6d8e2d08cacc194b)), closes [#106](https://github.com/hbstack/hb/issues/106)
* **purgecss:** use process.env.HUGO_PUBLISHDIR instead of hard-coded public folder ([#107](https://github.com/hbstack/hb/issues/107)) ([c599450](https://github.com/hbstack/hb/commit/c599450f3fb9cd826d57eb1e4ad2c336168dc298)), closes [#105](https://github.com/hbstack/hb/issues/105)

## [0.7.1](https://github.com/hbstack/hb/compare/v0.7.0...v0.7.1) (2023-08-29)


### Bug Fixes

* allow overriding Sass vars from modules ([0bfc09e](https://github.com/hbstack/hb/commit/0bfc09e43806867b58a83505fdfd85c9067aa94e))

## [0.7.0](https://github.com/hbstack/hb/compare/v0.6.0...v0.7.0) (2023-08-25)


### Features

* add the hb.styles.hb_top_offset parameter ([#68](https://github.com/hbstack/hb/issues/68)) ([eb242d3](https://github.com/hbstack/hb/commit/eb242d30e4b0a978df9c4e27fd3e28f7d80e086a))

## [0.6.0](https://github.com/hbstack/hb/compare/v0.5.2...v0.6.0) (2023-08-25)


### Features

* add the hb.styles parameter for defining Sass variables ([#66](https://github.com/hbstack/hb/issues/66)) ([a0b6dad](https://github.com/hbstack/hb/commit/a0b6dad482bec2afcde0570d6ca22c5e837f28aa))
* add the top offset mixin and CSS variable ([#67](https://github.com/hbstack/hb/issues/67)) ([45337f1](https://github.com/hbstack/hb/commit/45337f1d54c4627df4bfd90a6d1262602aeb323d))


### Bug Fixes

* **deps:** update dependency stylelint-scss to v5.1.0 ([486c8a7](https://github.com/hbstack/hb/commit/486c8a7b4352d1d7422b068d4a79a208fed033e5))

## [0.5.2](https://github.com/hbstack/hb/compare/v0.5.1...v0.5.2) (2023-08-08)


### Bug Fixes

* correct the css partial in the case of rendering alias pages ([d137e8b](https://github.com/hbstack/hb/commit/d137e8b73944f495570cf7189a0e3d2033dbf322))
* **deps:** update dependency stylelint-scss to v5.0.1 ([c0c576e](https://github.com/hbstack/hb/commit/c0c576e43ad44955fcd6898a97b7bd81e611cc58))

## [0.5.1](https://github.com/hbstack/hb/compare/v0.5.0...v0.5.1) (2023-05-30)


### Bug Fixes

* **deps:** update dependency stylelint-scss to v5 ([6ec9fa1](https://github.com/hbstack/hb/commit/6ec9fa181329df64d7b3f5bfc6b6ffd4277824b7))

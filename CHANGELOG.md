# Changelog

## [0.15.3](https://github.com/hbstack/hb/compare/v0.15.2...v0.15.3) (2024-09-10)


### Bug Fixes 🐞

* allow specifying id attribute for blockquotes ([#247](https://github.com/hbstack/hb/issues/247)) ([29fd6b1](https://github.com/hbstack/hb/commit/29fd6b148c60bf8ba9cab2f1018aaab7af2be6c3))

## [0.15.2](https://github.com/hbstack/hb/compare/v0.15.1...v0.15.2) (2024-09-10)


### Bug Fixes 🐞

* allow specifying extra class name for blockquotes and tables ([#245](https://github.com/hbstack/hb/issues/245)) ([b1e818d](https://github.com/hbstack/hb/commit/b1e818d46fd8ed2ad621fb6acf45ab6c1b784378))

## [0.15.1](https://github.com/hbstack/hb/compare/v0.15.0...v0.15.1) (2024-09-05)


### Bug Fixes 🐞

* **tables:** rename _header attribute to _thead for consistent naming convention ([c866a92](https://github.com/hbstack/hb/commit/c866a92d127a3fa98c722f7b742a9cc2a018246f))

## [0.15.0](https://github.com/hbstack/hb/compare/v0.14.0...v0.15.0) (2024-09-05)


### Features ✨

* **tables:** add the _header attribute for tables, hide the header if `false` ([#238](https://github.com/hbstack/hb/issues/238)) ([eb56400](https://github.com/hbstack/hb/commit/eb56400a29c8e56120f5b60ee13ad09ec23931dc))

## [0.14.0](https://github.com/hbstack/hb/compare/v0.13.0...v0.14.0) (2024-09-05)


### Features ✨

* add blockquote render hook ([5e67dcb](https://github.com/hbstack/hb/commit/5e67dcb7ff846ea04679cf737caeb8e14edc04cd))
* add blockquotes parameters ([#237](https://github.com/hbstack/hb/issues/237)) ([5e67dcb](https://github.com/hbstack/hb/commit/5e67dcb7ff846ea04679cf737caeb8e14edc04cd))
* add hb.tables parameters ([#236](https://github.com/hbstack/hb/issues/236)) ([a391f95](https://github.com/hbstack/hb/commit/a391f952329239389937ac02a3f25cb36cfc8e5a))
* add table render hook ([a391f95](https://github.com/hbstack/hb/commit/a391f952329239389937ac02a3f25cb36cfc8e5a))


### Bug Fixes 🐞

* clean up unused Sass variables ([6823fbb](https://github.com/hbstack/hb/commit/6823fbbbcec92f0879f05b54e02a7d566f3f2280))
* **deps:** update dependency stylelint-scss to v6.5.1 ([dcb1f81](https://github.com/hbstack/hb/commit/dcb1f81ac1adbf6a2aaa0a3fca19945c646469c6))

## [0.13.0](https://github.com/hbstack/hb/compare/v0.12.4...v0.13.0) (2024-08-22)


### Features ✨

* add the hb.sass_transpiler parameter, default to dartsass ([#228](https://github.com/hbstack/hb/issues/228)) ([166c5ed](https://github.com/hbstack/hb/commit/166c5edc62039b4163a6ebc3edbb1e715b8b1e41)), closes [#227](https://github.com/hbstack/hb/issues/227)

## [0.12.4](https://github.com/hbstack/hb/compare/v0.12.3...v0.12.4) (2024-08-20)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v6.4.1 ([d54162a](https://github.com/hbstack/hb/commit/d54162acdbeef8fa9130fe56e0b6ede267f6f765))
* **deps:** update dependency stylelint-scss to v6.5.0 ([7c52645](https://github.com/hbstack/hb/commit/7c526453e140bf689d21ed6f62fcc71eb839ab85))
* replace resources.PostCSS with css.PostCSS ([#226](https://github.com/hbstack/hb/issues/226)) ([bba72dc](https://github.com/hbstack/hb/commit/bba72dccedcaee8fa7fd6c06b8da31043e1f42ab))

## [0.12.3](https://github.com/hbstack/hb/compare/v0.12.2...v0.12.3) (2024-06-16)


### Performance Improvements ⚡️

* cache head-begin hook ([c644fbc](https://github.com/hbstack/hb/commit/c644fbca4e9ff9acb92f9a2c10ac95704ba54e76))

## [0.12.2](https://github.com/hbstack/hb/compare/v0.12.1...v0.12.2) (2024-03-12)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v6.2.1 ([c56fc57](https://github.com/hbstack/hb/commit/c56fc57793c78d314229a0f945783954c9ccad2b))
* hb/assets/css-resource returns false sometime on local development ([#192](https://github.com/hbstack/hb/issues/192)) ([32dd685](https://github.com/hbstack/hb/commit/32dd685874399935c2fc5762883df3ef569f8a0e))

## [0.12.1](https://github.com/hbstack/hb/compare/v0.12.0...v0.12.1) (2024-03-04)


### Bug Fixes 🐞

* **deps:** update dependency stylelint-scss to v6.2.0 ([90e7557](https://github.com/hbstack/hb/commit/90e75576a7c516fcf6fdbf562839fc9d23be394b))
* move data-layout and data-section attributes from .hb-main to &lt;body&gt; element ([#184](https://github.com/hbstack/hb/issues/184)) ([f5a2ba5](https://github.com/hbstack/hb/commit/f5a2ba5f04c7b82d63ef986768340b64c2fa805b))

## [0.12.0](https://github.com/hbstack/hb/compare/v0.11.2...v0.12.0) (2024-02-27)


### Features ✨

* add the data-layout and data-section attributes for hb-main element for styling purpose ([#180](https://github.com/hbstack/hb/issues/180)) ([6c8b086](https://github.com/hbstack/hb/commit/6c8b0864482ad5e993163d739a67da4f8a08afc2))

## [0.11.2](https://github.com/hbstack/hb/compare/v0.11.1...v0.11.2) (2024-02-23)


### Bug Fixes 🐞

* rename purgecss.config.js to assets/hb/purgecss.config.js, to be vendorable ([#176](https://github.com/hbstack/hb/issues/176)) ([ba62ad2](https://github.com/hbstack/hb/commit/ba62ad2da403e665aad27872138d9112d9b028d4))

## [0.11.1](https://github.com/hbstack/hb/compare/v0.11.0...v0.11.1) (2024-02-21)


### Bug Fixes 🐞

* remove the leading slash from module SCSS path ([#173](https://github.com/hbstack/hb/issues/173)) ([5c58d40](https://github.com/hbstack/hb/commit/5c58d40a8b69f711b20fc8ffa30e11ac28af4f4e))

## [0.11.0](https://github.com/hbstack/hb/compare/v0.10.0...v0.11.0) (2024-02-03)


### Features ✨

* add the module-exists function ([#166](https://github.com/hbstack/hb/issues/166)) ([07c929b](https://github.com/hbstack/hb/commit/07c929b1db6fab0b37737bcbfb9c1dabbe21342b))

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

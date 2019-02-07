<div align="center">

  <div style="text-align:center;">
    <img height="140" width="350" src="./docs/.vuepress/public/logo.png" alt="Former">
  </div>

  <p>👻 Amazing form adapter, write less, do much.</p>
</div>

<hr />

[![Build Status][build-badge]][build]
[![codecov][codecov-badge]][codecov]
[![version][version-badge]][package]
[![size][size-badge]][package]
[![downloads][downloads-badge]][package]
[![PRs Welcome][prs-badge]][prs]

## Feature

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/391ca5a952364a32b0bf3ce08b097d09)](https://app.codacy.com/app/HuangXiZhou/former?utm_source=github.com&utm_medium=referral&utm_content=HuangXiZhou/former&utm_campaign=Badge_Grade_Dashboard)

Former provides an adapter for the mainstream UI library `form` components and the ability from `JSON schema` to `Vue` view.

## Install

This module is distributed via [npm][npm] which is bundled with [node][node] and
should be installed as one of your project's `dependencies`:

```bash
$ npm install --save @xizhouh/formler
```

## Quick Start

```js
import Vue from 'vue';
import Former from '@xizhouh/former';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
Vue.component('Former', Former);
```

For more information like adapting other UI librarys, please refer to [Quick Start][DocumentQuickStart] in our documentation.

## Browser Support

Modern browsers and Internet Explorer 10+.

## License

WTFPL

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/travis/HuangXiZhou/former.svg?style=flat-square
[build]: https://travis-ci.org/HuangXiZhou/former
[codecov-badge]: https://img.shields.io/codecov/c/gh/HuangXiZhou/former.svg?style=flat-square
[codecov]: https://codecov.io/gh/HuangXiZhou/former
[version-badge]: https://img.shields.io/npm/v/@xizhouh/former.svg?style=flat-square
[size-badge]: https://img.shields.io/bundlephobia/minzip/@xizhouh/former.svg?style=flat-square
[package]: https://www.npmjs.com/package/@xizhouh/former
[downloads-badge]: https://img.shields.io/npm/dm/@xizhouh/former.svg?style=flat-square
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: https://github.com/HuangXiZhou/former/pulls
[DocumentQuickStart]: https://huangxizhou.github.io/former/intro/quickStart.html

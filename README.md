![Snow Monkey Replica OGP](https://i.gyazo.com/1fb769dee1af5e9344339c9bdf67a95b.png)

# Snow Monkey Replica

## About

Snow Monkey と Gutenberg のスタイリングを、Jamstack フレームワーク（Nuxt・Next・Gatsby など）で擬似的に再現するための CSS ライブラリです。

## Install

```bash
$ npm i snow-monkey-replica
```

## How To Use

React や Vue で必要な CSS を呼び出します。CSS は未圧縮のため、利用側の webpack などで圧縮してください。

```js
//----------------------------------------------------
// すべてのCSSを利用する場合
//----------------------------------------------------

import "snow-monkey-replica";

//----------------------------------------------------
// 個別のCSSを利用する場合
//----------------------------------------------------

// Gutenberg
import "snow-monkey-replica/dist/snow-monkey-replica-g-style.css";
import "snow-monkey-replica/dist/snow-monkey-replica-g-theme.css";

// Snow Monkey
import "snow-monkey-replica/dist/snow-monkey-replica-sm-style.css";
import "snow-monkey-replica/dist/snow-monkey-replica-sm-custom-widgets.css";

// Snow Monkey Blocks
import "snow-monkey-replica/dist/snow-monkey-replica-smb-blocks.css";
import "snow-monkey-replica/dist/snow-monkey-replica-smb-all.css";

// Snow Monkey Editor
import "snow-monkey-replica/dist/snow-monkey-replica-sme-app.css";
```

## Examples

### Nuxt

`nuxt.config.js`

```js
module.exports = {
  head: {
    bodyAttrs: {
      class: "l-body",
    },
  },
  css: ["snow-monkey-replica"],
};
```

`layouts/default.vue`

```html
<template>
  <div class="l-container">
    <div class="l-contents">
      <div class="c-container">
        <div class="l-contents__inner">
          <main class="l-contents__main">
            <nuxt />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>
```

`pages/posts/detail/index.vue`

```html
<template>
  <article class="c-entry">
    <header class="c-entry__header">
      <h1 class="c-entry__title" v-html="post.title" />
    </header>
    <div class="c-entry__body">
      <div class="c-entry__content p-entry-content" v-html="post.content" />
    </div>
  </article>
</template>
```

## How To Build

`./temp` ディレクトリを作成後、Zip 解凍したテーマとプラグインを中に配置し、ビルドコマンドを実行します。

```bash
$ npm run build
```

## Library

- Gutenberg ([site](https://ja.wordpress.org/plugins/gutenberg/))
- Snow Monkey ([site](https://snow-monkey.2inc.org/))
- Snow Monkey Blocks ([site](https://ja.wordpress.org/plugins/snow-monkey-blocks/))
- Snow Monkey Editor ([site](https://ja.wordpress.org/plugins/snow-monkey-editor/))

## License

- GNU General Public License v2.0 or late

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)

# Snow Monkey Replica

## About

Snow Monkey と Gutenberg の CSS を、Jamstack 環境で擬似的に再現するためのライブラリです。

## Install

```bash
$ npm i snow-monkey-replica
```

## How To Use

React や Vue で必要な CSS を呼び出します。CSS は未圧縮のため、利用側の webpack などで圧縮してください。

```js
// すべてのCSSを利用する場合
import "snow-monkey-replica";

// 個別のCSSを利用する場合
import "snow-monkey-replica/dist/gutenberg/style.css";
import "snow-monkey-replica/dist/gutenberg/theme.css";
import "snow-monkey-replica/dist/snow-monkey/style.css";
import "snow-monkey-replica/dist/snow-monkey/custom-widgets.css";
import "snow-monkey-replica/dist/snow-monkey-blocks/blocks.css";
import "snow-monkey-replica/dist/snow-monkey-blocks/all.css";
import "snow-monkey-replica/dist/snow-monkey-editor/app.css";
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

# DeepLAPI for Deno

Deno向けの[DeepL](https://www.deepl.com/)APIライブラリです。

## 機能
- 文章の翻訳
- 翻訳詳細情報の取得

## 必要環境
- Deno

## 使い方
[DeepL](https://www.deepl.com/)のAPIキーを`.env`ファイルに設定してください:

```
DEEPL_API_KEY=******
```

ライブラリを使って翻訳するには以下のようにします:

```js
import { DeepLAPI } from "https://code4fukui.github.io/DeepLAPI/DeepLAPI.js";

const api = new DeepLAPI();
console.log(await api.translate("こんにちは", null, "en-US")); // Hello. - Hello.
console.log(await api.translate("Hello", null, "ja")); // こんにちは
```

## ライセンス
MIT License
# DeepLAPI for Deno

Denoで[DeepL](https://www.deepl.com/) APIを利用するためのライブラリです。

## 使い方

DeepLの[API_KEY](https://www.deepl.com/account/summary)を `.env` ファイルに設定します。

```
DEEPL_API_KEY=******
```

その後、以下のようにライブラリを使用します。

```js
import { DeepLAPI } from "https://code4fukui.github.io/DeepLAPI/DeepLAPI.js";

const api = new DeepLAPI();
console.log(await api.translate("こんにちは", null, "en-US")); // Hello. - Hello.
console.log(await api.translate("Hello", null, "ja")); // こんにちは
```

## 要件

- Deno

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。

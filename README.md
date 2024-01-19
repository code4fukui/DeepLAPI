# DeepLAPI for Deno

a lib for [DeepL](https://www.deepl.com/) API

## Usage

set [API_KEY](https://www.deepl.com/ja/account/summary) from DeepL on .env file
```
DEEPL_API_KEY=******
```

```js
import { DeepLAPI } from "https://code4fukui.github.io/DeepLAPI/DeepLAPI.js";

const api = new DeepLAPI();
console.log(await api.translate("こんにちは", null, "en-US")); // Hello. - Hello.
console.log(await api.translate("Hello", null, "ja")); // こんにちは
```

## simple src for Deno

```js
import * as deepl from "npm:deepl-node";

const authKey = "****";

const translator = new deepl.Translator(authKey);

const result = await translator.translateText("Hello, world!", null, "ja");
console.log(result.text);
```

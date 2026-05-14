# DeepLAPI for Deno

A library for interacting with the [DeepL](https://www.deepl.com/) API in Deno.

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

## Usage

Set the [API_KEY](https://www.deepl.com/account/summary) from DeepL in the `.env` file:

```
DEEPL_API_KEY=******
```

Then, use the library:

```js
import { DeepLAPI } from "https://code4fukui.github.io/DeepLAPI/DeepLAPI.js";

const api = new DeepLAPI();
console.log(await api.translate("こんにちは", null, "en-US")); // Hello. - Hello.
console.log(await api.translate("Hello", null, "ja")); // こんにちは
```

## Requirements

- Deno

## License

MIT License — see [LICENSE](LICENSE).
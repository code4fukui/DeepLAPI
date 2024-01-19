import * as deepl from "npm:deepl-node";
import { getEnv } from "https://js.sabae.cc/getEnv.js";

const authKey = await getEnv("DEEPL_API_KEY");

export class DeepLAPI {
  constructor() {
    this.translator = new deepl.Translator(authKey);
  }
  async translate(text, from = null, to = "ja") {
    const result = await this.translator.translateText(text, from, to);
    return result.text;
  }
};

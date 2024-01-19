import * as t from "https://deno.land/std/testing/asserts.ts";
import { DeepLAPI } from "./DeepLAPI.js";

Deno.test("simple", async () => {
  const api = new DeepLAPI();
  t.assertEquals(await api.translate("こんにちは", null, "en-US"), "Hello. - Hello.");
  t.assertEquals(await api.translate("Hello", null, "ja"), "こんにちは");
});

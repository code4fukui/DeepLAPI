import { DeepLAPI } from "./DeepLAPI.js";

console.log(await (new DeepLAPI()).translate(Deno.args[0]));

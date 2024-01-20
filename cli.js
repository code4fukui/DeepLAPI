import { DeepLAPI } from "./DeepLAPI.js";

console.log(await (new DeepLAPI()).translateDetail(Deno.args[0]));

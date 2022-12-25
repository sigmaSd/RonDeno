import { Ron } from "./mod.ts";
import { assert } from "https://deno.land/std@0.170.0/testing/asserts.ts";

Deno.test("smoke", () => {
  const ron = new Ron("(boolean: true, float: 1.23)");
  assert(ron.toString(), `{"boolean": true, "float": 1.23 }`);
});

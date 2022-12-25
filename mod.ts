import { instantiate, Ron as WasmRon } from "./lib/rs_lib.generated.js";

const { ron_from_str, ron_to_json_string, ron_from_json_string } =
  await instantiate();

export class Ron {
  #value?: WasmRon;
  constructor() {
    return this;
  }
  fromStr(str: string) {
    this.#value = ron_from_str(str);
    return this;
  }
  // deno-lint-ignore no-explicit-any
  static fromJSON(json: any): Ron {
    const ron = new Ron();
    ron.#value = ron_from_json_string(JSON.stringify(json));
    return ron;
  }
  json() {
    if (!this.#value) return {};
    return JSON.parse(ron_to_json_string(this.#value));
  }
}

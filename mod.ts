import { instantiate, Ron as WasmRon } from "./lib/rs_lib.generated.js";

const { ron_from_str, ron_to_json_string } = await instantiate();

export class Ron {
  #value: WasmRon;
  constructor(str: string) {
    this.#value = ron_from_str(str);
    return this;
  }
  json() {
    return JSON.parse(ron_to_json_string(this.#value));
  }
}

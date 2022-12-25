import { instantiate, Ron as WasmRon } from "./lib/rs_lib.generated.js";

const {
  ron_from_str,
  ron_to_json_string,
  ron_from_json_string,
  ron_to_string,
} = await instantiate();

export class Ron {
  #value?: WasmRon;

  static fromString(str: string): Ron {
    const ron = new Ron();
    ron.#value = ron_from_str(str);
    return ron;
  }
  // deno-lint-ignore no-explicit-any
  static fromJSON(json: any): Ron {
    const ron = new Ron();
    ron.#value = ron_from_json_string(JSON.stringify(json));
    return ron;
  }

  // deno-lint-ignore no-explicit-any
  json(): any {
    if (!this.#value) return {};
    return JSON.parse(ron_to_json_string(this.#value));
  }
  toString(): string {
    if (!this.#value) return "";
    return ron_to_string(this.#value);
  }
}

import { instantiate, Ron as WasmRon } from "./lib/rs_lib.generated.js";

const { ron_from_str, ron_to_string } = await instantiate();

export class Ron {
  #value: WasmRon;
  static FromString(str: string): Ron {
    const ron = new Ron();
    ron.#value = ron_from_str(str);
    return ron;
  }
  ToString(): string {
    return ron_to_string(this.#value);
  }
}

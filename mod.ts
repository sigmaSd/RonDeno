import { instantiate } from "./lib/rs_lib.generated.js";

const {
  ron_from_str,
  ron_from_json_string,
  ron_to_string,
  ron_to_json_string,
} = await instantiate();

/**
 * Parse parses RON string into an object.
 * @param ronString
 */
export function parse(input: string): Record<string, unknown> {
  return JSON.parse(ron_to_json_string(ron_from_str(input)));
}

/**
 * Stringify dumps source object into RON string and returns it.
 * @param srcObj
 */
export function stringify(srcObj: Record<string, unknown>): string {
  return ron_to_string(ron_from_json_string(JSON.stringify(srcObj)));
}

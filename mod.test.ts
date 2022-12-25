import { Ron } from "./mod.ts";
import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.170.0/testing/asserts.ts";

Deno.test("smoke", () => {
  assertEquals(Ron.fromJSON({}).json(), {});

  const ronCode = (`GameConfig( // optional struct name
    window_size: (800, 600),
    window_title: "PAC-MAN",
    fullscreen: false,
    
    mouse_sensitivity: 1.4,
    key_bindings: {
        "up": "Up",
        "down": "Down",
        "left": "Left",
        "right": "Right",
        
        // Uncomment to enable WASD controls
        /*
        "W": "Up",
        "A": "Down",
        "S": "Left",
        "D": "Right",
        */
    },
    
    difficulty_options: (
        start_difficulty: "Easy",
        adaptive: false,
    ),
)`);
  const ron = Ron.fromString(ronCode);

  assertEquals(
    ron.json(),
    {
      difficulty_options: {
        adaptive: false,
        start_difficulty: "Easy",
      },
      fullscreen: false,
      key_bindings: {
        down: "Down",
        left: "Left",
        right: "Right",
        up: "Up",
      },
      mouse_sensitivity: 1.4,
      window_size: [
        800,
        600,
      ],
      window_title: "PAC-MAN",
    },
  );

  assertEquals(Ron.fromJSON(ron.json()), Ron.fromString(ronCode));
});

Deno.test("test errors", () => {
  //FIXME: Figure out how to not need this rewraping
  //       Remove this function then
  const assertThrowsWithMsgIncludes = (f: () => void, msg: string) => {
    assertThrows(
      () => {
        try {
          f();
        } catch (e) {
          throw new Error(e);
        }
      },
      Error,
      msg,
    );
  };

  assertThrowsWithMsgIncludes(
    () => Ron.fromString(""),
    "Unexpected end of RON",
  );

  assertThrowsWithMsgIncludes(
    () => Ron.fromString("{\\}"),
    "Unexpected byte '\\\\'",
  );
});

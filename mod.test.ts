import { Ron } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.170.0/testing/asserts.ts";

Deno.test("smoke", () => {
  const ron = new Ron(`GameConfig( // optional struct name
    window_size: (800, 600),
    window_title: "PAC-MAN",
    fullscreen: false,
    
    mouse_sensitivity: 1.4,
    key_bindings: {
        "up": Up,
        "down": Down,
        "left": Left,
        "right": Right,
        
        // Uncomment to enable WASD controls
        /*
        "W": Up,
        "A": Down,
        "S": Left,
        "D": Right,
        */
    },
    
    difficulty_options: (
        start_difficulty: Easy,
        adaptive: false,
    ),
)`);

  assertEquals(
    ron.json(),
    {
      difficulty_options: {
        adaptive: false,
        start_difficulty: null,
      },
      fullscreen: false,
      key_bindings: {
        down: null,
        left: null,
        right: null,
        up: null,
      },
      mouse_sensitivity: 1.4,
      window_size: [
        800,
        600,
      ],
      window_title: "PAC-MAN",
    },
  );
});

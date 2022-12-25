# RonDeno

Deno wasm wrapper over [ron](https://github.com/ron-rs/ron)

## Usage

```ts
import { Ron } from "https://deno.land/x/rondeno/mod.ts";

console.log(
  (Ron.fromString("(boolean: true, float: 1.23)")).json(),
);
```

## Developemnt

`deno task wasmbuild` `deno test -A`

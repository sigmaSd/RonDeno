# RonDeno

Deno wasm wrapper over [ron](https://github.com/ron-rs/ron)

## Usage

```ts
import { Ron } from "https://raw.githubusercontent.com/sigmaSd/RonDeno/master/mod.ts";

console.log(
  (Ron.fromString("(boolean: true, float: 1.23)")).json(),
);
```

## Developemnt

`deno task wasmbuild`

`deno test -A`

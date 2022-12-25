# RonDeno

Deno wasm wrapper over [ron](https://github.com/ron-rs/ron)

## Usage

```ts
import { parse, stringify } from "https://raw.githubusercontent.com/sigmaSd/RonDeno/master/mod.ts";

console.log(
  stringify(parse("(boolean: true, float: 1.23)")))
);
```

## Developemnt

`deno task wasmbuild`

`deno test -A`

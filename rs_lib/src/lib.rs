use serde::Deserialize;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Deserialize, Debug)]
pub struct Ron {
    value: ron::Value,
}

#[wasm_bindgen]
pub fn ron_from_str(str: &str) -> Ron {
    Ron {
        value: ron::from_str(str).unwrap(),
    }
}

#[wasm_bindgen]
pub fn ron_to_string(ron: &Ron) -> String {
    ron::to_string(&ron.value).unwrap()
}

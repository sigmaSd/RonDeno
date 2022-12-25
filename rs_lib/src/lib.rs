use serde::{Deserialize, Serialize};
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
pub fn ron_to_json_string(ron: &Ron) -> String {
    let mut buffer = vec![];
    let mut ser = serde_json::Serializer::new(&mut buffer);
    ron.value.serialize(&mut ser).unwrap();
    String::from_utf8(buffer).unwrap()
}

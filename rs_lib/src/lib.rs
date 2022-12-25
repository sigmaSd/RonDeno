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
pub fn ron_from_json_string(str: &str) -> Ron {
    let value: serde_json::Value = serde_json::from_str(str).unwrap();

    let mut buffer = vec![];
    let mut ser = ron::Serializer::new(&mut buffer, None).unwrap();
    value.serialize(&mut ser).unwrap();
    Ron {
        value: ron::de::from_bytes(&buffer).unwrap(),
    }
}

#[wasm_bindgen]
pub fn ron_to_json_string(ron: &Ron) -> String {
    let mut buffer = vec![];
    let mut ser = serde_json::Serializer::new(&mut buffer);
    ron.value.serialize(&mut ser).unwrap();
    String::from_utf8(buffer).unwrap()
}

#[wasm_bindgen]
pub fn ron_to_string(ron: &Ron) -> String {
    ron::ser::to_string(&ron.value).unwrap()
}

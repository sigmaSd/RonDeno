use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Deserialize, Debug)]
pub struct Ron {
    value: ron::Value,
}

#[wasm_bindgen]
pub fn ron_from_str(str: &str) -> Result<Ron, JsValue> {
    Ok(Ron {
        value: ron::from_str(str).map_err(|e| e.to_string())?,
    })
}

#[wasm_bindgen]
pub fn ron_from_json_string(str: &str) -> Result<Ron, JsValue> {
    let value: serde_json::Value = serde_json::from_str(str).map_err(|e| e.to_string())?;

    let mut buffer = vec![];
    let mut ser = ron::Serializer::new(&mut buffer, None).map_err(|e| e.to_string())?;
    value.serialize(&mut ser).map_err(|e| e.to_string())?;
    Ok(Ron {
        value: ron::de::from_bytes(&buffer).map_err(|e| e.to_string())?,
    })
}

#[wasm_bindgen]
pub fn ron_to_json_string(ron: &Ron) -> Result<String, JsValue> {
    let mut buffer = vec![];
    let mut ser = serde_json::Serializer::new(&mut buffer);
    ron.value.serialize(&mut ser).map_err(|e| e.to_string())?;
    Ok(String::from_utf8(buffer).map_err(|e| e.to_string())?)
}

#[wasm_bindgen]
pub fn ron_to_string(ron: &Ron) -> Result<String, JsValue> {
    Ok(ron::ser::to_string(&ron.value).map_err(|e| e.to_string())?)
}

/**
 * 通用的存储localStorage
 * @param id 商家id
 * @param key
 * @param value
 */
export function saveToLocal(id, key, value) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.__seller__ = JSON.stringify(seller);
}

/**
 * 通用的获取 localStorage
 * @param id 商家id
 * @param key
 * @param def 默认值 如 false | true
 * @return {*}
 */
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    return def; // 返回默认值
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
}
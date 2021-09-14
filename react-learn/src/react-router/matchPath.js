import pathToRegexp from "path-to-regexp";

/**
 *
 * @param {*} path 匹配规则
*  @param {*} url  地址
 * @param {*} options 配置项  包括 sensitive 是否敏感。strict 是否区分大小写。 exact 是否严格匹配
 * @returns {object | null} {isExact:boolean, params:{key:value}, path, url}
 */
export default function matchPath(path, url, options = {}) {
  const keys = [];
  const regExp = pathToRegexp(path, keys, getOptions(options));
  const result = regExp.exec(url);
  if (!result) {
    return null;
  }
  const gruops = Array.from(result);
  const params = getParams(gruops.slice(1), keys);
  return {
    isExact: gruops[0] === url,
    params,
    path,
    url: gruops[0],
  };
}

function getOptions(opts = {}) {
  return {
    sensitive: opts.sensitive || false,
    strict: opts.sensitive || false,
    end: opts.exact || false,
  };
}

function getParams(gruops, keys) {
  const obj = {};
  for (const props in keys) {
    obj[keys[props].name] = gruops[props];
  }
  return obj;
}

const routerConfig = {
  user: {
    root: "/user",
    update: "/update",
    pay: {
      root: "/pay",
      beforePay: "/xxx",
      detail: {
        root: "/detail",
        beforeDetail: "/yyy",
      },
    },
  },
};

function setConfig() {
  _setConfig(routerConfig, "");
}

function _setConfig(config, baseUrl) {
  let url = "";
  for (let prop in config) {
    if (typeof config[prop] === "string") {
      if (prop === "root") {
        config[prop] = baseUrl + config[prop];
        url = config[prop];
      } else {
        config[prop] = url + config[prop];
      }
    } else {
      _setConfig(config[prop], url);
    }
  }
}

setConfig();
export default routerConfig;

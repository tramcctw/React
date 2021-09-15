import BlockManager from "./BlockManager";
import ListenManager from "./ListenManager";

/**
 *
 * @param {*} options
 * @returns
 */
export default function browserHistory(options = {}) {
  const {
    basename = "", // 根路径
    forceRefresh = false, //改变地址是否强制刷新
    keyLength = 6, // 栈中记录的是location，两个location可能一样，所以需要使用key区分，可以的长度
    getUserConfirmation = (msg, callback) => {
      callback(true);
    },
  } = options;

  const listeners = new ListenManager();
  const blocks = new BlockManager(getUserConfirmation);

  function go(step) {
    window.history.go(step);
  }

  function goBack() {
    window.history.back();
  }

  function goForward() {
    window.history.forward();
  }

  function push(path, state) {
    changePage(path, state, 0);
  }

  function replace(path, state) {
    changePage(path, state, 1);
  }

  function changePage(path, state, isPush) {
    let action = "PUSH";
    if (isPush === 1) {
      action = "REPLACE";
    }
    if (action === 2) {
      action = "POP";
    }

    // 需要跳转的是一个完整的path,可能会有basename
    const pathInfo = getPretifyState(path, state, basename);
    const location = getLocationFromPath(pathInfo);
    // 注意这里的location，是跳转之后的 location
    blocks.triggerBlockEvents(location, action, (isJump) => {
      if (!isJump) {
        return;
      }
      const key = createKey(keyLength);
      if (action === "PUSH") {
        window.history.pushState(
          {
            state: pathInfo.state,
            key,
          },
          null,
          pathInfo.pathResult
        );
      } else {
        window.history.replaceState(
          {
            state: pathInfo.state,
            key,
          },
          null,
          pathInfo.pathResult
        );
      }
      location.key = key;
      history.location = location;
      history.action = action;

      if (forceRefresh) {
        window.location.href = pathInfo.pathResult;
      }

      listeners.triggerListennerEvent(location, action);
    });
  }

  function addDomListener() {
    window.addEventListener("popstate", () => {
      // 这里事件触发本身就会触发栈的修改，此时只需要通知react刷新界面即可
      const location = getLocation(basename);
      const action = "POP";
      blocks.triggerBlockEvents(location, action, (isJump) => {
        if (!isJump) {
          return;
        }
        listeners.triggerListennerEvent(location, action);
        history.location = location;
      });
    });
  }

  addDomListener();

  function listen(callback) {
    return listeners.addEventListenner(callback);
  }

  function block(callBack) {
    return blocks.addBlockEvents(callBack);
  }

  // 注意这里的location指的是 这个history里面的location
  function createHref(location) {
    return basename + location.pathname + location.search + location.hash;
  }

  const history = {
    action: "POP",
    length: window.history.length,
    block,
    createHref,
    go,
    goBack,
    goForward,
    listen,
    location: getLocation(basename),
    push,
    replace,
  };

  return history;
}

// 约定 如果state是一个对象，且里面有key值，则取出来作为location的key值 且 有一个state属性
// 根据完整路径获得 location
function getLocation(basename = "") {
  let pathname = window.location.pathname;
  const reg = new RegExp(basename);
  let state,
    historyState = window.history.state;
  pathname = pathname.replace(reg, "");
  const location = {
    hash: window.location.hash,
    pathname,
    search: window.location.search,
  };
  if (!historyState) {
    state = undefined;
  }
  if (typeof historyState !== "object") {
    state = historyState;
  } else {
    // 首次，key取state 里面的 key
    if (historyState && historyState.key) {
      location.key = historyState.key;
      state = historyState.state;
    } else {
      state = historyState;
    }
  }
  location.state = state;
  return location;
}

// 根据path 获得 location
function getLocationFromPath(pathInfo) {
  const reg = /[#?].*$/;
  const pathname = pathInfo.pathResult.replace(reg, "");
  const queryIndex = pathInfo.pathResult.indexOf("?");
  const hashIndex = pathInfo.pathResult.indexOf("#");
  const search = pathInfo.pathResult.slice(queryIndex, hashIndex);
  const hash = pathInfo.pathResult.slice(hashIndex);
  return {
    hash,
    pathname,
    search,
    state: pathInfo.state,
  };
}

function getPretifyState(path, state, basename) {
  if (typeof path === "string") {
    return {
      pathResult: basename + path,
      state,
    };
  } else if (typeof path === "object") {
    let search = path.search;
    let hash = path.hash;
    if (search && search[0] !== "?") {
      search = "?" + search;
    }

    if (hash && hash[0] !== "#") {
      hash = "#" + hash;
    }
    return {
      pathResult: basename + path.pathname + search + hash,
      state,
    };
  } else {
    throw Error("path must string or object");
  }
}

// 产生一个独一无二的key
function createKey(keyLength) {
  return Math.random().toString(36).substr(2, keyLength);
}

/**
 * 
 * listen的思想。添加监听函数，将其加入数组，适当时触发数组调用
 * 
 * block思想。 给一个监听函数，在跳转之前，先运行 block 函数，让block决定是否跳转
 * 
 * 跳转思想，先获得跳转的完整路径，可能会有 basename，再根据完整路径获得 下一个 location 需要使用
 * 
 * push 和 replace 可以传递对象 {pathname,hash,search}，state，
 * 
 *   go,
    goBack,
    goForward, 使用浏览器api实现

    在首次 需要将完整路径的basename去掉，并拿到location

    在获得下一次跳转时，需要拼接上完整路径，并获得下一次的location
 */

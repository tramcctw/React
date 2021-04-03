import React from "react";
import loginObj from "./IsLogin";
// import qs from "query-string";

export default function Login(props) {
  return (
    <>
      <h1>hello Login Page</h1>
      <button
        onClick={() => {
          loginObj.isLogin = true;
          //   if (search.path === "personal") {
          //     props.history.push("/personal");
          //   } else {
          //     props.history.push("/");
          //   }
          if (props.history.location.state === "personal") {
            props.history.push("/personal");
          } else {
            props.history.push("/");
          }
        }}
      >
        登录
      </button>
    </>
  );
}

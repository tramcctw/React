import React from "react";
// import { Link } from "react-router-dom";
import Link from "./BetterLink";

export default function News(props) {
  return (
    <>
      <Link to={{ pathname: "NewsHome" }}>新闻主页</Link>
      <Link to={{ pathname: "NewsDetail" }}>新闻详情页</Link>
      <Link to={{ pathname: "NewsSearch" }}>新闻搜索页</Link>
      <div>{props.children}</div>
    </>
  );
}

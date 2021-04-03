import React from "react";
import { NavLink } from "react-router-dom";
import "./page.css";

export function nav() {
  return (
    <div className="container">
      <NavLink exact to="/">
        首页
      </NavLink>
      <NavLink exact to="/news">
        新闻页
      </NavLink>
      <NavLink exact to="/personal">
        个人中心
      </NavLink>
    </div>
  );
}

export function Home() {
  return <h1 className="home">首页</h1>;
}

export function News() {
  return <h1 className="news">新闻页</h1>;
}

export function Personal() {
  return <h1 className="personal">个人中心</h1>;
}

import NewsHome from "./childCpn/NewsHome";
import NewsDetail from "./childCpn/NewsDetail";
import NewsSearch from "./childCpn/NewsSearch";
import News from "./News";
import Home from "./Home";

export default [
  { path: "/", exact: true, component: Home, name: "Home" },
  {
    path: "/news",
    name: "News",
    component: News,
    children: [
      { path: "/", exact: true, component: NewsHome, name: "NewsHome" },
      {
        path: "/detail",
        exact: true,
        component: NewsDetail,
        name: "NewsDetail",
      },
      {
        path: "/search",
        exact: true,
        component: NewsSearch,
        name: "NewsSearch",
      },
    ],
  },
];

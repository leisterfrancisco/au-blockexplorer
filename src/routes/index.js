import { lazy } from "react";

const Home = lazy(() => import("./Home"));

const routes = [
  {
    header: "networkInformation",
    name: "home",
    // icon: <GridIcon />,
    component: Home,
    path: "/",
    exact: true,
  },
];

export default routes;

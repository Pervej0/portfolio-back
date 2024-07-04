import express from "express";
import projectRoutes from "../modules/projects/projects.router";
import AuthRoutes from "../modules/auth/auth.router";
const Router = express.Router();

const allRoutes = [
  { path: "/api/v1/projects", route: projectRoutes },
  { path: "/api/v1/auth", route: AuthRoutes },
];

allRoutes.forEach((item) => {
  Router.use(item.path, item.route);
});

export default Router;

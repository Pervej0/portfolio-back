import express from "express";
import { projectRoute } from "../modules/project/project.router";
const Router = express.Router();

const allRoutes = [{ path: "/projects", route: projectRoute }];

allRoutes.forEach((item) => {
  Router.use(item.path, item.route);
});

export default Router;

const IndexRoute = require("express").Router();
const userRoute = require("./UserRouter");
const {LoggerMiddleware} = require("../Middlewares/LoggerMiddleware");


IndexRoute.use("/v1/users", LoggerMiddleware , userRoute);

module.exports = IndexRoute;

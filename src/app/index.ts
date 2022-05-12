import setupExpress from "./setup-express";
import setupOpenapi from "./setup-openapi";
import setupSwagger from "./setup-swagger";
import startServer from "./start-server";

export default () => Promise.resolve()
  .then(setupExpress)
  .then(setupOpenapi)
  .then(setupSwagger)
  .then(startServer(process.env.PORT))

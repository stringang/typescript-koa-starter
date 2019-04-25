import http from "http";

import app from "./app";

/**
 * Start Koa server.
 */
const server = http.createServer(app.callback());
server.listen(3000, () => {
  console.log("Server Start Success");
});

export default server;

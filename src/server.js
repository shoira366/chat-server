import express from "express";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import exceptionHandler from "./middleware/exception-handler.js";
import router from "./module/router.js";

const app = express();

const swaggerDocument = JSON.parse(fs.readFileSync("./docs.json", "utf8"));

app.use(express.json());
app.use(router);
app.use(exceptionHandler);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(9000, () => {
  console.log(9000);
});

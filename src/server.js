import express from "express";
import exceptionHandler from "./middleware/exception-handler.js";
import router from "./module/router.js";

const app = express();

app.use(express.json());
app.use(router);
app.use(exceptionHandler);

// console.log(exceptionHandler());

app.listen(9000, () => {
  console.log(9000);
});

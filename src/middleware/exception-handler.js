import { Exception } from "../exception/exception.js";

export default (err, req, res, next) => {
  // console.log(err instanceof Exception);
  if (err instanceof Exception) {
    res.status(err.status).json({
      message: err.message,
      status: err.status,
    });
  }

  res.status(500).json({
    message: "Internal server error",
    status: 500,
  });
};

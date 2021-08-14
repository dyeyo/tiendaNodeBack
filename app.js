const express = require("express");
const apiRouter = require("./router/index");

const app = express();

// app.use('/auth', AuthRouter);
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Run Server in port 3000");
});

require("dotenv").config();
import express from "express";
import "express-async-errors";
import cors from "cors";
import notFound from "./middlewares/notFound";
import errorHandler from "./middlewares/errorHandler";
import fileRouter from "./routes/fileMetaData";

const app = express();

app.use(cors());

app.use("/dist-css", express.static(process.cwd() + "/dist-css"));

app.get("/", function (_, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.use("/api/fileanalyse", fileRouter);

app.use(errorHandler);
//last middleware to call
app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});

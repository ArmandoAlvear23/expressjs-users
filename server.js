const express = require("express");
//const router = require("./routes/users");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
//app.use(logger);

app.get("/", logger, (req, res) => {
  console.log("Here");
  res.render("index", { text2: "World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.listen(3000);

const express = require("express");
const app = express();
const morgan = require("morgan");
const { readdirSync } = require("fs");
// const authRouter = require("./routes/auth");
// const categoryRouter = require("./routes/category");
//middleware
app.use(morgan("dev"));
app.use(express.json());

// app.use("/api", authRouter);
// app.use("/api", categoryRouter);
console.log(readdirSync("./routes"));
readdirSync("./routes").map((item) => {
  app.use("/api", require(`./routes/${item}`));
});

app.post("/api", (req, res) => {
  console.log(req.body);
});
app.listen(5000, () => {
  console.log("http://localhost:5000");
});

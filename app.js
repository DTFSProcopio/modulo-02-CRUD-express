const express = require("express");
const app = express();
const userRoute = require("./routes/user.route");
app.use(express.json());
app.use("/user", userRoute);
app.use((req, res, next) => {
  res.status(404).send("Page not found!!");
  next();
});
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});

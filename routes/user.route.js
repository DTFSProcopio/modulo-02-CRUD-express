const express = require("express");
const routes = express.Router();
let users = require("../users");
routes.get("/", (req, res) => {
  res.status(200).send(users);
});
routes.post("/", (req, res) => {
  const content = req.body;
  users.push(content);
  res.status(201).send(users);
});
routes.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.map((user) => {
    if (user.id === id) {
      return req.body;
    }
    return user;
  });
  res.status(200).send(users);
});
routes.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.map((user) => {
    if (user.id === id) {
      return { ...user, ...req.body };
    }
    return user;
  });
  res.status(200).send(users);
});
routes.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.status(204).send(users);
});
module.exports = routes;

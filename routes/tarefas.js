const { Router } = require("express");
const Task = require("../controllers/tarefas");

const route = Router();

route.post("/", async (req, res) => {
  const novaTarefa = await Task.create(req.body);

  return res.json(novaTarefa);
});

module.exports = { tarefasRoute: route };

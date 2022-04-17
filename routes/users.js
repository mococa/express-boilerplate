const { Router } = require("express");

const route = Router();

route.post("/", (req, res) => {
  return res.json({});
});

module.exports = { usersRoute: route };

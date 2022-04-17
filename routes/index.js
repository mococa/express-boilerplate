const { Router } = require("express");
const { tarefasRoute } = require("./tarefas");
const { usersRoute } = require("./users");

const router = Router()
    .use("/tarefas", tarefasRoute)
    .use('/users', usersRoute);

module.exports = router;

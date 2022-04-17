class Task {
  static async create({ name }) {
    // Todo: criar a tarefa
    console.log(`creating task named ${name}`);
    const task = { name: name, createdAt: new Date() };
    return task;
  }
}

module.exports = Task;

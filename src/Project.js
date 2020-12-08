class Project {
  static id = 1;
  _todoList = [];
  _id;
  get id() {
    return this._id;
  }
  _name;
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  constructor(name) {
    this._id = Project.id;
    Project.id++;
    this._name = name;
  }

  deleteTodo() {}
}

export { Project };

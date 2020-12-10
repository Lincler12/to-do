class Project {
  static id = 1;
  _todoList = [];
  get todoList() {
    return this._todoList;
  }
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

  addTodo = (todo) => {
    this._todoList.push(todo);
  };

  deleteTodo(id) {
    let newArray = [];
    for (let i = 0; i < this._todoList.length; i++) {
      if (!this._todoList[i].id === id) {
        newArray.push(this._todoList[i]);
      }
    }
    this._todoList = [...newArray];
  }
}

export { Project };

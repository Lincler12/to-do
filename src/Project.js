import {Todo} from "./Todo";

class Project {
  static id = 1;
  todoList = [];
  constructor(name) {
    this._id = project.id;
    project.id++;
    this._name = name;
  }
  createTodo() {
    const todo = new Todo(title, description, duedate, priority, notes, checklist);
    this.todoList.push(todo);
  }
  deleteTodo() {}
}


export {Project};
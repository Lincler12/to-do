class Todo {
  _title;
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  _description;
  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }
  _duedate;
  get duedate() {
    return this._duedate;
  }
  set duedate(value) {
    this._duedate = value;
  }
  _priority;
  get priority() {
    return this._priority;
  }
  set priority(value) {
    this._priority = value;
  }
  _notes;
  get notes() {
    return this._notes;
  }
  set notes(value) {
    this._notes = value;
  }
  _checklist;
  get checklist() {
    return this._checklist;
  }
  set checklist(value) {
    this._checklist = value;
  }
  static id = 1;
  _id;
  get id() {
    return this._id;
  }
  constructor(title, description, priority) {
    this._id = Todo.id;
    Todo.id++;
    this._title = title;
    this._description = description;
    this._priority = priority;
  }
}

export { Todo };

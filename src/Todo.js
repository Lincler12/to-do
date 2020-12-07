class Todo {
  _title;
  _description;
  _duedate;
  _priority;
  _notes;
  _checklist;
  static id = 1;
  constructor(title, description, duedate, priority, notes, checklist) {
    this._id = Todo.id;
    Todo.id++;
    this._title = title;
    this._description = description;
    this._duedate = duedate;
    this._priority = priority;
    this._notes = notes;
    this._checklist = checklist;
  }
}


export {Todo};
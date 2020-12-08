class MainApp {
  _projectList = [];

  addProject = (project) => {
    this._projectList.push(project);
  };

  get projectList() {
    return this._projectList;
  }
  deleteProject() {}
}

export { MainApp };

class MainApp {
  _projectList = [];

  addProject = (project) => {
    this._projectList.push(project);
  };

  updateProjectName = (name, id) => {
    this._projectList.forEach((project) => {
      if (project.id === id) {
        project.name = name;
      }
    });
  };
  get projectList() {
    return this._projectList;
  }
  deleteProject() {}
}

export { MainApp };

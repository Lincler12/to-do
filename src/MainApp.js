class MainApp {
  _projectList = [];

  addProject = (project) => {
    this._projectList.push(project);
  };

  getProject(id) {
    return this._projectList.find((project) => project.id === id);
  }

  updateProjectName = (name, id) => {
    this._projectList.forEach((project) => {
      if (project.id === id) {
        project.name = name;
      }
    });
  };

  removeProject = (id) => {
    this._projectList = this._projectList.filter(
      (project) => project.id !== id
    );
  };

  get projectList() {
    return this._projectList;
  }
}

export { MainApp };

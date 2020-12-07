import { Project } from "./Project";

class MainApp {
  _projectList = [];

  createProject = (name) => {
    project = new Project(name);
    this._projectList.push(project);
  };

  get projectList() {
    return this._projectList;
  }
  deleteProject() {}
}

export { MainApp };

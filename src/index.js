import { Todo } from "./Todo";
import { Project } from "./Project";
import { MainApp } from "./MainApp";
import { projectUI } from "./projectUI";

const mp = new MainApp();
const toggleTaskButtonImage = "./images/icons8-expand-arrow-16.png";

const appController = (() => {
  function addProject(name) {
    let project = new Project(name);
    mp.addProject(project);
    projectUI.createProjectUI(project.name, project.id);
  }

  function deleteProject(id) {}

  return { addProject };
})();

appController.addProject("hello");

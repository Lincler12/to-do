import { Todo } from "./Todo";
import { Project } from "./Project";
import { MainApp } from "./MainApp";
import { projectUI } from "./projectUI";

const mp = new MainApp();
const toggleTaskButtonImage = "./images/icons8-expand-arrow-16.png";

const appController = (() => {
  function getName() {
    return projectUI.inputElement.value;
  }
  function addProject(name) {
    let project = new Project(name);
    mp.addProject(project);
    projectUI.createProjectUI(project.name, project.id);
  }
  projectUI.addProjectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = getName();
    addProject(name);
    projectUI.closeProjectInputName();
  });

  function deleteProject(id) {
    console.log(mp.projectList);
    mp.removeProject(id);
    projectUI.removeProject(id);
    console.log(mp.projectList);
  }

  projectUI.projectWrapper.addEventListener("click", (e) => {
    if (e.target.dataset.id === "remove-project") {
      const projectHeader = e.target.parentNode;
      const projectRow = projectHeader.parentNode;
      const li = projectRow.parentNode;
      const id = li.id.split("-")[1];
      deleteProject(parseInt(id));
      //more clean way would be having the same id number in data-id as the li id
    }
  });
})();

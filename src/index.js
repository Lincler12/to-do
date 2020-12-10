import { Todo } from "./Todo";
import { Project } from "./Project";
import { MainApp } from "./MainApp";
import { projectUI } from "./projectUI";
import { taskUI } from "./taskUI";

const mp = new MainApp();
const toggleTaskButtonImage = "./images/icons8-expand-arrow-16.png";

const appController = (() => {
  const project = (() => {
    function getName() {
      return projectUI.inputElement.value;
    }
    const defaultProject = () => {
      const defaultProject = new Project("default");
      defaultProject._id = 0;
      mp.addProject(defaultProject);
      projectUI.createProjectUI(defaultProject.name, defaultProject.id);
      const projectLiElement = document.getElementById("project-0");
      const projectRow = projectLiElement.querySelector(".project-row");
      projectRow.classList.remove("project-row-whitespace");
    };
    defaultProject();
    function addProject(name) {
      let project = new Project(name);
      mp.addProject(project);
      projectUI.createProjectUI(project.name, project.id);
      return project.id;
    }
    projectUI.addProjectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let name = getName();
      let id = addProject(name);
      projectUI.closeProjectInputName();
      projectUI.addProjectToTaskForm(id, name);
    });

    function deleteProject(id) {
      if (id === 0) {
        return;
      }
      console.log(mp.projectList);
      mp.removeProject(id);
      projectUI.removeProject(id);
      projectUI.removeProjectFromTaskForm(id);
      let array = taskUI.getTasksByProjectId(id);
      array.forEach((element) => {
        element.remove();
      });
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

  const tasks = (() => {
    function addTask(projectId, taskName, taskDescr, taskPrio) {
      let task = new Todo(taskName, taskDescr, taskPrio, projectId);
      console.table(mp.projectList);
      let array = mp.projectList;
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === projectId) {
          array[i].addTodo(task);
          break;
        }
      }
      // ToDo(task); //reference to object inside the array
      const taskDOMNavElement = taskUI.createTaskNavBar(
        task.id,
        task.title,
        task.priority
      );
      const taskWrapper = projectUI.getTaskWrapper(projectId);
      taskWrapper.appendChild(taskDOMNavElement);
      taskUI.createTask(
        task.id,
        projectId,
        task.title,
        task.description,
        task.priority
      );
    }

    function getTitle() {
      return taskUI.formTitleElement.value;
    }
    function getDescr() {
      return taskUI.formDescriptionElement.value;
    }
    function getPrio() {
      let elements = taskUI.formPriorityElements;
      let checkedValue;
      elements.forEach((element) => {
        if (element.checked) {
          checkedValue = element.value;
        }
      });
      return checkedValue;
    }
    function getProjectId() {
      let element = taskUI.formProjectElement;
      return parseInt(element.value);
    }

    taskUI.content.addEventListener("click", (e) => {
      if (e.target.classList.contains("button2")) {
        let card = e.target.parentNode.parentNode;
        let cardId = card.id; //'card-${id}'
        let projectId = parseInt(card.dataset.project);
        //e.target.parentNode, is on the content, we need to delete the task from the navbar also, and update the todo list
        let taskId = cardId.split("-")[1];
        card.remove(); //delete task from content
        taskUI.getNavTaskById(taskId).remove(); //delete task from sidenav
        let projectOfTask = mp.getProject(projectId);
        console.log(projectOfTask._todoList);
        projectOfTask.deleteTodo(taskId); //delete task from project todo list
        console.log(projectOfTask._todoList);
      }
    });

    taskUI.addTodoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addTask(getProjectId(), getTitle(), getDescr(), getPrio());
      taskUI.closeTaskInputForm();
    });
  })();
})();

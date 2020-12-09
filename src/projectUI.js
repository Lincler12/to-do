const projectUI = (() => {
  const projectWrapper = document.getElementById("project-wrapper");
  const addProjectForm = document.getElementById("project-form");
  const inputElement = document.getElementById("project-name");
  const getProjectName = document.getElementById("get-project-name");
  const sidenav = document.getElementById("sidenav");

  function closeProjectInputName() {
    addProjectForm.reset();
    const getProjectName = document.getElementById("get-project-name");
    getProjectName.classList.toggle("get-project-name-off");
  }
  function getProject(id) {
    const liElements = projectWrapper.querySelectorAll("li");
    let foundElement;
    return Array.from(liElements).find(
      (liElement) => liElement.id === `project-${id}`
    );
  }
  function getTaskWrapper(id) {
    const liElement = getProject(id);
    return liElement.querySelector('div[data-id="task-wrapper"]');
  }

  function removeProject(id) {
    const liElements = projectWrapper.querySelectorAll("li");
    liElements.forEach((liElement) => {
      if (liElement.id === `project-${id}`) {
        liElement.remove();
      }
    });
  }
  function createProjectUI(name, id) {
    const li = document.createElement("li");
    li.id = `project-${id}`;
    {
      const projectRow = document.createElement("div");
      projectRow.id = "project-row";
      projectRow.classList.add("project-row");
      if (!sidenav.classList.contains("show-sidenav")) {
        projectRow.classList.add("project-row-whitespace");
      }
      {
        const projectHeader = document.createElement("div");
        projectHeader.classList.add("project-header");
        {
          const toggleTaskBtn = document.createElement("img");
          toggleTaskBtn.classList.add("toggle-task-btn");
          toggleTaskBtn.src = "./images/icons8-expand-arrow-16.png";
          const projectName = document.createElement("button");
          projectName.dataset.id = "project-name";
          projectName.textContent = name;
          const removeProjectBtn = document.createElement("button");
          removeProjectBtn.textContent = "-";
          removeProjectBtn.classList.add("remove-project");
          removeProjectBtn.dataset.id = "remove-project";
          projectHeader.appendChild(toggleTaskBtn);
          projectHeader.appendChild(projectName);
          projectHeader.appendChild(removeProjectBtn);
        }
        // projectRow.appendChild(projectHeader);
        const taskWrapper = document.createElement("div");
        taskWrapper.dataset.id = "task-wrapper";
        taskWrapper.classList.add("task-wrapper");
        taskWrapper.classList.add("task-wrapper-off");
        {
          // const task = document.createElement('div');
          // task.classList.add('task');
          // {
          // 	const priorityIcon = document.createElement('div');
          // 	priorityIcon.classList.add('priority-icon');
          // 	const taskName = document.createElement('div');
          // 	taskName.classList.add('task-name');
          // 	taskName.textContent ='do the afpeosfj';
          // }
        }
        projectRow.appendChild(projectHeader);
        projectRow.appendChild(taskWrapper);
      }
      li.appendChild(projectRow);
    }
    projectWrapper.appendChild(li);
  }

  function addProjectToTaskForm(id, name) {
    const todoFormProject = document.getElementById("todo-form-projects");
    const option = document.createElement("option");
    option.value = id;
    option.id = `project-${id}`;
    option.textContent = name;
    todoFormProject.appendChild(option);
  }

  function removeProjectFromTaskForm(id) {
    const optionElement = document.getElementById(`project-${id}`);
    optionElement.remove();
  }

  return {
    createProjectUI,
    addProjectForm,
    inputElement,
    closeProjectInputName,
    removeProject,
    projectWrapper,
    getProject,
    removeProjectFromTaskForm,
    addProjectToTaskForm,
    getTaskWrapper,
  };
})();

export { projectUI };

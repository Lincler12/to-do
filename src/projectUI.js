const projectUI = (() => {
  const projectWrapper = document.getElementById("project-wrapper");

  function createProjectUI(name, id) {
    const li = document.createElement("li");
    li.id = `project-${id}`;
    {
      const projectRow = document.createElement("div");
      projectRow.id = "project-row";
      projectRow.classList.add("project-row");
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
          projectHeader.appendChild(toggleTaskBtn);
          projectHeader.appendChild(projectName);
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
  return {
    createProjectUI,
  };
})();

export { projectUI };

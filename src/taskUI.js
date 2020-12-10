import { priority } from "./priorityEnum";
const taskUI = (() => {
  const content = document.getElementsByClassName("content")[0];
  const addTodoForm = document.getElementById("todo-form");
  const todoSubmitBtn = document.getElementById("submit-todo");
  const formPriorityElements = document.getElementsByName("priority");
  const formTitleElement = document.getElementById("todo-title");
  const formDescriptionElement = document.getElementById("todo-description");
  const formProjectElement = document.getElementById("todo-form-projects");

  function closeTaskInputForm() {
    addTodoForm.reset();
    const todoModal = document.getElementById("add-todo-modal");
    todoModal.classList.toggle("add-todo-modal-off");
  }

  function getTasksByProjectId(projectId) {
    return document.querySelectorAll(`div[data-project="${projectId}"]`);
  }

  function getTaskById(id) {
    return document.getElementById(`card-${id}`);
  }

  function getNavTaskById(id) {
    return document.getElementById(`navTask-${id}`);
  }

  const createTask = (id, projectId, title, description, priorityIn) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `card-${id}`;
    card.dataset.project = projectId; //it will work as a filter
    {
      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");

      switch (priorityIn) {
        case priority.LOW.text: {
          cardHeader.style.backgroundColor = priority.LOW.color;
          break;
        }
        case priority.MEDIUM.text: {
          cardHeader.style.backgroundColor = priority.MEDIUM.color;
          break;
        }
        case priority.HIGH.text: {
          cardHeader.style.backgroundColor = priority.HIGH.color;
          break;
        }
      }

      {
        const h4 = document.createElement("h4");
        h4.textContent = title;
        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.classList.add("button2");
        deleteTaskBtn.textContent = "-";
        cardHeader.appendChild(h4);
        cardHeader.appendChild(deleteTaskBtn);
      }
      const cardBody = document.createElement("textarea");
      cardBody.classList.add("card-body");
      cardBody.value = description;
      card.appendChild(cardHeader);
      card.appendChild(cardBody);
    }
    content.appendChild(card);
  };

  const createTaskNavBar = (id, title, priorityIn) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.id = `navTask-${id}`; //task-id
    {
      const priorityIcon = document.createElement("div");
      priorityIcon.classList.add("priority-icon");
      switch (priorityIn) {
        case priority.LOW.text: {
          priorityIcon.style.backgroundColor = priority.LOW.color;
          break;
        }
        case priority.MEDIUM.text: {
          priorityIcon.style.backgroundColor = priority.MEDIUM.color;
          break;
        }
        case priority.HIGH.text: {
          priorityIcon.style.backgroundColor = priority.HIGH.color;
          break;
        }
      }
      const taskName = document.createElement("div");
      taskName.classList.add("task-name");
      taskName.textContent = title;
      taskElement.appendChild(priorityIcon);
      taskElement.appendChild(taskName);
    }
    return taskElement;
  };

  return {
    createTaskNavBar,
    createTask,
    formPriorityElements,
    addTodoForm,
    todoSubmitBtn,
    formDescriptionElement,
    formTitleElement,
    formProjectElement,
    closeTaskInputForm,
    createTask,
    getTasksByProjectId,
    content,
    getNavTaskById,
  };
})();

export { taskUI };

const taskUI = (() => {
  const content = document.getElementsByClassName("content")[0];
  const addTodoForm = document.getElementById("todo-form");
  const todoSubmitBtn = document.getElementById("submit-todo");
  const todoTitleElement = document.getElementById("todo-title");
  const todoDescriptionElement = document.getElementById("todo-description");
  const priorityElements = document.getElementsByName("priority");
  const createTask = (id, title, description, priority) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `card-${id}`;
    {
      const cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
      {
        const h4 = document.createElement("h4");
        h4.textContent = title;
        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.classList.add("button2");
        cardHeader.appendChild(h4);
        cardHeader.appendChild(deleteTaskBtn);
      }
      const cardBody = document.createElement("textarea");
      cardBody.classList.add("card-body");
    }
    content.appendChild(card);
  };

  return {
    createTask,
    addTodoForm,
    todoTitleElement,
    todoDescriptionElement,
    priorityElements,
    todoSubmitBtn,
  };
})();

export { taskUI };

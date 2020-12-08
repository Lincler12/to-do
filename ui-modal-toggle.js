const modal = (() => {
  const modalContentElement = document.getElementById("sidenav");
  const modalToggleElement = document.getElementById("modal-toggle-btn");
  const modalTaskName = document.querySelectorAll(".task-name");
  function toggleModal() {
    const modalProjectRow = document.querySelectorAll(".project-row");

    modalContentElement.classList.toggle("showSideNav");
    modalProjectRow.forEach((row) => {
      row.classList.toggle("project-row-whitespace");
    });
    // modalTaskName.forEach((task) => {
    //   task.classList.toggle("task-name-wrap");
    // });
    // modalContentElement.classList.toggle("modal-toggle-content");
  }

  function changeBars() {
    modalToggleElement.classList.toggle("change");
  }
  modalToggleElement.addEventListener("click", toggleModal);
  modalToggleElement.addEventListener("click", changeBars);
})();

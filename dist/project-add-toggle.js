const projectAddToggle = () => {
  const getProjectName = document.getElementById("get-project-name");
  const addProjectBtn = document.getElementById("add-project-btn");
  const closeBtn = getProjectName.querySelector(".close-btn");
  const input = document.getElementById("project-name");

  function toggleProjectNameInput() {
    getProjectName.classList.toggle("get-project-name-off");
  }

  function closeProjectInputName() {
    input.value = "";
    toggleProjectNameInput();
  }

  //on click in document.body close input form if open
  window.addEventListener("click", (e) => {
    if (
      e.target !== addProjectBtn &&
      !getProjectName.classList.contains("get-project-name-off")
    ) {
      closeProjectInputName();
    }
  });
  getProjectName.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  addProjectBtn.addEventListener("click", toggleProjectNameInput);
  closeBtn.addEventListener("click", closeProjectInputName);
};

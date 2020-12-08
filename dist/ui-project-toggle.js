const uiProjectToggle = (() => {
  const toggleProjectButton = document.getElementById("toggle-projects-btn");
  const projectsUl = document.querySelector("div.sidenav ul");
  const imag1 = new Image();
  imag1.src = `./images/icons8-expand-arrow-16.png`;
  const imag2 = new Image();
  imag2.src = `./images/icons8-collapse-arrow-16.png`;
  function toggleProjects() {
    projectsUl.classList.toggle("project-wrapper-off");
    if (toggleProjectButton.src === imag1.src) {
      toggleProjectButton.src = "./images/icons8-collapse-arrow-16.png";
    } else {
      toggleProjectButton.src = "./images/icons8-expand-arrow-16.png";
    }
  }

  toggleProjectButton.addEventListener("click", toggleProjects);
})();

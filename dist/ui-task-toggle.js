const toggleTaskButton = document.querySelectorAll(".toggle-task-btn");
// const taskWrapper = document.querySelectorAll
const imag3 = new Image();
imag3.src = `./images/icons8-expand-arrow-16.png`;
const imag4 = new Image();
imag4.src = `./images/icons8-collapse-arrow-16.png`;
function toggleTaskWrapper(e) {
  toggleTaskButton.forEach((btn) => {
    if (e.target === btn) {
      const taskWrapper = e.target.parentNode.parentNode.parentNode.querySelector(
        ".task-wrapper"
      );
      taskWrapper.classList.toggle("task-wrapper-off");
      if (e.target.src === imag3.src) {
        e.target.src = "./images/icons8-collapse-arrow-16.png";
      } else {
        e.target.src = "./images/icons8-expand-arrow-16.png";
      }
    }
  });
}

toggleTaskButton.forEach((button) => {
  button.addEventListener("click", toggleTaskWrapper);
});

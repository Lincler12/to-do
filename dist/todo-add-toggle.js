const todoAddToggle = (() => {
  const modal = document.getElementById("add-todo-modal");
  const toggleModalBtn = document.getElementById("add");
  const closeBtn = modal.querySelector(".close-btn");
  function modalToggle() {
    modal.classList.toggle("add-todo-modal-off");
  }
  toggleModalBtn.addEventListener("click", modalToggle);
  function closeModal() {
    modal.classList.toggle("add-todo-modal-off");
    modal.querySelector("form").reset();
  }
  closeBtn.addEventListener("click", closeModal);
})();

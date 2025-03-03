const ringButtons = document.querySelectorAll(".ring-button");

function handleColorButtonClick(e) {
  const clickedBtn = e.target;

  for (const btn of ringButtons) {
    if (btn.classList.contains("border-purple-600")) {
      btn.classList.remove("border-purple-600");
    }
    btn.classList.add("border-gray-300");
  }

  clickedBtn.classList.add("border-purple-600");
}

for (const button of ringButtons) {
  button.addEventListener("click", handleColorButtonClick);
}

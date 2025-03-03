const ringButtons = document.querySelectorAll(".ring-button");
const imageContainer = document.querySelector("#product-image");

function handleColorButtonClick(e) {
  const clickedBtn = e.target;
  const color = clickedBtn.id.replace("-color", "");
  console.log(color)

  for (const btn of ringButtons) {
    if (btn.classList.contains("border-purple-600")) {
      btn.classList.remove("border-purple-600");
    }
    btn.classList.add("border-gray-300");
  }

  clickedBtn.classList.remove("border-gray-300");
  clickedBtn.classList.add("border-purple-600");

  imageContainer.src = `../images/${color}.png`
}

for (const button of ringButtons) {
  button.addEventListener("click", handleColorButtonClick);
}

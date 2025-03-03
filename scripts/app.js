const ringButtons = document.querySelectorAll(".ring-button");
const imageContainer = document.querySelector("#product-image");

function handleColorButtonClick(e) {
  const clickedBtn = e.target;
  const color = clickedBtn.id.replace("-color", "");

  for (const btn of ringButtons) {
    if (btn.classList.contains("border-purple-600")) {
      btn.classList.remove("border-purple-600");
    }
    btn.classList.add("border-gray-300");
  }

  clickedBtn.classList.remove("border-gray-300");
  clickedBtn.classList.add("border-purple-600");

  imageContainer.src = `../images/${color}.png`;
}

for (const button of ringButtons) {
  button.addEventListener("click", handleColorButtonClick);
}

function handleWristSizeSelection(size) {
  const sizes = ["S", "M", "L", "XL"];

  for (const currentSize of sizes) {
    const button = document.querySelector(`#size-${currentSize}`);

    if (currentSize === size) {
      button.classList.remove("border-gray-300");
      button.classList.add("border-purple-600");
    } else {
      button.classList.remove("border-purple-600");
      button.classList.add("border-gray-300");
    }
  }
}

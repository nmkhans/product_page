const ringButtons = document.querySelectorAll(".ring-button");
const imageContainer = document.querySelector("#product-image");
const quantityBtns = document.querySelectorAll(".quantity-button");
const quantityElement = document.querySelector("#quantity");
const addToCart = document.querySelector("#add-to-cart");

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

for (const quantityBtn of quantityBtns) {
  quantityBtn.addEventListener("click", function (e) {
    const amount = e.target.innerText === "+" ? 1 : -1;

    const currentQuantity = parseInt(quantityElement.innerText);
    const newQuantity = Math.max(0, currentQuantity + amount);
    quantityElement.innerText = newQuantity;
  });
}

const checkOutContainer = document.querySelector(
  "#checkout-container"
);

let cart = [];

addToCart.addEventListener("click", function () {
  const currentQuantity = parseInt(
    document.querySelector("#quantity").innerText
  );

  if (currentQuantity === 0) {
    alert("Please select a quantity...");
    return;
  }

  checkOutContainer.classList.remove("hidden");
  checkOutContainer.classList.add("flex");

  const cartCount = document.querySelector("#cart-count");
  const convertedCartCount = parseInt(cartCount.innerText);

  cartCount.innerText = convertedCartCount + currentQuantity;

  const selectedColorBtn = document.querySelector(
    "button.border-purple-600.w-6"
  );
  const selectedColor = selectedColorBtn.id.split("-")[0];

  const selectedSizeBtn = document.querySelector(
    "button.border-purple-600:not(.w-6)"
  );
  const selectedSize = selectedSizeBtn.innerText.split(" ")[0];
  const selectedPrice = parseInt(
    selectedSizeBtn.innerText.split(" ")[1].replace("$", "")
  );

  cart.push({
    image: imageContainer.src,
    title: "Classy Modern Smart Watch",
    color: selectedColor,
    size: selectedSize,
    quantity: currentQuantity,
    price: currentQuantity * selectedPrice
  });

  console.log(cart)
});

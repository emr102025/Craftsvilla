const orderBtn = document.querySelector(".order-button");

const dialogMessage = document.querySelector("#dialog-message");

function showModal() {
  dialogMessage.style.display = "flex";
}

orderBtn.addEventListener("click", showModal);

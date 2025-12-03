const orderBtn = document.querySelector(".order-button");
const closeBtn = document.querySelector(".close-button");

const dialogMessage = document.querySelector("#dialog-message");

function showModal() {
  dialogMessage.style.display = "flex";
}

orderBtn.addEventListener("click", showModal);

closeBtn.addEventListener("click", () => {
  dialogMessage.style.display = "none";
});

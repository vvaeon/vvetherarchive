let popup = document.querySelector(".popup-card");
let closeBtn = document.getElementById("close-btn");
function showPopup() {
  popup.style.transform = "translateY(0)";
  setTimeout(() => {
    popup.style.transform = "translateY(-70vh)";
    setTimeout(showPopup, 6500); // Open the popup again after 12 seconds
  }, 12000);
}
closeBtn.addEventListener("click", () => {
  popup.style.transform = "translateY(-70vh)";
});
window.onload = showPopup();

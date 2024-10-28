// Toggle dropdown visibility
function toggleDropdown() {
  document.getElementById("dropdownMenu").classList.toggle("active");
}

// Close dropdown when clicking outside
window.onclick = function (event) {
  if (!event.target.matches(".profile-pic")) {
    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    }
  }
};
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
  const moreButton = document.querySelector(".menu .more");
  const lessButton = document.querySelector(".shortcuts .less");
  const shortcuts = document.querySelector(".shortcuts ul");

  moreButton.addEventListener("click", () => {
    shortcuts.classList.toggle("expanded");
    moreButton.style.display = "none";
    lessButton.style.display = "block";
  });

  lessButton.addEventListener("click", () => {
    shortcuts.classList.remove("expanded");
    moreButton.style.display = "block";
    lessButton.style.display = "none";
  });
});

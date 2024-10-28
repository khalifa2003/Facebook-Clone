// Toggle dropdown visibility

function toggleDropdown() {
  if (event.target.matches(".profile-pic")) {
    document.getElementById("dropdownMenu").classList.toggle("active");
  }
}

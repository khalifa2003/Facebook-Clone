
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  const isActive = dropdown.classList.contains("active");

  // Close any open dropdowns
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.classList.remove("active");
  });

  // Toggle the selected dropdown
  if (!isActive) {
    dropdown.classList.add("active");
  }
}

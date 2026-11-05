// Show "⌘ k" on Macs instead of "ctrl k".
document.addEventListener("DOMContentLoaded", () => {
  if (navigator.platform.toUpperCase().indexOf("MAC") >= 0) {
    const label = document.querySelector("#search-toggle .search-shortcut");
    if (label) label.textContent = "⌘ k";
  }
});

// Opens the search box. Called by the search button in the menu bar.
const openSearchModal = () => {
  // Close the mobile menu first, if it's open.
  const navbarNav = document.getElementById("navbarNav");
  if (navbarNav && navbarNav.classList.contains("show") && window.jQuery) {
    window.jQuery(navbarNav).collapse("hide");
  }
  document.querySelector("ninja-keys").open();
};

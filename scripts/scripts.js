const navLinks = document.getElementById("nav-links");

function toggleNavVisibility() {
  console.log("Hello");
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
  } else {
    navLinks.classList.add("hidden");
  }
}
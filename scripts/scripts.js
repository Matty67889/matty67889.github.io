const navLinksCont = document.getElementById("nav-links-container");

function toggleNavVisibility() {
  if (navLinksCont.classList.contains("hidden")) {
    navLinksCont.classList.remove("hidden");
  } else {
    navLinksCont.classList.add("hidden");
  }
}
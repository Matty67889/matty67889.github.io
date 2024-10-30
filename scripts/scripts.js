const navLinksCont = document.getElementById("nav-links-container");

/*
 * using DOMContentLoaded event because I don't want links to hide
 * to happen after all content is loadded, but I want
 * them to hide after the page is loaded, so I need an
 * equivalent of jQuery's document.ready()
 * Sources:
 * https://builtin.com/articles/document-ready-javascript
 */
// toggles nav link visibility when document loaded for mobile devices
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 768) {
    navLinksCont.classList.add("hidden");
  } else {
    navLinksCont.classList.remove("hidden");
  }
})

// toggles nav link visibility on window resize
// (so links don't stay open when opening links
// on mobile then going from desktop to mobile)
window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    navLinksCont.classList.add("hidden");
  } else {
    navLinksCont.classList.remove("hidden");
  }
})

function toggleLinksVisibility() {
  if (navLinksCont.classList.contains("hidden")) {
    navLinksCont.classList.remove("hidden");
  } else {
    navLinksCont.classList.add("hidden");
  }
}
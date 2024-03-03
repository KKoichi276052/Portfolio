// Declaration
const hamburgerBtn = document.querySelector("#hamburger-btn");
const nav = document.querySelector(".nav");
const cursor = document.getElementById("cursor");
const career = document.querySelector("#career");
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

// Animation
// https://greensock.com/docs/v3/Plugins/ScrollTrigger/
// https://and-ha.com/coding/gsap-scrolltriger/

// Intro animation
// gsap
//   .timeline()
//   .from(".js_intro-text-first", {
//     duration: 1,
//     autoAlpha: 0,
//     y: 30,
//   })
//   .from(".js_intro-text-second", {
//     duration: 1,
//     autoAlpha: 0,
//     y: 30,
//   })
//   .to(".js_intro", { duration: 1, autoAlpha: 0 });

function addCurrent() {
  let isActiveSet = false; // Variable to track if the active class is already set

  sections.forEach((section, i) => {
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY <= 900) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("current");
      });
      navbarLinks[0].classList.add("current");
    } else if (
      window.scrollY >= sectionOffset - 10 &&
      window.scrollY < sectionOffset + sectionHeight - 10
    ) {
      if (!isActiveSet) {
        // Check if the class is not already set
        navbarLinks.forEach((navbarLink) => {
          navbarLink.classList.remove("current");
        });
        navbarLinks[i].classList.add("current");
        isActiveSet = true; // Set the flag to true to prevent further changes
      }
    }
  });
}

// Event Listener
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open");
  nav.classList.toggle("open");
});

window.addEventListener("scroll", addCurrent);

document.body.addEventListener("mousemove", function (e) {
  (cursor.style.left = e.clientX + "px"), (cursor.style.top = e.clientY + "px");
});

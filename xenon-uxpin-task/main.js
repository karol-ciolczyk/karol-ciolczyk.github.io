import { createArticles } from "./modules/createArticles.js";
import { putHeaderContent } from "./modules/putHeaderContent.js";
import { animateImage } from "./modules/animateImage.js";

const testFetch = async function () {
  try {
    const response = await fetch(
      "https://api.buttercms.com/v2/pages/*/test-page/?preview=1&auth_token=9e7126ff4511c27e06f77181ea59ee91b10d6313"
    );
    const data = await response.json();

    createArticles(data.data.fields.articles);
    putHeaderContent(data.data.fields.heading);
  } catch (error) {
    console.log(error);
  }
};

testFetch();
animateImage(600);

/** get started opens mobile menu */

const button = document.querySelector(".navbar__rightNav__button");
const mobileNavbar = document.querySelector(".mobileNavbar");
const hamburger = document.querySelector(".hamburger");

button.addEventListener("click", (event) => {
  console.log(event);
});

hamburger.addEventListener("change", (event) => {
  console.log(event.target.checked);

  if (event.target.checked) {
    mobileNavbar.style.height = "300px";
    mobileNavbar.style.zIndex = "3";
  }
  if (!event.target.checked) {
    mobileNavbar.style.height = "0px";
    mobileNavbar.style.zIndex = "1";
  }
});

const button1 = document.querySelector(".button1");
window.addEventListener("click", (event) => {
  console.log(event, button1);
  button1.classList.add("button-move-out");
});

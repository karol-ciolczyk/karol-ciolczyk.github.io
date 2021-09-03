export const animateImage = function (duration) {
  const image1 = document.querySelector(".image-1");
  const image2 = document.querySelector(".image-2");
  const imagesContainer = document.querySelector(".image");
  const content = document.querySelector(".image__content-container");
  imagesContainer.style.height = `${image1.clientHeight}px`;
  console.log(image1);
  console.log(image1.clientWidth, image1.clientHeight);
  image2.style.top = `${image2.clientHeight}px`;

  window.addEventListener("resize", () => {
    // console.log(image1.clientWidth, image1.clientHeight);
    imagesContainer.style.height = `${image1.clientHeight}px`;
    image2.style.top = `${image2.clientHeight}px`;

    image2.style.transition = "";
  });

  content.addEventListener("mouseenter", () => {
    image1.style.transition = `${duration}ms`;
    image1.style.top = `-${image1.clientHeight}px`;

    image2.style.transition = `${duration}ms`;
    image2.style.top = `0px`;
  });
  content.addEventListener("mouseleave", () => {
    image1.style.top = ``;

    image2.style.top = `${image2.clientHeight}px`;
  });
};

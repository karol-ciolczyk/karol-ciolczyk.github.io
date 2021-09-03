const header = document.querySelector(
  ".image__content-container__content__header"
);

export const putHeaderContent = function (content) {
  console.log(content);

  if (!content) return;
  header.textContent = `${content}`;
};

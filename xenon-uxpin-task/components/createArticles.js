const articles = document.querySelector(".articles");

export const createArticles = function (array) {
  console.log(array);

  array.forEach((object) => {
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = `${object.fields.header}`;
    p.textContent = `${object.fields.text}`;
    article.append(h1);
    article.append(p);

    articles.append(article);
  });
};

const taskUI = (() => {
  const createTask = (id, title, description, priority) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.id = `${id}`;

    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.id = "card-title";
    cardTitle.textContent = ` ${title}`;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const authorWrapper = document.createElement("div");
    authorWrapper.classList.add("value-wrapper");

    const authorLabel = document.createElement("span");
    authorLabel.classList.add("author-label");
    authorLabel.textContent = "Author:";

    const authorValue = document.createElement("span");
    authorValue.classList.add("author-value");
    authorValue.textContent = ` ${author}`;

    authorWrapper.appendChild(authorLabel);
    authorWrapper.appendChild(authorValue);

    const pagesWrapper = document.createElement("div");
    pagesWrapper.classList.add("value-wrapper");

    const pagesLabel = document.createElement("span");
    pagesLabel.classList.add("pages-label");
    pagesLabel.textContent = "Pages:";

    const pagesValue = document.createElement("span");
    pagesValue.classList.add("pages-value");
    pagesValue.textContent = ` ${pages}`;

    pagesWrapper.appendChild(pagesLabel);
    pagesWrapper.appendChild(pagesValue);

    const readWrapper = document.createElement("div");
    readWrapper.classList.add("value-wrapper");

    const readLabel = document.createElement("span");
    readLabel.classList.add("read-label");
    readLabel.textContent = "Read:";

    const readValue = document.createElement("span");
    readValue.classList.add("read-value");

    readValue.textContent = read ? " yes" : " no";

    readWrapper.appendChild(readLabel);
    readWrapper.appendChild(readValue);

    cardBody.appendChild(authorWrapper);
    cardBody.appendChild(pagesWrapper);
    cardBody.appendChild(readWrapper);

    card.appendChild(cardTitle);
    card.appendChild(cardBody);

    //remove button
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.classList.add("remove");
    removeButton.dataset.cardId = `${id}`;
    const icon = document.createElement("span");
    icon.classList.add("fas");
    icon.classList.add("fa-minus");
    removeButton.appendChild(icon);
    cardBody.appendChild(removeButton);

    //toggle read state
    const toggle = document.createElement("button");
    toggle.dataset.cardId = `${id}`;
    toggle.dataset.button = "toggle";
    toggle.classList.add("toggle-button");
    toggle.textContent = "Read";
    cardBody.appendChild(toggle);

    id++;
    return card;
  };

  return {
    generateElements,
  };
})();

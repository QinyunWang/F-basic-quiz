const setEducation = (education) => {
  const item = (year, title, description) =>
    `
      <li class="education">
        <p>${year}</p>
        <div class="item">
          <p class="title">${title}</p>
          <p>
            ${description}
          </p>
        </div>
      </li>
    `;

  const addItem = (year, title, description) => {
    document.querySelector("ul").innerHTML += item(year, title, description);
  };

  const sortEducation = (data) => {
    data.sort((a, b) => a.year - b.year);
  };

  education
    .then((res) => res.json())
    .then((data) => {
      sortEducation(data);
      data.forEach((element) =>
        addItem(element.year, element.title, element.description)
      );
    });
};

export default setEducation;

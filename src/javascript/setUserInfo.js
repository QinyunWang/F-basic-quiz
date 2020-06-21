const setUserInfo = async (user) => {
  const bio = (name, age) =>
    `MY NAME IS ${name} ${age}YO AND THIS IS MY RESUME`;

  await user
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("bio").innerHTML = bio(data.name, data.age);
      document.querySelector("img").setAttribute("src", data.avatar);
      document.getElementById("description").innerHTML = data.description;
    });
};

export default setUserInfo;

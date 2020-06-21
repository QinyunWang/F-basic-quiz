import "./style/index.scss";

const baseUrl = "http://localhost:8080/users/";

const getName = async (userId) => {
  return fetch(`${baseUrl}${userId}`, {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "true",
    },
    method: "GET",
  });
};

getName("1").then((res) =>
  res.json().then((data) => {
    document.getElementById("name").innerHTML = data.name;
    document.getElementById(
      "bio"
    ).innerHTML = `MY NAME IS ${data.name} ${data.age}YO AND THIS IS MY RESUME`;
    document.querySelector("img").setAttribute("src", data.avatar);
    document.getElementById("description").innerHTML = data.description;
  })
);

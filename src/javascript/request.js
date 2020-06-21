const baseUrl = "http://localhost:8080/users/";

const getUser = async (userId) => {
  // eslint-disable-next-line no-return-await
  return fetch(`${baseUrl}${userId}`, {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "true",
    },
    method: "GET",
  });
};

const getEducation = async (userId) => {
  return fetch(`${baseUrl}${userId}/educations`, {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "true",
    },
    method: "GET",
  });
};

export { getUser, getEducation };

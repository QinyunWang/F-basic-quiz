import { getUser, getEducation } from "../request";

describe("RequestClient", () => {
  const header = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "true",
    },
    method: "GET",
  };

  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("Send get user request to backend", async () => {
    const expectedUrl = "http://localhost:8080/users/1";
    getUser("1");
    await expect(global.fetch).toHaveBeenCalledTimes(1);
    await expect(global.fetch).toHaveBeenCalledWith(expectedUrl, header);
  });

  test("Send get education request to backend", async () => {
    const expectedUrl = "http://localhost:8080/users/1/educations";
    getEducation("1");
    await expect(global.fetch).toHaveBeenCalledTimes(1);
    await expect(global.fetch).toHaveBeenCalledWith(expectedUrl, header);
  });
});

import "../app";
import { getUser, getEducation } from "../request";
import setUserInfo from "../setUserInfo";
import setEducation from "../setEducation";

jest.mock("../request");
jest.mock("../setUserInfo");
jest.mock("../setEducation");

describe("app", () => {
  test("should fetch data and set to main page", () => {
    expect(getUser).toHaveBeenCalled();
    expect(getEducation).toHaveBeenCalled();
    expect(setUserInfo).toHaveBeenCalled();
    expect(setEducation).toHaveBeenCalled();
  });
});

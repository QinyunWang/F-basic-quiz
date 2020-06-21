import { screen } from "@testing-library/dom";
import setUserInfo from "../setUserInfo";
import "@testing-library/jest-dom";

describe("Render educations", () => {
  const response = Promise.resolve({
    json: () => ({
      name: "Qinyun",
      age: 18,
      avatar: "https://i.dlpng.com/static/png/6681915_preview.png",
      description: "Gong Xi Fa Cai",
    }),
  });

  document.body.innerHTML = `
    <img src="" alt="avatar" />
    <h1 id="name"></h1>
    <h2 id="bio"></h2>
    <p id="description"></p>
  `;

  test("should render education with mocked data", async () => {
    await setUserInfo(response);
    expect(screen.queryByText("Qinyun")).toBeInTheDocument();
    expect(
      screen.queryByText("MY NAME IS Qinyun 18YO AND THIS IS MY RESUME")
    ).toBeInTheDocument();
    expect(screen.queryByAltText("avatar")).toHaveAttribute(
      "src",
      "https://i.dlpng.com/static/png/6681915_preview.png"
    );
    expect(screen.queryByText("Gong Xi Fa Cai")).toBeInTheDocument();
  });
});

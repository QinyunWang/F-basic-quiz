import { screen } from "@testing-library/dom";
import setEducation from "../setEducation";
import "@testing-library/jest-dom";

describe("Render educations", () => {
  const response = Promise.resolve({
    json: () => [
      {
        year: 2020,
        title: "ThoughtWorks",
        description: "Dev",
      },
    ],
  });

  document.body.innerHTML = `
    <ul></ul>
  `;

  test("should render education with mocked data", async () => {
    await setEducation(response);
    expect(screen.queryByText("2020")).toBeInTheDocument();
    expect(screen.queryByText("ThoughtWorks")).toBeInTheDocument();
    expect(screen.queryByText("Dev")).toBeInTheDocument();
  });
});

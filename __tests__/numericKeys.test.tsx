import React from "react";
const renderer = require("react-test-renderer");
import NumberKeys from "../components/numericKeys";

it("renders NumericKeys correctly", () => {
  const tree = renderer.create(<NumberKeys handleClick={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});

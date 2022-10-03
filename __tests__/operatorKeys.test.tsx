import React from "react";
const renderer = require("react-test-renderer");
import OperatorKeys from "../components/operatorkeys";

it("renders NumericKeys correctly", () => {
  const tree = renderer.create(<OperatorKeys handleClick={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});

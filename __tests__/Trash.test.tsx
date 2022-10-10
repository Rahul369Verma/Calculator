import React from "react";
const renderer = require("react-test-renderer");
import Trash from "../components/Trash";

it("renders NumericKeys correctly", () => {
  const tree = renderer.create(<Trash />);
  expect(tree).toMatchSnapshot();
});

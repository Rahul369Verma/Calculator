import React from "react";
const renderer = require("react-test-renderer");
import DisplayScreen from "../components/displayScreen";

it("renders DisplayScreen correctly", () => {
  const tree = renderer.create(
    <DisplayScreen next="22" total="38" operation={"+"} />
  );
  expect(tree).toMatchSnapshot();
});

import React from "react";
import { Button } from "./index";

export default {
  parameters: {
    layout: "centered",
  },
};

export const Primary = () => (
  <Button onPress={() => alert("Button pressed!")}>Secondary</Button>
);

export const Secondary = () => (
  <Button variant="secondary" onPress={() => alert("Button pressed!")}>
    Secondary
  </Button>
);

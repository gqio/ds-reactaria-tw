import React from "react";
import { Layout } from "@divriots/dockit-react/mdx-layout/dist/index";

// import { Layout } from "../../button/dist/layout.js";

import { Playground } from "@divriots/dockit-react/playground/dist/Playground.js";
import { Showcases } from "@divriots/dockit-react/showcases/dist/Showcases.js";
import { Props } from "@divriots/dockit-react/props/dist/Props.js";

import { MDXProvider } from "@mdx-js/react";

export default (props) => (
  <MDXProvider components={{ Playground, Showcases, Props }}>
    <Layout {...props} />
  </MDXProvider>
);

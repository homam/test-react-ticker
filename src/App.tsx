import * as React from "react";
import "./styles.css";

import Marquee from "react-double-marquee";

function FooComponent() {
  return (
    <div
      style={{
        width: "100%",
        whiteSpace: "nowrap"
      }}
    >
      <Marquee direction="left">
        {[...new Array(3)].map((_, i) => (
          <span key={i.toString()}>
            {i}
            Some really really really really really long text &nbsp;
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FooComponent />
    </div>
  );
}

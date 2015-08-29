import React from "react";

import LDS from "./index";

let Grid = LDS.Grid;
let Col = LDS.Col;
let PageHeader = LDS.PageHeader;

var App = React.createClass({

  render: function() {
    return (
      <Grid frame>
        <PageHeader heading="LDS Demo" title="Test123"/>
        <Grid style={{backgroundColor: "red"}}>
          <Col style={{backgroundColor: "blue"}}>
            <h1>test</h1>
          </Col>
          <Col><h1>test</h1></Col>
        </Grid>
      </Grid>
    );
  }
});

if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(<App />, document.body);
  };
}

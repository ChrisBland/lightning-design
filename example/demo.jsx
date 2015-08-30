import React from "react";

import LDS from "./index";

let Grid = LDS.Grid;
let Container = LDS.Container;
let Col = LDS.Col;
let PageHeader = LDS.PageHeader;

var App = React.createClass({

  render: function() {
    return (
      <Grid frame>
        <PageHeader heading="Lightning-React" title="Examples"/>
        <Container medium center>
            <Grid base>
              <Col>
                <Container medium>
                  <PageHeader heading="LDS Dem12o" title="Test123"/>
                </Container>
              </Col>
            </Grid>
            <hr/>
            <Grid base>
              <Col>
                <Container medium>
                  <PageHeader heading="14 Demo" title="Test123"/>
                </Container>
              </Col>
            </Grid>
        </Container>
      </Grid>
    );
  }
});

if (typeof window !== "undefined") {
  window.onload = function() {
    React.render(<App />, document.body);
  };
}

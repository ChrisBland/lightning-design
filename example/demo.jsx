import React from "react";

import LDS from "../src/index.js";

let Grid = LDS.Grid;
let Container = LDS.Container;
let Col = LDS.Col; 
let PageHeader = LDS.PageHeader;
let Spinner = LDS.Spinner;
let Card = LDS.Card;
let Button = LDS.Button;
let Badge = LDS.Badge;

var App = React.createClass({

  render: function() {
    return (
      <Grid>
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
            <PageHeader heading="UI" title="Spinners"/>
            <Grid base spread>
              <Col>
                <Spinner brand small/>
              </Col>
              <Col>
                <Spinner brand medium/>
              </Col>
              <Col>
                <Spinner brand large/>
              </Col>
            </Grid>
            <Grid base alignSpace>
              <Col>
                <Spinner  small/>
              </Col>
              <Col>
                <Spinner  medium/>
              </Col>
              <Col>
                <Spinner  large/>
              </Col>
            </Grid>
            <hr/> 
            <PageHeader heading="UI" title="Buttons"/>
            <Grid base alignSpace>
              <Col>
                <Button brand small text="Brand"/>
              </Col>
              <Col>
                <Button brand text="Band"/>
              </Col>
            </Grid>
            <Grid base alignSpace>
              <Col>
                <Button neutral small text="neutral"/>
              </Col>
              <Col>
                <Button neutral text="neutral"/>
              </Col>
            </Grid>
             <Grid base alignSpace>
              <Col>
                <Button inverse small text="Button"/>
              </Col>
              <Col>
                <Button inverse text="Button"/>
              </Col>
            </Grid>
            <hr/> 
            <PageHeader heading="UI" title="Badges"/>
            <Grid base alignSpace>
              <Col padded>
                <Badge>Default</Badge>
              </Col>
              <Col padded>
                <Badge theme="default">Default Theme</Badge>
              </Col>
              <Col padded>
                <Badge theme="shade">Shade Theme</Badge>
              </Col>
              <Col padded>
                <Badge theme="inverse">Inverse Theme</Badge>
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

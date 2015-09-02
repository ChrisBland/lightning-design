require("babel/register");
import React from "react";

import LDS from "../dist/index.js";

import {Box, Text} from "../dist/index.js";

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
          <Container large center>
            <Grid base>
              <Col>
                <PageHeader heading="Ui" title="Text"/>
                <Text heading="large">Large Heading</Text>
                <Text heading="medium">Medium Heading</Text>
                <Text heading="small">Small Heading</Text>
                <Text heading="label">Label Heading</Text>
              </Col>
            </Grid>
            <hr/> 
            <Grid base>
              <Col>
                <PageHeader heading="Ui" title="Container"/>
                <Grid>
                  <Container small>
                    <Box theme="shade">
                      <Text base>Small</Text>
                    </Box>
                  </Container>
                </Grid>
                <Grid>
                  <Container small center>
                    <Box theme="shade">
                      <Text base>Center</Text>
                    </Box>
                  </Container>
                </Grid>
                <Grid>
                  <Container small right>
                    <Box theme="shade">
                      <Text base>Right</Text>
                    </Box>
                  </Container>
                </Grid>
                <Grid>
                  <Container medium>
                  <Box theme="alt-inverse">
                    <Text base>Medium</Text>
                  </Box>
                </Container>
                </Grid>
                <Grid>
                  <Container medium center>
                    <Box theme="warning">
                      <Text base>Medium Center</Text>
                    </Box>
                  </Container>
                </Grid>
                <Grid>
                  <Container medium right>
                    <Box theme="offline">
                      <Text base>Medium right</Text>
                    </Box>
                  </Container>
                </Grid>
                <Container large>
                  <Box theme="danger">
                    <Text base>Large</Text>
                  </Box>
                </Container>
              </Col>
            </Grid>
            <hr/> 
            <PageHeader heading="UI" title="Grid"/>
            <Text heading="label">Base</Text>
            <Grid base>
              <Col>
                <Box theme="shade">
                  <span>Box 1</span>
                </Box>
              </Col>
              <Col>
                <Box theme="inverse">
                  <span>Box 2</span>
                </Box>
              </Col>
              <Col>
                <Box theme="success">
                  <span>Box 3</span>
                </Box>
              </Col>
              <Col>
                <Box theme="alt-inverse">
                  <span>Box 4</span>
                </Box>
              </Col>                 
            </Grid>
            <hr/>
            <Text heading="label">Padded</Text>
            <Grid base>
              <Col padded>
                <Box theme="shade">
                  <span>Box 1</span>
                </Box>
              </Col>
              <Col padded>
                <Box theme="inverse">
                  <span>Box 2</span>
                </Box>
              </Col>
              <Col padded>
                <Box theme="success">
                  <span>Box 3</span>
                </Box>
              </Col>
              <Col padded>
                <Box theme="alt-inverse">
                  <span>Box 4</span>
                </Box>
              </Col>                 
            </Grid>
            <hr/>  
            <Text heading="label">Nested</Text>
            <Grid base>
              <Col>
                <Box theme="shade">
                  <span>Box 1</span>
                </Box>
              </Col>
              <Col>
                <Grid base center>
                  <Col>
                    <Box theme="offline">
                      <span>Align </span>
                    </Box>
                  </Col>
                  <Col>
                    <Box theme="warning">
                      <span>Center</span>
                    </Box>
                  </Col>
                </Grid>
              </Col>
              <Col>
                <Box theme="success">
                  <span>Box 3</span>
                </Box>
              </Col>
              <Col>
                <Box theme="alt-inverse">
                  <span>Box 4</span>
                </Box>
              </Col>                 
            </Grid>
            <Grid base>
              <Col>
                <Box theme="shade">
                  <span>Box 1</span>
                </Box>
              </Col>
              <Col>
                <Grid base alignSpace>
                  <Col>
                    <Box theme="offline">
                      <span>Align</span>
                    </Box>
                  </Col>
                  <Col>
                    <Box theme="warning">
                      <span>Space</span>
                    </Box>
                  </Col>
                </Grid>
              </Col>
              <Col>
                <Box theme="success">
                  <span>Box 3</span>
                </Box>
              </Col>
              <Col>
                <Box theme="alt-inverse">
                  <span>Box 4</span>
                </Box>
              </Col>                 
            </Grid>
            <Grid base>
              <Col>
                <Box theme="shade">
                  <span>Box 1</span>
                </Box>
              </Col>
              <Col>
                <Grid base spread>
                  <Col>
                    <Box theme="offline">
                      <span>Align</span>
                    </Box>
                  </Col>
                  <Col>
                    <Box theme="warning">
                      <span>Spread</span>
                    </Box>
                  </Col>
                </Grid>
              </Col>
              <Col>
                <Box theme="success">
                  <span>Box 3</span>
                </Box>
              </Col>
              <Col>
                <Box theme="alt-inverse">
                  <span>Box 4</span>
                </Box>
              </Col>                 
            </Grid>
            <hr/> 
            <Text heading="label">Center Align</Text>
            <Grid center base>
              <Col>
                <Box theme="shade">
                  <span>Box 1</span>
                </Box>
              </Col>
              <Col>
                <Box theme="inverse">
                  <span>Box 2</span>
                </Box>
              </Col>
              <Col>
                <Box theme="success">
                  <span>Box 3</span>
                </Box>
              </Col>
              <Col>
                <Box theme="alt-inverse">
                  <span>Box 4</span>
                </Box>
              </Col>                
            </Grid>
            <hr/> 
            <Text heading="label">Spread</Text>
            <Grid spread base>
              <Col>
                <Box theme="shade">
                  <span>Box 1</span>
                </Box>
              </Col>
              <Col>
                <Box theme="inverse">
                  <span>Box 2</span>
                </Box>
              </Col>
              <Col>
                <Box theme="success">
                  <span>Box 3</span>
                </Box>
              </Col> 
              <Col>
                <Box theme="alt-inverse">
                  <span>Box 4</span>
                </Box>
              </Col>               
            </Grid>
            <hr/> 
            <Text heading="label">alignSpace</Text>
            <Grid alignSpace base>
              <Col>
                <Box theme="shade">
                  <span>Box 1</span>
                </Box>
              </Col>
              <Col>
                <Box theme="inverse">
                  <span>Box 2</span>
                </Box>
              </Col>
              <Col>
                <Box theme="success">
                  <span>Box 3</span>
                </Box>
              </Col> 
              <Col>
                <Box theme="alt-inverse">
                  <span>Box 4</span>
                </Box>
              </Col>               
            </Grid>
            <hr/> 
            <PageHeader heading="UI" title="Spinners"/>
            <Text heading="label">Brand</Text>
            <Grid base alignSpace>
              <Col>
                <Spinner brand small/>
                <Text>Small</Text>
              </Col>
              <Col>
                <Spinner brand medium/>
                <Text>medium</Text>
              </Col>
              <Col>
                <Spinner brand large/>
                <Text>Large</Text>
              </Col>
            </Grid>
            <Text heading="label">Default</Text>
            <Grid base alignSpace>
             <Col>
                <Spinner  small/>
                <Text>Small</Text>
              </Col>
              <Col>
                <Spinner  medium/>
                <Text>medium</Text>
              </Col>
              <Col>
                <Spinner  large/>
                <Text>Large</Text>
              </Col>
            </Grid>
            <hr/> 
            <PageHeader heading="UI" title="Buttons"/>
            <Box theme="default">
              <Grid base alignSpace>
                <Col>
                  <Button brand small text="Button"/>
                </Col>
                <Col>
                  <Button brand text="Button"/>
                </Col>
              </Grid>
            </Box>
            <Box theme="shade">
              <Grid base alignSpace>
                <Col>
                  <Button neutral small text="Button"/>
                </Col>
                <Col>
                  <Button neutral text="Button"/>
                </Col>
              </Grid>
            </Box>
            <Box theme="inverse">
              <Grid base alignSpace>
                <Col>
                  <Button inverse small text="Button"/>
                </Col>
                <Col>
                  <Button inverse text="Button"/>
                </Col>
              </Grid>
              
            </Box>
             
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

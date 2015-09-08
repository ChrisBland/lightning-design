require("babel/register");
import React from "react";

import LDS from "../dist/index.js";
import SelectListExample from "./components/SelectList.jsx";
import TextExample from "./components/Text.jsx";
import ContainerExample from "./components/ContainerExample.jsx";
import BadgeExample from "./components/BadgeExample.jsx";

import {Box, Text} from "../dist/index.js";
 
let Grid = LDS.Grid;
let Container = LDS.Container;
let Col = LDS.Col; 
let PageHeader = LDS.PageHeader;
let Spinner = LDS.Spinner;
let Card = LDS.Card;
let Button = LDS.Button;
let Badge = LDS.Badge;
let SelectList = LDS.SelectList;

var App = React.createClass({
  getInitialState: function(){
    return {
      selectedValue: 1
    };
  },
  changeEvt: function(changeObj){
    this.setState({
      selectedValue: changeObj.value
    });
  },
  render: function() {
    var opts = [];
    for(var i = 1; i < 25; i++){
      opts.push({label: ''+i, value: i});
    }
    return (
      <Grid base>
        <Col padded className="slds-size--1-of-6 slds-medium-size--1-of-6 slds-large-size--1-of-6">
          <Text heading="medium">React Lightning Components</Text>
          <Grid>
            <ul className="slds-list--vertical slds-has-dividers">
              <li className="slds-list__item"><a href="#select">Select List</a></li>
              <li className="slds-list__item"><a href="#text">Text</a></li>
              <li className="slds-list__item"><a href="#containers">Containers</a></li>
              <li className="slds-list__item"><a href="#badges">Badges</a></li>
            </ul>
          </Grid>
        </Col>
        <Col className="slds-size--5-of-6 slds-medium-size--5-of-6 slds-large-size--5-of-6"> 
          <PageHeader heading="Lightning-React" title="Examples"/>
          <SelectListExample/>
          <hr/>
          <TextExample/>
          <hr/>
          <ContainerExample/>
          <hr/>
          <BadgeExample/>
        </Col>
          <Container large center>
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

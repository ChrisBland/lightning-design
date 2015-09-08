import React from "react";

import {Container, Grid, Box, Col, SelectList, Text, Button, Badge} from "../../dist/index.js";
import JSXView from 'react-jsx-view';

const BadgeExample = React.createClass({
  getInitialState: function(){
    return {
      showCode: false
    };
  },
  toggleCode: function(){
    this.setState({
      showCode: !this.state.showCode
    });
  },
  code: function(){
    if(this.state.showCode){
      return (
        <JSXView>
          <Badge>Default</Badge>
          <Badge theme="default">Default Theme</Badge>
          <Badge theme="shade">Shade Theme</Badge>
          <Badge theme="inverse">Inverse Theme</Badge>
        </JSXView>
      );
    }
  },
  render: function() {
    return (
      <Container large center>
        <Grid base id="badges">
          <Col padded>
            <Text heading="medium">Badges</Text>
          </Col>
          <Col padded>
            <Button className="slds-float--right" small onClick={this.toggleCode} text="Show Code"/>
          </Col>
        </Grid>
        <Box id="text">
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
          {this.code()}
        </Box>
      </Container>
    );
  }
});

export default BadgeExample;

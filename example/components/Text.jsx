import React from "react";

import {Container, Grid, Box, Col, SelectList, Text, Button} from "../../dist/index.js";
import JSXView from 'react-jsx-view';

const TextExample = React.createClass({
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
          <Text heading="large">Large Heading</Text>
          <Text heading="medium">Medium Heading</Text>
          <Text heading="small">Small Heading</Text>
          <Text heading="label">Label Heading</Text>
        </JSXView>
      );
    }
  },
  render: function() {
    return (
      <Container large center>
        <Grid base id="text">
          <Col padded>
            <Text heading="medium">Text</Text>
          </Col>
          <Col padded>
            <Button className="slds-float--right" small onClick={this.toggleCode} text="Show Code"/>
          </Col>
        </Grid>
        <Box id="text">
          <Grid base alignSpace>
            <Text heading="large">Large Heading</Text>
            <Text heading="medium">Medium Heading</Text>
            <Text heading="small">Small Heading</Text>
            <Text heading="label">Label Heading</Text>
          </Grid>
          {this.code()}
        </Box>
      </Container>
    );
  }
});

export default TextExample;

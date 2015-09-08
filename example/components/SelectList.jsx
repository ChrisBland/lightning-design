import React from "react";

import {Container, Grid, Box, Col, SelectList, Text, Button} from "../../dist/index.js";
import JSXView from 'react-jsx-view';

const SelectListExample = React.createClass({
  getInitialState: function(){
    return {
      selectedValue: 1,
      showCode: false
    };
  },
  changeEvt: function(changeObj){
    this.setState({
      selectedValue: changeObj.value
    });
  },
  toggleCode: function(){
    this.setState({
      showCode: !this.state.showCode
    });
  },
  code: function(){
    if(this.state.showCode){
      var opts = [];
      return (
        <JSXView>
          <SelectList changeEvt={this.changeEvt}  value={this.state.selectedValue} options={opts}/>
          <SelectList filterable changeEvt={this.changeEvt}  value={this.state.selectedValue} options={opts}/>
        </JSXView>
      );
    }
  },
  render: function() {
    var opts = [];
    for(var i = 1; i < 25; i++){
      opts.push({label: ''+i, value: i});
    }
    return (
      <Container large center>
        <Grid base>
          <Col padded>
            <Text heading="medium">Select Lists</Text>
          </Col>
          <Col padded>
            <Button className="slds-float--right" small  onClick={this.toggleCode} text="Show Code"/>
          </Col>
        </Grid>
        <Box id="select">
          <Grid base alignSpace>
            <Col padded>
              <Text heading="label">Basic</Text>
              <SelectList changeEvt={this.changeEvt}  value={this.state.selectedValue} options={opts}/>
            </Col>
            <Col padded>
              <Text heading="label">Filterable</Text>
              <SelectList filterable changeEvt={this.changeEvt}  value={this.state.selectedValue} options={opts}/>
            </Col>
          </Grid>
          {this.code()}
        </Box>
      </Container>
    );
  }
});

export default SelectListExample;

import React from "react";

import {Container, Grid, Box, Col, SelectList, Text, Button} from "../../dist/index.js";

const ContainerExample = React.createClass({
  render: function() {
    return (
      <Container large center>
        <Text heading="medium">Containers</Text>
        <Box id="containers">
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
                <Text base>Small Center</Text>
              </Box>
            </Container>
          </Grid>
          <Grid>
            <Container small right>
              <Box theme="shade">
                <Text base>Small Right</Text>
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
                <Text base>Medium Right</Text>
              </Box>
            </Container>
          </Grid>
          <Grid>
            <Container large>
            <Box theme="success">
              <Text base>Large</Text>
            </Box>
          </Container>
          </Grid>
        </Box>
      </Container>
    );
  }
});

export default ContainerExample;

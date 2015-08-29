import React from "react";
import classNames from "classnames";
import Grid from "./Grid.jsx";
import Col from "./Col.jsx";

const PageHeader = React.createClass({

  render() {
    let classes = {
      "slds-page-header": true
    };
    var useTag = "<use xlink:href='/assets/icons/utility-sprite/svg/symbols.svg#down'></use>";

    return (
      <div {...this.props} className={classNames(this.props.className, classes)}>
        <Grid>
          <Col flexiTruncate>
            <p className="slds-text-heading--label">{this.props.heading}</p>
            <Grid>
              <div className="slds-grid slds-type-focus slds-no-space">
                <h1 className="slds-text-heading--medium slds-truncate" title="{this.props.title}">{this.props.title}</h1>
                <button className="slds-button slds-button--icon-bare slds-shrink-none slds-align-middle slds-m-left--x-small">
                  <svg aria-hidden="true" className="slds-button__icon" dangerouslySetInnerHTML={{__html: useTag }} />
                  <span className="slds-assistive-text">View More</span>
                </button>
              </div>
            </Grid>
          </Col>
        </Grid>
      </div>
    );
  }
});

export default PageHeader;

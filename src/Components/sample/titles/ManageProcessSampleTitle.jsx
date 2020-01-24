import React, { Component } from "react";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";

import { connect } from "react-redux";

import Paragraph from "antd/lib/typography/Paragraph";
import AddProcessSample from "../process/AddProcessSample";
const style = {
  fontSize: "medium",
  fontWeight: "600",
  alignSelf: "auto",
  padding: "10px"
};

class ManageProcessSampleTitle extends Component {
  render() {
    return (
      <FlexContainer titles leveltitles>
        <Paragraph style={style}> Process Sample</Paragraph>
        <AddProcessSample />
      </FlexContainer>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageProcessSampleTitle);

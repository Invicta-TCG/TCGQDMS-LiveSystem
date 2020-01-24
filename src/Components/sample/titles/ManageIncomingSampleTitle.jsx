import React, { Component } from "react";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";

import { connect } from "react-redux";

import Paragraph from "antd/lib/typography/Paragraph";
import AddIncoming from "../incoming/AddIncoming";

const style = {
  fontSize: "medium",
  fontWeight: "600",
  alignSelf: "auto",
  padding: "10px"
};

class ManageIncomingSampleTitle extends Component {
  render() {
    return (
      <FlexContainer titles leveltitles>
        <Paragraph style={style}> Incoming Sample</Paragraph>
        <AddIncoming />
      </FlexContainer>
    );
  }
}

const mapStateToProps = null;

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageIncomingSampleTitle);

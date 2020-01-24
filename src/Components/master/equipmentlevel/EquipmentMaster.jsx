import React, { Component } from "react";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";
import EquipmentTitleArea from "./EquipmentTitleArea";

import ManageEquipment from "./equipment/ManageEquipment";

import ManageCalibration from "./calibration/ManageCalibration";

export default class EquipmentMaster extends Component {
  state = {
    type: ""
  };

  typechange = type => {
    console.log(type);
    this.setState({ type: type });
  };

  render() {
    return (
      <FlexContainer leveltileareafixed>
        <EquipmentTitleArea type={this.typechange} />

        {this.state.type === "equipment" ? (
          <ManageEquipment />
        ) : (
          <ManageCalibration />
        )}
      </FlexContainer>
    );
  }
}

import React, { Component } from "react";
import {} from "antd";
import { globalHistory } from "@reach/router";
import PlantsTileArea from "./PlantsTileArea";
import { connect } from "react-redux";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";
import ManagePlants from "./plant/ManagePlants";
import ManageQCStaff from "./employee/ManageQCStaff";
import ManageCustomer from "./customer/ManageCustomer";
import ManageSupplier from "./supplier/ManageSupplier";
import ManageUserRoles from "./userrole/ManageUserRoles";
import ManageSupplierCategory from "./suppliercategory/ManageSupplierCategory";

class PlantMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      visible: this.props.visible
    };
  }
  componentDidMount() {
    console.log(globalHistory.location.hash);
    let orgString = globalHistory.location.hash;
    let modString = orgString.substr(0, 8);
    console.log(modString);
  }

  controlstatus = status => {
    console.log(status);
  };

  renderComponents = () => {
    if (this.props.routepath === "/plantmaster") {
      return <ManagePlants />;
    } else if (this.props.routepath === "/userrolemaster") {
      return <ManageUserRoles />;
    } else if (this.props.routepath === "/employeemaster") {
      return <ManageQCStaff />;
    } else if (this.props.routepath === "/customermaster") {
      return <ManageCustomer />;
    } else if (this.props.routepath === "/suppliermaster") {
      return <ManageSupplier />;
    } else if (this.props.routepath === "/suppliercategorymaster") {
      return <ManageSupplierCategory />;
    }
  };

  render() {
    return (
      <FlexContainer leveltileareafixed>
        <PlantsTileArea />

        {this.renderComponents()}
      </FlexContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    routepath: state.plantLevelReducers.RoutingBetweenPlantLevel.routepath
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(PlantMaster);

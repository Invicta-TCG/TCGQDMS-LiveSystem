import React, { Component } from "react";

import Paragraph from "antd/lib/typography/Paragraph";

import AddSupplierCategory from "../suppliercategory/AddSupplierCategory";
import { FlexContainer } from "../../../styledcomponents/container/FlexGrid";

const style = {
  fontSize: "medium",
  fontWeight: "600",
  alignSelf: "auto",
  padding: "10px"
};

export default class SupplierCategoryTitle extends Component {
  render() {
    return (
      <FlexContainer titles leveltitles>
        <Paragraph style={style}>Supplier Category</Paragraph>
        <AddSupplierCategory />
      </FlexContainer>
    );
  }
}

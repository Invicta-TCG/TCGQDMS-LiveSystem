import React, { Component } from "react";
import { Form, Input, Select, DatePicker } from "antd";
import { PrimaryButton } from "../../../styledcomponents/button/button";
import TextArea from "antd/lib/input/TextArea";
import "./styleIncoming.css";

export default class Addincoming extends Component {
  render() {
    return (
      <div className="addincomingFormWrapper">
        <Form className="addincomingForm" title="Add Equipment Parameter">
          <div className="addincomingFormHeadingContainer">
            <p
              style={{ marginTop: "10px", marginLeft: "15px", color: "white" }}
            >
              Add Incoming Sample
            </p>
            {/* <Divider style={{marginTop:'-5px'}}/> */}
          </div>
          <div className="addincomingFormInnerWrapper">
            {/* Code */}
            <div className="input_wrapper">
              <label for="code" className="label">
                Code:
              </label>
              <Input id="code" name="code" placeholder="Enter Cdoe" />
            </div>

            {/* Plant Name */}
            <div className="input_wrapper">
              <label for="supplier_name" className="label">
                Supplier Name:
              </label>
              <Select
                className="inputfield"
                id="supplier_name"
                name="supplier_name"
                placeholder="Enter Supplier Name"
                style={{ width: "180px" }}
              />
            </div>

            {/* Place */}
            <div className="input_wrapper">
              <label for="raw_material" className="label">
                Raw Material
              </label>
              <Select
                id="raw_material"
                name="raw_material"
                placeholder=" Raw Material"
                style={{ width: "180px" }}
              />
            </div>

            {/* T.P No */}
            <div className="input_wrapper">
              <label for=" delivered_date" className="label">
                Delivered Date
              </label>
              <DatePicker
              //   onChange={onChange}
              />
            </div>

            {/* Description  */}
            <div className="input_wrapper">
              <label for="vechical_no" className="label">
                Vechical No
              </label>
              <Input
                id="vechical_no"
                name="vechical_no"
                placeholder="Vechical No"
              />
            </div>

            <div className="input_wrapper">
              <label for="description" className="label">
                Description
              </label>
              <TextArea
                id="description"
                name="description"
                placeholder="Description"
                style={{ width: "410px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                alignContent: "right",
                marginLeft: "450px"
              }}
            >
              <PrimaryButton
                type=""
                style={{
                  marginTop: "30px",
                  marginRight: "20px",
                  background: "#001328",
                  color: "white"
                }}
              >
                Submit
              </PrimaryButton>
              <PrimaryButton style={{ marginTop: "30px" }}>Clear</PrimaryButton>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

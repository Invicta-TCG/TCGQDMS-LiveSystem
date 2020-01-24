import React, { useState, Fragment } from "react";
import FormGenerator from "../../Constant/FormGenerator";
import { FlexContainer } from "../../styledcomponents/container/FlexGrid";

const form = JSON.stringify([
  {
    name: "normal",
    label: " Weigth"
  },
  {
    name: "required",
    label: "Size"
    // type: "select",
    // options: [{ text: "hhh" }, { text: "lll" }]
  },
  {
    name: "namer",
    label: "Moisture"
  }
  //   {
  //     name: "required",
  //     label: "Required"
  //   },
  //   {
  //     name: "namer",
  //     label: "hjkhj"
  //   },
  //   {
  //     name: "namer",
  //     label: "hjkhj"
  //   },
  //   {
  //     name: "required",
  //     label: "Required"
  //   },
  //   {
  //     name: "namer",
  //     label: "hjkhj"
  //   }
]);

export default function Test() {
  return (
    <div style={{ height: "auto" }}>
      <FormGenerator
        form={JSON.parse(form)}
        submitButton={{
          text: "Calculate",
          className: "submit"
        }}
        onSubmit={form => {
          console.log(form);
        }}
        inputStyle={instyle}
        buttonStyle={btstyle}
        formStyle={fostyle}
        formDriction="column"
      />
    </div>
  );
}

const instyle = {
  width: "150px",
  boxShadow: "1px 2px 8px 1px rgba(0,0,0,0.08)"
};

const btstyle = {
  marginLeft: "550px"
};

const fostyle = {
  marginTop: "10px",
  display: "flex",
  flexDirection: "row",
  width: "660px",
  height: "auto",
  flexWrap: "wrap",
  justifyContent: "space-between",
  position: "relative",
  overflowY: "scroll",
  scrollBehavior: "smooth"
};

import React from "react";
import { FlexContainer } from "../../../styledcomponents/container/FlexGrid";

export const TestTrialTableTitles = title => {
  return (
    <FlexContainer
      style={{ height: "30px", background: "#001422", borderRadius: "15px" }}
    >
      <h3 style={{ color: "white", width: "100%" }}>{title}</h3>
    </FlexContainer>
  );
};

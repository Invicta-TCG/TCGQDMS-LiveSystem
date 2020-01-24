import React, { Component } from "react";
import { Card } from "antd";
import "./IncomingViewStyle.css";
import { ImageCard } from "../../../styledcomponents/card/ImageCard";
import { NavigationLink } from "../../../styledcomponents/Link/NavLink";
import { FlexContainer } from "../../../styledcomponents/container/FlexGrid";
import { Heading1 } from "../../../styledcomponents/typography/typography";

class IncomingViewStatus extends Component {
  render() {
    return (
      <div className="incomingViewStatus">
        <FlexContainer
          style={{ justifyContent: "space-around", paddingTop: "20px" }}
        >
          <NavigationLink to="">
            <ImageCard reports>
              <div style={{ display: "flex", padding: "5px", margin: "10px" }}>
                <Heading1>Sieve Analysis</Heading1>
              </div>
            </ImageCard>
          </NavigationLink>

          <NavigationLink to="">
            <ImageCard reports>
              <div style={{ display: "flex", padding: "5px", margin: "10px" }}>
                <Heading1>Water Demand Test</Heading1>
              </div>
            </ImageCard>
          </NavigationLink>

          <NavigationLink to="">
            <ImageCard reports>
              <div style={{ display: "flex", padding: "5px", margin: "10px" }}>
                <Heading1>Moisture Test</Heading1>
              </div>
            </ImageCard>
          </NavigationLink>

          <NavigationLink to="">
            <ImageCard reports>
              <div style={{ display: "flex", padding: "5px", margin: "10px" }}>
                <Heading1>75% Micron Test</Heading1>
              </div>
            </ImageCard>
          </NavigationLink>

          <NavigationLink to="">
            <ImageCard reports>
              <div style={{ display: "flex", padding: "5px", margin: "10px" }}>
                <Heading1>AIV Test</Heading1>
              </div>
            </ImageCard>
          </NavigationLink>
        </FlexContainer>
      </div>
    );
  }
}

export default IncomingViewStatus;

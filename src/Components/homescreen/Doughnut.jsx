import React, { Component } from "react";
import Chart from "react-apexcharts";

class Doughnut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: "450",
      height: "220",
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ["A", "B", "C", "D", "E"]
    };
  }

  componentWillMount() {
    if (window.screen.width > 1900) {
      console.log("resized for large screen");
      this.setState({
        height: "300",
        width: "800"
      });
    } else if (window.screen.width < 1440) {
      console.log("resized for medium screen");
      this.setState({
        height: "220",
        width: "450"
      });
    }
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width={this.state.width}
          height={this.state.height}
          style={{ borderRadius: "15px" }}
        />
      </div>
    );
  }
}

export default Doughnut;

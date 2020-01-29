import React, { Component } from "react";
import { Icon, Popconfirm, Divider } from "antd";
import "./styleUnit.css";

import UnitTitle from "./title/UnitTitle";
import { AntTable } from "../../styledcomponents/table/AntTabl";
// import UnitTileArea from './UnitTileArea'

export default class ManageUnit extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    searchText: "",
    visible: false,
    size: "small"
  };
  componentWillMount() {
    if (window.screen.width > 1900) {
      console.log("hooray");
      this.setState({
        size: "large"
      });
    } else if (window.screen.width < 1440) {
      this.setState({
        size: "small"
      });
    }
  }

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };

  onChange(pageNumber) {
    console.log("Page: ", pageNumber);
  }

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Code",
        dataIndex: "id",
        // width: "10%",
        key: "id",
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order
      },
      {
        title: "Unit Name",
        dataIndex: "date",
        // width: "16%",
        key: "id",
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order
      },
      {
        title: "Unit",
        dataIndex: "name",
        key: "name",
        // width: "16%",
        filters: [
          { text: "Joe", value: "Joe" },
          { text: "Jim", value: "Jim" }
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: "Action",
        key: "action",
        // width: "8%",
        render: (text, record) => (
          <span>
            <a href="no url">
              <Icon type="edit" />
            </a>
            <Divider type="vertical" />
            <a href="no url">
              <Popconfirm
                title="Are you sure you want to Delete this?"
                icon={
                  <Icon type="question-circle-o" style={{ color: "red" }} />
                }
              >
                <a href="no url">
                  <Icon type="delete"></Icon>
                </a>
              </Popconfirm>
            </a>
          </span>
        )
      }
    ];
    return (
      <AntTable
        title={() => <UnitTitle />}
        columns={columns}
        // dataSource={data}
        onChange={this.handleChange}
        pagination={{ defaultPageSize: 4 }}
        size={this.state.size}
        style={{
          background: "white",
          border: "none",
          borderRadius: "15px",
          marginLeft: "15px",
          marginTop: "20px",
          width: "800px",
          boxShadow: "8px 5px 15px 5px rgba(0, 0, 0, 0.19)"
        }}
      />
    );
  }
}

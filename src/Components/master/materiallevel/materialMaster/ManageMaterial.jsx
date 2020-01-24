/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Table, Icon, Popconfirm, Divider } from "antd";
import MaterialMasterTitle from "../titles/MaterialMasterTitle";

// const Search = Input.Search;
const data = [];

export default class ManageMaterial extends Component {
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

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

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
        dataIndex: "code",
        key: "id",
        width: "5%",
        filters: [
          { text: "Joe", value: "Joe" },
          { text: "Jim", value: "Jim" }
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.id - b.id,
        sortOrder: sortedInfo.columnKey === "id" && sortedInfo.order
      },
      {
        title: "Material Name",
        dataIndex: "plantname",
        key: "name",
        width: "6%",
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
        title: "Main Category",
        dataIndex: "place",
        key: "place",
        width: "7%",
        filters: [
          { text: "Vechical1", value: "Vechical1" },
          { text: "Vechical2", value: " Vechical2" },
          { text: "Vechical3", value: "Vechical3" },
          { text: "Vechical4", value: "Vechical4" }
        ],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === "role" && sortedInfo.order
      },
      {
        title: "Sub Category",
        dataIndex: "place",
        key: "place",
        width: "7%",
        filters: [
          { text: "Vechical1", value: "Vechical1" },
          { text: "Vechical2", value: " Vechical2" },
          { text: "Vechical3", value: "Vechical3" },
          { text: "Vechical4", value: "Vechical4" }
        ],
        filteredValue: filteredInfo.role || null,
        onFilter: (value, record) => record.role.includes(value),
        sorter: (a, b) => a.role.length - b.role.length,
        sortOrder: sortedInfo.columnKey === "role" && sortedInfo.order
      },
      // {
      //   title: "Parameter",
      //   dataIndex: "place",
      //   key: "place",
      //   width: "7%",
      //   filters: [
      //     { text: "Vechical1", value: "Vechical1" },
      //     { text: "Vechical2", value: " Vechical2" },
      //     { text: "Vechical3", value: "Vechical3" },
      //     { text: "Vechical4", value: "Vechical4" }
      //   ],
      //   filteredValue: filteredInfo.role || null,
      //   onFilter: (value, record) => record.role.includes(value),
      //   sorter: (a, b) => a.role.length - b.role.length,
      //   sortOrder: sortedInfo.columnKey === "role" && sortedInfo.order
      // },

      // {
      //   title: "Other Details",
      //   dataIndex: "detalis",
      //   key: "detalis",
      //   width: "4%",
      //   render: () => (
      //     <a onClick={this.showModal}>
      //       <Icon type="solution" />
      //     </a>
      //   )
      // },
      {
        title: "Action",
        key: "action",
        width: "4%",
        render: (text, record) => (
          <span>
            <a>
              <Icon type="edit" />
            </a>
            <Divider type="vertical" />
            <a>
              <Popconfirm
                title="Are you sure you want to Delete this?"
                icon={
                  <Icon type="question-circle-o" style={{ color: "red" }} />
                }
              >
                <a>
                  <Icon type="delete"></Icon>
                </a>
              </Popconfirm>
            </a>
          </span>
        )
      }
    ];

    return (
      <Table
        title={() => <MaterialMasterTitle />}
        columns={columns}
        dataSource={data}
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

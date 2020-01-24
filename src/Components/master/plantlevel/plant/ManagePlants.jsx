/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Icon, Popconfirm, Divider } from "antd";

import PlantMasterTitle from "../titles/PlantMasterTitle";
import { AntTable } from "../../../styledcomponents/table/AntTabl";

// const Search = Input.Search;
const data = [
  // {
  //   key: "1",
  //   code: "PR/001",
  //   plantname: "Peliyagoda",
  //   place: "Colombo",
  //   tp: "1234568",
  //   detalis: ""
  // },
  // {
  //   key: "2",
  //   code: "JR/001",
  //   plantname: "Jaffna",
  //   place: "Jaffna",
  //   tp: "1234568",
  //   detalis: ""
  // },
  // {
  //   key: "3",
  //   code: "TR/001",
  //   plantname: "Trincomalee",
  //   place: "Trincomalee",
  //   tp: "1234568",
  //   detalis: ""
  // },
  // {
  //   key: "4",
  //   code: "RR/001",
  //   plantname: "Ratmalana",
  //   place: "Ratmalana",
  //   tp: "1234568",
  //   detalis: ""
  // }
];

export default class ManagePlants extends Component {
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
        width: "4%",
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
        title: "Plant Name",
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
        title: "Address",
        dataIndex: "address",
        key: "address",
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
        title: "Contact No",
        dataIndex: "tp",
        key: "tp",
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
        title: "Other Details",
        dataIndex: "detalis",
        key: "detalis",
        width: "4%",
        render: () => (
          <a onClick={this.showModal}>
            <Icon type="solution" />
          </a>
        )
      },
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
      <AntTable
      length
        title={() => <PlantMasterTitle />}
        className="plantManageTable"
        columns={columns}
        dataSource={data}
        onChange={this.handleChange}
        pagination={{ defaultPageSize: 4 }}
        size={this.state.size}
     
      />
    );
  }
}

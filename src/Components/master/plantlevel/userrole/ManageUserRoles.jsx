/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Popconfirm, Divider, Icon } from "antd";
import UserRoleMasterTitle from "../titles/UserRoleMasterTitle";
import { AntTable } from "../../../styledcomponents/table/AntTabl";

const data = [];

export default class ManageUserRoles extends Component {
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
        key: "code",
        width: "4%",
        filters: [
          { text: "Joe", value: "Joe" },
          { text: "Jim", value: "Jim" }
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.code - b.code,
        sortOrder: sortedInfo.columnKey === "code" && sortedInfo.order
      },
      {
        title: "User Role",
        dataIndex: "user",
        key: "user",
        width: "6%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "user",
        width: "6%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Edit & Delete",
        key: "action",
        width: "7%",
        render: (text, record) => (
          <span>
            <a>
              <Icon type='edit' />
            </a>
            <Divider type='vertical' />
            <a>
              <Popconfirm
                title='Are you sure you want to Delete this?'
                icon={
                  <Icon type='question-circle-o' style={{ color: "red" }} />
                }
              >
                <a href='#'>
                  <Icon type='delete'></Icon>
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
        className='userRolesManageTable'
        title={() => <UserRoleMasterTitle />}
        columns={columns}
        dataSource={data}
        onChange={this.handleChange}
        pagination={{ defaultPageSize: 3 }}
        size={this.state.size}
      />
    );
  }
}

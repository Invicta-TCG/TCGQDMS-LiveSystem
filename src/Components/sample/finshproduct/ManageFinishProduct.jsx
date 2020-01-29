/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Popconfirm, Divider, Icon } from "antd";

import { AntTable } from "../../styledcomponents/table/AntTabl";
import ManageFinishProductSampleTitle from "../titles/ManageFinishProductSampleTitle";

const data = [];

export default class ManageFinishProduct extends Component {
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
        columnKey: "code"
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
        title: "Sample Code",
        dataIndex: "code",
        key: "code",
        width: "12%",
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
        title: "Customer Name",
        dataIndex: "customerName",
        key: "customerName",
        width: "12%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
        width: "8%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Time",
        dataIndex: "time",
        key: "time",
        width: "8%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Sample Size",
        dataIndex: "size",
        key: "size",
        width: "12%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Project Name",
        dataIndex: "projectName",
        key: "projectName",
        width: "12%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Grade",
        dataIndex: "grade",
        key: "grade",
        width: "8%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Work Order NO",
        dataIndex: "work",
        key: "work",
        width: "12%",
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.user - b.user,
        sortOrder: sortedInfo.columnKey === "user" && sortedInfo.order
      },
      {
        title: "Action",
        key: "action",
        width: "6%",
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
                <a>
                  <Icon type='delete'></Icon>
                </a>
              </Popconfirm>
            </a>
          </span>
        )
      }
    ];

    return (
      <div>
        <AntTable
          length
          nomargin
          title={() => <ManageFinishProductSampleTitle />}
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
          pagination={{ defaultPageSize: 3 }}
          size={this.state.size}
        />
      </div>
    );
  }
}

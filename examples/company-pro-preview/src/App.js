import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
import "./App.less";
import CommonTitle from "./components/CommonTitle";
import {
  Button,
  Table,
  Radio,
  Space,
  Select,
  Row,
  Col,
  Typography,
  DatePicker,
  ConfigProvider,
  Input,
} from "antd";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import { AudioOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const columns = [
  {
    title: "类型",
    dataIndex: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "名称",
    dataIndex: "age",
  },
  {
    title: "创建时间",
    dataIndex: "address",
  },
  {
    title: "点击量",
    dataIndex: "address",
  },
  {
    title: "状态",
    dataIndex: "address",
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>取消发布</a>
        <a>编辑</a>
        <a>删除</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    age: 99,
    address: "Sidney No. 1 Lake Park",
  },
];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};
function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}
const handleChange = () => {};
/**
 * 新建公告
 */
const handleAddPostClick=()=>{
  console.log(`点击新建公告`)
}
function App() {
  const [selectionType, setSelectionType] = useState("checkbox");
  return (
    <div className="App">
      <CommonTitle title="公告管理" />
      <section className="Header">
        <Row>
          <Col span={12}>
            <Button type="primary" onClick={handleAddPostClick}>新建公告</Button>
            <Button>删除</Button>
          </Col>
          <Col span={12}>
            <Select defaultValue="状态" style={{ width: 120 }} allowClear>
              <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="类型" style={{ width: 120 }} allowClear>
              <Option value="lucy">Lucy</Option>
            </Select>
            <span>创建时间</span>

            <Space direction="vertical" size={12}>
              <ConfigProvider locale={zhCN}>
                <RangePicker
                  showTime={{ format: "HH:mm" }}
                  format="YYYY-MM-DD HH:mm"
                  onChange={onChange}
                  onOk={onOk}
                />
              </ConfigProvider>
            </Space>
            <span>名称</span>
            <Search
              placeholder="名称"
              onSearch={(value) => console.log(value)}
              enterButton
              style={{ width: 200 }}
            />
          </Col>
        </Row>
      </section>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
}

export default App;

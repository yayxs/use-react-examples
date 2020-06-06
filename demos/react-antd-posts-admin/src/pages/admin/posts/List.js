import React, { useEffect } from "react";
import { Card, Table } from "antd";
import {getPostsApi} from '../../../services/post'
const dataSource = [
  {
    key: "1",
    name: "胡彦斌",
    age: 32,
    address: "西湖区湖底公园1号",
  },
  {
    key: "2",
    name: "胡彦祖",
    age: 42,
    address: "西湖区湖底公园1号",
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "住址",
    dataIndex: "address",
    key: "address",
  },
];
function List() {
  useEffect(() => {
    console.log(12)
    getPostsApi().then(res=>{
      console.log(res)
    }).catch(err=>console.log(err))
  }, []);
  return (
    <div>
      <Card
        title="帖子列表"
        extra={<a href="#">More</a>}
        style={{ width: "100%" }}
      >
        <Table dataSource={dataSource} columns={columns} />
      </Card>
    </div>
  );
}

export default List;

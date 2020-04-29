/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-28 16:46:18
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-29 11:16:12
 */
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store/index";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(this.state);
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder='Write Something'
            style={{ width: "250px", marginRight: "10px" }}
          />
          <Button type='primary'>增加</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={[]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          ></List>
        </div>
      </div>
    );
  }
}

export default TodoList;

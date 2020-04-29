/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-28 16:46:18
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-29 17:02:54
 */
import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store/index";
import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
} from "./store/actionCreate";
import axios from "axios";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    // 订阅Redux的状态
    this.storeChange = this.storeChange.bind(this);
    store.subscribe(this.storeChange);
  }
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder={this.state.inputValue}
            style={{ width: "250px", marginRight: "10px" }}
            onChange={this.changeInputValue}
            value={this.state.inputValue}
          />
          <Button type='primary' onClick={() => this.clickBtn()}>
            增加
          </Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => this.deleteList(index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
componentDidMount(){
    // 发送ajax请求
    // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res)=>{
    //     console.log(res);
    // })
}
  // 监听inpiut值
  changeInputValue(e) {
    // const action = {
    //   type: CHANGE_INPUT,
    //   value: e.target.value,
    // };
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  storeChange() {
    this.setState(store.getState());
  }
  // 点击增加
  clickBtn() {
    const action = addItemAction();
    //用dispatch方法传入store
    store.dispatch(action);
  }
  //点击删除
  deleteList(index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;

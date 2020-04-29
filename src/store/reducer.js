/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-29 10:28:51
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-29 16:00:15
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionType";
const defaultState = {
  inputValue: "Write Something",
  list: ["我们的开始", "是很长的电影", "放映了三年", "我票都还留着"],
};
export default (state = defaultState, action) => {
  // console.log(state, action);
  // Reducer里只能接受state,不能改变state
  if (action.type === CHANGE_INPUT) {
    // 深度克隆
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // 新增
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  // 删除
  if (action.type === DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};

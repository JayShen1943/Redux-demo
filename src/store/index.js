/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-29 10:25:23
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-29 17:05:23
 */
// store必须是唯一的，多个store是坚决不允许，只能有一个store空间
// 只有store能改变自己的内容，Reducer不能改变
// Reducer必须是纯函数
// applyMiddleware中间件  compose增强函数
import { createStore, applyMiddleware, compose } from "redux"; //  引入createStore方法
import reducer from "./reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(
  //只能接受2个参数
  reducer,
  enhancer
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //调试插件
); // 创建数据存储仓库
export default store; //暴露出去

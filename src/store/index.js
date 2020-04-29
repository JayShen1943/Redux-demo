/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-29 10:25:23
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-29 11:17:11
 */
import { createStore } from "redux"; //  引入createStore方法
import reducer from "./reducer";
const store = createStore(reducer); // 创建数据存储仓库
export default store; //暴露出去

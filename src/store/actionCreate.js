/*
 * @Description:
 * @Autor: 神曲
 * @Date: 2020-04-29 15:44:14
 * @LastEditors: 神曲
 * @LastEditTime: 2020-04-29 15:55:40
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from "./actionType";
export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});
export const addItemAction = () => ({
  type: ADD_ITEM,
});
export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
});

/*
 * @Author: Fone丶峰
 * @Date: 2019-11-06 14:03:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:05:26
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

import { parentComponent } from "./index";

export default {
  methods: {
    dispatch(componentName, eventName, params, parent) {
      parent = parentComponent(this, componentName)
      if (!parent) {
        return
      }
      parent.itemVal = params;
      parent.eventName = eventName;
      parent.validator(eventName, params);
    },
  },
};

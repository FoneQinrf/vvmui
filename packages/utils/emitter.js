/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-12 13:54:47
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-25 17:01:20
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
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

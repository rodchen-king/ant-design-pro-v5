/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2020-10-28 10:16:11
 * @LastEditTime: 2020-10-31 12:29:25
 * @LastEditors: rodchen
 */
import { registerFieldPlugin } from 'sula';
import { EditTable } from 'sula-register-components';  
import sula from 'sula/es/core';


/** render插件 */

// 校验字符串不存在空格
sula.validatorType('edit-table', (ctx) => {
  const { value, name } = ctx || {};
  const ErrorArray = []
  value.forEach((row, index) => {
    Object.keys(row).forEach(cell => {
      if (!row[cell]) {
        ErrorArray.push(`第${index + 1}条数据不正确`)
      }
    })
  })

  if (ErrorArray.length) {
    return Promise.reject(ErrorArray[0]);
  }

  return Promise.resolve();
});

/** field插件 */
registerFieldPlugin('editTable')(EditTable, true, true);

/** convertParams */
// registerPlugin('convertParams', 'addIdToParams', ctx => {
//   // convertParams插件，params: {id: xxx} json化
//   const { params } = ctx;
//   const { hash } = window.location;
//   const id = hash.split('/').reverse()[0];
//   return {
//     ...params,
//     id,
//   };
// });

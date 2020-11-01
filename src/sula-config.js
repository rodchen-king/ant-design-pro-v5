/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2020-11-01 18:02:20
 * @LastEditTime: 2020-11-01 18:06:58
 * @LastEditors: rodchen
 */
import { request as sulaRequest } from 'sula';

// sula的请求配置
sulaRequest.use({
  bizRequestAdapter: (requestConfig) => {
    // eslint-disable-next-line no-param-reassign
    requestConfig.url = `https://www.easy-mock.com/mock/5f9e6df90bf9ee0300940a04${ requestConfig.url}`
    return requestConfig;
  },
});
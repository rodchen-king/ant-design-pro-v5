/*
 * @Description:
 * @Author: rodchen
 * @Date: 2020-10-30 23:44:59
 * @LastEditTime: 2020-11-05 22:10:10
 * @LastEditors: rodchen
 */
// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import routes from './routes';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  sula: {
    locale: {
      default: 'zh-CN',
      // default true, when it is true, will use `navigator.language` overwrite default
      baseNavigator: true,
    },
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
    ...defaultSettings,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: routes,
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
    'layout-header-background': '#104560', // 自定义 dark siderMenu 需要修改Antd的theme layout-header-background, menu-dark-submenu-bg, menu-dark-item-active-bg
    'menu-dark-submenu-bg': '#0B3043',
    'menu-dark-item-active-bg': '#2a6590',
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // mock: {
  //   exclude: ['mock/user.ts', 'mock/listTableList.ts'],
  // },
  manifest: {
    basePath: '/',
  },
});

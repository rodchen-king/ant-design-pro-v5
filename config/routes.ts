/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2020-10-26 14:13:46
 * @LastEditTime: 2020-10-28 14:21:51
 * @LastEditors: rodchen
 */
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    code: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        code: 'sub-page',
        access: 'canAdmin',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/query-table',
    name: 'queryTable',
    code: 'queryTable',
    icon: 'crown',
    routes: [
      {
        path: '/query-table/normal-table',
        name: 'normalTable',
        code: 'normal-table',
        icon: 'smile',
        component: './QueryTable/NormalTable',
      },
      {
        path: '/query-table/normal-table/create',
        name: 'normalTable',
        code: 'normal-table-create',
        hideInMenu: true,
        icon: 'smile',
        component: './QueryTable/NormalTable/Create',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    code: 'list',
    component: './ListTableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];

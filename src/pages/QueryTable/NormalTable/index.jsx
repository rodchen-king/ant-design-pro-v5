import React from 'react';
import { QueryTable } from 'sula';
import { remoteDataSource } from './config';
import access from '@/components/access';

export const typeList = [
  {
    text: '水果',
    value: 'fruit',
  },
  {
    text: '蔬菜',
    value: 'vegetables',
  },
];
export const vegetablesList = [
  {
    text: '芹菜',
    value: 'celery',
  },
  {
    text: '大白菜',
    value: 'cabbage',
  },
];
export const fruitList = [
  {
    text: '苹果',
    value: 'apple',
  },
  {
    text: '桃子',
    value: 'peach',
  },
  {
    value: 'banana',
    text: '香蕉',
  },
];
export const customIcons = ['A', 'B', 'C', 'D', 'E'];
export const treeSelectData = [
  {
    value: 'zhejiang',
    text: '浙江',
    children: [
      {
        value: 'hangzhou',
        text: '杭州',
        children: [
          {
            value: 'xihuqu',
            text: '西湖区',
          },
        ],
      },
      {
        value: 'ningbo',
        text: '宁波',
      },
    ],
  },
  {
    value: 'shanghai',
    text: '上海',
  },
];
export const layoutList = [
  {
    value: 'horizontal',
    text: 'Horizontal',
  },
  {
    value: 'vertical',
    text: 'Vertical',
  },
  {
    value: 'inline',
    text: 'Inline',
  },
];
export const stepFormDirection = [
  {
    value: 'horizontal',
    text: 'Horizontal',
  },
  {
    value: 'vertical',
    text: 'Vertical',
  },
];
export const itemLayoutCols = [
  {
    value: 1,
    text: '一列',
  },
  {
    value: 2,
    text: '两列',
  },
  {
    value: 3,
    text: '三列',
  },
];
export const actionsPosition = [
  {
    value: 'default',
    text: '默认',
  },
  {
    value: 'center',
    text: '居中',
  },
  {
    value: 'right',
    text: '右侧',
  },
  {
    value: 'bottom',
    text: '底部',
  },
];
export const modalTypeSource = [
  {
    value: 'modal',
    text: 'modal',
  },
  {
    value: 'drawer',
    text: 'drawer',
  },
];
export const modalPluginSource = [
  {
    value: 'modalForm',
    text: 'modalForm',
  },
  {
    value: 'drawerForm',
    text: 'drawerForm',
  },
];
// form表单项基础配置
export const basicFields = [
  {
    name: 'name',
    label: '姓名',
    field: {
      type: 'input',
      props: {
        placeholder: '请输入',
      },
    },
    rules: [{ required: true, message: '请输入姓名' }],
  },
  {
    name: 'ages',
    label: '年龄',
    field: {
      type: 'inputnumber',
      props: {
        placeholder: '请输入',
        min: 1,
        max: 100,
        style: {
          width: '100%',
        },
      },
    },
    rules: [{ required: true, message: '请输入年龄' }],
  },
  {
    name: 'address',
    label: '地址',
    field: {
      type: 'textarea',
      props: {
        placeholder: '请输入',
      },
    },
  },
];
export const initialValuesForm = {
  name: 'sula',
  ages: 12,
  address: '杭州市西湖区支付宝大楼',
};

const Normatble = (props) => {
  const [formType, setFormType] = React.useState('modalForm');

  const format = props.formatMessage;

  const config = {
    layout: 'vertical',
    remoteDataSource,
    actionsRender: [
      {
        type: 'button',
        visible: ctx => {
          const selectedRowKeys = ctx.table.getSelectedRowKeys() || [];
          return selectedRowKeys.length;
        },
        props: {
          children: '批量删除',
          type: 'primary',
        },
        action: [
          ctx => {
            console.log(ctx.table.getSelectedRowKeys(), '批量删除');
          },
        ],
      },
      {
        type: 'button',
        visible: ctx => {
          const selectedRowKeys = ctx.table.getSelectedRowKeys() || [];
          return selectedRowKeys.length;
        },
        props: {
          children: '批量发布',
          type: 'primary',
        },
        action: [
          ctx => {
            console.log(ctx.table.getSelectedRowKeys(), '批量发布');
          },
        ],
      },
      {
        type: 'button',
        props: {
          children: '创建',
          type: 'primary',
        },
        action: [
          {
            type: formType,
            title: '创建',
            fields: basicFields,
            submit: {
              url: 'https://www.mocky.io/v2/5ed7a8b63200001ad9274ab5',
              method: 'POST',
            },
          },
          'refreshtable',
        ],
      },
      {
        type: 'button',
        props: {
          children: '刷新',
          type: 'primary',
        },
        action: ['refreshTable'],
      },
    ],
    fields: [
      {
        name: 'name',
        label: format({ id: 'event.name' }),
        field: 'input',
      },
    ],
    columns: [
      {
        key: 'id',
        title: 'ID',
      },
      {
        key: 'name',
        title: '姓名',
      },
      {
        key: 'nat',
        title: '国家',
      },
      {
        key: 'gender',
        title: '性别',
        render: ({ text }) => {
          return text === 'male' ? '男' : '女';
        },
      },
      {
        key: 'email',
        title: '邮箱',
      },
    ],
    rowKey: 'cell',
  };
  return (
    <div
      style={{ background: 'rgb(241, 242, 246)', padding: 16, marginTop: 16 }}
    >
      <QueryTable {...config} />
    </div>
  );
};


export default access(Normatble);
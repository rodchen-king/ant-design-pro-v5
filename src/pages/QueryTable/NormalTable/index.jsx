import React from 'react';
import { QueryTable } from 'sula';
import { remoteDataSource } from './config';
import access from '@/components/access';

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
    remoteDataSource,
    tableProps: {
      size: 'small',
    },
    itemLayout: {
      cols: 4,
      labelCol: { // label标签布局；可设置 span、offset
        span: 6
      },
      wrapperCol: { // value布局, 方式同labelCol（horizontal状态下配置）
        span: 18,
      }
    },
    layout: 'horizontal',
    rowSelection: {
      onChange: () => {
      },
    },
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
        label: '文本框',
        field: {
          type: 'input',
          props: {
            allowClear: true,
            placeholder: '请输入内容',
          }
        },
      },
      {
        name: 'name1',
        label: '单选下拉框',
        initialSource: [
          {
            text: '水果',
            value: 'fruit',
          },
          {
            text: '蔬菜',
            value: 'vegetables',
          },
        ],
        field: {
          type: 'select',
          props: {
            allowClear: true,
            placeholder: '请选择',
          },
        },
      },
      {
        name: 'remote',
        label: '下拉框接口',
        field: {
          type: 'select',
          props: {
            allowClear: true,
            placeholder: '请选择',
          },
        },
        remoteSource: {
          url: 'https://mocks.alibaba-inc.com/mock/sula_doc/demo/select.json',
          method: 'get',
        },
      },
      {
        name: 'backFormat',
        label: '日期格式',
        field: {
          type: 'datepicker',
          props: {
            placeholder: '请输入',
            valueFormat: true,
          },
        },
      },
      {
        name: 'basic',
        label: '级联',
        initialSource: [
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
        ],
        field: {
          type: 'cascader',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'name5',
        label: format({ id: 'event.name' }),
        field: 'input',
      },
      {
        name: 'name6',
        label: format({ id: 'event.name' }),
        field: 'input',
      },
      {
        name: 'name7',
        label: format({ id: 'event.name' }),
        field: 'input',
      },
    ],
    columns: [
      {
        key: 'name',
        title: '规则名称',
      },
      {
        key: 'desc',
        title: '描述',
      },
      {
        key: 'callNo',
        title: '服务调用次数',
        renrenderderText: (val) => `${val} 万`,
      },
      {
        key: 'gender',
        title: '性别',
        render: ({ text }) => {
          return text === 'male' ? '男' : '女';
        },
      },
      {
        key: 'operator',
        title: "操作",
        width: 260,
        render: [
          {
            type: 'link',
            props: {
              children: '详情',
            },
            disabled: '#{record.running}',
            action: ['refreshtable'],
          },
          {
            type: 'link',
            props: {
              children: '编辑',
            },
            action: [
              {
                type: 'route',
                path: '/query-table/normal-table/create?name=#{record.name}',
              },
            ],
          },
        ]
      },
    ],
    rowKey: 'key',
  };
  return (
    <div>
      <QueryTable {...config} />
    </div>
  );
};


export default access(Normatble);
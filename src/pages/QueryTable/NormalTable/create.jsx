import React from 'react';
import { CreateForm } from 'sula';
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import access from '@/components/access';

const Create = (props) => {
  const format = props.formatMessage;

  const config = {
    mode: 'edit',
    layout: 'horizontal',
    itemLayout: {
      labelCol: { // label标签布局；可设置 span、offset
        span: 2
      }
    },
    container: {
      type: 'card',
      props: {/*  */
        className: 'div-class'
      },
    },
    fields: [
      {
        name: 'name',
        label: '姓名',
        rules: [
          {
            required: true,
          },
        ],
        itemLayout: {
          labelCol: { // label标签布局；可设置 span、offset
            span: 2
          },
          wrapperCol: { // value布局, 方式同labelCol（horizontal状态下配置）
            span: 10,
          }
        },
        field: {
          itemLayout: {
            labelCol: { // label标签布局；可设置 span、offset
              span: 2
            },
            wrapperCol: { // value布局, 方式同labelCol（horizontal状态下配置）
              span: 10,
            }
          },
          type: 'input',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'profession',
        label: '产品',
        itemLayout: {
          labelCol: { // label标签布局；可设置 span、offset
            span: 2
          },
          wrapperCol: { // value布局, 方式同labelCol（horizontal状态下配置）
            span: 10,
          }
        },
        field: {
          type: 'input',
          props: {
            placeholder: '请输入',
          },
        },
      },
      {
        name: 'rooms',
        label: '是否上线',
        valuePropName: 'checked',
        itemLayout: {
          labelCol: { // label标签布局；可设置 span、offset
            span: 2
          },
          wrapperCol: { // value布局, 方式同labelCol（horizontal状态下配置）
            span: 10,
          }
        },
        field: 'switch',
      },
      {
        name: 'tableData',
        label: '列表数据',
        validateTrigger: 'onBlur',
        rules: [
          {
            required: true,
          },
          {
            validator: 'edit-table',
          },
        ],
        itemLayout: {
          labelCol: { // label标签布局；可设置 span、offset
            span: 2
          },
          wrapperCol: { // value布局, 方式同labelCol（horizontal状态下配置）
            span: 22,
          }
        },
        field: {
          type: 'editTable',
          props: {
            format,
            columns: [
              {
                title: '姓名',
                dataIndex: 'name',
                width: '30%',
                editable: true,
              },
              {
                title: '年龄',
                dataIndex: 'age',
                editable: true,
              },
              {
                title: '地址',
                dataIndex: 'address',
                editable: true,
              }
            ],
            addNode:  <Button
                        type="primary"
                        style={{
                          marginBottom: 16,
                          position: 'absolute',
                          right: '0'
                        }}
                      >
                        添加一行
                      </Button>,
          }
        },
      },
    ],
    remoteValues: {
      url: '/api/rule/getRuleByOne',
      method: 'get',
    },
    submit: {
      url: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed',
      method: 'POST',
    },
  };

  return (
    <>
      <CreateForm {...config} />
    </>
  );
};

export default access(Create);

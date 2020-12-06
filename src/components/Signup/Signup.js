import React, { useState,Component } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { Layout, Breadcrumb } from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


      const Signup = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

        return (
          <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout"></Layout>
        
          <div class="singup">
          <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{   
            prefix: '54',
          }}
          scrollToFirstError
          > 
        <h1>Por favor, complete los campos requeridos para registrarse</h1>

        <Form.Item
        name="name"
        label="Nombre"
        rules={[
          {
            type: 'firstname',
            message: 'The input is not valid name',
          },
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
            name="lastname"
            label="Apellido"
            rules={[
              {
                type: 'lastnome',
                message: 'The input is not valid lastname',
              },
              {
                required: true,
                message: 'Please input your lastname',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="nickname"
            label="Nombre de Usuario"
            rules={[
              {
                required: true,
                message: 'Please input your nickname!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="confirm"
            label="Repetir Contraseña"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
    
                  return Promise.reject('The two passwords that you entered do not match!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          
    
          <Form.Item
            name="residence"
            label="Dirección"
            rules={[
              {       
                required: true,
                message: 'Please select your habitual residence!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            name="phone"
            label="Teléfono"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
  
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('Should accept agreement'),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              No he leído, pero si acepto los <a href="">Términos y condiciones.</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Registrarse
            </Button>
          </Form.Item>
        </Form>
        </div>
        
        </Layout>
        );
    }


export default Signup;
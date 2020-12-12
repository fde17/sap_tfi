import React, { useState, Component } from 'react';
import {  Upload, TimePicker, Radio, Layout, Form, Input, Select, Checkbox, Button, AutoComplete} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

const { RangePicker } = TimePicker;

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
  }

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
          <Layout style={{ minHeight: '75vh' }}>
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
        <h1>Completá tus datos para poder contratar los servicios de Go Beauty</h1>

        <Form.Item
        name="name"
        label="Nombre"
        rules={[
          {
            
            message: 'El nombre que ingresaste no es válido',
          },
          {
            required: true,
            message: 'Ingresá tu nombre',
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
                
                message: 'El apellido que ingresaste no es válido',
              },
              {
                required: true,
                message: 'Ingresá tu apellido',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="sex"
            label="Sexo"
            rules={[
              {
                
                message: 'El apellido que ingresaste no es válido',
              },
              {
                required: true,
                message: 'Ingresá tu apellido',
              },
            ]}
          >
                  <Radio.Group buttonStyle="solid">
      <Radio.Button value="a">Masculino</Radio.Button>
      <Radio.Button value="b">Femenino</Radio.Button>

    </Radio.Group>


          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'El email que ingresaste no es válido',
              },
              {
                required: true,
                message: 'Ingresá tu email',
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
                message: 'Ingresá tu contraseña',
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
                message: 'confirmá tu contraseña',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
    
                  return Promise.reject('Las contraseñas no coinciden');
                },
              }),
            ]}
          >
            <Input.Password />
            </Form.Item>         
            <Form.Item label="Dirección">
        <Input.Group compact>
          <Form.Item
            name={['address', 'city']}
            noStyle
            rules={[{ required: true, message: 'Ingresá tu Localidad' }]}
          >
            <Select placeholder="Localidad">
              <Option value="Rosario">Rosario</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={['address', 'street']}
            noStyle
            rules={[{ required: true, message: 'Ingresá tu calle y número' }]}
          >
            <Input style={{ width: '80%' }} placeholder="Calle y número" />
            
          </Form.Item>
          </Input.Group>
          </Form.Item>
            <Form.Item
            name="phone"
            label="Teléfono"
            rules={[
              {
                required: true,
                message: 'Ingresá tu teléfono',
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
        name="upload"
        label="Foto de perfil"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Formatos aceptados: .jpg y .png"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Seleccionar foto</Button>
        </Upload>
      </Form.Item>

  
            <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('Para registrarse debe aceptar los términos y condiciones'),
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
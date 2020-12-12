import React from 'react';
import {  Upload, TimePicker, Radio, Layout, Form, Input, Select, Checkbox, Button, } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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


      const SignupPartner = () => {
          
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
        <h1>Para formar parte de la red de prestadores de servicios deberá completar los siguientes datos:</h1>

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
                
                message: 'El sexo no es válido',
              },
              {
                required: true,
                message: 'Seleccioná tu sexo',
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
            
            
          <Form.Item
            name="zone"
            label="Zonas de trabajo"
            rules={[
              {
                required: true,
                message: 'Ingresá al menos una zona',
              },
            ]}
          >
<Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Seleccioná tus zonas"
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="centro" label="Centro">
      <div className="demo-option-label-item">
        Centro
      </div>
    </Option>
    <Option value="norte" label="Norte">
      <div className="demo-option-label-item">
        Norte
      </div>
    </Option>
    <Option value="oeste" label="Oeste">
      <div className="demo-option-label-item">
        Oeste
      </div>
    </Option>
    <Option value="noroeste" label="Noroeste">
      <div className="demo-option-label-item">
        Noroeste
      </div>
    </Option>
    <Option value="sur" label="Sur">
      <div className="demo-option-label-item">
        Sur
      </div>
    </Option>
    <Option value="sudoeste" label="Sudoeste">
      <div className="demo-option-label-item">
        Sudoeste
      </div>
    </Option>
  </Select>
           
            </Form.Item>
            <Form.Item
            name="availability"
            label="Días y Horarios de Atención"
            rules={[
              {
                required: true,
                message: 'Ingresá al menos un día',
              },
            ]}
          >
<Select
    mode="multiple"
    style={{ width: '100%' }}
    placeholder="Seleccioná tus días de atención"
    onChange={handleChange}
    optionLabelProp="label"
  >
    <Option value="lunes" label="Lunes">
      <div className="demo-option-label-item">
        Lunes
      </div>
    </Option>
    <Option value="martes" label="Martes">
      <div className="demo-option-label-item">
        Martes
      </div>
    </Option>
    <Option value="miercoles" label="Miércoles">
      <div className="demo-option-label-item">
        Miércoles
      </div>
    </Option>
    <Option value="jueves" label="Jueves">
      <div className="demo-option-label-item">
        Jueves
      </div>
    </Option>
    <Option value="viernes" label="Viernes">
      <div className="demo-option-label-item">
        Viernes
      </div>
    </Option>
    <Option value="sabado" label="Sábado">
      <div className="demo-option-label-item">
        Sábado
      </div>
    </Option>
        <Option value="domingo" label="Domingo">
      <div className="demo-option-label-item">
        Domingo
      </div>
    </Option>
  </Select>
  <RangePicker></RangePicker>
           
            </Form.Item>
            <Form.Item
        name="tarifa"
        label="Tarifa"
        rules={[
          {
            
            message: 'Ingresá una tarifa válida',
          },
          {
            required: true,
            message: 'Ingresá tu tarifa',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
            name="type"
            label="Tipo de servicio"
            rules={[
              {
                
                message: 'El tipo de servicio no es válido',
              },
              {
                required: true,
                message: 'Seleccioná tu tipo de servicio',
              },
            ]}
          >
                  <Radio.Group buttonStyle="solid">
      <Radio.Button value="a">Barbería</Radio.Button>
      <Radio.Button value="b">Estética de manos</Radio.Button>

    </Radio.Group>


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
              No he leído, pero si acepto los <a href="https://www.argentina.gob.ar/terminos-y-condiciones">Términos y condiciones.</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" ><Link to="/signupPartnerSuccess">Registrarse</Link>
            </Button>
          </Form.Item>
        </Form>
        </div>
        </Layout>
        );
    }

export default SignupPartner;
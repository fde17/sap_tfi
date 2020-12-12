import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';

const { Content} = Layout;

const layout = {
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
    const tailLayout = {
    wrapperCol: {
    offset: 8,
    span: 16,
    },
    };

    const onFinish = (values) => {
    console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    };



    class Login extends React.Component {
    state = {
    collapsed: false,
    };

    onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    };



    render() {

    return (
        <Layout style={{ minHeight: '75vh' }}>
            
            <Layout className="site-layout"></Layout>
                <div class="container">
                <element className = "imagen-login">
                  <img src="/login.png"/>
                </element>
                    <main class="content">
                        <login class="login">
                          
                            <Content style={{ margin: '0 16px' }}>
                            
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Bienvenido</Breadcrumb.Item>
                                    <Breadcrumb.Item>Login</Breadcrumb.Item>
                                </Breadcrumb>
            <div className="site-layout-background" style={{ width: 500, padding: 20, minHeight: 360 }}>
               
            <Form
        {...layout}
        name="basic"
        initialValues={{
        remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <Form.Item
        label="Email"
        name="email"
        rules={[
            {
            required: true,
            message: 'Ingresá tu email',
            },
        ]}
        >
        <Input />
        </Form.Item>

        <Form.Item
        label="Contraseña"
        name="password"
        rules={[
            {
            required: true,
            message: 'Ingresá tu contraseña',
            },
        ]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Recordarme</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit"><Link to="/home">Ingresar</Link></Button>
        </Form.Item>
    </Form>
            </div>
            </Content>
            </login>
            

                        </main>

            

        <div class="related-post">
            <h1>En la comodidad de tu casa</h1>
        </div>
        <div class="related-post">
            
        <h1>Cuando quieras. Como quieras</h1>
        </div>
        <div class="related-post">
        <h1>El mejor precio del mercado</h1>
        </div>

        

        </div>
        

        </Layout>
    );
    }
}

export default Login;
import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';

const { Header, Content, Footer,} = Layout;

const layout = {
    labelCol: {
    span: 0,
    },
    wrapperCol: {
    span: 0,
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
        <Layout style={{ minHeight: '100vh' }}>
        <Layout className="site-layout"></Layout>
        <div class="container">
            <main class="content">
            <login class="login">
            <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Bienvenido</Breadcrumb.Item>
                <Breadcrumb.Item>Login</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ width: 500, padding: 24, minHeight: 360 }}>
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
        label="Nombre de usuario"
        name="username"
        rules={[
            {
            required: true,
            message: 'Ingresá tu nombre de usuario',
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
        <Button type="primary" htmlType="submit">
            Ingresar
        </Button>
        </Form.Item>
    </Form>
            </div>
            </Content>
            </login>

                        </main>

            <aside class="sidebar">
            <div>
            <img src="http://lorempixel.com/400/200/city/" alt="" ></img>
                <p>Go Beauty! El mejor servicio garantizado</p>
            </div>
            </aside>


        <div class="related-post">
            <h1>En la comodidad de tu casa</h1>
        </div>
        <div class="related-post">
        <h1>Cuando quieras. Como quieras</h1>
        </div>
        <div class="related-post">
        <h1>El mejor precio del mercado</h1>
        </div>

        <Footer class="footer" style={{ textAlign: 'center' }}>Go Beauty ©2020</Footer>

        </div>

        </Layout>
    );
    }
}

export default Login;
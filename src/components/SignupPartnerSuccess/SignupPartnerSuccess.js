import React from 'react';
import { Layout, Result, Button } from 'antd';

    class SignupPartnerSuccess extends React.Component {
    state = {
    collapsed: false,
    };

    onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    };



    render() {

    return (
        <Layout style={{ minHeight: '35vh' }}>
            
            <Layout className="site-layout"></Layout>
                <div class="container">
                    <main class="content">
                    <Result style={{ margin: 153, minHeight: '35vh' }} status="success" title="¡Te has dado de alta como prestador de Go Beauty!" subTitle="Necesitamos que confirmes la registración desde el correo que hemos enviado a tu casilla." 
                    extra={[
      <Button type="primary" key="home">
        Ir al menú principal
      </Button>,
    ]}
  />
          

                    </main>       
                </div>
            </Layout>
    );
    }
}
export default SignupPartnerSuccess;

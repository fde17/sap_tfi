import React from 'react';
import { Layout, Result, Button } from 'antd';
import { Link } from 'react-router-dom';

    class PurchaseSuccess extends React.Component {
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
                    <Result style={{ margin: 153, minHeight: '35vh' }} status="success" title="¡Felicitaciones! La contratación se ha realizado con éxito" subTitle="Te enviamos un email con los datos de contacto del prestador." 
                    extra={[
      <Button type="primary" key="home"><Link to="/home">Ir al menú principal</Link>
      </Button>,
    ]}
  />
          

                    </main>       
                </div>
            </Layout>
    );
    }
}
export default PurchaseSuccess;
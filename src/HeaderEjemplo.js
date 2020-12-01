import React from 'react';
import { Layout } from 'antd';


const { Header} = Layout;

class HeaderEjemplo extends React.Component {
    render(){
        return(
        <Header className="site-layout-background" style={{ padding: 0,textAlign: "right",color: "white" }} >
         Registrarse
        </Header>
        );
    }
}
export default HeaderEjemplo;
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Button } from 'antd';

const { Header} = Layout;

class HeaderEjemplo extends React.Component {

    render(){
        return(
            <Header className="site-layout-background" style={{ padding: 0,textAlign: "right",color: "white" }} >
                <Button type="primary"><Link to="/signupPartner"> Quiero ser parte de Go Beauty</Link></Button>
                <Button type="primary"><Link to="/signup"> Registrarse </Link></Button>
                             
                {this.props.mensaje}
            </Header>
        );  
    }
}

export default HeaderEjemplo;
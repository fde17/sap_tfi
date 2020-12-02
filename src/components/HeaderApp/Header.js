import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';

const { Header} = Layout;

class HeaderEjemplo extends React.Component {

    render(){
        return(
            <Header className="site-layout-background" style={{ padding: 0,textAlign: "right",color: "white" }} >
                <Link to='./home'> Home </Link>
                {this.props.mensaje}
            </Header>
        );
    }
}

export default HeaderEjemplo;
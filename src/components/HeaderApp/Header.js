import React from 'react';
import { Link } from 'react-router-dom';
import { Button,PageHeader } from 'antd';
import './header.css'
import FormItemInput from 'antd/lib/form/FormItemInput';




class HeaderEjemplo extends React.Component {
  
    render(){
        return(
            <div className="site-page-header-ghost-wrapper">
            <PageHeader style={{textAlign: "right",color: "black" }}
              extra={[
                <Button type="primary"><Link to="/signupPartner"> Quiero ser parte de Go Beauty</Link></Button>,
                <Button type="primary"><Link to="/signup"> Registrarse </Link></Button>,
                <Link to="/home"><img src="/logo70.jpg"/></Link>
              ]}
            >
            </PageHeader>
          </div>
        );  
    }
}

export default HeaderEjemplo;
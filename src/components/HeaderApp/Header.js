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
                <Link to="/home"><img src="/logo_header.png"/></Link>,
                <Button type="primary"><Link to="/signupPartner"> Quiero ser parte de Go Beauty</Link></Button>,
                <Button textAlign="left" type="primary"><Link to="/signup"> Registrarse </Link></Button>
                ]}
            >
            </PageHeader>
          </div>
        );  
    }
}

export default HeaderEjemplo;
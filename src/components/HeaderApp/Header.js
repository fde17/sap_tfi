import React from 'react';
import { Link } from 'react-router-dom';
import { Button,PageHeader } from 'antd';
import './header.css'
import FormItemInput from 'antd/lib/form/FormItemInput';




class HeaderEjemplo extends React.Component {
  
    render(){
      function gohome() {
      <Link to="/signupPartner"></Link>
        alert('Quiero ir a la homepage LPQTP!');
        
      }
        return(
            <div className="site-page-header-ghost-wrapper">
                
            <PageHeader style={{textAlign: "right",color: "black" }}
              extra={[
                <Button type="primary"><Link to="/signupPartner"> Quiero ser parte de Go Beauty</Link></Button>,
                <Button type="primary"><Link to="/signup"> Registrarse </Link></Button>,
                
                <element className="header-figure"> 
                  
                  <img src="/logo70.jpg"  onClick={gohome}/>

                </element>
              ]}
            >
              
            </PageHeader>
            
           
          </div>
        );  
    }
}

export default HeaderEjemplo;
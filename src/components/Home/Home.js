import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer,} = Layout;

class Home extends Component {

    render() {

        return ( 
            <Layout style = {{ minHeight: '75vh' }}>
                <Layout className = "site-layout" ></Layout>
                <div class="container">
                  <main class="content">
                   <login class="login">
                       Home
                   </login>
                  </main>
                </div>  
                <Footer class="footer" style={{ color: 'white', height: 100, backgroundColor: 'black', textAlign: 'center' }}>Go Beauty ©2020</Footer>            
            </Layout>
        );
    }
}


export default Home;
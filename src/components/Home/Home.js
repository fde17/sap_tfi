import React, { Component } from 'react';
import { Layout } from 'antd';
import { Select, Button, TimePicker, DatePicker, Space } from 'antd';

const { RangePicker } = TimePicker;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

const { Content, Footer,} = Layout;

class Home extends Component {

    render() {

        return ( 
            <Layout style = {{ minHeight: '10vh' }}>
                <Layout className = "site-layout" ></Layout>
                <div class="container">
                  <main class="content">
                   {/* <landing class="landing">
                    <Content style={{ borderColor: 'red', margin: '0 16px' }}>
                       Landing
                    </Content>
                   </landing> */}
                   <searchbox class="searchbox">
                   <Select defaultValue="Servicio de barbería" style={{ width: 240 }} onChange={handleChange}>
      <Option value="Servicio de barbería">Servicio de barbería</Option>
      <Option value="Servicio de uñas">Servicio de uñas</Option>

    </Select>
                        <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                        </Space>,
                        <RangePicker />
                        <Button type="primary">Buscar</Button>
                   </searchbox>
                   <results class="results">
                       Resultados
                   </results>
                  </main>
                </div>  
                <Footer class="footer" style={{ color: 'white', height: 100, backgroundColor: 'black', textAlign: 'center' }}>Go Beauty ©2020</Footer>            
            </Layout>
        );
    }
}


export default Home;
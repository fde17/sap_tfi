import React, { Component } from 'react';
import { Layout } from 'antd';
import { Card, Avatar, Select, Button, TimePicker, DatePicker, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { RangePicker } = TimePicker;
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(date, dateString) {
  console.log(date, dateString);
}

const { Footer,} = Layout;

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
                   <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="Barbero"
        src="https://image.freepik.com/vector-gratis/hombre-barbero-mascota-corte-barberia_165162-68.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhe_WQzorfVFJOrUD-6efvTYZrm5JchNdeA&usqp=CAU" />}
      title="Nico Delñoca"
      description="Barbero junior"
    />
  </Card>,
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="Barbero"
        src="https://image.freepik.com/vector-gratis/hombre-barbero-mascota-corte-barberia_165162-68.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhe_WQzorfVFJOrUD-6efvTYZrm5JchNdeA&usqp=CAU" />}
      title="Javier Laley"
      description="Barbero senior"
    />
  </Card>,
  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="Barbero"
        src="https://image.freepik.com/vector-gratis/hombre-barbero-mascota-corte-barberia_165162-68.jpg"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhe_WQzorfVFJOrUD-6efvTYZrm5JchNdeA&usqp=CAU" />}
      title="Sergio Panqueque"
      description="Barbero semisenior"
    />
  </Card>,
                   </results>
                  </main>
                </div>  
                <Footer class="footer" style={{ color: 'white', height: 100, backgroundColor: 'black', textAlign: 'center' }}>Go Beauty ©2020</Footer>            
            </Layout>
        );
    }
}


export default Home;
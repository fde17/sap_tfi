import React, { Component } from 'react';
import { Layout } from 'antd';
import { Rate, Avatar, Drawer, List, Divider, Col, Row, Button,} from 'antd';
import { Link } from 'react-router-dom';
// import {Select, TimePicker, DatePicker, Space } from 'antd';
//import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

//const { Meta } = Card;
// const { RangePicker } = TimePicker;
// const { Option } = Select;

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

// function onChange(date, dateString) {
//   console.log(date, dateString);
// }

const {Content} = Layout;

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );

class Home extends Component {
    
    state = { visible: false };

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };

    render() {

        return ( 
            <Layout style = {{ minHeight: '10vh' }}>
                <Layout className = "site-layout" ></Layout>
                <div class="container">
                  <main class="content">
                   <landing class="landing">
                    <Content style={{ borderColor: 'red', margin: '0 16px',color:"black" }}>
                      <h1>Elegí uno de nuestros representantes</h1>
                    </Content>
                   </landing>
                   {/* <searchbox class="searchbox">
                   <Select defaultValue="Servicio de barbería" style={{ width: 240 }} onChange={handleChange}>
      <Option value="Servicio de barbería">Servicio de barbería</Option>
      <Option value="Servicio de uñas">Servicio de uñas</Option>

    </Select>
                        <Space direction="vertical">
                            <DatePicker onChange={onChange} />
                        </Space>,
                        <RangePicker />
                        <Button type="primary">Buscar</Button>
                   </searchbox> */}
                   <results class="results">
                   <List
          dataSource={[
            {
              name: 'Nicolas',
            },
            {
              name: 'Juan',
            },
            {
                name: 'Mía',
              },
              {
                name: 'Javier',
              },
              {
                name: 'Francisco',
              },
              {
                name: 'Carlos',
              },
              {
                name: 'Damian',
              },
              {
                name: 'Alex',
              },
              {
                name: 'Noelia',
              },
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <a>
                <Rate disabled defaultValue={4} />
            </a>,
                <a>
                <Button type="primary" htmlType="submit"><Link to="/purchase">Seleccionar</Link></Button>

              </a>,
                <a onClick={this.showDrawer} key={`a-${item.id}`} >
                  Ver perfil
                </a>
               
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://image.freepik.com/vector-gratis/hombre-barbero-mascota-corte-barberia_165162-68.jpg" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Barbero profesional"
              />
            </List.Item>
          )}
        />
        <Drawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
            Perfil
          </p>
          <p className="site-description-item-profile-p">Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Nombre" content="Nicolas" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="e-Mail" content="AntDesign@example.com" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Ciudad" content="HangZhou" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Pais" content="China🇨🇳" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Fecha de nacimiento" content="February 2,1900" />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Company</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Profesión" content="Barbero" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="Corte de cabello, corte, cuidado y tratamiento de barba"
              />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="e-Mail" content="AntDesign@example.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Número de teléfono" content="+86 181 0000 0000" />
            </Col>
          </Row>
        </Drawer>
                   </results>
                  </main>
                </div>  
            </Layout>
        );
    }
}


export default Home;
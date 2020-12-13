import React, { Component } from 'react';
import { Layout } from 'antd';
import { Avatar, Drawer, List, Divider, Col, Row, Button } from 'antd';



const {Content} = Layout;

const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">{title}:</p>
      {content}
    </div>
  );

class HomePartner extends Component {

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
            <Layout style = {{ minHeight: '75vh' }}>
                <Layout className = "site-layout" ></Layout>
                <div class="container">
                  <main class="content">
                   <landing class="landing">
                    <Content style={{ borderColor: 'red', margin: '0 16px',color:"black" }}>
                      <h1>Estos son tus servicios contratados</h1>
                    </Content>
                   </landing>
                   <results class="results">
                   <List
          dataSource={[
            {
              name: 'Adrian Sak',
            },
            {
              name: 'Juan Larrea',
            },
            {
                name: 'Mía Molina',
              },
              {
                name: 'Javier Laland',
              },
              {
                name: 'Francisco Puch',
              },
              {
                name: 'Carlos Vanette',
              },
              {
                name: 'Damian Saldari',
              },
              {
                name: 'Alex Sabina',
              },
              {
                name: 'Noelia Marzan',
              },
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <Button type="primary" onClick={this.showDrawer}>Ver más</Button>                              
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://image.freepik.com/vector-gratis/hombre-barbero-mascota-corte-barberia_165162-68.jpg" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Lunes 04/01/2021 18 hs."
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


export default HomePartner;
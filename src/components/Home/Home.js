import React, { Component } from 'react';
import { Layout } from 'antd';
import { Rate, Card, Avatar, Drawer, List, Divider, Col, Row, Button,} from 'antd';
// import {Select, TimePicker, DatePicker, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;
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
                    <Content style={{ borderColor: 'red', margin: '0 16px' }}>
                       Landing
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
              name: 'Lily',
            },
            {
              name: 'Lily',
            },
          ]}
          bordered
          renderItem={item => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={this.showDrawer} key={`a-${item.id}`}>
                  View Profile
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser XTech"
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
            User Profile
          </p>
          <p className="site-description-item-profile-p">Personal</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Lily" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Account" content="AntDesign@example.com" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Website" content="-" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
              />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Company</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Position" content="Programmer" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Responsibilities" content="Coding" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Department" content="XTech" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </Col>
          </Row>
          <Divider />
          <p className="site-description-item-profile-p">Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="AntDesign@example.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content={
                  <a href="http://github.com/ant-design/ant-design/">
                    github.com/ant-design/ant-design/
                  </a>
                }
              />
            </Col>
          </Row>
        </Drawer>
        <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="Barbero"
        src="https://image.freepik.com/vector-gratis/hombre-barbero-mascota-corte-barberia_165162-68.jpg"
      />
    }
    actions={[
        <Button type="primary">Seleccionar</Button>,
        <Button>Ver perfil</Button>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhe_WQzorfVFJOrUD-6efvTYZrm5JchNdeA&usqp=CAU" />}
      title="Nico Delñoca"
      description="Barbero junior"
    />
    <Rate disabled defaultValue={2} />
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
    <Rate disabled defaultValue={3} />
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
    <Rate disabled defaultValue={5} />
  </Card>,
                   </results>
                  </main>
                </div>  
            </Layout>
        );
    }
}


export default Home;
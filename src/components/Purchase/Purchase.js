import React from 'react';
import { Button, Layout, Card, Avatar, DatePicker, Space, TimePicker  } from 'antd';
import moment from 'moment';


const {Content} = Layout;

const { Meta } = Card;

function onChange(date, dateString) {
    console.log(date, dateString);
  }

function onChangeTP(time, timeString) {
   console.log(time, timeString);
 }

    class SignupPartnerSuccess extends React.Component {
    state = {
    collapsed: false,
    };

    onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    };
    



    render() {

    return (
        <Layout style={{ minHeight: '35vh' }}>
            
            <Layout className="site-layout"></Layout>
                <div class="container">
                    <main class="content">
                    <landing class="landing">
                    <Content style={{ borderColor: 'red', margin: '0 16px',color:"black" }}>
                      <h1>Elegí el día y la hora</h1>
                    </Content>
                   </landing>
                    <Card
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        src="https://image.freepik.com/vector-gratis/hombre-barbero-mascota-corte-barberia_165162-68.jpg"
      />
    }
    
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Javier Mele"
      description="Barbero senior"
    />
  </Card>
  <div className= "purchase" style={{ marginBottom: '119px' }}>
  <Space style={{ marginTop: '35px' }} direction="vertical">
    <DatePicker onChange={onChange} />
  </Space>
  <TimePicker style={{ margin: '20px' }} onChange={onChangeTP} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
  <Button type="primary">Contratar</Button>
  </div>                 

                    
          

                    </main>       
                </div>
            </Layout>
    );
    }
}
export default SignupPartnerSuccess;
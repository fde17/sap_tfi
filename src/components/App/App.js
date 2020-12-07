import React from 'react';
import Header from '../HeaderApp'
import Footer from '../FooterApp'

class App extends React.Component {
  render () {
    return (
      <div id='appContainer' className='appContainerGlobal'>
            <Header/>
            {this.props.children}
          <Footer/>
      </div>
    );
  }
}

export default App; 
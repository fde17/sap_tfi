import React from 'react';
import Header from '../HeaderApp'

class App extends React.Component {
  render () {
    return (
      <div id='appContainer' className='appContainerGlobal'>
            <Header mensaje="Registrarse" />
            {this.props.children}
          {/* aca iria el footer */}
      </div>
    )
  }
}

export default App;
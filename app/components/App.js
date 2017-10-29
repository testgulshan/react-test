import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Userform from './Userform';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Gulshan kumar',
    };
  }

  render() {
    return (
      <div className="site-container">
        <Header user={this.state.name} />
        <div className="main-content">
          <Userform user="Gulshan kumar" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

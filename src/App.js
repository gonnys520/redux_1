import React, { Component } from 'react';
import ControllPanel from "./component/ControllPanel"
import BillBoard from "./component/BillBoard"

class App extends Component {
  render() {
    return (
      <div className="App">
        <ControllPanel/>
        <BillBoard area='서울'/>
          <BillBoard area='대전'/>
          <BillBoard area='대구'/>
          <BillBoard area='부산'/>
      </div>
    );
  }
}

export default App;

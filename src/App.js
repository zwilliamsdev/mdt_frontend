import React from 'react';
import { Navbar } from './components/Navbar';
import { Message } from './components/Message';
import { Messages } from './components/Messages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* <Message /> */}
        <Messages />
      </div>
    </div>
  );
}

export default App;

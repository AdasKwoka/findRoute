import { useState } from 'react';

import DestinationPanel from './components/DestinationPanel';
import Form from './components/Form';

import './styles/App.css';

function App() {
  const [destination, setDestination] = useState("");

  return (
    <div className="wrapper">
      <Form setDestination={setDestination}/>
      <DestinationPanel destination={destination}/>
    </div>
  );
}

export default App;

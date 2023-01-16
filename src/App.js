import { BrowserRouter } from 'react-router-dom';
import Wrapper from './components/Wrapper';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Wrapper />
      </div>
    </BrowserRouter>
  );
}

export default App;

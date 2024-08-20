import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import InstrumentsList from './components/InstrumentList';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<InstrumentsList />} />        
        </Routes>
      </Router>
  );
};

export default App;

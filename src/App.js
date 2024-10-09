import logo from './logo.svg';
import './App.css';
import Mui from './Components/Mui';
// import documentat
// import Documentation_page from './Components/Documentation_page';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PermanentDrawerLeft from './Components/Documentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Mui />} />
        <Route path="/documentation_page/*" element={<PermanentDrawerLeft />} />
      </Routes>
    </Router>
  );
}


export default App;

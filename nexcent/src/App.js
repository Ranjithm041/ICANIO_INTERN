import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact'
import Help from './pages/Help';

function App() {
  return (
    <>
     <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/> 
        <Route path='/Help' element={<Help/>}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import ErrorPage from './Pages/ErrorPage'
import Navbarr from './Components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Navbarr></Navbarr>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/Profile/:id_user' element={<Profile/>} />
       <Route path='*' element={<ErrorPage/>} />

      </Routes>
    </Router>
  );
}

export default App;

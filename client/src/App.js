import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './component/Navbar';
import Home from './component/Home';
import Register from './component/Register';
import {BrowserRouter , Route, Routes} from 'react-router-dom'

import Detail from './component/Detail';

function App() {
  return (
   <>
   
  
   <Navbar />
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/register' element={<Register />}></Route>
   
    <Route path='/view/:id' element={<Detail />}></Route>
   </Routes>
   </BrowserRouter>

   
 
   </>
  );
}

export default App;

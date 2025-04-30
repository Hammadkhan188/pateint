
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Register from './Component/Register';
import Showdata from './Component/Showdata';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Register/>}/>
        <Route path='/get' element={<Showdata/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

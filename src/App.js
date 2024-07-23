
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Electronics from './pages/Electronics.jsx';
import Payments from './components/payments.jsx';


function App() {
  return (
    <div className="App">
         
        
         <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Electronics" element={<Electronics />} />
                    <Route path='/Payments' element={<Payments/>}/>
                     
                 </Routes>   
        </BrowserRouter>

    </div>
  );
}

export default App;

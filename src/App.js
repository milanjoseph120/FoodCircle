import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import RestView from './pages/RestView';
import Header from './components/Header';
import Foot from './components/Foot';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path ='/Restaurant_view/:id' element={<RestView/>} />
     </Routes>
     <Foot/>
    </div>
  );
}

export default App;

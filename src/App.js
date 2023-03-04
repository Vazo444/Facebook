import { Route, Routes } from 'react-router-dom';
import './App.css';
import Frineds from './Components/Friends/Frineds';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Marketplace from './Components/Marketplace/Marketplace';
import MyProfil from './Components/MyProfil/MyProfil';
import Reels from './Components/Reels/Reels';
import HomeWraper from './pages/HomeWraper';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeWraper />}>
        <Route  index element={<Home />}/>
        <Route path='friends' element={<Frineds />}/>
        <Route path='reels' element={<Reels />}/>
        <Route path='marketplace' element={<Marketplace />}/>
        <Route path='myprofil' element={<MyProfil />}/>
      </Route>
      <Route path='/login' element={<Login />}/>
    </Routes>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import StartPages from './pages/StartPages';
import UploadPages from './pages/UploadPage';  
import SkinTypePages from './pages/SkinTypePages';  
import MarketPages from './pages/MarketPages'; 
import SdrKeringPgs from './pages/SdrKeringPgs'; 
import SdrBerminyakPgs from './pages/SdrBerminyakPgs';
import KondisiPages from './pages/KondisiPages';
import LoginPages from './pages/LoginPages';
import SignUpPages from './pages/SignUpPages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartPages />} />
        <Route path='/upload' element={<UploadPages />} />
        <Route path='/tipeKulit' element={<SkinTypePages />} />
        <Route path='/market' element={<MarketPages />} />
        <Route path='/ukur-kering' element={<SdrKeringPgs />} />
        <Route path='/ukur-minyak' element={<SdrBerminyakPgs />} />
        <Route path='/kondisiKulit' element={<KondisiPages />} />
        <Route path='/Login' element={<LoginPages />} />
        <Route path='/SignUp' element={<SignUpPages />} />
      </Routes>
    </Router>
  )
}

export default App




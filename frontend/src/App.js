import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Start from './components/Start';
import Upload from './components/Upload';  
import SkinType from './components/SkinType';  
import Market from './components/Market'; 
import SdrKering from './components/SdrKering'; 
import SdrBerminyak from './components/SdrBerminyak';
import KondisiKulit from './components/KondisiKulit';
import Kandungan from './components/Kandungan';
import JenisSkincare from './components/JenisSkincare';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProdukToner from './components/ProdukToner';
import Market2 from './components/Market2';
import ProductScreen from './components/productScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/tipeKulit' element={<SkinType />} />
        <Route path='/market' element={<Market />} />
        <Route path='/ukur-kering' element={<SdrKering />} />
        <Route path='/ukur-minyak' element={<SdrBerminyak />} />
        <Route path='/kondisiKulit' element={<KondisiKulit />} />
        <Route path='/kandungan-kulit' element={<Kandungan />} />
        <Route path='/jenis-skincare' element={<JenisSkincare />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/produk-toner' element={<ProdukToner />} />
        <Route path='/market2' element={<Market2 />} />
        <Route path='/product/:slug' element={<ProductScreen />} />
      </Routes>
    </Router>
  )
}

export default App




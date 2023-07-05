import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Start from './components/Start';
import Upload from './components/Upload';  
import SkinType from './components/SkinType';  
import Market from './pages/Market'; 
<<<<<<< HEAD
=======
//import Market from './components/Market'; 
>>>>>>> 6d1783120e3da652515dea75ecfbb16bfa3b9565
import SdrKering from './components/SdrKering'; 
import SdrBerminyak from './components/SdrBerminyak';
import KondisiKulit from './components/KondisiKulit';
import Kandungan from './components/Kandungan';
import JenisSkincare from './components/JenisSkincare';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProdukToner from './components/ProdukToner';
import Market2 from './components/Market2';
import ProductScreen from './pages/ProductScreen';
import Cart from './pages/Cart';
<<<<<<< HEAD
=======
//import ProductScreen from './components/productScreen';
>>>>>>> 6d1783120e3da652515dea75ecfbb16bfa3b9565
import Dashboard from './scenes/dashboard/index';
//import Dashboard from './pages/Dashboard';
import Team from './scenes/team/index';
import Contacts from './scenes/contacts/index';
import Invoices from './scenes/invoices/index';
import Form from './scenes/form/index';
import Bar from './scenes/bar/index';
import Pie from './scenes/pie/index';
import Line from './scenes/line/index';
import FAQ from './scenes/faq/index';
import Calendar from './scenes/calendar/calendar';
import Geography from './components/GeographyChart';
import SignInScreen from './scenes/SignIn/SignIn';
import ShippingAddressScreen from './pages/ShippingAddress';
import SignupScreen from './pages/SignUpScreen';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/tipeKulit' element={<SkinType />} />
<<<<<<< HEAD
=======
        <Route path='/market1' element={<Market />} />
>>>>>>> 6d1783120e3da652515dea75ecfbb16bfa3b9565
        <Route path='/market' element={<Market />} />
        <Route path='/ukur-kering' element={<SdrKering />} />
        <Route path='/ukur-minyak' element={<SdrBerminyak />} />
        <Route path='/kondisiKulit' element={<KondisiKulit />} />
        <Route path='/kandungan-kulit' element={<Kandungan />} />
        <Route path='/jenis-skincare' element={<JenisSkincare />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/produk-toner' element={<ProdukToner />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/market2' element={<Market2 />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/product/:slug' element={<ProductScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/form" element={<Form />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/signin" element={<SignInScreen />} />
        <Route path="/shipping" element={<ShippingAddressScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </Router>
  )
}

export default App




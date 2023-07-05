import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Start from './components/Start';
import Upload from './components/Upload';  
import SkinType from './components/SkinType';  
import Market from './pages/Market'; 
//import Market from './components/Market'; 
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
//import ProductScreen from './components/productScreen';
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
import PaymentMethodScreen from './pages/PaymentMethodScreen';
import PlaceOrderScreen from './pages/PlaceOrderScreen';
import OrderScreen from './pages/orderScreen';
import OrderHistoryScreen from './pages/orderHistoryScreen';
import ProfileScreen from './pages/ProfileScreen';
import SearchScreen from './pages/searchScreen';
import ProtectedRoute from './components/ProtectedRoute';
import DashboardScreen from './pages/DashboardScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './pages/ProductListScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/tipeKulit' element={<SkinType />} />
        <Route path='/market1' element={<Market />} />
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
        <Route path="/payment" element={<PaymentMethodScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
        <Route
                path="/order/:id"
                element={
                  <ProtectedRoute>
                    <OrderScreen />
                  </ProtectedRoute>
                }
              ></Route>
        <Route path="/orderhistory" element={
                  <ProtectedRoute>
                    <OrderHistoryScreen />
                  </ProtectedRoute>
                } />
    
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <ProfileScreen />
                  </ProtectedRoute>
                }
        />
        {/* Admin Routes */}
        <Route
                path="/admin/dashboard"
                element={
                  <AdminRoute>
                    <DashboardScreen />
                  </AdminRoute>
                }
        ></Route>
        <Route
                path="/admin/products"
                element={
                  <AdminRoute>
                    <ProductListScreen />
                  </AdminRoute>
                }
        ></Route>
        <Route
                path="/admin/product/:id"
                element={
                  <AdminRoute>
                    <ProductEditScreen />
                  </AdminRoute>
                }
              ></Route>

        
      </Routes>
    </Router>
  )
}

export default App




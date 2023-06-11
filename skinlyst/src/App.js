import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import StartPages from './pages/StartPages';
import UploadPages from './pages/UploadPage';  
import SkinTypePages from './pages/SkinTypePages';  


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartPages />} />
        <Route path='/upload' element={<UploadPages />} />
        <Route path='/tipeKulit' element={<SkinTypePages />} />
      </Routes>
    </Router>
  )
}

export default App




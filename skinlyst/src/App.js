import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import StartPages from './pages/StartPages';
import UploadPages from './pages/UploadPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartPages />} />
        <Route path='/upload' element={<UploadPages />} />
      </Routes>
    </Router>
  )
}

export default App




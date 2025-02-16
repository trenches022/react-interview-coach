import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Frontend from './pages/Frontend/Frontend';
import FrontendJunior from './pages/Frontend/FrontendJunior';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/frontend' element={<Frontend />}/>
          <Route path='/frontend/junior' element={<FrontendJunior />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

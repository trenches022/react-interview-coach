import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Frontend from './pages/Frontend/Frontend';
import FrontendJunior from './pages/Frontend/FrontendJunior';
import FrontendMiddle from './pages/Frontend/FrontendMiddle';
import FrontendSenior from './pages/Frontend/FrontendSenior';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/frontend' element={<Frontend />}/>
          <Route path='/frontend/junior' element={<FrontendJunior />}/>
          <Route path='/frontend/middle' element={<FrontendMiddle />}/>
          <Route path='/frontend/senior' element={<FrontendSenior />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

import {Routes, Route} from 'react-router-dom';
import './index.css'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx';
import Practice from './Pages/Ide.jsx';
import Login from './Pages/Login.jsx';
function App() {
 

  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/practice' element={<Practice/>} />
      </Routes>
  )
}

export default App

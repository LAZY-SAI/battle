import {Routes, Route} from 'react-router-dom';
import './index.css'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx';
import Practice from './Pages/Ide.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SIgnup.jsx';
import Option from './Pages/Option.jsx'
import Profile from './components/Profile.jsx'
function App() {
 

  return (

    
      <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/option' element={<Option/>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/practice' element={<Practice/>} />
      </Routes>
      
    
  )
}

export default App

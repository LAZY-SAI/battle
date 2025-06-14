import {Routes, Route} from 'react-router-dom';
import './index.css'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx';
import Practice from './Pages/Ide.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SIgnup.jsx';
import Option from './Pages/Option.jsx'
import Profile from './components/Profile.jsx'
import Comp from './Pages/Competition.jsx'
import Leader from './Pages/LeaderBoard.jsx'
import About from './Pages/About.jsx'
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
      <Route path='/competition' element={<Comp/>}/>
      <Route path='/Leader' element={<Leader/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      
    
  )
}

export default App

import {Routes, Route} from 'react-router-dom';
import './index.css'
import Home from './components/Home.jsx'
import Dashboard from './components/Dashboard.jsx';
import Practice from './Pages/Ide.jsx';
function App() {
 

  return (
    <Routes>
      <Route path="/home" element={<Home/>} />

      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/practice' element={<Practice/>} />
      </Routes>
  )
}

export default App

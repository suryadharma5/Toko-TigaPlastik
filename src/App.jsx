// CSS
import './index.css'

// Pages
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className='w-full font-body app'>
      <Navbar />
      <Home />
    </div>
  )
}

export default App

import Navbar from './componentes/sections/Navbar'
import Presentation from './componentes/sections/Presentation'
import Projects from './componentes/sections/Projects'
import Aboutme from './componentes/sections/Aboutme'
import Footer from './componentes/sections/Footer'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Presentation/>
      <Projects/>
      <Aboutme/>
      <Footer/>
    </div>
  )
}

export default App

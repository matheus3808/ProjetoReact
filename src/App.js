import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Home from './Components/pages/Home'
import Company from './Components/pages/Company'
import Contact from './Components/pages/Contact'
import NewProject from './Components/pages/NewProject'
import Project from './Components/pages/Project'
import ProjetoEdicao from './Components/pages/ProjetoEdicao'


import Container from './Components/layout/Container'
import NavBar from './Components/layout/NavBar'
import Footer from './Components/layout/Footer'



function App() {
  return (
  <Router >
   <NavBar/>
    <Container customClass="min-height" >
    <Routes >
  
      <Route element={<Home/>} path="/">

      </Route>

      <Route element={<Company/>} path="/Company">

      </Route>

      <Route element={<Contact/>} path="/Contact">

      
      </Route>

      <Route element={<Project/>} path="/Project">

        

      </Route>

      <Route element={<NewProject/>} path="/NewProject">

      </Route>

      <Route element={<ProjetoEdicao/>} path="/ProjetoEdicao/:id">

      </Route>
     
     
    </Routes>
    </Container>
    <Footer/>
  </Router>
  )
}

export default App;

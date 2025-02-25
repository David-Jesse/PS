import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Footer from "./components/Footer";
import AboutNavXHero from "./pages/AboutNavXHero";
import AboutMain from './pages/AboutMain'
import Middlebrough from './pages/Middlebrough';
 import OurlocationNavXHero from "./pages/OurlocationNavXHero";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Locationmain from './pages/Locationmain';
import MiddlebroughMain from './pages/MiddlebroughMain';
import HabitatsNav from "./pages/Habitats.Nav";
import HabitatsMain from "./pages/HabitatsMain";
import OysterNav from "./pages/OysterNav";
import OysterMain from "./pages/OysterMain";
import GetInvolved from "./pages/GetInvolvedNav";
import GetInvolvedMain from './pages/GetInvolvedMain';

function App() {

  return (
    <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar/>
                <Hero />
                <Main />  
              
              </>
            }
          > 
          </Route>

          <Route 
            path="/about" 
            element={
              <>
                <AboutNavXHero/>
                <AboutMain/>
              </>
            }
          />

        {/* our location Route */}
        <Route 
          path="/ourlocation" 
          element={
            <>
              <OurlocationNavXHero />
              <Locationmain />
            </>
          }
          />

          <Route 
            path="/ourlocation/middlebrough"
            element={
              <>
                <Middlebrough />   
                <MiddlebroughMain/>
              </>
            }
         
          />

          <Route 
            path="/habitats"
            element={
              <>
              <HabitatsNav />
              <HabitatsMain />
            </>
          }
          
          />

          <Route 
            path="/habitats/oyster-reefs"
            element={
              <>
                <OysterNav />
                <OysterMain />
              </>
            }
          />

          <Route 
            path="/getinvolved"
            element={
            <>
              <GetInvolved />
              <GetInvolvedMain />
            </>
          }
        />

        <Route 
          path="/getinvolved/latestevents"
        />

        <Route 
          path="/getinvolved/volunteering"
        />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
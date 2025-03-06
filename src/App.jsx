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
import LatestEvents from './pages/LatesteventsNav';
import LatestMain from './pages/LatesteventsMain';
import VolunteeringNav from "./pages/VolunteeringNav";
import VolunteeringMain from "./pages/VolunteeringMain";
import ResourcesNav from "./pages/ResourcesNav";
import ResourcesMain from "./pages/ResourcesMain";
import News from "./pages/News";
import NewsMain from "./pages/NewsMain";

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
          element={
            <>
              <LatestEvents />
              <LatestMain />
            </>
          }
        />

        <Route 
          path="/getinvolved/volunteering"
          element= {
            <>
              <VolunteeringNav />
              <VolunteeringMain />
            </>
          }
        />

        <Route 
          path="/resources"
          element={
            <>
              <ResourcesNav />
              <ResourcesMain />
            </>
          }
        />

        <Route 
          path="/news"
          element={
            <>
              <News />
              <NewsMain />
            </>
          }
        />
        </Routes>
      <Footer />
    </Router>
  )
}

export default App;
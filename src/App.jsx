import "./App.css"
import Header from "./components/Header"
import SectionTwo from "./components/SectionTwo"
import ReasonForDixacare from "./components/ReasonForDixacare"
import Holistic from "./components/Holistic"
import PatientsData from "./components/PatientsData"
import OurProcess from "./components/OurProcess"
import OurPartners from "./components/OurPartners"
import GetStarted from "./components/GetStarted"
import StayUpdated from "./components/StayUpdated"
import Footer from "./components/Footer"
import Sticky from "./components/Sticky"


function App() {
  return (
  <div>
    <Header/>
    <SectionTwo />
    <ReasonForDixacare />
    <Holistic />
    <PatientsData />
    <OurProcess/>
    <OurPartners />
    <GetStarted/>
    <StayUpdated />
    <Footer />
    <Sticky />
  </div>
  )
}

export default App

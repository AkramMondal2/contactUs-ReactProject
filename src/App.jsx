import "./App.css"
import ContactForm from "./components/ContactForm/ContactForm"
import ContactHeader from "./components/ContactHeader/ContactHeader"
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
     <Navbar />
     <ContactHeader />
     <ContactForm />
    </>
  )
}

export default App
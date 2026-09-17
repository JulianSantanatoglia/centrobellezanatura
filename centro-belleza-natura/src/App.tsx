import { About } from './components/About'
import { ContactForm } from './components/ContactForm'
import { EventsBanner } from './components/EventsBanner'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LocationMap } from './components/LocationMap'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <EventsBanner />
        <About />
        <Gallery />
        <Reviews />
        <ContactForm />
        <LocationMap />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  )
}

export default App

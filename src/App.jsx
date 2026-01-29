import { useState } from 'react'
import Home from './pages/Home.jsx'
import ContactUs from './pages/ContactUs.jsx'

export default function App() {
  const [screen, setScreen] = useState('home')

  return (
    <main className="min-h-screen bg-black text-white">
      

      {screen === 'home' ? (
        <Home onContact={() => setScreen('contact')} />
      ) : (
        <ContactUs onBack={() => setScreen('home')} />
      )}
    </main>
  )
}

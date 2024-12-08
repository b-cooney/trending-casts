import './index.css'
import Hero from './components/Hero'
import Description from './components/Description'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Hero />
        <Description />
        <SocialLinks />
      </main>
    </div>
  )
}

export default App

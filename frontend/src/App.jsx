import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <main className="pt-16">
          <Home />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
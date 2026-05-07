import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import HomePage from './pages/HomePage.jsx'
import './styles/app.css'

function App() {
  const [complaints, setComplaints] = useState([])

  useEffect(() => {
    async function loadComplaints() {
      const { getComplaints } = await import('./services/complaintsService.js')
      const data = await getComplaints()
      setComplaints(data)
    }

    loadComplaints()
  }, [])

  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">
        <HomePage complaints={complaints} />
      </main>
    </div>
  )
}

export default App

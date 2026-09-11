import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Attendance from './pages/Attendance'
import Progress from './pages/Progress'
import Payments from './pages/Payments'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Layout>
  )
}

export default App

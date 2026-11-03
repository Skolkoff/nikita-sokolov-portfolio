import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import BgsLayout from './bgs/BgsLayout'
import BgsLanding from './bgs/BgsLanding'
import BgsProposal from './bgs/BgsProposal'

export default function App() {
  return (
    <Routes>
      <Route path="/bgs" element={<BgsLayout />}>
        <Route index element={<BgsLanding />} />
        <Route path="proposal" element={<BgsProposal />} />
      </Route>
      <Route path="/projects/bgs-intelligence" element={<Navigate to="/bgs" replace />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

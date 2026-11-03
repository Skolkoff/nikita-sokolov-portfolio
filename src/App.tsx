import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import BgsLayout from './bgs/BgsLayout'
import BgsLanding from './bgs/BgsLanding'
import BgsProposal from './bgs/BgsProposal'

export default function App() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash ? document.getElementById(hash.slice(1)) : null
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
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

import { Navigate, Route, Routes } from 'react-router'
import Dashboard from '../pages/dashboard'
import Finalize from '../pages/finalize'
import Results from '../pages/results'
import { ROUTES } from '../shared/lib'

function App() {
  return (
    <Routes>
      <Route path={ROUTES.root} element={<Navigate to={ROUTES.dashboard} />} />
      <Route path={ROUTES.dashboard} element={<Dashboard />} />
      <Route path={ROUTES.results} element={<Results />} />
      <Route path={ROUTES.finalize} element={<Finalize />} />
      <Route path="*" element="Page Not Found" />
    </Routes>
  )
}

export default App

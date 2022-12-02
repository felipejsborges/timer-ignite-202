import { Routes, Route } from 'react-router-dom'
import { History } from '../pages/History'
import { Home } from '../pages/Home'
import { CommonLayout } from './CommonLayout'
import ErrorPage from './ErrorPage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}

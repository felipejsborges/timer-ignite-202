import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { CommonLayoutContainer } from './styles'

export function CommonLayout() {
  return (
    <CommonLayoutContainer>
      <Header />
      <Outlet />
    </CommonLayoutContainer>
  )
}

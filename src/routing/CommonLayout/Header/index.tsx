import { Link } from '../../../providers/navigation/Link'
import logoIcon from '../../../assets/logo.svg'
import { Timer, Scroll } from '../../../providers/icons'
import { HeaderContainer, NavItems } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIcon} alt="logo icon" />
      <NavItems>
        <Link to="/">
          <Timer />
        </Link>
        <Link to="/history">
          <Scroll />
        </Link>
      </NavItems>
    </HeaderContainer>
  )
}

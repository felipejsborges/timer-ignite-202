import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background: transparent;
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: absolute;

  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const NavItems = styled.div`
  gap: 0.5rem;
  display: flex;

  a {
    width: 3rem;
    height: 3rem;
    color: ${(props) => props.theme['gray-100']};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 1.375rem;
      height: 1.625rem;
    }

    &:hover {
      color: ${(props) => props.theme['green-500']};
    }
  }
`

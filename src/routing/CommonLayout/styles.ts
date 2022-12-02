import styled from 'styled-components'

export const CommonLayoutContainer = styled.div`
  margin: 5vh 10%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 0.5rem;
  width: 80%;
  height: 90vh;
  position: relative;
`

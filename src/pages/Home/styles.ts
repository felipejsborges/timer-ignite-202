import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin: 15%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const FormContainer = styled.form`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  span,
  label {
    color: ${(props) => props.theme['gray-100']};
    font-weight: 700;
    font-size: 1.125rem;
    white-space: pre;
  }

  input {
    border: none;
    background: transparent;
    border-bottom: 0.125rem solid ${(props) => props.theme['gray-500']};
    text-align: center;

    &:focus {
      border-color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const CountdownContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 12rem;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 0.5rem;
    font-family: 'Roboto Mono';
    font-size: 10rem;
    color: ${(props) => props.theme['gray-100']};
  }

  span + span {
    margin-left: 1rem;
  }
`

export const CountdownDivisor = styled.div`
  font-family: 'Roboto Mono';
  font-size: 10rem;
  color: ${(props) => props.theme['green-500']};
`

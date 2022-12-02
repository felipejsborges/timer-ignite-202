import styled from 'styled-components'

export type ButtonVariants = 'start' | 'stop'

interface ContainerProps {
  variant: ButtonVariants
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem 2.5rem;
  gap: 0.5rem;
  width: 100%;
  height: 4rem;
  background: ${(props) => {
    if (props.variant === 'start') return props.theme['green-500']
    if (props.variant === 'stop') return props.theme['red-500']
  }};
  border-radius: 0.5rem;

  svg,
  span {
    color: ${(props) => props.theme['gray-100']};
  }

  svg {
    width: 1.5rem;
    height: 1.25rem;
  }

  span {
    font-weight: 700;
  }

  &:hover {
    background: ${(props) => {
      if (props.variant === 'start') return props.theme['green-700']
      if (props.variant === 'stop') return props.theme['red-700']
    }};
  }
`

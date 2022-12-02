import { ButtonHTMLAttributes } from 'react'
import { Container, ButtonVariants } from './styles'
import { Play, HandPalm } from '../../providers/icons'

interface CountdownButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
}

export function CountdownButton({
  variant = 'start',
  ...props
}: CountdownButtonProps) {
  return (
    <Container variant={variant} {...props}>
      {variant === 'start' && <Play />}
      {variant === 'stop' && <HandPalm />}
      {variant === 'start' && <span>Começar</span>}
      {variant === 'stop' && <span>Interromper</span>}
    </Container>
  )
}

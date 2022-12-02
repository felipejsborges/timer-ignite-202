import { ReactNode } from 'react'
import { Link as BaseLink } from 'react-router-dom'

interface LinkProps {
  to: string
  children: ReactNode
}

export function Link({ children, ...props }: LinkProps) {
  return <BaseLink {...props}>{children}</BaseLink>
}

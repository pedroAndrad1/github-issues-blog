import { ReactNode } from 'react'
import { StyledContaier } from './style'

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <StyledContaier>{children}</StyledContaier>
}

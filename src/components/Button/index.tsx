import React from 'react'

import { Button } from './styles'

interface LinkProps {
  path: string
  styleButton?: string
}

const NavigationButton: React.FC<LinkProps> = ({ children, path, styleButton }) => {
  return (
    <Button className={styleButton} to={path}  >
      {children}
    </Button>
  )
}

export default NavigationButton
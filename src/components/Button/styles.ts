import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

interface ButtonProps {
  className?: string
}

export const Button = styled(Link) <ButtonProps>`
  text-decoration: none;
  width: 80px;
  border-radius: 5px;
  padding: 0.7rem;
  display: block;
  margin: 1rem;
  color: #FFF;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;

  ${(props) => props.className === 'primary' ? (
    css`
      background-color: #007bff
      
    `
  ) : (
      css`background-color: #04D361`
    )}
`
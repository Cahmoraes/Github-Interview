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
  display: flex;
  align-items: flex-start;
  margin: 1rem;
  color: #FFF;
  text-transform: uppercase;
  font-weight: bold;
  width: 150px;

  svg {
    margin-right: 1.5rem;
  }

  ${(props) => props.className === 'primary' ? (
    css`
      background-color: #007bff
    `
  ) : (
      css`background-color: #04D361`
    )}
`
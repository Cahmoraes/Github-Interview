import styled, { keyframes } from 'styled-components'


const animaLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Container = styled.main`
  margin: 5rem 0;
  animation: ${animaLeft} .5s forwards;

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 2.4rem;
    }
  }
`
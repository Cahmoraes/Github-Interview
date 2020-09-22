import styled, { css, keyframes } from 'styled-components'


interface FormProps {
  isError?: boolean;
}

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

export const Container = styled.section`
  animation: ${animaLeft} .5s forwards;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  text-align: center;
`

export const Main = styled.main`
  margin-bottom: 3rem;
  width: 100%;
`

export const Form = styled.form<FormProps>`
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 4;
    height: 72px;
    background: #FFFFFF;
    border: 2px solid #FFF;
    padding: 0 1rem;
    font-size: 2.0rem;
    outline: none;
    max-width: 100%;

    ${props => props.isError && css`
        border-color: #cc3838;
    `}
    
    &::placeholder {
      color: #A8A8B3;
    }

    @media only screen and (max-width: 480px) {
      & {
        height: 50px;
      }
      &::placeholder {
        font-size: 1.6rem;
      }
    }
  }

  button {
    width: 210px;
    background: #04D361;
    color: #FFF;
    border: none;
    font-size: 1.8rem;
    flex: 1 1 30px;
    will-change: color;
    transition: color .2s;

    &:hover {
      background: #14da6d
    }

    @media only screen and (max-width: 480px) {
      & {
        height: 3.5rem;
      }
      &::placeholder {
        font-size: 1.6rem;
      }
    }
  }
`

export const ErrorMessage = styled.span`
  display: block;
  color: #cc3838;
  font-size: 1.8rem;
  margin-top: 0.5rem;
`
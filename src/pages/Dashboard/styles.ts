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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

export const Header = styled.header`
  margin-bottom: 3rem;
  max-width: 100%;
  flex: 1;
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

export const Movies = styled.div`
  margin-top: 4rem;
`

export const Movie = styled.div`
  background: #EFEFEF;
  display: flex;
  align-items: flex-start;
  font-size: 1.6rem;

  & + div {
    margin-top: 10px;
  }

  img {
    width: 125px;
  }

  > div {
    margin-left: 15px;
    padding: 10px;
    
    p {
      margin-top: 10px;
      line-height: 2.3rem;
    }
  }

`

export const ErrorMessage = styled.span`
  display: block;
  color: #cc3838;
  font-size: 1.8rem;
  margin-top: 0.5rem;
`
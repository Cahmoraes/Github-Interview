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
`

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export const Header = styled.header``


export const Form = styled.form<FormProps>`
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    height: 72px;
    background: #FFFFFF;
    border: 2px solid #FFF;
    padding: 0 1rem;
    font-size: 2.0rem;
    outline: none;

    ${props => props.isError && css`
        border-color: #cc3838;
    `}
    
    &::placeholder {
      color: #A8A8B3;
    }
  }

  button {
    width: 210px;
    background: #04D361;
    color: #FFF;
    border: none;
    font-size: 1.8rem;
    will-change: color;
    transition: color .2s;

    &:hover {
      background: #14da6d
    }
  }
`

export const ErrorMessage = styled.span`
  display: block;
  color: #cc3838;
  font-size: 1.8rem;
  margin-top: 0.5rem;
`

export const Loading = styled.h3`
  font-size: 1.8rem;
  margin: 2rem 0;
`

export const UserInfo = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    margin-bottom: 1.5rem;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  div {
    margin-left: 4rem;
    font-size: 3rem;

    @media only screen and (max-width: 480px) {
      margin-left: 0;
      text-align: center;
    }

    h3 {
      font-size: 2.8rem;
    }

    ul {
      display: flex;
      list-style: none;
      margin-top: 2rem;
      text-align: center;

      & > li + li {
        margin-left: 3.5rem;
      }

      strong {
        display: block;
        font-size: 3rem;
      }

      span {
        font-size: 1.8rem;
        color: #6C6C80;
      }
    }
  }
`

export const Navigation = styled.nav`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
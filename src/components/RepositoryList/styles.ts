import styled from 'styled-components'

export const Repositories = styled.div`
  margin: 3rem auto 0;
  max-width: 700px;

  > article {
    background: #FFF;
    border-radius:5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transform: translate3d(-10px, 0, 0);
    transition: transform .2s ease-out;

    &:hover {
      transform: initial;
    }

    & + article {
      margin-top: 1.6rem; 
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
        word-break: break-word;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    @media only screen and (max-width: 460px) {
      strong {
        font-size: 1.8rem;
      }
      div > p {
        font-size: 1.6rem;
      }
    }
  }
`

export const Filter = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  max-width: 700px;
  margin: 3rem auto 0;


  input {
    flex: 4;
    height: 44px;
    background: #FFFFFF;
    border: 2px solid #FFF;
    padding: 0 1rem;
    font-size: 2.0rem;
    outline: none;
    width: 100%;
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
    height: 44px;

    &:hover {
      background: #14da6d
    }
  }
`
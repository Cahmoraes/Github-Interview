import styled from 'styled-components'

export const Repositories = styled.div`
  margin: 3rem auto 0;
  max-width: 700px;

  > div {
    background: #FFF;
    border-radius:5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    & + div {
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
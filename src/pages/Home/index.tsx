import React from 'react'

import Search from '../../components/Search'
import Footer from '../../components/Footer'

import { Main, Container, Title } from './styles'

const Dashboard: React.FC = () => {

  return (
    <Container>
      <Main>
        <Title>
          Please, search by user from Github
        </Title>
        <Search />
      </Main>
      <Footer />
    </Container>
  )
}

export default Dashboard  
import React from 'react'

import Search from '../../components/Search'
import Footer from '../../Footer'

import { Main, Container, Title } from './styles'

const Dashboard: React.FC = () => {

  return (
    <Container>
      <Title>
        Please, search by user from Github
      </Title>
      <Main>
        <Search />
      </Main>
      <Footer />
    </Container>
  )
}

export default Dashboard  
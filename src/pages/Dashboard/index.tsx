import React from 'react'

import Search from '../../components/Search'


import { Header, Container } from './styles'

const Dashboard: React.FC = () => {

  return (
    <Container>
      <Header>
        <Search />
      </Header>
    </Container>
  )
}

export default Dashboard  
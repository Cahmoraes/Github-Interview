import React from 'react'
import Search from '../../components/Search'

import { Container } from './styles'

const Notfound: React.FC = () => (
  <>
    <Search />
    <Container>
      <h1>Sorry, this page not found</h1>
    </Container>
  </>
)

export default Notfound
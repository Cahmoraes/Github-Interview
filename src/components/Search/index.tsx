import React, { FormEvent, useCallback, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Form, Container, ErrorMessage } from './styles'

const Search: React.FC = () => {
  const history = useHistory()
  const inputSearchUser = useRef<HTMLInputElement | null>(null)

  const [isError, setIsError] = useState('')

  const searchUser = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = inputSearchUser.current?.value as string
    try {
      if (username.length > 0) {
        history.push(`/users/${username}`)
      } else {
        throw new Error('Please, fill in with a username')
      }
    } catch (e) {
      setIsError(e.message)
    }
  }, [history])


  return (
    <Container>
      <Form isError={!!isError} onSubmit={searchUser}>
        <input
          type="text"
          placeholder="Search..."
          ref={inputSearchUser}
        />
        <button>Search</button>
      </Form>
      {isError && <ErrorMessage>{isError}</ErrorMessage>}
    </Container>
  )
}

export default Search
import React, { useEffect, useState } from 'react'
import { Route, Switch, useParams, useRouteMatch } from 'react-router-dom';
import { FaStar, FaDatabase } from 'react-icons/fa'

import Search from '../../components/Search';
import api from '../../services/api';
import NavigationButton from '../../components/Button'
import Repository from './Repositories';
import Starred from './Starred';
import IUsernameParam from '../../interfaces/UsernameParam';

import { Container, Loading, UserInfo, Navigation, ErrorMessage } from './styles'

interface User {
  login: string
  id: number
  avatar_url: string
  followers: number
  public_repos: number
}

const User: React.FC = () => {
  const { user_github } = useParams<IUsernameParam>()
  const { url } = useRouteMatch()

  const [loading, setLoading] = useState(false)
  const [userInfo, setUserInfo] = useState<User>({} as User)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadUser() {
      try {
        setError('')
        setLoading(true)
        if (!!user_github.length) {
          const { data } = await api.get<User>(`users/${user_github}`)
          const user = data
          setUserInfo(user)
        } else {
          throw new Error('Por favor, preencher com um título')
        }
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    loadUser()
  }, [user_github])

  if (loading) return <Loading>Loading...</Loading>
  else if (error) return (
    <>
      <Search />
      <ErrorMessage>User not found</ErrorMessage>
    </>
  )
  else if (userInfo.id === undefined) return null
  else
    return (
      <Container>
        <Search />
        <UserInfo>
          <img src={userInfo.avatar_url} alt={userInfo.login} />
          <div>
            <h3>{userInfo.login}</h3>
            <ul>
              <li>
                <strong>{userInfo.followers}</strong>
                <span>Followers</span>
              </li>
              <li>
                <strong>{userInfo.public_repos}</strong>
                <span>Public Repos</span>
              </li>
            </ul>
          </div>
        </UserInfo>

        <Navigation>
          <NavigationButton styleButton="primary" path={`${url}/repos`}>
            <FaDatabase size={16} color="#FFF" />
            Repos
          </NavigationButton>
          <NavigationButton path={`${url}/starred/${userInfo.login}/repo`}>
            <FaStar size={16} color="#FFF" />
            Starred
          </NavigationButton>
        </Navigation>

        <section>
          <Switch>
            <Route path="/users/:user_github/repos" component={Repository} />
            <Route path="/users/:user_github/starred/:owner/repo" component={Starred} />
          </Switch>
        </section>

      </Container>
    )
}

export default User
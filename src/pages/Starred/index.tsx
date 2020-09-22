import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'
import IUsernameParam from '../../utils/interfaces/UsernameParam'
import RepositoryList from '../../components/RepositoryList'
import IRepositories from '../../utils/interfaces/Repositories'


const Starred: React.FC = () => {
  const { user_github } = useParams<IUsernameParam>()

  const [repositories, setRepositories] = useState<IRepositories[]>([])

  useEffect(() => {
    async function getRepos() {
      const { data } = await api.get(`/users/${user_github}/starred`)
      const repositories = data as IRepositories[]
      console.log(repositories)
      setRepositories(repositories)
    }
    getRepos()
  }, [user_github])

  return (
    <RepositoryList repositories={repositories} />
  )
}

export default Starred
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../../services/api'
import IUsernameParam from '../../../interfaces/UsernameParam'
import RepositoryList from '../../../components/RepositoryList'

import IRepositories from '../../../interfaces/Repositories'

const Repository: React.FC = () => {
  const { user_github } = useParams<IUsernameParam>()

  const [repositories, setRepositories] = useState<IRepositories[]>([])

  useEffect(() => {
    async function getRepos() {
      const { data } = await api.get(`/users/${user_github}/repos`)
      const repositories = data as IRepositories[]
      setRepositories(repositories)
    }
    getRepos()
  }, [user_github])

  return (
    <RepositoryList repositories={repositories} setState={setRepositories} filtering />
  )
}

export default Repository
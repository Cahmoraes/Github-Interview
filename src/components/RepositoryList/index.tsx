import React from 'react'
import IRepositories from '../../utils/interfaces/Repositories'

import { Repositories } from './styles'


interface RepositoryListProps {
  repositories: IRepositories[]
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <Repositories>
      {
        repositories.map(repository => (
          <article key={repository.id}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </article>
        ))
      }
    </Repositories>
  )
}

export default RepositoryList
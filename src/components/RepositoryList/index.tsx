import React, { useCallback, FormEvent, useRef } from 'react'
import api from '../../services/api'
import IRepositories from '../../interfaces/Repositories'

import { Repositories, Filter } from './styles'

interface RepositoryListProps {
  repositories: IRepositories[],
  setState: React.Dispatch<React.SetStateAction<IRepositories[]>>
  filtering?: boolean
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories, setState, filtering = false }) => {

  const inputRepoRef = useRef<HTMLInputElement | null>(null)

  const filterRepo = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const repo = inputRepoRef.current?.value as string
    const user = inputRepoRef.current?.dataset.user
    if (repo.length > 0) {
      const response = await api.get(`repos/${user}/${repo}`)
      setState([response.data])
    }
  }, [setState])

  if (repositories.length < 1) return null
  else
    return (
      <>
        {
          filtering &&
          <Filter onSubmit={filterRepo}>
            <input
              type="text"
              placeholder={`Search by repository`}
              ref={inputRepoRef}
              data-user={repositories[0].owner.login}
            />
            <button type="submit">Search</button>
          </Filter>
        }

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
      </>
    )
}

export default RepositoryList
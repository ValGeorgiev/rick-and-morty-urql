import Link from 'next/link'
import React, { useState } from 'react'
import { useQuery } from 'urql'

const CharactersQuery = `
  query ($page: Int!) {
    characters (page: $page) {
      results {
        name,
        image,
        id
      }
      info {
        count,
        pages,
        next,
        prev
      }
    }
  }
`

const Characters = ({ pageParam }) => {
    const [page, setPage] = useState(pageParam)

    const [result] = useQuery({
        query: CharactersQuery,
        variables: { page: page }
    })

    const { data, fetching } = result

    if (data) {
        const characters = data.characters.results
        return characters.map(character => {
            return (
                <div key={character.id}>
                    <Link href={`/character/${character.id}`}>
                        <img src={character.image}  width="150" height="150" />
                    </Link>
                    <Link href={`/character/${character.id}`}>
                        {character.name}
                    </Link>
                    <hr />
                </div>
            )
        })
    }
    
    return (
        <div>
            Loading...
        </div>
    )
}

export default Characters
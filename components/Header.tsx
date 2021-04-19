import React, { useState } from 'react'
import { useQuery } from 'urql'
import Link from 'next/link'

const FilterQuery = `
    query($filter: String){
        characters(filter: { name: $filter }) {
            results {
                name,
                id,
                image
            }
        }
    }
`

const Header = () => {
    const [search, setSearch] = useState('')
    const [result, executeRequest] = useQuery({
        query: FilterQuery,
        variables: { filter: search },
        pause: !search
    })

    const searchCountry = e => {
        const value = e.target.value
        setSearch(value)
    }

    return (
        <div>
            <span>Urql - Testing app</span>

            <input placeholder="Search..." onChange={searchCountry} />
            <div>
                {
                    result.data ? (
                        result.data.characters?.results.map(character => {
                            return (
                                <div key={character.id}>
                                    <Link href={`/character/${character.id}`}>
                                        <img src={character.image}  width="50" height="50" />
                                    </Link>
                                    <Link href={`/character/${character.id}`}>
                                        {character.name}
                                    </Link>
                                    <hr />
                                </div>
                            )
                        })
                    ): null
                }
            </div>
        </div>
    )
}

export default Header
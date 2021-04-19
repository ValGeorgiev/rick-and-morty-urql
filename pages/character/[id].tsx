import Head from 'next/head'
import { useQuery } from 'urql'
import { useRouter } from 'next/router'

const CountriesQuery = `
  query($id: ID!){
    character(id: $id) {
      name,
      status,
      image,
      type,
      gender,
      location {
        name
      }
    }
  }
`


export default function CountryPage() {
  const router = useRouter()
  const { id } = router.query
  const [result, reexecuteQuery] = useQuery({
    query: CountriesQuery,
    variables: {
      id
    }
  })

  const { data, fetching, error } = result

  if (fetching) {
    return (<p>Loading...</p>)
  }
  if (error) {
    return (<p>Oh no... {error.message}</p>)
  }
  const { character } = data

  return (
    <div>
      <Head>
        <title>URQL - Ricky & Morty app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <button onClick={() => router.back()}>Click here to go back</button>
      </div>

      <div>
        <h1>{character.name}</h1>
        <img src={character.image} width="200" height="200" />
        <div>
          <p>Type: {character.type}</p>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
          <p>Location: {character.location.name}</p>
        </div>
      </div>
      
    </div>
  )
}

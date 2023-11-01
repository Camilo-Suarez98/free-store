import { useQuery, gql } from '@apollo/client'

const Characters = () => {
  const GET_CHARACTERS = gql`
    query {
      characters {
        results {
          id
          name
          status
          image
          gender
        }
      }
    }
  `

  const { loading, error, data } = useQuery(GET_CHARACTERS)
  console.log(data);

  if (loading) {
    return <div>loading...</div>
  }

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data.characters.results.map(({ id, name, status, image, gender }) => {
        return (
          <div key={id}>
            <h2>{name}</h2>
            <h3 className={status === 'Alive' ? 'text-green-500' : status === 'unknown' ? 'text-gray-500' : 'text-red-500'}>{status}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Characters
import { useQuery, gql } from '@apollo/client'

const Characters = () => {
  const GET_CHARACTERS = gql`
    query {
      characters {
        results {
          name
          status
          image
        }
      }
    }
  `

  const { loading, error, data } = useQuery(GET_CHARACTERS)
  console.log(data);

  return (
    <div>Characters</div>
  )
}

export default Characters
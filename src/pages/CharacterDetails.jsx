import { useQuery, gql } from "@apollo/client"
import { useParams } from "react-router-dom"

const CharacterDetails = () => {
  const GET_CHARACTER = gql`
    query getCharater($id: ID!) {
      character(id: $id) {
        id
        name
        image
        status
        species
        origin {
          name
        }
        location {
          name
        }
      }
    }
  `
  const { id } = useParams()

  const options = {
    variables: { id }
  }

  const { loading, error, data } = useQuery(GET_CHARACTER, options)
  console.log(data);
  console.log('data character', data.character);
  const info = data.character

  if (loading) {
    return (
      <div className="loader">
        Loading
        <span></span>
      </div>
    )
  }

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {info.name}
    </div>
  )
}

export default CharacterDetails
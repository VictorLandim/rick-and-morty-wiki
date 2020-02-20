// location {
//   id
//   name
//   type
// }

// origin {
//   id
//   name
//   type
//   dimension
// }

export const GET_CHARACTER_LIST = gql => gql`
  query characters($page: Int!, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        status
        species
        type
        gender

        image
        episode {
          id
          name
          air_date
        }

        location {
          name
        }
        created
      }

      info {
        pages
        next
        prev
        count
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql => gql`
  query CharacterDetails($id: ID) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        id
        name
        dimension
      }
      location {
        id
        name
      }

      image
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

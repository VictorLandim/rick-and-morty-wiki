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
        origin {
          id
          name
          dimension
        }
        location {
          id
          name
        }
        episode {
          id
          name
          air_date
          episode
        }
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
      id
      name
      status
      species
      type
      gender
      image
      origin {
        id
        name
        dimension
      }
      location {
        id
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`;

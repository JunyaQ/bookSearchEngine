import gql from "graphql-tag";
//GET_ME query
export const GET_ME = gql`
    {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
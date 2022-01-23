import gql from "graphql-tag";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
      user {
        # user login use
        # type Auth: token: ID!
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      #type Auth: token: ID!
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
    # from input user
      _id
      username
      email
      bookCount
    # from input saveBook
      savedBooks {
        description
        title
        bookId
        image
        link 
        authors
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
      #(BookId:ID!):User
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        description
        title
        bookId
        image
        link
        authors
      }
    }
  }
`;
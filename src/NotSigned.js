import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class NotSigned extends React.Component {
  render() {
    return (
        <div>
      <h1>Welcome to the Library</h1>
      <h2>Please Sign in to view your collection</h2>
      </div>
    )
  }
}

export default withAuth0(NotSigned);
import React, { useContext } from 'react';

import GithubContext from '../../context/github/githubContext';

import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

export default function Users() {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

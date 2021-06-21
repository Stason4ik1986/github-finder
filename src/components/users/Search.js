import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';
import GithubContext from '../../context/github/githubContext';

const Search = () => {
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);
  const { setAlert } = alertContext;
  const { users, searchUsers, clearUsers } = githubContext;
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter Something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input type='text' name='text' value={text} placeholder='Search Users...' onChange={onChange} />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {users.length > 0 && (
        <button onClick={clearUsers} className='btn btn-light btn-block'>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;

import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      < input className='pa3 ba b--green bg-lightest-blue'
              type='search'
              placeholder='search robots'
              onChange = {searchChange}
              // incase of event searchChange function gets called
              // from parent component i.e App.js
      />
    </div>
  );
}

export default SearchBox;

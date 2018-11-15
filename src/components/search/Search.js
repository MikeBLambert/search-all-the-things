import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Search = ({ updateSearchRequest }) => {

  return (
    <Fragment>
      <input name='searchRequest' id='search' onChange={updateSearchRequest} />
    </Fragment>
  );
};

Search.prototypes = {
  updateSearchRequest: PropTypes.func.isRequired
};

export default Search;
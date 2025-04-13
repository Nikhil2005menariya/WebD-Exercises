import React from 'react';
import PropTypes from 'prop-types';

function Child({ message }) {
  return <p>Message from parent: {message}</p>;
}

ChildComponent.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;

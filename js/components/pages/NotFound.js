import React from 'react';
import { Link } from 'react-router';

const NotFound = function () {
  return (
    <article>
      <h1>404 Not found</h1>
      <Link to="/" className="btn">Home</Link>
    </article>
  );
};

export default NotFound;

import React from 'react';
import PropTypes from 'prop-types';

import 'isomorphic-unfetch';
import Head from 'next/head';

export default class PageRoute extends React.Component {
  render() {
    return <h2>Welcome</h2>;
  }
}

PageRoute.propTypes = {
  classes: PropTypes.object
};

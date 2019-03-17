import '../src/theming/mui_bootstrap';

import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

export default function Index() {
  return (
    <div>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>

      <a href="http://google.com">ASDF 123 </a>
    </div>
  );
}

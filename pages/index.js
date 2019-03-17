import '../digibodies/bootstrap';

// --- Post bootstrap -----
import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PageBase from '../src/components/layout/PageBase';
import Typography from '@material-ui/core/Button';

function PageRouteComponent() {
  return (
    <PageBase>
      <Typography>Hello World</Typography>
      <Paper style={{ padding: '16px' }}>
        <Typography>This is the dashboard page</Typography>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>{' '}
        <a href="http://google.com">This is a link</a>
      </Paper>
    </PageBase>
  );
}

export default PageRouteComponent;

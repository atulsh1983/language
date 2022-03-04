import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    marginRight: '40px'
  },
  users: {
    marginRight: '10'
  },
  blogs: {
    marginRight: 'auto',
  },
  link: {
    color: 'white'
  },
  name: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginTop: 10,
    minWidth: 130

  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Localizz
          </Typography>
          <Button variant="outlined" color='primary' className={classes.users}>
            DE
          </Button>
          <Button variant="outlined" color='primary' className={classes.users}>
          EN
          </Button>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Typography variant="subtitle1" className={classes.name}>
              
            </Typography>

          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

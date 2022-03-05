import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import KeyboardTabOutlinedIcon from '@material-ui/icons/KeyboardTabOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  setl:{
    paddingTop:'2px',
    paddingLeft:'6px',
    fontSize:'17px',
    color:'#000'
  }
}));



export default function LineList(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
     
     
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         
          <div className={classes.demo}>

            <div style={{'display':'flex'}}>
              <KeyboardTabOutlinedIcon />
              <div className={classes.setl}>{props.label} : {props.val}</div>
            </div>
           
             
               
                   
                     
                   
                 
           
          </div>
        </Grid>
       

      </Grid>
    </div>
  );
}

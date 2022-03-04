import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Demo from "../components/buttonUI/demo";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(5, 1)
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  backy:{
    backgroundColor:'#fffde7'
  },
  backp:{
    backgroundColor:'#e1f5fe'
  }
})
);

export default function HomePage(props) {
  const {t, i18n} = props
  const spacing = 2;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} >
          <Paper className={`${classes.paper} ${classes.backy}`}>
            <Typography align="left" color="textPrimary">{t('homePage.Orders')}</Typography>            
              <Demo
                labelone={t('homePage.Recieved')}
                valone={1000}
                labeltwo={t('homePage.InProcess')}
                valtwo={400}
                labelthree={t('homePage.Completed')}
                valthree={600}/>           
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={`${classes.paper} ${classes.backp}`}>
            <Typography align="left" color="textPrimary">{t('homePage.Invoices')}</Typography>            
              <Demo
                 labelone={t('homePage.Pending')}
                 valone={100}
                 labeltwo={t('homePage.InProcess')}
                 valtwo={40}
                 labelthree={t('homePage.Completed')}
                 valthree={60}/>           
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} >
        <Paper className={`${classes.paper}`}>
        1
        </Paper>
          </Grid>
          <Grid item xs={6} sm={3} >
          <Paper className={`${classes.paper}`}>
        2
        </Paper>
          </Grid>
          <Grid item xs={6} sm={3} >
          <Paper className={`${classes.paper}`}>
       3
        </Paper>
          </Grid>
       
       
      </Grid>
    </div>
  );
}
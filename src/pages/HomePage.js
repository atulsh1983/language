import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Demo from "../components/buttonUI/demo";
import BarChart from '../components/BarChart';
import PieChartUI from '../components/PieChartUI';


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
  backy: {
    backgroundColor: '#fffde7'
  },
  backp: {
    backgroundColor: '#e1f5fe'
  },
  dots:{
    width:'10px',
    height:'10px',
    backgroundColor: 'red'    
  },
  greendot:{
    backgroundColor:'#3d8116',
    width:'10px',
    height:'10px'
  },
  bluedot:{
    backgroundColor:'#3468fa',
    width:'10px',
    height:'10px'
  }

})
);

export default function HomePage(props) {
  const { t, i18n } = props
  const spacing = 2;
  const classes = useStyles();

  const data = [
    { Month: 'January', ItemReturn: 12 },
    { Month: 'February', ItemReturn: 30 },
    { Month: 'March', ItemReturn: 40 },
    { Month: 'April', ItemReturn: 10 },
    { Month: 'May', ItemReturn: 16 },
    { Month: 'June', ItemReturn: 13 },
    { Month: 'July', ItemReturn: 8 },
  ];


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
              valthree={600} />
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
              valthree={60} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} >
          <Paper className={`${classes.paper}`}>
            <BarChart
              label={t('homePage.chartlabel')}
              data={data} />
          </Paper>
        </Grid>
        <Grid item xs={6} >
          <Paper className={`${classes.paper}`}>
            <Typography align="left" color="textPrimary">{t('homePage.claim')}</Typography>
            <PieChartUI />
            <Grid container spacing={3} style={{'marginTop':'10px'}}>
              <Grid item xs style={{'display':'flex','justifyContent':'center'}}>
                  <div style={{'display':'flex'}}>
                    <div style={{'display':'flex','alignItems':'center'}}>
                        <div className={classes.dots}></div>
                    </div>
                    <div style={{'paddingLeft':'10px'}}>{t('homePage.new')}:6</div>
                  </div>
              </Grid>
              <Grid item xs style={{'display':'flex','justifyContent':'center'}}>
                  <div style={{'display':'flex'}}>
                    <div style={{'display':'flex','alignItems':'center'}}>
                        <div className={classes.bluedot}></div>
                    </div>
                    <div style={{'paddingLeft':'10px'}}>{t('homePage.Pending')}:2</div>
                  </div>
              </Grid>
              <Grid item xs style={{'display':'flex','justifyContent':'center'}}>
                  <div style={{'display':'flex'}}>
                    <div style={{'display':'flex','alignItems':'center'}}>
                        <div className={classes.greendot}></div>
                    </div>
                    <div style={{'paddingLeft':'10px'}}>{t('homePage.approved')}:2</div>
                  </div>
              </Grid>
            </Grid>

          </Paper>
        </Grid>



      </Grid>
    </div>
  );
}
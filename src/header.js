import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Poppins',
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  customizeToolbar: {
    height: '40px'
  },
  customizeAppbar: {
    background: '#d50000',
    color: 'white'
  },
  customizeSearch: {

  },
  cSearch: {
    positon: 'absolute',
  },
  search: {

  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customizeAppbar}>
        <Toolbar className={classes.customizeToolbar}>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <div style={{ textAlign: 'center' }}><span>Logo</span></div>
              </Grid>
              <Grid item xs={6}>
                <div className='search'>
                  <input type='text' className='customizeSearch' placeholder='search' />
                  <div><span className="material-icons-round icon">search</span></div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={4}><div style={{ display: 'inline-flex', textAlign: 'center', fontWeight: '600', fontSize: '15px' }}>UAE<ArrowDropDownIcon /></div></Grid>
                  <Grid item xs={4}><div style={{ textAlign: 'center', display: 'inline-flex', fontWeight: '600', fontSize: '15px' }}>Login</div></Grid>
                  <Grid item xs={4}><div style={{ display: 'inline-flex', textAlign: 'center', fontWeight: '600', fontSize: '15px' }}><ShoppingCartOutlinedIcon />Cart</div></Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Toolbar>
      </AppBar>
      <Paper>
        <div>
            <Grid container style={{background: 'white',color: 'black', height: '35px',fontSize: '14px',fontWeight: '600'}}>
              <Grid item xs={2}></Grid>
              <Grid item xs>
                <Grid container>
                  <Grid item xs style={{marginTop: '6px',textAlign: 'center'}}>Mac</Grid>
                  <Grid item xs style={{marginTop: '6px',textAlign: 'center'}}>iPhone</Grid>
                  <Grid item xs style={{marginTop: '6px',textAlign: 'center'}}>Mobile Phones</Grid>
                  <Grid item xs style={{marginTop: '6px',textAlign: 'center'}}>iPad</Grid>
                  <Grid item xs style={{marginTop: '6px',textAlign: 'center'}}>Laptops</Grid>
                  <Grid item xs style={{marginTop: '6px',textAlign: 'center'}}>SmartWatches</Grid>
                  <Grid item xs style={{marginTop: '6px',textAlign: 'center'}}>Camera</Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>   
        </div>
      </Paper>
    </div>
  );
}

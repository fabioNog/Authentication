import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  root: {
    paddingTop: 150,
    height: 140
  },
  paper: {
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: 'linear-gradient(40deg, #EDE7D9 20%, #F2C57C 75%)',

  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <Grid container  justify={'center'}>

        <Grid item xs={12} sm={6} lg={6}>
          <Paper className={classes.paper}>
            <TextField
              id="uncontrolled"
              label="Nome Completo"
              className={classes.textField}
              margin="normal"
            />
            <br/>

            <TextField
              id="uncontrolled"
              label="Email"
              className={classes.textField}
              margin="normal"
            />
          </Paper>
        </Grid>


      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);

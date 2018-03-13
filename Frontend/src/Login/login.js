import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import 'typeface-roboto'
import { Link } from 'react-router-dom'

import Grids from '../Grid/grid1'



const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 0 ,

  },
  toolbar: {
    background: 'linear-gradient(40deg, #30332E 30%, #55D6BE 90%)',
  },
  login: {
    backgroundColor: "#3C91E6"
  },
  zeester: {
    backgroundColor: "#3C91E6"

  },

  // Botão Personalizado
  button: {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 3,
  border: 10,
  color: 'black',
  height: 42,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
},
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Zeester
          </Typography>
          <Link to="/">
            <Button className={props.classes.button}>
              {props.children ? props.children : 'Home'}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Grids/>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

import React from 'react';
import './App.css';
import Header from './Header/header.js';
import  Card, {CardMedia}  from 'material-ui/Card';
import image from './teste/zeester1.jpg'
import PropTypes from 'prop-types';

const styles = {
  card: {
    maxWidth: 545,
  },
  media: {
    height: 500,
  }
};

function Img1(props) {
  const { classes } = props;
  return (
    <div>
        <Card >
          <CardMedia
            className={classes.media}
            image={image}
          >
          </CardMedia>
        </Card>
    </div>
  );
}

Img1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Img1;

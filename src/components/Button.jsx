import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  test: {
    backgroundColor: 'pink',
    color: 'red'
  },
  effectOne: {
    color: 'red'
  },
  div: {
    // height: '10vh',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'grey',
    // zIndex: 3,
  },
  buttonContainer: {
    height: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  a1: {
    textDecoration: 'none',
    position: 'relative',
    color: '#61dafb',
    fontSize: '25px',
    border: '2px solid #61dafb',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: 0,
      backgroundColor: '#282c34',
      height: '100%',
      width: '100%',
      zIndex: -1,
      transformOrigin: 'bottom left',
      transform: 'rotate(-90deg)',
      transition: 'transform 200ms',
    },
    '&:hover:before': {
      transform: 'rotate(0deg)'
    }
  },

  a2: {
    textDecoration: 'none',
    position: 'relative',
    color: '#61dafb',
    fontSize: 25,
    border: '2px solid #61dafb',
    overflow: 'hidden',
    '&:before': {
      content: '""',
      position: 'absolute',
      left: 0,
      backgroundColor: '#282c34',
      height: '100%',
      width: '100%',
      zIndex: -1,
      transformOrigin: 'left',
      transform: 'translateX(-100%)',
      transition: 'transform 500ms',
    },
    '&:hover:before': {
      transform: 'translateX(0%)'
    }, 
    '&:hover': {
      color: 'green', 
      borderColor: 'green',
      transition: 'all 250ms ease-in 250ms'

    }
  }, 
  a3: {
    textDecoration: 'none',
    position: 'relative',
    fontSize: '25px',
    letterSpacing: '2px',
    color: 'green',
    border: '2px solid green',
    '&:before': {
      content: '""',
      position: 'absolute',
      // top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      color: '#61dafb',
      borderColor: '#61dafb',
      backgroundColor: '#282c34',
      transform: 'rotateX(90deg)',
      transition: 'all 1s',
      // transform: 'rotateX(90deg'
    }, 
    '&:hover:before': {
      transform: 'rotateX(0deg)',
    }, 
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      color: '#61dafb',
      borderColor: '#61dafb',
      backgroundColor: '#282c34',
      transform: 'rotateY(90deg)',
      transition: 'all 1s',
    }, 
    '&:hover:after': {
      transform: 'rotateY(0deg)'
    }, 
    '&:hover': {
      color: '#61dafb',
      borderColor: '#61dafb', 
      transition: 'all 250ms 250ms',
    }
  },

  a4: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '16px', 
    color: 'green',
    border: '2px solid green',
    fontFamily: '"Roboto", sans-serif',
    fontSize: '24px',
    fontWeight: '200',
    letterSpacing: '-1px',
    transition: 'all 250ms',
    '&:hover': {
      letterSpacing: '8px',
      fontWeight: '1000',
      border: '8px solid green',
    }
    

  },
  test: {
    backgroundColor: 'grey',
    color: 'pink',
    textDecoration: 'none',
    padding: '20px',
    border: '3px solid pink',
    transform: 'translateX(0px)',
    transition: 'transform 1s',
    '&:hover': {
      transform: 'translateX(100px)'
    }
  }
  
  // '&:before': {
  //   content: '""',
  //   position: 'absolute',
  //   left: 0,
  //   top: 0,
  //   backgroundColor: '#282c34',
  //   height: '100%',
  //   width: '100%',
  //   zIndex: -1,
  //   transformOrigin: 'top left',
  //   transform: 'rotate(90deg)',
  //   transition: 'transform 200ms',
  // },
  
  // 'a:hover:before': {
  //   transform: 'rotate(0deg)'
  // }
}


class ButtonOne extends Component {
  render() {
    const { classes, children, classNames } = this.props;
    return (
        <div className={classes.buttonContainer}> 
          <a href="#" className={classes.a1}>
            {children}
          </a>
        </div>
    )
  }
}

// export default Button;


const ButtonTwo = ({ classes, children } = this.props) => (
  <div className={classes.buttonContainer}>
    <a href='#' className={classes.a2}>
      {children}
    </a>
  </div>
)

const ButtonThree = ( { classes, children } = this.props) => (
  <div className={classes.buttonContainer}>
    <a href='#' className={classes.a3}>
      {children}
    </a>
  </div>
)

const ButtonFour = ( { classes,children } = this.props ) => (
  <div className={classes.buttonContainer}>
    <a href='#' className={classes.a4}>
      {children}
    </a>
  </div>
)

export const ButtonEffectOne = injectSheet(styles)(ButtonOne);
export const ButtonEffectTwo = injectSheet(styles)(ButtonTwo);
export const ButtonEffectThree = injectSheet(styles)(ButtonThree);
export const ButtonEffectFour = injectSheet(styles)(ButtonFour);

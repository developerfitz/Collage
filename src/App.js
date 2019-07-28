import React, { Component } from 'react';
import injectSheet, { ThemeProvider } from 'react-jss';

import Canvas from './components/Canvas';
import NavBar from './components/NavBar';
import reactLogo from './logo.svg';
import reduxLogo from './assets/redux.png';
import jssLogo from './assets/jssImage.png';
import stylusLogo from './assets/stylus.png';
import MDLogo from './assets/materialdesign.png';

import * as Buttons from './components/Button';
import classNames from 'classnames';

import './App.css';

const theme = {
  background: "grey",
}

const styles = { 
  wrapper: () => ({
    padding: 16,
    background: theme.background,
    textAlign: "left",
    border: "5px dotted skyblue", 
  }),
  title: {
    font: {
      size: 40,
      weight: 900,
    },
    color: 'skyblue',
    margin: 0,
    padding: 0,
  },
  link: {
    color: 'orange',
    "&:hover": {
      opacity: 0.5
    }
  },
  sandbox: {
    background: "grey",
    border: "double",
    height: "50px"
  }, 
  buttonEffects: {
    display: 'flex',
    paddingLeft: '24px',
    // backgroundColor:'grey'
  }, 
  flex: {
    margin: '24px',
    flexDirection: 'row',
  }
}

const Comp = ({ classes }) => (
  <div className={classes.wrapper}>
    <h1 className={classes.title}>Using React-JSS!</h1>
    <p>Keep learning and do not stop!</p>
    <a className={classes.link}
       href="http://cssinjs.org/react-jss"
       traget="_blank"
    >Click Here for JSS Docs</a>
    <br/>
    
  </div>
);

const StyledComp = injectSheet(styles)(Comp);


class AppPlain extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Mini Projects Collage</h1>
            <h3>Technologies</h3>
            <img src={reactLogo} className="App-logo" alt="react logo" />
            <img src={reduxLogo} className="App-logo" alt="redux logo" />
            <img src={jssLogo} className="Tech-logo" alt="JSS logo" />
            <img src={stylusLogo} className="Tech-logo" alt="stylus logo" />
            <img src={MDLogo} className="Tech-logo" alt="material design logo" />
            <p>
              Testing of different concepts and implementation!
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              React Docs
            </a>
          </div>
        </header>
        <div className={classes.buttonEffects}>
          <h3>Button Effects</h3>
          <div className={classes.flex}>
            <Buttons.ButtonEffectOne>Effect #1</Buttons.ButtonEffectOne>
            <Buttons.ButtonEffectTwo>Effect #2</Buttons.ButtonEffectTwo>
            <Buttons.ButtonEffectThree>Effect #3</Buttons.ButtonEffectThree>
            <Buttons.ButtonEffectFour>Effect #4</Buttons.ButtonEffectFour>
          </div>
        </div>
        <div className="basis">
          {/* <a href="#">Button</a> */}
        </div>
        <NavBar />
        <Canvas />
        <StyledComp />
      </div>
    );
  }
}

const AppStyled = injectSheet(styles)(AppPlain);

const App = (theme) => (
  <ThemeProvider theme={theme}>
    <AppStyled />
  </ThemeProvider>
);

export default App;

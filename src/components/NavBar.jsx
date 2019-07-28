import React, { Component } from 'react';
import injectSheet from 'react-jss';
import theme from '../theme.js';
import { Toolbar, ToolbarMenuIcon, ToolbarIcon, ToolbarRow, ToolbarSection } from '@rmwc/toolbar'; 
import menuIcon from '../assets/baseline-menu-24px.svg'

const styles = {
  // Logo
  logo: {
    backgroundColor: 'darkred', 
    color: 'green',
    float: 'left',
    // display: 'flex',
    // flexDirection: 'row',
    margin: 0,
    padding: '4px',
    height: '2.5rem',
    textAlign: 'center'
  }, 
  // center Nav
  centerNav: {
    backgroundColor: 'green',
    color: 'darkred',
    // float: 'right',
    height: '3rem',
    // width: 'auto',
    textAlign: 'center',
    lineHeight: 1,
    font: {
      size: 40,
      weight: 600,
    },
  },
  menuIcon: {
    float: 'right', 
    backgroundColor: 'darkred',
    // height: '1.5rem', 
    // width: '1.5rem'
  },
  // Grid
  grid: {
    backgroundColor: 'skyblue',
    // height: '5rem',
    display: 'grid',
    gap: '10px',
    'grid-template-columns': '0.75fr 2fr 0.25fr',
    'grid-template-rows': 'repeat(4, 25px)'
  },  
  cellLeft: {
    // height: 'auto',
    backgroundColor: 'green',
    'grid-row': 'span 2'

    // rowStart: 0,
    // rowEnd: 2
  },
  cellMiddle: {
    backgroundColor: 'pink',
    'grid-row': 'span 4'

  },
  cellRight: {
    backgroundColor: 'violet',
    'grid-row': 'span 3'
  },
  // Flex-box
  flex: {
    backgroundColor: 'orange',
    height: '5rem',
    display: 'flex',
    flex: '1 2 1',
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  cellFlex1: {
    backgroundColor: '#52ad',
    'flex-grow': 1
  },
  cellFlex2: {
    backgroundColor: '#1f2',
    'flex-grow': 2
  },
  cellFlex3: {
    backgroundColor: '#22d',
    'flex-grow': 1
  },
}


const Logo = ({ classes }) => (
  <h1 className={classes.logo}>Logo</h1>
) 

const StyledLogo = injectSheet(styles)(Logo);



class GridNav extends Component {
  render() {
    const {
      classes,
      children
    } = this.props
    return (
      <div className={classes.grid}>
        <div className={classes.cellLeft}>Left</div>
        <div className={classes.cellMiddle}>Middle</div>
        <div className={classes.cellRight}>Right</div>
        {/* <div className={classes.cellLeft}>Left</div>
        <div className={classes.cellMiddle}>Middle</div>
        <div className={classes.cellRight}>Right</div>
        <div className={classes.cellLeft}>Left</div>
        <div className={classes.cellMiddle}>Middle</div>
        <div className={classes.cellRight}>Right</div> */}
      </div>
    )
  }
}

const StyledGridNav = injectSheet(styles)(GridNav);

class FlexNav extends Component {
  render() {
    const {
      classes,
      children
    } = this.props
    return (
      <div className={classes.flex}>
        <div className={classes.cellFlex1}>Left</div>
        <div className={classes.cellFlex2}>Middle</div>
        <div className={classes.cellFlex3}>Right</div>
      </div>
    )
  }
}

const StyledFlexNav = injectSheet(styles)(FlexNav);

class CenterNav extends Component {
  render() {
    const {classes, children } = this.props
    return (
      <div className={classes.centerNav}>
        { children }
        <img src={menuIcon} className={classes.menuIcon}/>
      </div>
    );
  }
}

const StyledCenterNav = injectSheet(styles)(CenterNav);

class Menu extends Component {
  render() {
    return (
      <div>
        {/* <ToolbarMenuIcon icon="menu"/> */}
      </div>
    )
  }
}


class NavBar extends Component {
  render() {
    return (
      <div>
        <div>
          <StyledGridNav />
          <StyledFlexNav />
          <div>
            <StyledLogo />
            <StyledCenterNav>Nav Bar 
              
            </StyledCenterNav>
            <Menu></Menu>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar; 
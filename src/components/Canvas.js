import React, { Component } from 'react';

class Canvas extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    // .fillStyle should be above Rect
    ctx.fillStyle = 'rgb(200, 120, 12)';
    ctx.fillRect(10, 10, 20, 30);
    
    ctx.beginPath();
    ctx.moveTo(25, 50);
    ctx.lineTo(75, 100);
    ctx.lineTo(75, 0);
    ctx.fill();

    // Filled triangle
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(205, 125);
    ctx.lineTo(125, 205);
    ctx.fill();

    // Stroked triangle
    ctx.beginPath();
    ctx.moveTo(225, 225);
    ctx.lineTo(225, 145);
    ctx.lineTo(145, 225);
    ctx.closePath();
    ctx.stroke();

    // arc
    ctx.beginPath();
    ctx.moveTo(300, 300);
    // ctx.moveTo(350, 350);
    const endAngle = (Math.PI/180) * 90;
    ctx.arc(350, 350, 25, 0, endAngle, true);
    ctx.fill();

    ctx.beginPath();
    // ctx.moveTo(400, 10);
    const otherAngle = (Math.PI/180) * 180;
    ctx.arc(450, 60, 75, 0, otherAngle, false);
    ctx.fill();


    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
    
    // Cubic curves example
    ctx.fillStyle = 'pink';
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
    
    // rect
    //ctx.fillRect();
    //ctx.clearRect();
    //ctx.strokeRect();
    ctx.beginPath();
    // ctx.moveTo(20, 450); // automatically called
    ctx.rect(10, 450, 25, 25);
    ctx.fill();

  }

  render() {
    return (
      <canvas ref='canvas' width={'1000'} height={'500'} style={{border: '2px solid green'}}></canvas>
    )
  }
}

export default Canvas; 
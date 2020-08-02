import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let childOpacity = this.props.opacity - 0.1
    // console.log(childOpacity)
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity > 0.2 ? <ColorBox opacity={childOpacity}/> : null}
      </div>
    )
  }

}


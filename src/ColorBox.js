import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacity = this.props.opacity - .1;
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {/* style={ true ? "Hello" : "Goodbye" } */}
        {/* {this.props.opacity >= 0.2 ?  <ColorBox opacity= {this.props.opacity -0.1} /> : null} */}
        {this.props.opacity >= 0.2 ? <ColorBox opacity={newOpacity}/> : null}
      </div>
    )
  }

}


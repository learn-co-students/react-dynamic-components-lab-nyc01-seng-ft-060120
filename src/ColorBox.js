import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    // const newOpacity = this.props.opacity - 0.1
    // console.log(this.props.opacity)
    const newOpacity = this.props.opacity - 0.1
    if (this.props.opacity)
    {
      return (
        this.props.opacity < 0.2 ? null :
        <div className="color-box" style={{opacity: this.props.opacity}}>
           <ColorBox opacity={newOpacity}/>
        </div>
      )
    }
    else {return null}
  }

}


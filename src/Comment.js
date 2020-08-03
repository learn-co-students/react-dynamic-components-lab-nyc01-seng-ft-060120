//your code here

import React from 'react'

class Comments extends React.Component {

    render () {
        return (
            <div className='comment'>
                {this.props.commentText}
            </div>
        )
    }
}

export default Comments 
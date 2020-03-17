import React from 'react'

const titleStyle = {
    marginTop: 0,
    display: 'inline-block'
}

const Title = props => {
    const { show } = props;
    if (show) {
        return (
            <div style={titleStyle}>VideoHunt</div>
        )
    } else {
        return (
            <div />
        )
    }
}

export default Title
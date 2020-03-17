import React from 'react'
import { Image } from 'semantic-ui-react'

const User = (props) => {
    const showName = props.showName;
    if (showName) {
        const styles = { marginLeft: '0.5em' }
        return (
            <div>
                <Image avatar src={props.picture} size='mini' /> <span style={styles}>{props.name}</span>
            </div>
        )
    } else {
        return (
            <Image avatar src={props.picture} size='mini' />
        )
    }
}

export default User
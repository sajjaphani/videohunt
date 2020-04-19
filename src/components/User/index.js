import React from 'react'
import { Image } from 'semantic-ui-react'

const User = (props) => {
    const forAccountInfo = props.forAccountInfo;
    if (forAccountInfo) {
        const styles = { textAlign: 'center', padding: '1em 9em' }
        const nameStyles = { marginTop: '1em', fontSize: '1.5em', fontWeight: 700 }

        return (
            <div style={styles}>
                <Image avatar src={props.picture} size='tiny' />
                <div style={nameStyles}>{props.name}</div>
            </div>
        )
    }

    const showName = props.showName || false;
    let nameElt = <span />
    if (showName) {
        const styles = { marginLeft: '0.5em', fontWeight: 500 }
        nameElt = <span style={styles}>{props.name}</span>
    }

    return (
        <div className='round-avatar' >
            <Image src={props.picture} size='mini' avatar /> {nameElt}
        </div>
    )
}

export default User
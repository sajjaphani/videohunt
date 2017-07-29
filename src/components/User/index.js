import React from 'react'
import { Image } from 'semantic-ui-react'
const User = (props) => (
    <span>
        <Image avatar src={props.picture} /> {props.name}
    </span>
)

export default User
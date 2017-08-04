import React from 'react'
import { Divider } from 'semantic-ui-react'

const Footer = (props) => (
    <div>
        <Divider />
        {props.children}
    </div>
)

export default Footer
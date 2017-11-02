import React from 'react'
import { Divider, Segment } from 'semantic-ui-react'

const Footer = (props) => (
    <Segment attached>
        {props.children}
    </Segment>
)

export default Footer
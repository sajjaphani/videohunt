import React from 'react'
import { Header } from 'semantic-ui-react'

const PostHeader = props => (
    <Header as='h3' >
        {props.title}
        <Header.Subheader>
            {props.subtitle}
        </Header.Subheader>
    </Header>
)
export default PostHeader

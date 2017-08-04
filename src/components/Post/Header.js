import React from 'react'
import { Header, Divider } from 'semantic-ui-react'

const PostHeader = props => (
    <div>
        <Header as='h3' >
            {props.title}
            <Header.Subheader>
                {props.subtitle}
            </Header.Subheader>
        </Header>
        <Divider />
    </div>
)
export default PostHeader

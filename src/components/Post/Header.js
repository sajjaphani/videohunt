import React from 'react'
import { Header, Divider, Segment, Grid, Icon, Menu, Button } from 'semantic-ui-react'

const PostHeader = props => (
    <Segment attached padded clearing>
        <Header as='h3' >
            {props.title}
            <Header.Subheader>
                {props.subtitle}
            </Header.Subheader>
        </Header>
    </Segment>
)
export default PostHeader
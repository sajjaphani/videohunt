import React from 'react'
import { Header, Divider, Segment, Grid, Icon, Menu, Button } from 'semantic-ui-react'

const PostHeader = props => {
    let icon
    switch (props.provider) {
        case 'YouTube':
            icon = 'youtube square'
            break;
        case 'Facebook':
            icon = 'facebook square'
            break;
        case 'Twitter':
            icon = 'twitter square'
            break;
        case 'Vimeo':
            icon = 'vimeo square'
            break;
        default:
            icon = 'video play'
            break;
    }
    return (
        <Segment attached padded clearing>
            <Header as='h3' >
                {props.title}
                <Header.Subheader>
                    <Icon name={icon} size='large' />{props.author} | {props.category}
                </Header.Subheader>
            </Header>
        </Segment>
    )
}
export default PostHeader

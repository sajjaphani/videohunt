import React from 'react'
import { Header, Divider, Segment, Grid, Icon, Menu, Button } from 'semantic-ui-react'

const PostHeader = props => {
    let icon
    switch(props.provider){
        case 'Youtube':
        icon = 'youtube square'
        break;
        case 'Facebook':
        icon = 'facebook square'
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
)}
export default PostHeader

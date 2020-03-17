import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

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

    const styles = { marginBottom: '1em' };

    return (
        <div className="ui-background" style={styles}>
            <Header size='small'>
                <Icon name={icon} />
                <Header.Content>
                    {props.title}
                    <Header.Subheader>{props.author}</Header.Subheader>
                </Header.Content>
            </Header>
        </div>
    )
}

export default PostHeader

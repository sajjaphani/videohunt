import React from 'react'
import { Header } from 'semantic-ui-react'

const PostHeader = props => {
    const styles = { marginBottom: '1em' };

    return (
        <div className="post-item-bg" style={styles}>
            <Header size='small'>
                {/* <Icon name={icon} /> */}
                <Header.Content style={{color: '#FFFFFF'}} className="post-link">
                    {props.title} <span > || {props.author}</span>
                    {/* <Header.Subheader>{props.description}</Header.Subheader> */}
                </Header.Content>
            </Header>
        </div>
    )
}

export default PostHeader

import React from 'react'
import { Comment, Header, Divider } from 'semantic-ui-react'

const Section = (props) => {
    const { expandComments, children } = props
    if (!expandComments)
        return null;

    const styles = { marginTop: '1em' };

    return (
        <div className="post-item-bg" style={styles}>
            <Comment.Group collapsed={!expandComments} size='small'>
                <Header as='h3' style={{ color: '#ffffff' }}>Comments</Header>
                <Divider style={{
                    borderTop: '0.5px solid rgba(255, 255, 255, 0.5)',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }} />
                {children}
            </Comment.Group>
        </div>
    )
}

export default Section
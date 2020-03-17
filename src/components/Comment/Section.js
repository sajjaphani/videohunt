import React from 'react'
import { Comment, Header } from 'semantic-ui-react'

const Section = (props) => {
    const { expandComments, children } = props
    if (!expandComments)
        return null;

    const styles = { marginTop: '1em' };
    
    return (
        <div className="ui-background" style={styles}>
            <Comment.Group collapsed={!expandComments} size='small'>
                <Header as='h3' dividing>Comments</Header>
                {children}
            </Comment.Group>
        </div>
    )
}

export default Section
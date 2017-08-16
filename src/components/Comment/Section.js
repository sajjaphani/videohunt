import React from 'react'
import { Comment, Header, Segment } from 'semantic-ui-react'

const Section = (props) => {
    const { expandComments, children } = props
    if (!expandComments)
        return <div />
    return (
        <Segment attached basic>
            <Comment.Group collapsed={!expandComments} size='small' threaded>
                <Header as='h3' dividing>Comments</Header>
                {children}
            </Comment.Group>
        </Segment>
    )
}

export default Section
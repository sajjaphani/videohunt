import React from 'react'
import { Button, Comment, Form, Header, Divider, Image, Segment } from 'semantic-ui-react'

const Section = (props) => {
    const { expandComments, children } = props
    if (!expandComments)
        return <div />
    return (
        <Segment attached basic>
            <Comment.Group collapsed={!expandComments} size='small'>
                <Header as='h3' dividing>Comments</Header>
                {children}
            </Comment.Group>
        </Segment>
    )
}

export default Section
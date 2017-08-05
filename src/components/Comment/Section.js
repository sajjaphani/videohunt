import React from 'react'
import { Button, Comment, Form, Header, Divider, Image } from 'semantic-ui-react'

const Section = (props) => {
    const { expandComments, children } = props
    const divider = expandComments ? <Divider /> : <div />
    return (
        <div>
            {divider}
            <Comment.Group collapsed={!expandComments} size='small'>
                <Header as='h3' dividing>Comments</Header>
                {children}
            </Comment.Group>
        </div>
    )
}

export default Section
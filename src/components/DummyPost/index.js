import React from 'react'
import { Placeholder, Container } from 'semantic-ui-react'

const DummyPost = (props) => (
    <Container textAlign='center' className="ui-background">
        <Placeholder fluid>
            <Placeholder.Image rectangular />
            <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Header image>
                <Placeholder.Line length='full' />
                <Placeholder.Line length='full' />
            </Placeholder.Header>
        </Placeholder>
    </Container>
)

export default DummyPost
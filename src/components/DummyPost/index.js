import React from 'react'
import { Placeholder, Container } from 'semantic-ui-react'

const DummyPost = (props) => (
    <Container textAlign='center' className="ui-background">
        <Placeholder fluid>
            <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
                <Placeholder.Line length='full' />
                <Placeholder.Line />
            </Placeholder.Paragraph>
            <Placeholder.Paragraph>
                <Placeholder.Image rectangular />
            </Placeholder.Paragraph>
        </Placeholder>
    </Container>
)

export default DummyPost
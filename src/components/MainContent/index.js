import React from 'react'
import { Container } from 'semantic-ui-react'

const MainContent = (props) => {

    let mainStyle = { paddingTop: '6em' };

    return (
        <Container style={mainStyle}>
            {props.children}
        </Container>
    )
}

export default MainContent
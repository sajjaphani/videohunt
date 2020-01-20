import React from 'react'
import { Container } from 'semantic-ui-react'

const MainContent = (props) => {
    const mainStyle = {
        marginTop: "5em"
    }
    
    return (
        <div>
            <Container style={mainStyle}>
                {props.children}
            </Container>
        </div>
    )
}

export default MainContent
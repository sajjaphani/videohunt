import React from 'react'
import { Container } from 'semantic-ui-react'

const DayFeed = props => {
    const { children } = props;

    const styles = {
        paddingBottom: '1em',
        borderRadius: '4px !important'
    };

    return (
        <Container style={styles}>
            {children}
        </Container>
    )
}

export default DayFeed
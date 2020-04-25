import React from 'react'
import { Container } from 'semantic-ui-react'

// in previous releases, it is part of feed for each day, not the feed is combined based 
// TODO it may be removed with by adjusting the dependencies
const FeedWrapper = props => {
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

export default FeedWrapper
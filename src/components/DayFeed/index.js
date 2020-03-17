import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import Header from './Header'

const DayFeed = props => {
    const { children } = props;

    const styles = {
        paddingBottom: '1em',
        borderRadius: '4px !important'
    };

    const borderStyle = { borderRadius: '4px' };

    return (
        <Container style={styles}>
            <Segment style={borderStyle}>
                <Header basic date={props.date} />
                {children}
            </Segment>
        </Container>
    )
}

DayFeed.Header = Header

export default DayFeed
import React from 'react'

import { Segment, Header, Container } from 'semantic-ui-react'

import Logo from '../Header/Logo';

export default class EmptyFeed extends React.PureComponent {
    render() {
        const marginStyle = {
            marginTop: '25%',
            marginBottom: '0'
        };

        const containerStyle = { minHeight: '28.3em' };

        return (
            <Container style={containerStyle}>
                <Segment attached textAlign='center'>
                    <div style={marginStyle}>
                        <Logo full={true} />
                    </div>
                </Segment>
                <Segment attached textAlign='center'>
                    <Header size='small'>
                        No posts yet.
                        <Header.Subheader>
                            Looks like there are no posts here yet.
                        </Header.Subheader>
                    </Header>
                </Segment>
            </Container>
        )
    }
}

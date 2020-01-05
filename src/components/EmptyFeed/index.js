import React from 'react'

import { Segment, Header } from 'semantic-ui-react'

export default class EmptyFeed extends React.PureComponent {
    render() {
        return (
            <Segment>
                <Header size='small'>
                    No posts yet.
            <Header.Subheader>
                        Looks like there are no posts here yet.
            </Header.Subheader>
                </Header>
            </Segment>
        )
    }
}

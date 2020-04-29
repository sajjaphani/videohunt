import React from 'react'
import { Grid, Segment, Header, Divider } from 'semantic-ui-react'

import AddPostInfoFormContainer from '../../containers/AddPostInfoForm'

export default class AddPostInfoPage extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { name: '', hint: '' }
    }

    render() {
        const borderStyle = { borderRadius: '4px' };

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={16} computer={10} largeScreen={10} widescreen={10}>
                        <Segment style={borderStyle}>
                            <Header size='small' className="ui-background">Create a New Post</Header>
                            <Divider />
                            <AddPostInfoFormContainer />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
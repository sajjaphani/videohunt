import React from 'react'
import { Grid, Segment, Header, Divider } from 'semantic-ui-react'

import AddPostInfoFormContainer from '../../containers/AddPostInfoForm'

export default class AddPostInfoPage extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = { name: '', hint: '' }
        this.updatePostHint = this.updatePostHint.bind(this)
    }

    updatePostHint(param) {
        const hints = {
            url: { name: 'URL', hint: 'some hint for URL' },
            synopsis: { name: 'Synopsis', hint: 'A short summary of this video.' },
            title: { name: 'Title', hint: 'some hint for Title' },
            subtitle: { name: 'Sub Title', hint: 'some hint for Sub Title' },
            language: { name: 'Language', hint: 'some hint for Language' },
            category: { name: 'Category', hint: 'some hint for Category' }
        }

        const obj = hints[param]
        this.setState(obj)
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
                            <AddPostInfoFormContainer updatePostHint={this.updatePostHint} />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
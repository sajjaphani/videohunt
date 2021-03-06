import React from 'react'
import { Grid } from 'semantic-ui-react'

import AddPostInfoFormContainer from '../../containers/AddPostInfoForm'
import AddPostInfoHeader from './AddPostInfoHeader'
import AddPostInfoHint from './AddPostInfoHint'

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
        const { name, hint } = this.state
        return (
            <Grid>
                <Grid.Row>
                    <AddPostInfoHeader />
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='ten' largeScreen='ten' widescreen='ten'>
                        <AddPostInfoFormContainer updatePostHint={this.updatePostHint} />
                    </Grid.Column>
                    <Grid.Column verticalAlign='top' only='computer' computer='six' largeScreen='six' widescreen='six'>
                        <AddPostInfoHint name={name} hint={hint}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
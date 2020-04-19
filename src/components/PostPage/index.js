import React from 'react'
import { Grid } from 'semantic-ui-react'

import PostWrapperContainer from '../../containers/PostWrapper'
import UpNextContainer from '../../containers/UpNext'

class PostPage extends React.PureComponent {

    render() {
        const postId = this.props.match.params.id;
        const styles = { marginTop: '0em' };

        return (
            <Grid style={styles}>
                <Grid.Row>
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='ten' largeScreen='ten' widescreen='ten'>
                        <PostWrapperContainer postId={postId} />
                    </Grid.Column>
                    <Grid.Column only='computer' computer='six' largeScreen='six' widescreen='six'>
                        <UpNextContainer postId={postId} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default PostPage
import React from 'react'
import { Grid } from 'semantic-ui-react'

import PostWrapperContainer from '../../containers/PostWrapper'
import MorePostsInfo from './MorePostsInfo'

const PostPage = (props) => {
    return (
        <Grid>
            <Grid.Row >
                <Grid.Column mobile='sixteen' tablet='sixteen' computer='ten' largeScreen='ten' widescreen='ten'>
                    <PostWrapperContainer postId={props.match.params.id} />
                </Grid.Column>
                <Grid.Column only='computer' computer='six' largeScreen='six' widescreen='six'>
                    <MorePostsInfo />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default PostPage
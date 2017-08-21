import React from 'react'
import { Grid } from 'semantic-ui-react'

import PostContainer from '../../containers/Post'

const PostPage = (props) => {
    return (
        <Grid>
            <Grid.Row >
                <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                </Grid.Column>
                <Grid.Column mobile='sixteen' tablet='sixteen' computer='nine' largeScreen='nine' widescreen='nine'>
                    <PostContainer postId={props.match.params.id} />
                </Grid.Column>
                <Grid.Column only='computer' computer='one' largeScreen='one' widescreen='one'>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}

export default PostPage
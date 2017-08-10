import React from 'react'
import { Segment, Dimmer, Loader } from 'semantic-ui-react'

import Post from '../Post'
import WatchListButton from '../WatchListButton'
import ShareButton from '../ShareButton'
import CommentButton from '../CommentButton'
import LikeButton from '../LikeButton'

const DummyPost = (props) => (
    <div>
        <Dimmer.Dimmable as={Segment} dimmed={true}>
            <Dimmer active inverted>
                <Loader size='large'>Loading...</Loader>
            </Dimmer>
            <Post>
                <Post.Header title={'Loading...'} subtitle={'...'} />
                <Post.Video url={''} />
                <Post.Footer>
                    <LikeButton />
                    <CommentButton />
                    <WatchListButton />
                    <ShareButton />
                </Post.Footer>
            </Post>

        </Dimmer.Dimmable>



    </div>
)

export default DummyPost
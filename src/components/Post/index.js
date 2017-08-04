import React from 'react'
import { Segment } from 'semantic-ui-react'

import Header from './Header'
import Footer from './Footer'
import Video from './Video'

const Post = props => (
    <Segment attached>
        {props.children}
    </Segment>
)

Post.Header = Header
Post.Footer = Footer
Post.Video = Video

export default Post
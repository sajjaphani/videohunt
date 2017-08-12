import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Video from './Video'
import VideoEmbedly from './VideoEmbedly'

const Post = props => (
    <div>
        {props.children}
    </div>
)

Post.Header = Header
Post.Footer = Footer
Post.Video = Video
Post.VideoEmbedly = VideoEmbedly

export default Post
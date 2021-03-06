import React from 'react'

import Header from './Header'
import Footer from './Footer'
import Video from './Video'
import Embed from './Embed'
import VideoEmbedly from './VideoEmbedly'

const Post = props => (
    <div>
        {props.children}
    </div>
)

Post.Header = Header
Post.Footer = Footer
Post.Video = Video
Post.Embed = Embed
Post.VideoEmbedly = VideoEmbedly

export default Post
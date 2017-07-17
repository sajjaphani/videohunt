import React from 'react'
import { Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import PostHeader from './PostHeader'
import VideoComponentEmbed from './VideoComponentEmbed'
import PostFooterContainer from '../../containers/PostFooter'

const Post = props => {
    const visible = props.footerVisible === undefined ? true : props.footerVisible
    let footer = <div />
    if (visible) {
        footer = <PostFooterContainer visible={props.visible} postId={props.postId} />
    }
    return (
        <Segment attached>
            <Link to={'/posts/' + props.postId}>
                <PostHeader title={props.title} subtitle={props.subtitle} />
            </Link>
            <Divider />
            <VideoComponentEmbed url={props.url} />
            {footer}
        </Segment>
    )
}

export default Post
import React from 'react'
import { Segment } from 'semantic-ui-react'

import PostContainer from '../../containers/Post'
import DummyPost from '../DummyPost'

/**
 * Wrapper around Post Item (or container) to display post in Single post page
 * 
 * It differs from normal post in following way:
 * 
 * 1. Comments are always expanded no way to toggle
 * 2. Makes a rest call to fetch post (if required)
 * 3. Displays post loading state when rest call is still not returned
 * 
 */
export default class PostWrapper extends React.PureComponent {

    componentDidMount() {
        const { postId, postExists } = this.props
        // get post details if not available in state
        if (!postExists) {
            this.props.actions.loadPost(postId)
        }
    }

    componentDidUpdate(prevProps) {
        const { postId } = this.props;
        if (postId !== prevProps.postId) {
            this.props.actions.loadPost(postId)
        }
    }

    render() {
        const borderStyle = { borderRadius: '4px' };

        const { postExists, postId } = this.props
        if (postExists) {
            return (
                <Segment style={borderStyle} className="post-item-bg">
                    <PostContainer postId={postId} expandComments={true} />
                </Segment>
            )
        }

        return <DummyPost key={0} />
    }
}
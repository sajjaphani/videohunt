import React from 'react'

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
    render() {
        const { postExists, postId } = this.props
        if (postExists) {
            return <PostContainer postId={postId} expandComments={true} />
        }
        return <DummyPost />
    }
    componentDidMount() {
        const { postId, postExists } = this.props
        // get post details if not available in state
        if (!postExists) {
            this.props.actions.loadPost(postId)
        }
    }
}
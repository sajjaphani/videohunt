import React from 'react'
import PostItem from './PostItem'
import {Segment} from 'semantic-ui-react'
import DayFeedHeader from '../components/DayFeedHeader'


export default class DayFeed extends React.Component {

    render() {
        const postItems = this.props.posts.map((post) => {
            return (
                <PostItem key={post.postId} post={post}/>
            )
        })
        return (
            <Segment.Group>
               <DayFeedHeader  date={this.props.date} dateAnnotation={this.props.dateAnnotation}/>
               {postItems}
            </Segment.Group>
        )
    }

}
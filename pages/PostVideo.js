import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import VideoComponent from '../components/VideoComponent'
import PostItemHeader from '../components/PostItemHeader'
import PostItemFooter from './PostItemFooter'

export default class PostVideo extends React.Component {

    render() {
        console.log(this.props)
        return (
           <div>
               <h3> Posting a new Video... </h3>
           </div>
        )
    }
}
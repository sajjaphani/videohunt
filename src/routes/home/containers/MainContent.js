import React from 'react'
import { Header, Segment, Divider, Button, Icon } from 'semantic-ui-react'
import VideoComponent from '../components/VideoComponent'
import DayFeed from './DayFeed'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../../actions/videoActions'

class MainContent extends React.Component {

    componentDidMount() {
        console.log('componentWillMount inside MainContent')
        console.log('Current state of videos: ' + this.props.videos);
        this.props.actions.loadVideos();
    }

    render() {
        console.log(this.props);
        const daysFeed = this.props.videos.map((dayItem) => {
            return (
                <DayFeed key={dayItem.date} date={dayItem.date} dateAnnotation={dayItem.annotation} posts={dayItem.posts} />
            )
        })
        return (
            <div>
                {daysFeed}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        videos: state.videos
    };
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);
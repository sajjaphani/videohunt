import React from 'react'
import { Embed, Segment } from 'semantic-ui-react'
import VisibilitySensor from 'react-visibility-sensor'

export default class VideoEmbedly extends React.PureComponent {

    constructor(props) {
        super(props)
        const that = this
        embedly('player', function (player) {
            
        });
    }

    onChange = (isVisible) => {
        if (isVisible) {
            if (this.player) {
                this.player.pause()
            } 
        } else {
            if (this.player) {
                this.player.pause()
            } 
        }
    }

    render() {
        const vidId = this.props.url.split('v=').pop();
        return (
            <Segment vertical>
                <a className="embedly-card" href={this.props.url}>
                </a>
             </Segment>
        );
    }
}
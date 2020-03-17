import React from 'react'
import { Segment } from 'semantic-ui-react'

export default class VideoEmbedly extends React.PureComponent {

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
        return (
            <Segment attached clearing>
                <a className="embedly-card" href={this.props.url}>
                </a>
            </Segment>
        );
    }
}
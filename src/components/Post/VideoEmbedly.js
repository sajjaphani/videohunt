import React from 'react'
import { Embed, Segment } from 'semantic-ui-react'
import VisibilitySensor from 'react-visibility-sensor'

export default class VideoEmbedly extends React.PureComponent {

    constructor(props) {
        super(props)
        const that = this
        embedly('player', function (player) {
            {/*console.log("that ",that.props.url)
             console.log("that ",player.url)
             
             console.log("is equal ",player.url === that.props.url)
            if (player.url === that.props.url){
                that.player = player
                player.mute()
            }*/}
        });
    }

    onChange = (isVisible) => {
        console.log(this.props.url + ' Element is now %s', isVisible ? 'visible' : 'hidden')
        console.log(this.player)
        if (isVisible) {
            if (this.player) {
                this.player.pause()
            } else {
                console.log("this is null")
            }
        } else {
            if (this.player) {
                this.player.pause()
            } else {
                console.log("this is null")
            }
        }
    }

    render() {
        const vidId = this.props.url.split('v=').pop();
        return (
            <Segment attached clearing>
                <a className="embedly-card" href={this.props.url}>
                </a>
            </Segment>
            // <div id={vidId}>
            //     {/* <VisibilitySensor partialVisibility={true} offset={{ bottom: 300 }} onChange={this.onChange} /> */}
            //     <a className="embedly-card" href={this.props.url}>
            //     </a>
            // </div>
        );
    }
}
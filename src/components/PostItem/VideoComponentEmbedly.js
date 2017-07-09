import React from 'react'
import { Embed } from 'semantic-ui-react'
import VisibilitySensor from 'react-visibility-sensor'

export default class VideoComponentEmbedly extends React.Component {

    constructor() {
        super()
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

    onChange(isVisible) {
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
            <div id={vidId}>
                <VisibilitySensor partialVisibility={true} offset={{ bottom: 300 }} onChange={this.onChange.bind(this)} />
                <a className="embedly-card" href={this.props.url}>
                </a>
            </div>
        );
    }
}
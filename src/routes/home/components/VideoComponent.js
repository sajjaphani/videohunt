import React from 'react'
import { Embed } from 'semantic-ui-react'
import VisibilitySensor from 'react-visibility-sensor'

export default class VideoComponent extends React.Component {

    constructor(){
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

    comp1onentWillReceiveProps(nextProps) {
        console.log('this.props: ' + this.props)
        console.log('nextProps: ' + nextProps)
    }

    componentDidUpdate() {
        // embedly('card', '.embedly-card');

    }

    onChange(isVisible) {
        console.log(this.props.url + ' Element is now %s', isVisible ? 'visible' : 'hidden')
        console.log(this.player)
        if (isVisible) {
            if(this.player){
                this.player.pause()
            }else {
                console.log("this is null")
            }
        } else {
            if(this.player){
                this.player.pause()
            }else {
                console.log("this is null")
            }
        }
    }

    render() {
        // const placeholder = 'https://img.youtube.com/vi/'+this.props.url+'/0.jpg'
        const vidId = this.props.url.split('v=').pop();
        const placeholder = 'http://img.youtube.com/vi/' + vidId + '/maxresdefault.jpg'

        return (
            <div id={vidId}>
                <VisibilitySensor partialVisibility={true} offset={{bottom:300}} onChange={this.onChange.bind(this)} />
                
                <a className="embedly-card" href={this.props.url}>
                </a>

            </div>
        );
    }

    // <a className="embedly-card" href={this.props.url}></a>

    // <Embed
    //     id={vidId}
    //     placeholder={placeholder}
    //     source='youtube'
    //     autoplay={true}
    // />



}
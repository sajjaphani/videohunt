import React from 'react'
import { Embed } from 'semantic-ui-react'

const VideoComponentEmbed = props => {
    const vidId = props.url.split('v=').pop();
    const placeholder = 'http://img.youtube.com/vi/' + vidId + '/maxresdefault.jpg'
    return (
        <div id={vidId}>
            <Embed
                id={vidId}
                placeholder={placeholder}
                source='youtube'
                autoplay={true}
            />
        </div>
    );
}

export default VideoComponentEmbed
import React from 'react'
import { Embed } from 'semantic-ui-react'

const Video = props => {
    const vidId = props.url.includes('v=') ? props.url.split('v=').pop() : ''
    const placeholder = 'http://img.youtube.com/vi/' + vidId + '/maxresdefault.jpg'
    return (
            <Embed
                id={vidId}
                placeholder={placeholder}
                source='youtube'
                autoplay={true}
            />
    );
}

export default Video
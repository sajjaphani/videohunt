import React from 'react'
import { Embed, Segment } from 'semantic-ui-react'

function getParameter(url, name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) 
        return null;
    if (!results[2]) 
        return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const Video = props => {
    const videoId = getParameter(props.url, 'v')
    let placeholder
    if(videoId == '' || videoId == null)
        placeholder = '/images/videohunt.jpg'
    else 
        placeholder = 'https://i.ytimg.com/vi/' + videoId + '/sddefault.jpg'
    return (
        <Segment attached clearing>
            <Embed
                id={videoId}
                placeholder={placeholder}
                source='youtube'
                autoplay={true}
            />
        </Segment>
    );
}

export default Video
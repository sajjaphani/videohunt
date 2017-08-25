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
    // console.log('V=', videoId)
    // const vidId = props.url.includes('v=') ? props.url.split('v=').pop() : ''
    // const placeholder = 'http://img.youtube.com/vi/' + vidId + '/maxresdefault.jpg'
    const placeholder = 'https://i.ytimg.com/vi/' + videoId + '/sddefault.jpg'
    if (videoId == '' || videoId == null)
        return (<div />);

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
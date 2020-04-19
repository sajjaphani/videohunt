import React from 'react'
import { Image } from 'semantic-ui-react'

import moment from 'moment';

import './PostInfo.css';

const PostInfo = (props) => {
    const { postedOn } = props;
    let nameElt = <span />
    nameElt = (<div className='post-info'>
        <div className='user-name'>{props.name}</div>
        <div className='posted-on'>{moment(postedOn).fromNow()}</div>
    </div>)

    return (
        <div className='round-avatar' style={{ marginBottom: '1em' }}>
            <Image src={props.picture} size='mini' avatar /> {nameElt}
        </div>
    )
}

export default PostInfo
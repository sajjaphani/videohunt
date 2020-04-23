import React from 'react'
import { Comment } from 'semantic-ui-react'
import moment from 'moment'
import Emojify from 'react-emojione'

const Content = (props) => {

    const selectedUser = (e) => {
        e.preventDefault();
    };

    const { userName, commentText, commentedOn, children, totalLikes, commentMentionName } = props;

    let likeText = ''
    if (totalLikes > 0) {
        const countText = '. ' + totalLikes
        likeText = totalLikes === 1 ? countText + ' like' : countText + ' likes'
    }

    let mentionElt = null;
    if (commentMentionName) {
        const mention = `@${commentMentionName} `;
        mentionElt = <a className='comment-mention' href={'/user/' + mention} onClick={selectedUser}>{mention} </a>
    }

    return (
        <Comment.Content style={{ color: '#ffffff' }}>
            <Comment.Author as='a'>{userName}</Comment.Author>
            <Comment.Metadata>
                {moment(commentedOn).fromNow()} {likeText}
            </Comment.Metadata>
            <Comment.Text>
                {mentionElt}
                <Emojify>
                    {commentText}
                </Emojify>
            </Comment.Text>
            {children}
        </Comment.Content>
    )
}

export default Content
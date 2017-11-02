import React from 'react'
import { Comment } from 'semantic-ui-react'
import moment from 'moment'
import Emojify from 'react-emojione'

const Content = (props) => {
    const { userName, commentText, commentedOn, userPicture, children, totalLikes } = props
    let likeText = ''
    if (totalLikes > 0) {
        const countText = '. '+ totalLikes
        likeText = totalLikes == 1 ?  countText + ' like' : countText + ' likes'
    }
    return (
            <Comment.Content>
                <Comment.Author as='a'>{userName}</Comment.Author>
                <Comment.Metadata>
                    {moment(commentedOn).calendar()} {likeText}
                </Comment.Metadata>
                <Comment.Text>
                    <Emojify>
                        {commentText}
                    </Emojify>
                </Comment.Text>
                {children}
            </Comment.Content>
    )
}

export default Content
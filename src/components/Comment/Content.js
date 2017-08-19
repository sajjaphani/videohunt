import React from 'react'
import { Comment } from 'semantic-ui-react'
import moment from 'moment'
import Emojify from 'react-emojione'

const Content = (props) => {
    const { userName, commentText, commentedOn, userPicture, children, totalLikes } = props
    const likeText = totalLikes == 1 ? 'like' : 'likes'
    return (
            <Comment.Content>
                <Comment.Author as='a'>{userName}</Comment.Author>
                <Comment.Metadata>
                    {moment(commentedOn).calendar()} . {totalLikes} {likeText}
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
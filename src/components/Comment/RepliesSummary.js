import React from 'react'
import { Button } from 'semantic-ui-react'

export default class RepliesSummary extends React.PureComponent {
    handleClick = () => {
        this.props.showReplies(this.props.commentId)
    }
    render () {
        const { hidden, totalReplies } = this.props
        const replyStr = totalReplies > 1 ? ' Replies' : ' Reply'
        const summary = totalReplies + replyStr
        if (hidden || totalReplies == 0) {
            return null
        }
        return (
            <Button fluid content={summary} basic size='mini' onClick={this.handleClick}/>
        )
    }
}
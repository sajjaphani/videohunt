import React from 'react'
import { Button } from 'semantic-ui-react'

export default class RepliesSummary extends React.PureComponent {
    handleClick = () => {
        this.props.showReplies(this.props.commentId)
    }
    render() {
        const mainStyle = {
            marginTop: "1em"
        }
        const { hidden, totalReplies } = this.props
        const replyStr = totalReplies > 1 ? ' Replies...' : ' Reply...'
        const summary = totalReplies + replyStr
        if (hidden || totalReplies == 0) {
            return null
        }
        return (
            <Button content={summary} basic style={mainStyle} size='mini' onClick={this.handleClick} />
        )
    }
}
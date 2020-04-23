import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

export default class ShowMoreButton extends React.PureComponent {
    handleClick = () => {
        this.props.showMore(this.props.commentId)
    }
    render() {
        const { hidden, loading } = this.props
        if (hidden) {
            return null
        }

        const content = <span><Icon name='reply' size='small' flipped='horizontally' /> Show more replies...</span>;
        return (
            <Button content={content} basic className="replies" size='mini' onClick={this.handleClick} loading={loading} />
        )
    }
}
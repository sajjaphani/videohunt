import React from 'react'
import { Button } from 'semantic-ui-react'

export default class ShowMoreButton extends React.PureComponent {
    handleClick = () => {
        this.props.showMore(this.props.commentId)
    }
    render() {
        const mainStyle = {
            marginTop: "1em"
        }
        const { hidden } = this.props
       
        if (hidden) {
            return null
        }
        return (
            <Button content={'Show more...'} basic style={mainStyle} size='mini' onClick={this.handleClick} />
        )
    }
}
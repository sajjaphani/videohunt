import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'

export default class LoadFeed extends React.PureComponent {
    onChange = (isVisible) => {
        if (isVisible) {
            this.props.actions.loadMoreVideos(this.props.nextPage)
        }
    }

    render() {
        if (!this.props.nextPage) {
            return (
                <span />
            )
        }
        return (
            <VisibilitySensor
                scrollCheck
                scrollDelay={250}
                intervalDelay={8000}
                onChange={this.onChange}
                minTopValue={10}
                partialVisibility={true}
                >
            </VisibilitySensor>
        )
    }
}
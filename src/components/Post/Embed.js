import React from 'react'
import { Segment } from 'semantic-ui-react'

const Embed = props => {
    const embed = props.embed
    if (!embed)
        return (<div />)
    function createMarkup() { return { __html: embed } }

    return (
        <Segment attached clearing>
            <div dangerouslySetInnerHTML={createMarkup()} />
        </Segment>
    )
}

export default Embed
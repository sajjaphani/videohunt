import React from 'react'
import { Segment } from 'semantic-ui-react'

const Embed = props => {
    const embed = props.embed
    if(!embed)
        return (<div />)
    return (
        <Segment attached clearing>
            <div dangerouslySetInnerHTML={{__html: embed }} />
        </Segment>
    )
}

export default Embed
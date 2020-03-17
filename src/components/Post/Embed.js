import React from 'react'

const Embed = props => {
    const embed = props.embed
    if (!embed)
        return (<div />)
    function createMarkup() { return { __html: embed } }

    return (
        <div className="ui-background">
            <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
    )
}

export default Embed
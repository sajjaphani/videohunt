import React from 'react'

class Embed extends React.PureComponent {

    componentDidMount() {
        this.parseFB();
    }

    componentDidUpdate(_) {
        this.parseFB();
    }

    parseFB() {
        const postId = this.props.postId;
        const FB = window.FB;
        if (FB) {
            FB.XFBML.parse(document.getElementById(postId));
        }
    }

    render() {
        const { embed, postId } = this.props;
        if (!embed)
            return (<div />);

        const innerHtml = { __html: embed }

        return (
            <div id={postId} className="post-item-bg">
                <div dangerouslySetInnerHTML={innerHtml} />
            </div>
        )
    }
}

export default Embed
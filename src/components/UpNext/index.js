import React from 'react';
import { Container, Segment, Placeholder, Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import moment from 'moment';

import './UpNext.css';

export default class UpNext extends React.PureComponent {

    componentDidMount() {
        const { postId, initialized } = this.props;
        if (!initialized) {
            this.props.actions.loadRecommendations(postId)
        }
    }

    componentDidUpdate(prevProps) {
        const { postId } = this.props;
        if (postId !== prevProps.postId) {
            this.props.actions.loadRecommendations(postId)
        }
    }

    render() {
        const contStyle = { borderRadius: '4px', minHeight: '43em' };
        const boderStyleLast = { borderRadius: '0 0 4px 4px', padding: '4px', marginTop: '0' };

        const { isLoading, posts } = this.props;
        let nextItems = null;
        if (isLoading) {
            nextItems = getLoader([0, 1, 2, 3, 4])
        } else {
            nextItems = getNextItems(posts);
        }

        return (
            <Container className="ui-background" style={contStyle}>
                <div className='up-next'>
                    Up next
                </div>
                <div>
                    {nextItems}
                </div>
                <Segment style={boderStyleLast}></Segment>
            </Container>
        )
    }
}

const getNextItems = (items) => (
    items.map(item => (
        <Segment key={item.id} style={{ margin: 0 }}>
            <Link to={item.id}>
                {nextPost(item)}
            </Link>
        </Segment>
    ))
)

const nextPost = (item) => (
    <Grid columns={2}>
        <Grid.Column>
            <Image src={item.image} />
        </Grid.Column>
        <Grid.Column>
            <div className="next-title">{truncate(item.title, 48)}</div>
            <div className="next-auth">{item.author}</div>
            <div className="next-summ"><span>{item.views} views</span> | <span>{moment(item.postedOn).fromNow()}</span></div>
        </Grid.Column>
    </Grid>
);

const getLoader = (items) => (
    items.map(item => (
        <Segment key={item} style={{ margin: 0 }}>
            {placeHolder}
        </Segment>
    ))
)

const placeHolder = (<Grid columns={2}>
    <Grid.Column>
        <Placeholder>
            <Placeholder.Image rectangular />
        </Placeholder>
    </Grid.Column>
    <Grid.Column>
        <Placeholder>
            <Placeholder.Header>
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
                <Placeholder.Line />
            </Placeholder.Paragraph>
        </Placeholder>
    </Grid.Column>
</Grid>);

function truncate(str, len) {
    if (!str) {
        return ''
    }

    return (str.length > len) ? str.substr(0, len - 1) + '...' : str;
};
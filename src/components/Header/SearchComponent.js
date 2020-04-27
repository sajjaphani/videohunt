import React from 'react'
import { Search, Grid, Image, Header } from 'semantic-ui-react'

const resultRenderer = ({ image, title, description }) => (
    <Grid>
        <Grid.Column width={4}>
            <Image src={image} />
        </Grid.Column>
        <Grid.Column width={12}>
            <Header size='tiny'>
                {title}
                <Header.Subheader>
                    {truncate(description, 100)}
                </Header.Subheader>
            </Header>
        </Grid.Column>
    </Grid>
)

const initialState = { isLoading: false, results: [], value: '' }

export default class SearchComponent extends React.PureComponent {
    state = initialState

    handleResultSelect = (e, { result }) => {
        const postPath = '/posts/' + result.id;
        this.props.changeRoute(postPath);
        // this.setState({ value: result.title })
    }

    handleSearchChange = (e, { value }) => {
        const _value = value.trim()
        if (_value.length === 0) {
            this.setState(initialState);
            return;
        }

        this.setState({ isLoading: true, value: _value })
        setTimeout(() => {
            this.props.handleTextSearch(_value);
        }, 500);
    }

    componentDidUpdate(prevProps, prevState) {
        const { results, isLoadingResults } = this.props;
        if (!prevProps.results) {
            this.setState({ results: results });
            return;
        }
        if (results && results.length !== prevProps.results.length) {
            this.setState({ results: results });
        }
        this.setState({ isLoading: isLoadingResults });
    }

    render() {
        const { isLoading, value, results } = this.state;

        return (
            <Grid>
                <Grid.Column width={16}>
                    <Search
                        fluid
                        size="small"
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onFocus={debounce(this.handleSearchChange, 500, true)}
                        onSearchChange={debounce(this.handleSearchChange, 500, true)}
                        results={results}
                        value={value}
                        placeholder='Search VideoHunt'
                        resultRenderer={resultRenderer}
                    />
                </Grid.Column>
            </Grid>
        )
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        let context = this,
            args = arguments;

        let callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        }, wait);

        if (callNow)
            func.apply(context, args);
    }
}

function truncate(str, len) {
    console.log(str, str)
    if (!str) {
        return ''
    }

    return (str.length > len) ? str.substr(0, len - 1) + '...' : str;
};
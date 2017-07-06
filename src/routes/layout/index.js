import React from 'react'
import Sidebar from './containers/Sidebar'
import Home from '../home'
import Header from './containers/Header'
import { Grid, Segment, Container } from 'semantic-ui-react'


import AddPost from '../addPost'
import PostPage from '../post'
import NotFound from '../notFound'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        const mainStyle = {
            marginTop: "5em"
        }
        return (
            <div>
                <Header />
                <Container style={mainStyle}>
                    <Grid>
                        <Grid.Row >
                            <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
                                <Container>
                                    <Sidebar visible={true} />
                                </Container>
                            </Grid.Column>
                            <Grid.Column mobile='sixteen' tablet='sixteen' computer='nine' largeScreen='nine' widescreen='nine'>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/new-post" component={AddPost} />
                                <Route path="/posts/:item" component={PostPage} />
                                <Route component={NotFound} />
                            </Switch>
                            </Grid.Column>
                            <Grid.Column only='computer' computer='one' largeScreen='one' widescreen='one'>

                            </Grid.Column>
                        </Grid.Row>

                    </Grid>
                </Container>

            </div>
        )
    }
}
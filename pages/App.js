import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import Header from './Header'
import { Grid, Segment, Container } from 'semantic-ui-react'
import VideoComponent from '../components/VideoComponent'

import PostItem from './PostItem'
import PostVideo from './PostVideo'

import AddNewPost from './AddNewPost'
import PostItemPage from './PostItemPage'
import NotFound from './NotFound'

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
                                <Route exact path="/" component={MainContent} />
                                <Route path="/new-post" component={AddNewPost} />
                                <Route path="/posts/:item" component={PostItemPage} />
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
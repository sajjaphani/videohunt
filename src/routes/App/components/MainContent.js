import React from 'react'

import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../../home'
import AddPost from '../../addPost'
import PostPage from '../../post'
import NotFound from '../../notFound'

export default class MainContent extends React.Component {
    render() {
        const mainStyle = {
            marginTop: "5em"
        }
        return (
            <Container style={mainStyle}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/new-post" component={AddPost} />
                    <Route path="/posts/:item" component={PostPage} />
                    <Route component={NotFound} />
                </Switch>
            </Container>
        )
    }
}

// <Grid>
//                     <Grid.Row >
//                         <Grid.Column only='computer' computer='four' largeScreen='four' widescreen='four' >
//                             <Container>
//                                 <Sidebar visible={true} />
//                             </Container>
//                         </Grid.Column>
//                         <Grid.Column mobile='sixteen' tablet='sixteen' computer='nine' largeScreen='nine' widescreen='nine'>
                            
//                         </Grid.Column>
//                         <Grid.Column only='computer' computer='one' largeScreen='one' widescreen='one'>

//                         </Grid.Column>
//                     </Grid.Row>

//                 </Grid>
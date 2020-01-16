import React from "react";
// import { Helmet } from 'react-helmet';

import AppContainer from './app-container'

/*global FB*/

class App extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            // <div className="app">
            //     <Helmet>
            //         <title>VideoHunt</title>
            //         <meta charSet="utf-8" />
            //         <meta name="description" content="VideoHunt App" data-react-helmet="true" />
            //         <meta name="keywords" content="videohunt,video,video aggregation" data-react-helmet="true" />
            //     </Helmet>
            // </div>
            <AppContainer />
        );
    }
}

export default App;
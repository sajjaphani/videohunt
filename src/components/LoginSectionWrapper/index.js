import React from 'react'
import { Segment, Button, Grid } from 'semantic-ui-react'

import LoginSection from '../LoginSection'

import './LoginSectionWrapper.css';

export default class LoginSectionWrapper extends React.PureComponent {

    handleClick = () => {
        this.props.backToHomePage();
    }

    componentDidMount() {
        const loggedIn = this.props.loggedIn;
        if (loggedIn) {
            this.props.backToHomePage();
        }
    }

    render() {
        const borderStyle = { borderRadius: '4px', top: '50%', position: 'relative' };
        const styles = {
            position: 'absolute', width: '100%', top: 0,
            zIndex: '1000000', left: '0', background: '#c8d2de', height: '100%'
        };
        const dismissStyle = { position: 'absolute', top: '2.5em', right: '2.5em' };
        const gridStyle = { height: '100%' };

        return (
            <div style={styles}>
                <div style={dismissStyle}>
                    <Button className='dismiss' circular icon='remove' onClick={this.handleClick} />
                </div>
                <Grid verticalAlign='middle' columns={1} centered style={gridStyle}>
                    <Grid.Column mobile='sixteen' tablet='sixteen' computer='sixteen' largeScreen='sixteen' widescreen='sixteen'>
                        <Segment style={borderStyle}>
                            <LoginSection handleLogin={this.props.handleLogin} />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}
import React from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'

const logoStyle = {
    marginRight: "1.5em"
}

const segmentStyle = {
    backgroundColor: '#F8E60A',
    padding: '.5em 1.5em',
    borderRadius: '0 0 4px 4px'
};

const logoTextStyle = {
    marginTop: '10px',
    fontWeight: 700
};

const HeaderLogo = props => {
    const { full } = props;
    if (!full) {
        return (
            <Image style={logoStyle} src="/images/videohunt-logo.png" size='mini' centered />
        );
    } else {
        return (
            <Grid stackable textAlign='center'>
                <Segment compact={true} textAlign='center' style={segmentStyle}>
                    <Image src='/images/logo1.png' size='mini' centered />
                    <div style={logoTextStyle}>VideoHunt</div>
                </Segment>
            </Grid>);
    }
}

export default HeaderLogo
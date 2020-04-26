import React from 'react';
import { Icon } from 'semantic-ui-react'

import './Loader.css';

const Loader = (_) => (
    <div className="hvcenter">
        <div className="splash">
            <div style={{textAlign: 'center'}}><Icon loading name='spinner' /></div>
            <div>LOADING...</div>
        </div>
    </div>
);

export default Loader;
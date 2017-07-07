import React from 'react'

import HeaderContainer from '../containers/HeaderContainer'
import MainContent from './MainContent'

export default class AppLayout extends React.Component {
    render() {
        return (
            <div>
                <HeaderContainer/>
                <MainContent/>                
            </div>
        )
    }
}
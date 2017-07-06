import React from 'react'

import Header from '../containers/Header'
import MainContent from './MainContent'

export default class AppLayout extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <MainContent/>                
            </div>
        )
    }
}
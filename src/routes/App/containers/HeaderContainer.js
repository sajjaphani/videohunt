import React from 'react'
import { Menu, Container, Button, Divider } from 'semantic-ui-react'
import LoginModal from '../components/LoginModal'
import UserAccount from '../components/UserAccount'

import { Link } from 'react-router-dom';

import Modal from 'react-modal';

import {postNewVideo} from '../../../actions/videoActions';

import {connect} from 'react-redux'
import { Redirect } from 'react-router'

const customStyles = {
    content: {
        top: '20%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '30px'
    }
};

class HeaderContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            activeItem: 'upcomingEvents',
            modalIsOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.postVideo = this.postVideo.bind(this);
        
    }

    openModal() {
        this.setState({ activeItem: 'upcomingEvents', modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ activeItem: 'upcomingEvents', modalIsOpen: false });
    }

    postVideo(dispatch) {
        dispatch(postNewVideo(document.getElementById("newvideo").value))
        this.closeModal()
    }

    handleItemClick = (e, { name }) => {
        console.log('given name: ' + name)
        if (name === 'addpost') {
            this.openModal()
            this.setState({ activeItem: name, modalIsOpen: false})
        }
        if (name === 'editorials') {
            this.setState({ activeItem: name, modalIsOpen: false})
        }
    }

    render() {
        <Header/>
    }
}

export default connect()(Header)
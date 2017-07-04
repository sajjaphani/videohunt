import React from 'react'
import { Menu, Container, Button, Divider } from 'semantic-ui-react'
import LoginModal from '../components/LoginModal'
import UserAccount from '../components/UserAccount'

import { Link } from 'react-router-dom';

import Modal from 'react-modal';

import {postNewVideo} from '../actions/videoActions';

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

class Header extends React.Component {

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
        this.props.dispatch(postNewVideo(document.getElementById("newvideo").value))
        this.closeModal()
    }

    handleItemClick = (e, { name }) => {
        console.log('given name: ' + name)
        {/*if (name === 'addpost') {
            this.openModal()
        }*/}
        if (name === 'editorials') {
            this.setState({ activeItem: name, modalIsOpen: false})
        }
    }

    render() {
        const { activeItem } = this.state
        const titleStyle = {
            marginTop: 0
        }
        const logoStyle = {
            marginRight: "1.5em"
        }
        const dotsStyle = {
            fontSize: "1.5em",
            "letterSpacing": "2px",
            marginTop: "-5px"
        }
        const plusStyle = {

            "letterSpacing": "2px",
            marginTop: "5px"
        }
        return (
            <Menu borderless fixed='top' size='small'>
                <Container>
                    <Link to="/">
                        <Menu.Item
                            name='editorials'
                            active={activeItem === 'editorials'}
                            onClick={this.handleItemClick}>
                            <img style={logoStyle} src="/images/logo.png" />

                            <div style={titleStyle}>
                                Jack Fruit
                            </div>
                        </Menu.Item>
                    </Link>

                    <Menu.Item
                        name='morehunt'
                        active={activeItem === 'morehunt'}
                        onClick={this.handleItemClick}
                        position='right'>
                        <div style={dotsStyle}> ... </div>
                    </Menu.Item>

                    <Link to="/new-post">
                        <Menu.Item
                            name='addpost'
                            active={activeItem === 'addpost'}
                            onClick={this.handleItemClick}>
                            <div style={plusStyle}> &#x2795; </div>
                        </Menu.Item>
                    </Link>

                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >

                        <h2 ref={subtitle => this.subtitle = subtitle}>Add a new Video</h2>
                        <label>URL: </label> <input id="newvideo" name="newVideo" /> <br />
                        <button onClick={this.closeModal}>Cancel</button>
                        <button onClick={this.postVideo}>Post</button>
                    </Modal>

                    <Menu.Item
                        name='signup'
                        active={activeItem === 'signup'}
                        onClick={this.handleItemClick}
                    >
                        <UserAccount imageUrl={'/images/boy.png'} />
                    </Menu.Item>
                    {/*<Menu.Menu position='right'>
                        <Menu.Item
                            name='login'
                            active={activeItem === 'login'}
                            onClick={this.handleItemClick}
                            
                        >
                            <LoginModal name='Login / Signup' />
                        </Menu.Item>
                        <Menu.Item
                            name='signup'
                            active={activeItem === 'signup'}
                            onClick={this.handleItemClick}
                            
                        >
                            <LoginModal name='Signup'/>
                        </Menu.Item>
                    </Menu.Menu>*/}

                </Container>
            </Menu>
        );
    }
}

export default connect()(Header)
import React from 'react'

export default class Header extends React.Component {
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
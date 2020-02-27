import React, { Component } from 'react';
import AppBar from '../../components/AppBar/AppBar';
// import { connect } from 'react-redux';
import { AppDrawer } from '../../components/Drawer/Drawer';

class Layout extends Component {
	state = {
		menu: false,
        isLoginMenu: false,
        anchorEl: null
	};

    setAnchorEl = (item) => {
        this.setState({
            anchorEl: item
        })
    }

	toggleMenyHandler = () => {
		this.setState({
			menu: !this.state.menu
		});
	};
	toggleLoginMenyHandler = () => {
		this.setState({
			isLoginMenu: !this.state.isLoginMenu
		});
	};
	menuCloseHandler = () => {
		this.setState({
			menu: false
		});
	};
	render() {
		return (
			<>
				<AppBar
					isOpen={this.state.menu}
					onToggle={this.toggleMenyHandler}
					isLoginMenu={this.state.isLoginMenu}
                    toggleLoginMenyHandler={this.toggleLoginMenyHandler}
                    anchorEl={this.state.anchorEl}
                    setAnchorEl={this.setAnchorEl}
				/>
				<AppDrawer open={this.state.menu} onClose={this.menuCloseHandler} />
				<main>{this.props.children}</main>
			</>
		);
	}
}

export default Layout;

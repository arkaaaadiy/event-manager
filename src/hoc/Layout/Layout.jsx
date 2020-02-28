import React, { Component } from 'react';
import AppBar from '../../components/AppBar/AppBar';
// import { connect } from 'react-redux';
import { AppDrawer } from '../../components/Drawer/Drawer';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

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
					isAuthenticated={this.props.isAuthenticated}
					isLoginMenu={this.state.isLoginMenu}
                    toggleLoginMenyHandler={this.toggleLoginMenyHandler}
                    anchorEl={this.state.anchorEl}
					setAnchorEl={this.setAnchorEl}
					logout={this.props.logout}
				/>
				<AppDrawer open={this.state.menu} onClose={this.menuCloseHandler} />
				<main>{this.props.children}</main>
			</>
		);
	}
}
function mapStateToProps(state) {
	return {
		isAuthenticated: !!state.auth.token
	}
}


export default connect(mapStateToProps,{logout})(Layout);

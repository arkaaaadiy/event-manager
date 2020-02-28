import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	makeStyles,
	Menu,
	MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	loginLink: {
		color: 'rgba(0, 0, 0, 0.87)',
		textDecoration: 'none'
	}
}));

export default props => {
	const classes = useStyles();
	const handleClick = event => {
		props.toggleLoginMenyHandler();
		props.setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		props.toggleLoginMenyHandler();
		props.setAnchorEl(null);
	};
	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'
					onClick={props.onToggle}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant='h6' className={classes.title}>
					Release Event App
				</Typography>
				<Button color='inherit' aria-controls='login-menu' onClick={handleClick}>
					{props.isAuthenticated ? 'Logout' : 'Login'}
				</Button>
				<Menu
					id='login-menu'
					anchorEl={props.anchorEl}
					keepMounted
					open={props.isLoginMenu}
					onClose={handleClose}
				>
					{!props.isAuthenticated ? (
						<div>
							<Link to='/sign-in' className={classes.loginLink}>
								<MenuItem onClick={handleClose}>Login</MenuItem>
							</Link>
							<Link to='/sign-up' className={classes.loginLink}>
								<MenuItem onClick={handleClose}>Register</MenuItem>
							</Link>
						</div>
					) : (
						<Link to='/' className={classes.loginLink}>
							<MenuItem onClick={props.logout}>Logout</MenuItem>
						</Link>
					)}
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

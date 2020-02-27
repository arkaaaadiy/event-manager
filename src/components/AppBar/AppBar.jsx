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

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default props => {
	const classes = useStyles();
    const handleClick = event => {
        props.toggleLoginMenyHandler();
        props.setAnchorEl(event.currentTarget)
      };
      const handleClose = () => {
        props.toggleLoginMenyHandler();
          props.setAnchorEl(null)
      }
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
				<Button color='inherit' aria-controls="login-menu" onClick={handleClick}>
					Login
				</Button>
				<Menu
                    id='login-menu'	
                    anchorEl={props.anchorEl}				
					keepMounted
					open={props.isLoginMenu}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>Login</MenuItem>
					<MenuItem onClick={handleClose}>Register</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

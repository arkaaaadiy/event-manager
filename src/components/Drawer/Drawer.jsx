import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
	list: {
		width: 250
	},
	link: {
		textDecoration: 'none',
		color: 'rgba(0, 0, 0, 0.7) '
	},
	selected: {
		color: 'rgba(0, 0, 0, 1) '
	}
});

export const AppDrawer = props => {
	const classes = useStyles();
	return (
		<Drawer open={props.open} onClose={props.onClose}>
			<Box m={3}>
			<Typography variant='h6' className={classes.title}>
				Release Event App
			</Typography>
			</Box>
			<div onClick={props.onClose}>
				<NavLink
					to='/'
					className={classes.link}
					activeClassName={classes.selected}
					exact
				>
					<MenuItem className={classes.list}>Главная</MenuItem>
				</NavLink>

				<NavLink
					to='/create-event'
					exact
					activeClassName={classes.selected}
					className={classes.link}
				>
					<MenuItem>Создание события</MenuItem>
				</NavLink>

				<NavLink
					to='/event-list'
					exact
					activeClassName={classes.selected}
					className={classes.link}
				>
					<MenuItem>Просмотреть мои события</MenuItem>
				</NavLink>				
			</div>
		</Drawer>
	);
};

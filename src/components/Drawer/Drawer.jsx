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
					EVENT MANAGER
				</Typography>
			</Box>
			<div onClick={props.onClose}>
				{props.links.map(link => (
					<NavLink
						key={link.name}
						to={link.path}
						className={classes.link}
						activeClassName={classes.selected}
						exact
					>
						<MenuItem className={classes.list}>{link.name}</MenuItem>
					</NavLink>
				))}
			</div>
		</Drawer>
	);
};

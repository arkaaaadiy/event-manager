import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Divider from '@material-ui/core/Divider';
import { Tooltip, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
    },
    description: {
        [theme.breakpoints.down('xs')]: {
            display: 'none',
          },
	},
	name: {
		flex: '1 0 33%'
	}
}));

export default function InsetDividers(props) {
    const classes = useStyles(); 
      
	return (
        
		<List className={classes.root}>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<DateRangeIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText className={classes.name} primary={props.name} secondary={props.date} />
				<ListItemText className={classes.description} primary={props.description}  />				
				<Tooltip title='Delete'>
					<IconButton aria-label='delete' onClick={()=>props.onDeleteUserEvent(props.id)} >
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			</ListItem>
			<Divider variant='inset' component='li' />
		</List>
	);
}

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
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
    },
    description: {

        [theme.breakpoints.down('xs')]: {
            display: 'none',
          },
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
				<ListItemText primary={props.name} secondary={props.date} />
				<ListItemText className={classes.description} primary={props.description}  />				
				<Tooltip title='Add'>
					<IconButton aria-label='add' onClick={()=>props.onDeleteUserEvent(props.id)} >
						<AddIcon />
					</IconButton>
				</Tooltip>
			</ListItem>
			<Divider variant='inset' component='li' />
		</List>
	);
}

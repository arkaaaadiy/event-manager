import React, { Component } from 'react';
import {
	Typography,
	CircularProgress,
	Container,
	Box
} from '@material-ui/core';
import { connect } from 'react-redux';
import {
	fetchUserEventList,
	deleteUserEvent
} from '../../store/actions/eventList';
import classes from './EventList.module.css';
import InsetDividers from '../../components/InsertDividers/InsertDividers';
import { Link } from 'react-router-dom';
import { rangeDate } from '../../helpers/rangeDate';



class EventList extends Component {
	componentDidMount() {
		this.props.fetchUserEventList();
	}
	deleteEvent = id => {
		this.props.deleteUserEvent(id);
	};
	renderEvent() {
		return this.props.events.map(event => {
			return (
				<InsetDividers
					key={event.id}
					id={event.id}
					type={event.type}
					name={event.eventName}
					date={rangeDate(event.dateEvent)}
					description={event.descriptionName}
					onDeleteUserEvent={this.deleteEvent}
				/>
			);
		});
	}

	render() {
		return (
			<Container>
				<Box p={2}>
					<Typography variant='h4' component='h1' align='center'>
						Список событий
					</Typography>
				</Box>
				{this.props.loading ? (
					<div className={classes.loading}>
						<CircularProgress size={100} />
					</div>
				) : this.props.events.length !== 0 ? (
					this.renderEvent()
				) : (
					<Typography variant='subtitle1' component='p' align='center'>
						Список событий пока пуст.<Link to='/create-event'>Добавить</Link>
					</Typography>
				)}
			</Container>
		);
	}
}
function mapStateToProps(state) {
	return {
		events: state.eventList.events,
		loading: state.eventList.loading
	};
}
export default connect(mapStateToProps, {
	fetchUserEventList,
	deleteUserEvent
})(EventList);

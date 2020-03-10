import React, { Component } from 'react';
import InsetDividersHome from '../../components/InsertDividers/InsertDividersHome';
import { rangeDate } from '../../helpers/rangeDate';
import { connect } from 'react-redux';
import { fetchHomeEventList } from '../../store/actions/eventList';
import { Container, CircularProgress, Box } from '@material-ui/core';
import classes from './Home.module.css';

class Home extends Component {
	componentDidMount() {
		this.props.fetchHomeEventList();
	}
	renderEvent() {
		return this.props.events.map(event => {
			return (
				<InsetDividersHome
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
			<Container maxWidth='md'>
				<Box mt={3}>
					{this.props.loading ? (
						<div className={classes.loading}>
							<CircularProgress size={100} />
						</div>
					) : (
						this.renderEvent()
					)}
				</Box>
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
export default connect(mapStateToProps, { fetchHomeEventList })(Home);

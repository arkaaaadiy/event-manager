import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class EventList extends Component {
	state = {
		events: [{ id: 1 }, { id: 2 }, { id: 3 }]
	};

	renderEvent() {
		console.log(this.state.events);
		return this.state.events.map(event => {
			return <li key={event.id}>{event.id}</li>;
		});
	}

	render() {
		return (
			<div>
				<Typography variant='h3' component='h1'>
                    Список событий
				</Typography>				
				<ul>{this.renderEvent()}</ul>
			</div>
		);
	}
}

export default EventList;

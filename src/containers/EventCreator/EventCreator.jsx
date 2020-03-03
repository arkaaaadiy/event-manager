import React, { Component } from 'react';
import {
	TextField,
	Grid,
	Typography,
	Paper,
	InputLabel,
	Select,
	FormControl,
	MenuItem,
	Button
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider
} from '@material-ui/pickers';
import classes from './EventCreator.module.css';
import { connect } from 'react-redux';
import { fetchUserEvent } from '../../store/actions/eventCreator';

function createFormControls() {
	return {
		eventName: {
			value: '',
			id: 'eventName',
			name: 'eventName',
			fullWidth: true,
			required: true,
			error: false,
			errorMessage: 'Поле должно быть заполнено',
			valid: false,
			touched: false,
			validation: {
				required: true,
				maxLength: 100
			}
		},
		descriptionName: {
			value: '',
			id: 'descriptionName',
			name: 'descriptionName',
			fullWidth: true,
			errorMessage: 'Максимальная длинна 250',
			error: false,
			valid: true,
			touched: false,
			validation: {
				maxLength: 250
			}
		},
		dateEvent: {
			value: new Date(),
			id: 'dateEvent',
			name: 'dateEvent',
			errorMessage: 'Введите дату',
			error: false,
			valid: false,
			touched: false,
			validation: {
				required: true
			}
		},
		typeEvent: {
			id: 'typeEvent',
			name: 'typeEvent',
			fullWidth: true,
			value: '',
			valid: true
		}
	};
}

export class EventCreator extends Component {
	state = {
		isFormValid: false,
		formControls: createFormControls()
	};
	validateControl(value, validation) {
		if (!validation) {
			return true;
		}

		let isValid = true;

		if (validation.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (validation.maxLength) {
			isValid = value.length <= validation.maxLength && isValid;
		}

		return isValid;
	}
	handleDateChange = date => {
		this.onChangeHandler(date, 'dateEvent');
	};
	onChangeHandler = (event, controlName) => {
		const formControls = { ...this.state.formControls };
		const control = { ...formControls[controlName] };

		control.touched = true;
		if (controlName === 'dateEvent') {
			control.value = event;
			control.valid = !(event === new Date());
		} else {
			control.value = event.target.value;
			control.valid = this.validateControl(control.value, control.validation);
		}

		control.valid ? (control.error = false) : (control.error = true);

		formControls[controlName] = control;

		let isFormValid = true;

		Object.keys(formControls).forEach(name => {
			isFormValid = formControls[name].valid && isFormValid;
		});

		this.setState({
			formControls,
			isFormValid
		});
	};
	addEventHandler = event => {
		event.preventDefault();

		const {
			eventName,
			descriptionName,
			typeEvent,
			dateEvent
		} = this.state.formControls;

		if (!eventName.valid) {
			const formControls = { ...this.state.formControls };
			formControls['eventName'].error = true;
			this.setState({ formControl: formControls });
		}
		const userEvent = {
			eventName: eventName.value,
			descriptionName: descriptionName.value,
			typeEvent: typeEvent.value,
			dateEvent: dateEvent.value
		};
		if (this.state.isFormValid) {
			this.props.fetchUserEvent(userEvent);

			this.setState({
				isFormValid: false,
				formControls: createFormControls()
			});
		} else {
			return;
		}
	};

	renderInputs = () => {};

	render() {		
		const select = (
			<Grid item xs={12} sm={4}>
				<FormControl fullWidth className={classes.formControl}>
					<InputLabel id='typeEvent'>Тип события</InputLabel>
					<Select
						labelId='typeEvent'
						id='typeEvent-select'
						autoWidth
						value={this.state.formControls['typeEvent'].value}
						onChange={event => this.onChangeHandler(event, 'typeEvent')}
					>
						<MenuItem value={'movie'}>Кино</MenuItem>
						<MenuItem value={'serial'}>Сериал</MenuItem>
						<MenuItem value={'game'}>Игра</MenuItem>
						<MenuItem value={'other'}>Другое</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		);
		const dataPicker = (
			<Grid item xs={12}>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<KeyboardDatePicker
						format='dd/MM/yyyy'
						margin='normal'
						id='date-event-inline'
						name='dateEvent'
						label='Введите дату события'
						value={this.state.formControls['dateEvent'].value}
						onChange={this.handleDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date'
						}}
					/>
				</MuiPickersUtilsProvider>
			</Grid>
		);
		return (
			<div className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography component='h1' variant='h4' align='center'>
						Создай свое событие
					</Typography>
					<form>
						<Grid container spacing={2}>
							{select}
							<Grid item xs={12} sm={8}>
								<TextField
									required
									error={this.state.formControls['eventName'].error}
									helperText={
										this.state.formControls['eventName'].error
											? this.state.formControls['eventName'].errorMessage
											: null
									}
									id='eventName'
									name='eventName'
									label='Название события'
									fullWidth
									value={this.state.formControls['eventName'].value}
									onChange={event => this.onChangeHandler(event, 'eventName')}
								/>
							</Grid>
							<Grid item xs={12} sm={12}>
								<TextField
									id='descriptionName'
									name='descriptionName'
									label='Описание события'
									fullWidth
									value={this.state.formControls['descriptionName'].value}
									onChange={event => this.onChangeHandler(event, 'descriptionName')}
								/>
							</Grid>
							{dataPicker}

							<Grid item className={classes.buttons}>
								<Button
									variant='contained'
									color='primary'
									onClick={this.addEventHandler}
								>
									Создать
								</Button>
							</Grid>
						</Grid>
					</form>
				</Paper>
			</div>
		);
	}
}

export default connect(null, { fetchUserEvent })(EventCreator);

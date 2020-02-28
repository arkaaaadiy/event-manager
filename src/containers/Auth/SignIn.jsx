import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import classes from './SignUp.module.css';
import { connect } from 'react-redux';
import { auth } from '../../store/actions/auth';
import is from 'is_js';

class SignIn extends Component {
	state = {
		isFormValid: false,
		formControls: {
			// fname: {
			// 	value: '',
			//   xs: 12,
			//   sm: 6,
			// 	name: 'firstName',
			// 	autoComplete: 'fname',
			// 	variant: 'outlined',
			// 	label: 'Введите имя',
			// 	errorMessage: 'Введите корректный email',
			// 	fullWidth: true,
			// 	valid: false,
			// 	touched: false,
			// 	validation: {
			// 		required: true,
			// 	}
			// },
			// lname: {
			// 	value: '',
			//   xs: 12,
			//   sm: 6,
			// 	name: 'firstName',
			// 	autoComplete: 'fname',
			// 	variant: 'outlined',
			// 	label: 'Введите фамилию',
			// 	errorMessage: 'Введите корректный email',
			// 	fullWidth: true,
			// 	valid: false,
			// 	touched: false,
			// 	validation: {
			// 		required: true,
			// 	}
			// },
			email: {
				value: '',
				xs: 12,
				type: 'email',
				name: 'email',
				autoComplete: 'email',
				variant: 'outlined',
				label: 'Email Address',
				errorMessage: 'Введите корректный email',
				fullWidth: true,
				error: false,
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				value: '',
				xs: 12,
				type: 'password',
				label: 'Пароль',
				name: 'password',
				autoComplete: 'current-password',
				variant: 'outlined',
				errorMessage: 'Введите корректный пароль',
				fullWidth: true,
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			},
			// accept: {
			// 	valid: false
			// }
		}
	};

	loginHandler = () => {    
    if (this.state.isFormValid && (this.props.token === null)) {
      this.props.auth(
        this.state.formControls.email.value,
        this.state.formControls.password.value,
        true
      );
    }
		
	};
	submitHandler = event => {
		event.preventDefault();
	};
	validateControl(value, validation) {
		if (!validation) {
			return true;
		}

		let isValid = true;

		if (validation.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (validation.email) {
			isValid = is.email(value) && isValid;
		}
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid;
		}

		return isValid;
	}

	onChangeHandler = (event, controlName) => {
		const formControls = { ...this.state.formControls };		
		if (controlName === 'accept') {
      const control = formControls[controlName];      		
			control.valid = event.target.checked;			
		} else {
			const control = { ...formControls[controlName] };
			control.touched = true;
			control.value = event.target.value;
			control.valid = this.validateControl(control.value, control.validation);
			control.valid ? (control.error = false) : (control.error = true);

			formControls[controlName] = control;
		}

		let isFormValid = true;

		Object.keys(formControls).forEach(name => {
			isFormValid = formControls[name].valid && isFormValid;
		});

		this.setState({
			formControls,
			isFormValid
		});
	};


	renderInputs() {
		return Object.keys(this.state.formControls).map((controlName, index) => {
			const control = this.state.formControls[controlName];
			
				return (
					<Grid key={index} item xs={control.xs} sm={control.sm}>
						<TextField
							variant={control.variant}
							required
							fullWidth={control.fullWidth}
							id={control.name}
							label={control.label}
							error={control.error}
							helperText={control.error ? control.errorMessage : ''}
							name={control.name}
							type={control.type}
							autoComplete={control.autoComplete}
							onChange={event => {
								this.onChangeHandler(event, controlName);
							}}
						/>
					</Grid>
				);
			
		});
	}

	render() {
		return (
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>

					<Typography component='h1' variant='h5'>
						Sign in
					</Typography>

					<form className={classes.form} noValidate onSubmit={this.submitHandler}>
						<Grid container spacing={2}>
							{this.renderInputs()}

							{/* <Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox
											onChange={event => this.onChangeHandler(event, 'accept')}
											value='Accept user agreement'
											color='primary'
										/>
									}
									label='Remember me'
								/>
							</Grid> */}
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={this.loginHandler}
						>
							Sign In
						</Button>
						<Grid container justify='flex-end'>
            <Grid item xs>
              <Link to='/' variant="body2">
                Forgot password?
              </Link>
            </Grid>
							<Grid item>
								<Link to='/sign-up'>Don't have an account? Sign up</Link>
							</Grid>
						</Grid>
					</form>
				</div>
			</Container>
		);
	}
}
function mapStateToProps(state) {
  return {
    token: state.auth.token
  }
}
export default connect(mapStateToProps, { auth })(SignIn);


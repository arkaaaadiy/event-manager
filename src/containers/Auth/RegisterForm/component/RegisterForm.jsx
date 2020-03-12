import React from 'react';
import classes from './RegisterForm.module.css'
import { Container, CssBaseline, Avatar, Typography, Grid, TextField, Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import validateField from '../../../../helpers/validateField';
import Message from '../../../../components/Message/Message';

const RegisterForm = props => {
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
		error
	} = props;

	return (
		<Container component='section' maxWidth='xs'>
			{ error && <Message type='error' message={props.error} />}
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>

				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>

				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} >
							<TextField
								variant='outlined'
								required
								fullWidth={true}
                                id='email'
                                value={values.email}
								label='Email Address'
								error={validateField("email", touched, errors)}
								helperText={!touched.email ? "" : errors.email}
								name='email'
								type='email'
								autoComplete='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
							/>
						</Grid>
						<Grid item xs={12} >
							<TextField
								variant='outlined'
								required
                                fullWidth={true}
                                value={values.password}
								id='password'
								label='Пароль'
								error={validateField("password", touched, errors)}
								helperText={!touched.password ? "" : errors.password}
								name='password'
								type='password'
								autoComplete='password'
                                onChange={handleChange}
                                onBlur={handleBlur}
							/>
						</Grid>
						
					</Grid>
					<Button
							type='submit'
							fullWidth
							variant='contained'
							color='primary'
							className={classes.submit}
							onClick={handleSubmit}
						>
							Sign Up
						</Button>
						<Grid container justify='flex-end'>
							<Grid item>
								<Link to='/sign-in'>Already have an account? Sign in</Link>
							</Grid>
						</Grid>					
				</form>
			</div>
		</Container>
	);
};
export default RegisterForm
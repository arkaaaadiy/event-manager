import React from 'react';
import classes from './LoginForm.module.css'
import { Container, CssBaseline, Avatar, Typography, Grid, TextField, FormControlLabel, Checkbox, Button, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import validateField from '../../../../helpers/validateField';
import Message from '../../../../components/Message/Message'

const LoginForm = props => {
	const {
		values,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,		
		isSubmitting,
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
					Sign in
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

						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
                                        id='remember'
										onChange={handleChange}
										value='Accept user agreement'
										color='primary'
									/>
								}
								label='Remember me'
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
						disabled={isSubmitting}
					>
						Sign In
					</Button>
					<Grid container justify='flex-end'>
						<Grid item xs>
							<Link to='/' variant='body2'>
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
};
export default LoginForm
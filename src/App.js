import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';
import { Switch, Route, Redirect } from 'react-router';
import Home from './containers/Home/Home';
import EventList from './containers/EventList/EventList';
import SignIn from './containers/Auth/SignIn'
import SignUp from './containers/Auth/SignUp'
import { StylesProvider } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {autoLogin} from './store/actions/auth'
import EventCreator from './containers/EventCreator/EventCreator';


class App extends Component{

  componentDidMount(){
		this.props.autoLogin()
	}

  render() {
    let routes = (
      <Switch>
        <Route path={'/sign-in'} component={SignIn} />
        <Route path={'/sign-up'} component={SignUp} />        
        <Route path={'/event-list'} component={EventList} />
        <Route path={'/'} component={Home} />
        <Redirect to='/' />
      </Switch>
    )
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>        
        <Route path='/create-event' component={EventCreator} />
        <Route path='/event-list' component={EventList} />
        <Route path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
      )
    }

    return (
      <StylesProvider injectFirst>
      <Layout>
        {routes}
      </Layout>      
      </StylesProvider>
    );
  }
}
function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token
  }
}
export default connect(mapStateToProps, {autoLogin})(App);

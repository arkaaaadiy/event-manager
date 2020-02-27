import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router';
import Home from './containers/Home/Home';
import EventList from './containers/EventList/EventList';
import CreateEvent from './containers/CreateEvent/CreateEvent'
import Auth from './containers/Auth/Auth'


class App extends Component{

  render() {
    let routes = (
      <Switch>
        <Route path={'/event-list'} component={EventList} />
        <Route path={'/create-event'} component={CreateEvent} />
        <Route path={'/auth'} component={Auth} />
        <Route path={'/'} component={Home} />
      </Switch>
    )

    return (
      <Layout>
        {routes}
      </Layout>      
    );
  }
}

export default App;

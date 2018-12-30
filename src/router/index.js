import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from '../App'
import Admin from '../admin'
import Home from '../views/home'
import NoMatch from '../views/nomatch'

export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}
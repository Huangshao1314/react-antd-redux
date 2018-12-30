import React from 'react'
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from '../App'
import Admin from '../admin'
import Login from '../views/login'
import Home from '../views/home'
import Buttons from '../views/ui/buttons'
import Modals from '../views/ui/modals'
import Loadings from '../views/ui/loadings'
import Notice from '../views/ui/notice'
import Messages from '../views/ui/messages'
import Tabs from '../views/ui/tabs'
import Gallery from '../views/ui/gallery'
import Carousel from '../views/ui/carousel'
// import NoMatch from '../views/nomatch'

export default class ERouter extends React.Component{

    render(){
        return (
            <HashRouter>
                <App>
                    <Switch>
                      <Route path="/login" component={Login}/>
                        <Route path="/" render={()=>
                            <Admin>
                                <Switch>
                                    <Route path='/home' component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notice} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tabs} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Redirect to="/home" />
                                    {/* <Route component={NoMatch} /> */}
                                </Switch>
                            </Admin>         
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}
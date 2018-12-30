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
import FormLogin from '../views/form/login'
import FormRegister from '../views/form/register'
import BasicTable from '../views/table/basicTable'
import HighTable from '../views/table/highTable'
import Rich from '../views/rich'
import City from '../views/city/index'
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
                                    <Route path="/form/login" component={FormLogin} />
                                    <Route path="/form/reg" component={FormRegister} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HighTable} />
                                    <Route path='/rich' component={Rich} />
                                    <Route path="/city" component={City} />
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
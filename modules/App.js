import React from 'react'
import ReactDOM from 'react-dom'
import AlertContainer from 'react-alert'
import { Route, BrowserRouter, Redirect, Link, NavLink } from 'react-router-dom'
import Stocks from './components/Stock'
import Search from './components/Search'
import Currency from './components/Currency'
import NoMatch from './components/NoMatch'

ReactDOM.render((
    <BrowserRouter>
        <div className="full-height">
            <div className="sidebar">
                <NavLink to="currency" activeClassName="selected"><i className="fa fa-usd"></i></NavLink>
                <NavLink to="stock" activeClassName="selected"><i className="fa fa-bar-chart"></i></NavLink>
                <NavLink to="search" activeClassName="selected"><i className="fa fa-search"></i></NavLink>
            </div>
            <div className="container">
                <Route path="/currency" component={Currency} name="Currency Data" />
                <Route path="/stock" component={Stocks} name="Stocks Data" />
                <Route path="/search" component={Search} name="Search the databases" />
                <Redirect from="/" to="/currency"/>
                {/*<Route path="/**" component={NoMatch} />*/}
                <AlertContainer ref={a => window.alerts = a} offset={14} position="bottom left"
                    theme="dark" time={5000} transition="scale" />
            </div>
        </div>
    </BrowserRouter>
), document.getElementById('app'));
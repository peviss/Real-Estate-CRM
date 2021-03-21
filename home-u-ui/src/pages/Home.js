import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Navbar/Header'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'
import List from '../components/List/List'
import Details from '../components/Details/Details'
import Property from './Property'

const Home = () => {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={List} />
                <Route path='/props/:id' component={Property} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Home
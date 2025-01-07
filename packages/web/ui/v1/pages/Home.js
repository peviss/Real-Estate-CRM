import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/Navbar/Header'
import Search from '../components/Search/Search'
import Footer from '../components/Footer/Footer'
import List from '../components/List/List'
import Details from '../components/Details/Details'
import Property from './Property'

const MainPage = () => {
  return (
    <>
      <Search />
      <List />
    </>
  )
}

const Home = () => {
  return (
    <Switch>
      <Route path='/' exact component={MainPage} />
      <Route path='/props/:id' render={(props) => <Property {...props} />} />
    </Switch>
  )
}

export default Home
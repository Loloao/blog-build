import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from '@loadable/component'

import Home from './pages/home'
import Header from './components/header'
import Content from './components/content'
import Container from './components/container'
import './custom.d.ts'
import './styles'

const Tags = Loadable(() => import('./pages/tags'))
const Categories = Loadable(() => import('./pages/categories'))
const About = Loadable(() => import('./pages/about'))
// const Home = Loadable(() => import('./pages/home'))

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/tags" component={Tags} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </Content>
      </Container>
    </Router>
  )
}

export default App

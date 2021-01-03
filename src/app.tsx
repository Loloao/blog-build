import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loadable from '@loadable/component'

import Home from './pages/home'
import Header from './layout/header'
import Content from './layout/content'
import Container from './layout/container'
import './custom.d.ts'
import './styles'

const Tags = Loadable(() => import('./pages/tags'))
const Categories = Loadable(() => import('./pages/categories'))
const About = Loadable(() => import('./pages/about'))
const Detail = Loadable(() => import('./pages/detail'))
// const Home = Loadable(() => import('./pages/home'))

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/detail" component={Detail} />
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

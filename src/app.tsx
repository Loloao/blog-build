import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './pages/home'
import Header from './layout/header'
import Content from './layout/content'
import Main from './layout/main'
import Container from './layout/container'
import SideBar from './layout/sideBar'
import Tags from './pages/tags'
import Categories from './pages/categories'
import About from './pages/about'
import Detail from './pages/detail'
import ShowIssueList from './pages/ShowIssueList'
// import 'tailwindcss/tailwind.css'
import './app.css'

const { Article, SideBar: MainSidebar } = Main

const App = () => {
  return (
    <Router>
      <Container>
        <SideBar />
        <Content>
          <Header />
          <Main>
            <Article>
              <Switch>
                <Route exact path="/tags" component={Tags} />
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/about" component={About} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/issueList" component={ShowIssueList} />
                <Redirect exact path="/" to="/home" />
              </Switch>
            </Article>
            <MainSidebar />
          </Main>
        </Content>
      </Container>
    </Router>
  )
}

export default App

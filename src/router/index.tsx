import React from "react"
import Routes, {Route, HashRouter, BrowserRouter, Router, Switch} from "react-router-dom"
import Top from "../page/Top"
import SearchInput from "../components/molecure/search/SearchInput"

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact children={<Top/>}/>
      <Route path="/search" exact children={<SearchInput/>}/>
    </Switch>
  </BrowserRouter>
)

export default router
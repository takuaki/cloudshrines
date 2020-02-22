import React from "react"
import {Route, BrowserRouter, Switch, Router} from "react-router-dom"
//import hashHistory,{Route,Router} from "react-router"

import Top from "../page/TopPage"
import ShrinePage from "../page/ShrinePage"
import ThanksPage from "../page/ThanksPage"

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Top/>
      </Route>
      <Route path={"/shrine/:id"} exact>
        <ShrinePage/>
      </Route>
      <Route path={"/thanks"} exact>
        <ThanksPage/>
      </Route>
    </Switch>
  </BrowserRouter>
)

export default router
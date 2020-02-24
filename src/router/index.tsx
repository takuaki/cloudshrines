import React from "react"
import {Route, BrowserRouter, Switch} from "react-router-dom"
import Top from "../page/TopPage"
import ShrinePage from "../page/ShrinePage"
import ThanksPage from "../page/ThanksPage"
import ShrinesListPage from "../page/ShrinesListPage"

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Top/>
      </Route>
      <Route path={"/shrines/"} exact>
        <ShrinesListPage/>
      </Route>
      <Route path={"/shrines/:id"} exact>
        <ShrinePage/>
      </Route>
      <Route path={"/thanks"} exact>
        <ThanksPage/>
      </Route>
    </Switch>
  </BrowserRouter>
)

export default router
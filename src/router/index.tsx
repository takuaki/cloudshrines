import React from "react"
import Routes, {Route, HashRouter, BrowserRouter, Router, Switch} from "react-router-dom"
import Top from "../page/Top"
import Shrine from "../page/Shrine"
import ThanksPage from "../page/ThanksPage"
import atago_1 from "../assets/atago/images-1.jpg"
import atago_2 from "../assets/atago/images-2.jpg"
import atago_3 from "../assets/atago/images-3.jpg"
import atago_4 from "../assets/atago/images-4.jpg"
import atago_5 from "../assets/atago/images-5.jpg"

const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact children={<Top/>}/>
      <Route path="/search" exact children={<Shrine
        title={'Atago Shrine'} subTitle={"愛宕神社"}
        links={[
          {title: "愛宕神社の由来について", href: ""},
          {title: "境内のご案内", href: ""},
          {title: '祭典行事', href: ""}]}
        headline={'1603年、慶長8年、江戸に幕府を設く徳川家康公の命により防火の神様として祀られました。慶長15年、庚戊本社をはじめ、末社仁王門、坂下総門、別当所等将軍家の寄進により、建立されました。祭礼などには下附金を賜るほど、当時の幕府の尊崇は篤いものでした。その後江戸大火災で全焼してしまいましたが、明治10年、9月に本殿、幣殿拝殿、社務所の再建がなりました。大正12年9月1日、関東大震災に、昭和20年5月24日帝都大空襲により太郎坊神社を残し社殿は焼失しましたが、昭和33年9月、氏子中の寄付により、御本殿、幣殿、拝殿などが再建され、現在に至ります。'}
        photosUrl={[atago_1, atago_2, atago_3, atago_4, atago_5]}
        access={{
          postal: '105-0002',
          address: '東京都港区愛宕１丁目５'
        }}
      />}/>
      <Route path={"/thanks"} exact children={<ThanksPage/>}/>
    </Switch>
  </BrowserRouter>
)

export default router
import React from "react"
import SearchInput from "../src/components/molecular/search/SearchInput"
import {storiesOf} from "@storybook/react"
import FloatHamburger from "../src/components/atom/button/FloatHamburger"
import {BrowserRouter} from "react-router-dom"
import FloatMenu from "../src/components/molecular/menu/FloatMenu"
import LikeyButton from "../src/components/atom/button/LikeyButton"
import ActionMenuButton from "../src/components/molecular/menu/ActionMenuButton"
import Pager from "../src/components/molecular/carousel/Pager"
import AwesomeTitle from "../src/components/atom/title/AwesomeTitle"
import Header from "../src/components/organism/header/Header"
import Accordion from "../src/components/molecular/accordion/Accordion"
import FloatCircleButton from "../src/components/atom/button/FloatCircleButton"
import DefaultLink from "../src/components/atom/link/DefaultLink"
import Top from "../src/page/Top"
import Shrine from "../src/page/ShrinePage"
import Access from "../src/components/organism/paragraph/Access"
import Photos from "../src/components/organism/paragraph/Photos"
import image from "../src/assets/background.jpg"
import atago_1 from "../src/assets/atago/images-1.jpg"
import atago_2 from "../src/assets/atago/images-2.jpg"
import atago_3 from "../src/assets/atago/images-3.jpg"
import atago_4 from "../src/assets/atago/images-4.jpg"
import atago_5 from "../src/assets/atago/images-5.jpg"
import ChargeInput from "../src/components/atom/input/ChargeInput"
import SimpleTitle from "../src/components/atom/title/SimpleTitle"
import CheckOutForm from "../src/components/organism/form/CheckOutForm"
import StripeCardInput from "../src/components/atom/input/StripeCardInput"
import CheckoutFormDialog from "../src/components/organism/dialog/CheckoutFormDialog"
import {Elements} from "@stripe/react-stripe-js"
import RectangularButton from "../src/components/atom/button/RectangularButton"
import {MdHome} from "react-icons/all"
import ThanksPage from "../src/page/ThanksPage"

storiesOf('Input', module)
  .add('ChargeInput', (
    () => (
      <ChargeInput defaultValue={0}/>
    )
  ))
  .add('CardElement', (() => (
    <Elements stripe={null}>
      <StripeCardInput/>
    </Elements>
  )))

storiesOf('Link', module)
  .add('DefaultLink', (
    () => (
      <div style={{background: 'gray'}}>
        <BrowserRouter>
          <DefaultLink title={"愛宕神社"} href={""}/>
        </BrowserRouter>
      </div>
    )
  ))

storiesOf('Button', module)
  .add('FloatHambugerMenu', (
    () => (
      <FloatHamburger/>
    )
  )).add('FloatCircleButton', (
  () => (
    <FloatCircleButton bottom={"2.0rem"} right={"2.0rem"}/>
  )))
  .add('LikeyButton', (() => (
    <LikeyButton colors={{active: 'red', inactive: 'whitesmoke'}}/>
  )))
  .add('DefaultLikeButton', (() => (
    <LikeyButton/>
  )))
  .add('RectangularButton', (() => (
    <RectangularButton title={'HOME'} theme={'light'} icon={<MdHome/>}/>
  )))


storiesOf('Dialog', module)
  .add('CheckoutFormDialog', () => (
    <CheckoutFormDialog/>
  ))

storiesOf('Input', module)
  .add('SearchInput', () =>
    (
      <BrowserRouter>
        <SearchInput/>
      </BrowserRouter>))


storiesOf('Menu', module)
  .add('FloatMenu', () => (
    <FloatMenu/>
  )).add('ActionMenuButton', () => (
  <ActionMenuButton/>
))


storiesOf('morecular', module)
  .add('Accordion', () => (
    <Accordion>
      <Accordion.Item title={"title1"}>
        <p> Item</p>
      </Accordion.Item>
      <Accordion.Item title={"title2"}>
        <button className={"button"}>Button</button>
      </Accordion.Item>
    </Accordion>
  ))

storiesOf('organism', module)
  .add('pager', () => (
    <div>
      <Pager items={[
        {src: ''},
        {src: 'https://bulma.io/images/placeholders/128x128.png'},
        {src: ''},
        {src: 'https://bulma.io/images/placeholders/128x128.png'},
        {src: ''},
        {src: 'https://bulma.io/images/placeholders/128x128.png'},
      ]}>
      </Pager>
    </div>
  ))
  .add('header', () => (
    <div style={{width: 320, background: 'black'}}>
      <Header/>
    </div>
  )).add('Checkout', () => (
  <CheckOutForm/>
))

storiesOf('title', module)
  .add('AwesomeTitle', () => (
    <div style={{background: 'darkgray'}}>
      <AwesomeTitle title={'Atago Shrine'} subtitle={'愛宕神社'} theme={'yellow'}/>
    </div>
  )).add('SimpleTitle', () => (
  <div style={{background: 'darkgray'}}>
    <SimpleTitle>
      Effect
    </SimpleTitle>
  </div>
))

storiesOf('page', module)
  .add('Top', () => (
    <BrowserRouter>
      <Top background={image}>

      </Top>
    </BrowserRouter>
  ))
  .add('Shrine', () => (
    <Shrine title={'Atago Shrine'} subTitle={"愛宕神社"}
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
    >
    </Shrine>
  ))
  .add('Thanks', () => (
    <BrowserRouter>
      <ThanksPage/>
    </BrowserRouter>
  ))

storiesOf('pargraph', module)
  .add('Access', () => (
    <div style={{background: 'gray'}}>
      <Access postal={"920-2133"} address={"東京堂文京区東日本橋3-4-12"}/>
    </div>
  ))
  .add('Photos', () => (
    <div style={{background: 'gray'}}>
      <Photos photosUrl={[
        'https://bulma.io/images/placeholders/128x128.png',
        'https://bulma.io/images/placeholders/128x128.png',
        `${image}`,
        'https://bulma.io/images/placeholders/128x128.png',
        'https://bulma.io/images/placeholders/128x128.png'
      ]}/>
    </div>
  ))

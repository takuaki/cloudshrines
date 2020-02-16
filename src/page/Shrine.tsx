import React,{Component,useState} from "react"
import {useHistory} from "react-router-dom"
import styled from "styled-components"
import Pager from "../components/molecular/carousel/Pager"
import scenery from "../assets/shrine.png"
import {default as SimpleHeader} from "../components/organism/header/Header"
import AwesomeTitle from "../components/atom/title/AwesomeTitle"
import {IoMdHeartEmpty,IoMdHeart} from "react-icons/all"
import AboutShrine from "../components/organism/headline/AboutShrine"
import Access from "../components/organism/paragraph/Access"
import Photos from "../components/organism/paragraph/Photos"
import RectangularButton from "../components/atom/button/RectangularButton"
import CheckoutFormDialog from "../components/organism/dialog/CheckoutFormDialog"
import {GiPayMoney} from "react-icons/gi"
import "./Shrine.sass"

const Layout = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background:  url(${scenery}) no-repeat;
  background-position: center;
  background-size: cover;

  &::before{
    content: '';
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: .70;
    z-index: -10;
  }
`

interface PropType{
  title:string,
  subTitle:string,
  links:Array<{title:string,href?:string}>,
  headline:string,
  photosUrl:Array<string>,
  access:{
    postal:string,
    address:string
  }
}

const Shrine  = ({...props}:PropType)=>{

  let history = useHistory()
  let [open,setOpen] = useState(false)

  return(
    <Layout>
      <CheckoutFormDialog isOpen={open} closeModal={()=>setOpen(false)}/>
      <header>
        <SimpleHeader onClick={()=>{history.push('/')}} height="5vh"/>
      </header>
      <main className={"shrine-layout"}>
        <AboutShrine title={props.title} subtitle={props.subTitle} className={"shrine-about"}
         links={props.links}headline={props.headline}/>
        <div className={"shrine-info"}>
          <Photos photosUrl={props.photosUrl} className={"shrine-info-photos"}/>
          <Access postal={props.access.postal} address={props.access.address} className={"shrine-info-access"}/>
        </div>
        <div className={'shrine-button'}>
          <RectangularButton title={"お賽銭を入れる"}
            icon={<GiPayMoney/>}
            disabled={false} onClick={(event)=>{
            event.preventDefault()
            setOpen(true)
          }}/>
        </div>
      </main>
    </Layout>
  )
}

export default Shrine

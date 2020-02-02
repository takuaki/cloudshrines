import React, {Component} from "react"
import styled from "styled-components"
import shrine from "@/assets/shrine.jpeg"
import SearchInput from "../components/molecure/search/SearchInput"

const TopRoot = styled.div`
  height: 100vh;
  width: 100vw;
`

const TopBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${shrine});
  filter: blur(5px) ;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`

const Top = () => {
  return (
    <TopRoot className={"container"}>
      <TopBackground/>
      <div className={"section"}>
        <SearchInput/>

      </div>
    </TopRoot>
  )
}

export default Top
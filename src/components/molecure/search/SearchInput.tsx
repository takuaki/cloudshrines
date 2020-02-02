import React from "react"
import styled from "styled-components"

const SearchInputRoot = styled.div`
  height: 1.6rem;
`

const SearchInput: React.FunctionComponent = ({...props}) => {

  return (
    <SearchInputRoot className={"field has-addons"}>
      <div className={"control"}>
        <input className={"input"} type={"text"} placeholder={"伊勢神宮"}/>
      </div>
      <div className={"control"}>
        <a className={"button is-info"} href={""}>
          Search
        </a>
      </div>
    </SearchInputRoot>
  )
}

export default SearchInput


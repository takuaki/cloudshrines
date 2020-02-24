import React, {Component} from "react"
import {withRouter, RouteComponentProps} from "react-router"
import FixedDarkLayout from "../components/atom/layout/FixedDarkLayout"
import {default as SimpleHeader} from "../components/organism/header/Header"
import src from "../assets/shrine.jpg"
import "./ShrinePage.sass"
import CheckoutFormDialog from "../components/organism/dialog/CheckoutFormDialog"
import AboutShrine from "../components/organism/headline/AboutShrine"
import {ShrineModel} from "../model"
import {loadShrine} from "../model/usecase"
import RectangularButton from "../components/atom/button/RectangularButton"
import {GiPayMoney} from "react-icons/all"
import Photos from "../components/organism/paragraph/Photos"
import Access from "../components/organism/paragraph/Access"
import {Columns} from "react-bulma-components"

interface PropType extends RouteComponentProps {

}

interface StateType {
  open: boolean,
  shrine?: ShrineModel
}

class ShrinePage extends Component<PropType, StateType> {

  constructor(props: PropType) {
    super(props)
    this.state = {open: false, shrine: undefined}
  }

  componentDidMount() {
    let {id} = this.props.match.params as { id: string }
    console.log(id)
    loadShrine(id).then(shrine => {
      if (typeof shrine === 'undefined')
        return
      else {
        this.setState({shrine: shrine})
      }
    })
  }

  render() {
    return (
      <FixedDarkLayout background={src}>
        <div className={"shrine-container"}>
          <CheckoutFormDialog isOpen={this.state.open} closeModal={() => {
            this.setState({open: false})
          }}/>
          <header>
            <SimpleHeader onClick={() => {
              this.props.history.push('/')
            }} height={"5vh"}/>
          </header>
          <main className={"shrine-layout"}>
            <AboutShrine title={this.state.shrine?.name.alpha ?? ''}
                         subtitle={this.state.shrine?.name.kanji ?? ''}
                         className={"shrine-about"}
                         links={[]}
                         headline={this.state.shrine?.headline ?? ''}/>
            <div className={"shrine-info"}>
              <Photos photosUrl={this.state.shrine?.preview ?? ['', '', '']}
                      className={"shrine-info-photos"}/>
              <Access postal={this.state.shrine?.access.postal ?? ''}
                      address={this.state.shrine?.access.address ?? {state: '', city: '', line1: ''}}
                      className={"shrine-info-access"}/>
            </div>
            <div className={'shrine-button'}>
              <RectangularButton title={"お賽銭を入れる"}
                                 icon={<GiPayMoney/>}
                                 onClick={(event) => {
                                   event.preventDefault()
                                   this.setState({open: true})
                                 }}/>
            </div>
          </main>
        </div>
      </FixedDarkLayout>
    )
  }
}

export default withRouter(ShrinePage)



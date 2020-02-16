import React, {ChangeEvent} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

interface Props {
  className?: string,
}

interface State {
  value?: string
}

class SearchInput extends React.Component<Props, State> {
  public static defaultProps: Props = {
    className: ''
  }

  private handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value
    this.setState({value: value})
  }

  constructor(props: Props) {
    super(props);
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
  }

  render() {
    return (
      <div className={`field has-addons ${this.props.className}`}>
        <div className={"control"}>
          <input className={"input"} type={"text"} placeholder={"伊勢神宮"} value={this.state?.value}
                 onChange={this.handleChange}/>
        </div>
        <div className={"control"}>
          <Link to={`/search?name=${this.state.value}`} className={"button is-info"}>Search</Link>
        </div>
      </div>
    )
  }
}

export default styled(SearchInput)``


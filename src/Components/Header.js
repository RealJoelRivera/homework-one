import React, { Component } from 'react'
import Button from "./Button"

export default class Header extends Component {
  render() {
      const button = this.props.lists.map(name => {
        return <Button name={name}/>
      })
    return (
      <div>
        {button}
      </div>
    )
  }
}

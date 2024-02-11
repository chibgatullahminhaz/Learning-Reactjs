import React, { Component } from 'react'

export default class Ref extends Component {
 constructor(props) {
   super(props)
 
   this.state = {}
 }
 
 submitChange = (e)=>{
    e.preventDefault()
    console.log(e.target.value)
 }


  render() {
    return (
      <form onSubmit={this.submitChange}>
        <input type="text" />
        <button type='submit'>submit</button>
      </form>
    )
  }
}

import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom';

class Counter extends Component {

    // rce for class component snipit
    // rfce function component
    // rconst snippit for constrictor
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    increment() {
        this.setState({
            count:this.state.count + 1
        },
        () => {
            console.log('callback value', this.state.count)
        }
        )
        
        console.log( this.state.count)
    }

  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>
        <button onClick ={ () => this.increment()}>increment</button>
        {/* <NavLink to="/">home</NavLink> */}

      </div>
    )
  }
}

export default Counter

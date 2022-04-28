import {Component} from 'react'

class Clock extends Component {
  //     componentDidMount(){
  //      console.log("Component DidMount method is called")
  //    }

  //    componentWillUnMount(){
  //        console.log('ComponentWillUnmount method is called')
  //    }

  render() {
    console.log('render method is called')

    return (
      <div>
        <h1>Heading</h1>
      </div>
    )
  }
}

export default Clock

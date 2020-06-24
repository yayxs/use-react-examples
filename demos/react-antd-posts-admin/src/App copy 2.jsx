
import React from 'react'
class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count:0
    }
  }
  componentDidUpdate() {
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`);
    }, 3000);
  }
  render(){
    return (<>
    1212
    </>)
  }
}
export default App

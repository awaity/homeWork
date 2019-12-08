import React, { useState,Component } from 'react';

function App (){
  const [value,setValue] = useState('aaa');
  const handleInp = () => {
    setValue(value=>e.target.value)
  }
  return (
      <div>
        <InputNumber value={value} onChange={handleInp}/>
      </div>
  )
}

class InputNumber extends Component{
  constructor(props){
    super(props)
    this.state={
      value: props.value
    }
  }
  render(){
    return (
      <div>
        <input value={this.state.value} onChange={e=>this.setState({value: e.target.value})}/>
      </div>
    )
  }
}

export dafault App